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
  counter: number;

  constructor() { }

  ngOnInit() {
    this.counter = 0;
    this.isGroup = false;
    this.name = "Unknown User";
    this.delay(10000).then(any=>{
      this.messages = [ {id: 1, content: "привет", type: 2, ownership: false} ]
    });
  }

  addMessage(content: string) {
    this.counter++;
    this.messages.push({id: 1, content: content, type: 2, ownership: true});

    if (this.counter == 1) {

      this.delay(3000).then(any=>{
        this.messages.push({id: 2, content: "как у тебя дела?", type: 2, ownership: false});
      });
      
    } else if (this.counter == 2) {
      this.delay(3000).then(any=>{
        this.messages.push({id: 1, content: "а у меня не очень хорошо...", type: 2, ownership: false});
      });
    } else if (this.counter == 3) {
      this.delay(2000).then(any=>{
        this.messages.push({id: 1, content: "жена меня достала", type: 2, ownership: false});
      });
    } else if(this.counter == 4) {
      this.delay(2000).then(any=>{
        this.messages.push({id: 1, content: "так меня довела, что я слышу уже голоса в голове", type: 2, ownership: false});
      });
    } else if (this.counter == 5) {
      this.delay(1000).then(any=>{
        this.messages.push({id: 1, content: "Вероника..ты кстати красивая!", type: 2, ownership: false});
      });
      this.delay(3000).then(any=>{
        this.messages.push({id: 1, content: "я знаю, где ты живешь! жди, скоро буду", type: 2, ownership: false});
      });
    }
    

    
    
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

}
