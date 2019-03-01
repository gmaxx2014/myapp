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
  }

}
