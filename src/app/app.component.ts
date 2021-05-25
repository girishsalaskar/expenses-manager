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

  ngOnInit() {
    this.expenseEntry = {
      id: 5,
      item: "Pani Puri",
      amount: 21,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    }
  }

  notifyListener() {
    alert("Notified");
  }
}
