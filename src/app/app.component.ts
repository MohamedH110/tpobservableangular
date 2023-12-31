import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit, OnDestroy {
  counter: number = 0;
  private counterSubscription!: Subscription;

  constructor() { }

  ngOnInit() {
  }

  startCounter() {
    this.counterSubscription = interval(1000).subscribe(() => {
      this.counter++;
    });
  }

  stopCounter() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

  restCounter(){
    this.counter=0;
    this.stopCounter()
  }

  ngOnDestroy() {
    this.stopCounter();
  }
}
