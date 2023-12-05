import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})

export class CountComponent implements OnInit, OnDestroy {
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
