import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RandomUsernameService } from 'src/app/services/random-username/random-username.service';
import { UserUpdateInterface } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-inputs',
  templateUrl: './user-inputs.component.html',
  styleUrls: ['./user-inputs.component.css'],
})
export class UserInputsComponent implements OnInit {
  @Input() title: string = '';
  @Input() submitMessage: string = '';
  @Input() name: string = '';
  @Input() username: string = '';
  @Input() email: string = '';
  @Input() description: string = '';
  @Input() fileRequired: boolean = false;
  @Output() submit = new EventEmitter<UserUpdateInterface>();
  file: File | null = null;
  sending: boolean = false;
  constructor(private readonly random: RandomUsernameService) {}

  disabled() {
    return (
      !(
        this.username &&
        this.name &&
        this.email &&
        this.description &&
        (!this.fileRequired || this.file)
      ) || this.sending
    );
  }

  ngOnInit(): void {}
  onFileSelect(file: File) {
    this.file = file;
  }
  onRandom() {
    this.random.randomUsername().subscribe({next:(val)=>{
      this.username = <string>val;
    }})
  }

  onSubmiting() {
    this.sending = true;
    this.submit.emit({
      name: this.name,
      username: this.username,
      email: this.email,
      description: this.description,
      file: this.file,
    });
  }
}
