import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    name:string = '';
    age:number = null;
    clicks:number = 0;

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
 
}