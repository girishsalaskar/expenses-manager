import { Component } from '@angular/core';
import { ExpenseEntry } from "./expense-entry";

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
}
