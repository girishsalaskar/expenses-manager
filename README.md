# Introduction

This is just a sample project I designed for learning Angular 8. Will add details as I learned.

## Directives
### 1. The `ngFor` Directive
```html
<ul>
    <li *ngFor="let element of array; let i = index; let even = even; let odd = odd; let first = first; let last = last;" [ngClass]="{odd:odd, even:even, first:first, last:last">{{element}}</li>
</ul>
```

### 2. 


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
### 2. Passing data from child component to parent component.
