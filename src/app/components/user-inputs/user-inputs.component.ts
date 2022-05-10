import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserUpdateInterface } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css']
})


export class UserInputsComponent implements OnInit {
  @Input() name:string = '';
  @Input() username:string = '';
  @Input() email: string = '';
  @Input() description:string='';
  @Output() submit = new EventEmitter<UserUpdateInterface>();
  file:File|null=null;
  submiting:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onFileSelect(file:File){
    this.file = file;
  }

  onSubmiting(){
    this.submiting = true;
    this.submit.emit({
      name:this.name,
      username:this.username,
      email:this.email,
      description: this.description,
      file: this.file
    })
  }

}
