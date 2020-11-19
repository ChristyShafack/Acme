import { MessageComponent } from './message.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'messages',
    component: MessageComponent,
  outlet:'popup'}
    ])
  ],
  declarations: [
    MessageComponent
  ]
})
export class MessageModule { }
