import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-button',
  templateUrl: './file-button.component.html',
  styleUrls: ['./file-button.component.css']
})
export class FileButtonComponent implements OnInit {
  @Input() fileName: String = '';
  @Output() selected = new EventEmitter<File>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedFile(event:Event){
    var arr = <HTMLInputElement>(event!.target!)
    var files = arr.files;
    if(!files || files.length == 0){
      return;
    }
    var file = files[0];
    this.selected.emit(file);
  }
}
