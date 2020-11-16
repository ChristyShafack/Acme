import { Component } from '@angular/core';

@Component({
  //Selectors are used only if you want to create a nested component
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
