import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [
    {
      id: 'section',
      data: {
        text: 'dynamic module',
      },
    },
    {
      id: 'part',
      data: {
        text: 'dynamic standalone-component',
      },
    },
    {
      id: 'part',
      data: {
        text: 'another dynamic standalone-component',
      },
    },
  ];
}
