import { Component, ViewChild } from '@angular/core';
import { ExpenseEntry } from "./expense-entry";
import { TestingChildComponent } from "./testing-child/testing-child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expenses Manager';
  expenseEntry: ExpenseEntry;
  entryPack: ExpenseEntry;
  clickedCount: number;

  @ViewChild(TestingChildComponent, {static: false})
  testingChildComponent: TestingChildComponent;

  ngOnInit() {
    this.clickedCount = 0;
    this.expenseEntry = {
      id: 5,
      item: "Pani Puri",
      amount: 21,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    }
    this.entryPack = {
      id: 6,
      item: "Pani Puri",
      amount: 210,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    }
  }

  notifyListener(count: number) {
    this.clickedCount += count;
  }

  stopInterval() {
    clearInterval(this.testingChildComponent.tickerIntervalId);
  }

  initInterval() {
    this.testingChildComponent.ticker = 0;
    this.testingChildComponent.tickerIntervalId = setInterval(() => {this.testingChildComponent.ticker++}, 1000);
  }
}
