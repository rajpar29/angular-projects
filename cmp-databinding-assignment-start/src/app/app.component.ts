import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenArr = [];
  oddArr = [];
  afterIntervalFired(firedNumber: number) {
    console.log(firedNumber);
    if (firedNumber % 2 === 0 ) {
      this.evenArr.push(firedNumber);
    } else {
      this.oddArr.push(firedNumber);
    }
  }


}
