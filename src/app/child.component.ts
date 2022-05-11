import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `
                
                
                <p>Имя пользователя: 
                    {{ userName }}
                </p>

                <p>Возраст пользователя: 
                    {{ userAge }}
                </p>
                <input 
                    [ngModel]="userName" 
                    (ngModelChange)="onNameChange($event)" 
                    placeholder="Имя" 
                />
                <p>
                    Количество кликов (кнопка в родительском): 
                    {{ counter }}
                </p>
                <button 
                    (click)="change(true)"
                >+</button>

                <button 
                    (click)="change(false)"
                >-</button>`,
    styleUrls: ['./app.component.css']
})
export class ChildComponent { 

    //Методы дял привязки с родительского компонента 
    //через шаблонную переменную
    counter: number = 0;
    increment() { this.counter++; }
    decrement() { this.counter--; }


    //Чтение значения с родительского компонента (напрямую)
    @Input() userName: string = "";
    
    _userAge: number = 0;
    //Чтение значения с родительского компонента (гет и сет)
    @Input() 
    set userAge(age:number) {
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge=age;
    }
    get userAge() {
        return this._userAge
    }
    
    //Передача значения к родительскому компоненту (напрямую)
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any){
        this.onChanged.emit(increased);
    }
 
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
        this.userName = model;
        this.userNameChange.emit(model);
    }
}