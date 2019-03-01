import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../shared/message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit {

  @Input('items')
  messages: Message[];

  @Input()
  isGroup: boolean;

  constructor() { }

  ngOnInit() {
   
  }

}
