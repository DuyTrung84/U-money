import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import {
  Tab,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'U-money';
  ngOnInit(): void {
    initFlowbite();
    initTE({ Tab });
  }
}
