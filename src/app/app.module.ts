import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesItemComponent } from './messages-item/messages-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    MessagesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
