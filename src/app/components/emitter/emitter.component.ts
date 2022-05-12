import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { LivestreamService } from 'src/app/services/livestream/livestream.service';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit, AfterViewInit {
  @Input() id: string = "";
  @ViewChild("myCanvas", {static: false}) canvasElement: ElementRef<HTMLCanvasElement> = {} as ElementRef;
  @ViewChild("myVideo", {static: false}) videoElement: ElementRef<HTMLVideoElement> = {} as ElementRef;
  public context: CanvasRenderingContext2D | null = null;
  public video: HTMLVideoElement = {} as HTMLVideoElement;
  public canvas: HTMLCanvasElement = {} as HTMLCanvasElement;
  public recording: boolean = false;
  searchUser$ = new Subject();

  ngAfterViewInit(): void {
    this.canvas = this.canvasElement.nativeElement;
    this.video = this.videoElement.nativeElement;
    this.canvas.width = 512;
    this.canvas.height = 384;
    this.context = this.canvas.getContext('2d')!;
  }
  
  constructor(private readonly livestreamService:LivestreamService) {}

  ngOnInit(): void {
    this.livestreamService.login(this.id, this.id);
    this.livestreamService.numbers.subscribe((_) => {
      if(this.recording){
        this.sendVideo(this.video, this.context!);
      }
    });
  }

  start(){
    var browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia({video:true})
    .then((stream: any) => {
      this.video.srcObject = stream;
      this.video.play();
      this.recording = true;
    });
  }

  stop(){
    this.video.pause();
    this.video.srcObject = null;
    this.recording = false;
    this.livestreamService.endStream();
  }

  sendVideo(video: CanvasImageSource, context: CanvasRenderingContext2D){
    this.context?.drawImage(video, 0, 0, context.canvas.width, context.canvas.height)
    this.livestreamService.sendVideo(this.canvas.toDataURL("image/webp"))
  }

}
