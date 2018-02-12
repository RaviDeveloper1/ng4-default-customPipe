// default pipes and custom pipes
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // default pipe
  name = 'Aryavarthan';
  day = new Date(1989, 11, 26);

  // custom pipes
  arr = [5, 2, 1, 9, 7, 0] ;
  arr1 = ['brown', 'white', 'green', 'violate', 'cyan' ]
}
