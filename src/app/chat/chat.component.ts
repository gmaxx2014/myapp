import { Component, OnInit } from '@angular/core';
import {Message} from '../shared/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message [];
  name: string;
  isGroup: boolean;

  constructor() { }

  ngOnInit() {
    this.isGroup = false;
    this.name = "Unknown User";
    this.messages = [ {id: 1, content: "my content 1", type: 2, ownership: true}, {id: 2, content: "my content 2", type: 2, ownership: false}]
  }

}
