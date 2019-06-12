import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
   constructor() { }
   numberObsSubs: Subscription;
   customObs: Subscription;

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
   this.numberObsSubs =  myNumbers.subscribe(
      (number: number) => {
        console.log(number);

      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout( () => {
        observer.next('first package');
      }, 2000);
      setTimeout( () => {
        observer.next('second package');
      }, 4000);
      setTimeout( () => {
       // observer.error(' does not work');
        observer.complete();
      }, 5000);
      setTimeout( () => {
        observer.next('Third package');
       }, 6000);
    });
this.customObs =  myObservable.subscribe(
  (data: string) => {console.log(data); },
  (error: string) => {console.log(error); },
  () => {console.log('completed'); }
);
  }

  ngOnDestroy(): void {
    this.customObs.unsubscribe();
    this.numberObsSubs.unsubscribe();
  }
}
