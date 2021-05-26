import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {

  title: string;
  expenseEntry: ExpenseEntry[];
  entryParam:ExpenseEntry;

  @Input('entryParam')
  get entryParameter():ExpenseEntry{return this.entryParam;};
  set entryParameter(param:ExpenseEntry) {
    param.amount = 10;
    console.info("Amount modified!");
    this.entryParam = param;
  }

  @Input() rootParam: ExpenseEntry;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.title = "Expenses Entry";
    this.expenseEntry = [{
      id: 1,
      item: "Pizza",
      amount: 21,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    },
    {
      id: 2,
      item: "Burger",
      amount: 21,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    },
    {
      id: 3,
      item: "Vada pav",
      amount: 15,
      category: "Food",
      location: "Zomato",
      spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10),
    }];
  }

  showMessage($event: any) {
    console.log($event);
    if(!this.expenseEntry.some(entry => entry.id==this.rootParam.id)) {
      this.expenseEntry.push(this.rootParam);
    }
  }

}
