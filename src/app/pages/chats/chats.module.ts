import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPageRoutingModule } from './chats-routing.module';

import { ChatsPage } from './chats.page';
import { ChatItemComponent } from './chat-item/chat-item.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatMenuComponent } from './chat-menu/chat-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule
  ],
  declarations: [
    ChatsPage,
    ChatItemComponent,
    ChatListComponent,
    ChatMenuComponent
  ],
  exports: [
    ChatMenuComponent
  ]
})
export class ChatsPageModule { }
