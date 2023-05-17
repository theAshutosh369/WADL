import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'AngProj1';

  console.log( title )

  getValues(val: any) {
    console.log(val);
  }
}
