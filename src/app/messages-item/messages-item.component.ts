import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../shared/message';

@Component({
  selector: 'app-messages-item',
  templateUrl: './messages-item.component.html',
  styleUrls: ['./messages-item.component.scss']
})
export class MessagesItemComponent implements OnInit {
  @Input()
  item: Message;

  @Input()
  isGroup: boolean;

  constructor() { }

  ngOnInit() {
  }

}
