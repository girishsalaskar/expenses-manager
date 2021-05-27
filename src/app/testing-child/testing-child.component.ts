import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-child',
  templateUrl: './testing-child.component.html',
  styleUrls: ['./testing-child.component.css']
})
export class TestingChildComponent implements OnInit {

  ticker: number;
  tickerIntervalId: any = 0;

  constructor() { }

  ngOnInit() {
    this.ticker = 0;
  }

}
