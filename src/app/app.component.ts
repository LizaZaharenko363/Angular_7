import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    ComponentTwoComponent,
    ComponentOneComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab7';
}
