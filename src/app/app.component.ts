import { Component, EventEmitter, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    name:string = '';
    age:number = null;
    clicks:number = 0;
    isRed = false;
    //Чтение с дочерненго компонента через привязку к событию
    onChanged(increased:any){
        increased == true ? this.clicks++ : this.clicks--;
    }
    
    addItem(): void {
        this.name += 'd';
    };
    addItem2($event : any): void {
        this.name += 'd';
        console.log($event);
    }

    //Декоратор ViewChild применяется к свойству 
    //и получает селектор элемента DOM, 
    //который необходимо отслеживать
    @ViewChild(ChildComponent, {static: false})
    private counterComponent: ChildComponent|undefined;

    increment() { this.counterComponent?.increment(); }
    decrement() { this.counterComponent?.decrement(); }
    
}