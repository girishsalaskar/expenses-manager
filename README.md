# Introduction

This is just a sample project I designed for learning Angular 8. Will add details as I learned.

## Directives
### 1. The `ngFor` Directive
```html
<ul>
    <li *ngFor="let element of array; let i = index; let even = even; let odd = odd; let first = first; let last = last;" [ngClass]="{odd:odd, even:even, first:first, last:last">{{element}}</li>
</ul>
```


## Communicating between parent and child components

### 1. Passing data to child component
Parent component HTML :
```html
<app-child-component [param1]="value1" [param2]="value2" [param3]="value3"></app-child-component>
```
Child component TS :
```typescript
export class ChildComponent {
    @Input()
    param1: any;

    @Input('param2')
    parameter2: any;

    paramter3: string;

    
    @Input('param3')
    get parentParameter():any{return this.paramter3;};
    set parentParameter(value:any) {
        value = "Modified!";
        console.log("Value modified at the time of input");
        this.paramter3 = value;
    }
}
```
### 2. Passing data to parent component.
In parent component HTML:
```html
<app-child-component (notified)="notifyListener($parameter);"></app-child-component>
```
In parent component TS:
```typescript
notifyListener(param:any) {
    alert("Notified");
    console.log(param);
}
```
In child component TS:
```typescript
import {Output, EventEmitter} from '@angular/core';

export class ChildComponent {
    @Output()
    notified = new EventEmitter();
}
```

In child component HTML:
```html
<button (click)="notified.emit(1);">Emit</button>
```

### 3. Accessing child component's members:
Parent component HTML
```html
<button (click)="cmpChildId.alertMessage('From parent');">Call child class method</button>
<app-child-component #cmpChildId></app-child-component>
```
Child component TS
```typescript
export class ChildComponent {
    alertMessage(message:string) {
        alert(message);
    }
}
```
### 4. Inject Child component in parent using `@ViewChild`

Parent Component TS:
```typescript
import {ViewChild} from '@angular/core';

export class AppComponent {

    @ViewChild(ChildComponent, {static: false})
    childComponent:ChildComponent;

    alertChildValue() {
        alert(this.childComponent.message);
    }
}
```
Child component TS
```typescript
export class ChildComponent {
    message:string = "Hello from child component";
}
```
## Content projection

### 1. Single slot content projection
Parent component HTML
```html
<app-child-component>Content goes here</app-child-component>
```
Child component HTML
```html
<ng-content></ng-content>
```
### 2. Multi slot content projection
Parent component HTML
```html
<app-child-component>
    <p content1>Content 1 goes here</p>
    <p content2>Content 2 goes here</p>
</app-child-component>
```
Child component HTML
```html
<ng-content select="content1"></ng-content>
<ng-content select="content2"></ng-content>
```