import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  gameRunning = false;
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;


  ngOnInit() {
  }

  startGame() {
    this.gameRunning = true;
      this.interval = setInterval(() => {
          this.intervalFired.emit(this.lastNumber);
          this.lastNumber++;
      }, 1000);

  }


  stopGame() {
    this.gameRunning = false;
    clearInterval(this.interval);
  }
}
