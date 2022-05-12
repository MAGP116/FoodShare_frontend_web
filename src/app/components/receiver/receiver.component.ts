import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { LivestreamService } from 'src/app/services/livestream/livestream.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {
  @Input() id: string = "";
  @Input() room: string = "";
  public source:string = "";

  constructor(private readonly livestreamService: LivestreamService,) { }

  ngOnInit(): void {
    this.livestreamService.login(this.id, this.room);
    this.livestreamService.getStream().subscribe({
      next: (image) => {
        this.source = image;
      }
    });
    this.livestreamService.streamEndEvent().subscribe({
      next: (msg) => {
        console.log(msg)
        this.source = "";
      }
    });
  }

}
