import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  @Input()
  disabled: boolean;

  @Output()
  newMessage = new EventEmitter<string>();

  message = '';

  onInputKeyup({ keyCode }: KeyboardEvent) {
    if (keyCode === 13) {
      this.emitMessage();
    }
  }

  emitMessage() {
    if (this.message && !this.disabled) {
      this.newMessage.emit(this.message);
      this.message = '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
