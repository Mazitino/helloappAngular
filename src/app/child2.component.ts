import { Component, 
    Input, 
    OnInit, 
    DoCheck, 
    OnChanges, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewChecked,
    AfterViewInit} from '@angular/core';

@Component({
    selector: 'child2-comp',
    template: `<p> Дочерний компонент 2 - включает реализацию всех методов
                {{ uname }}</p>`,
    styleUrls: ['./app.component.css']
})
export class Child2Component implements OnInit,
    DoCheck,
    OnChanges,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit {
        @Input() uname: string = "";
        count:number = 1;

        ngOnInit(): void {
            this.log('ngOnInit');
        }
        ngOnChanges() {
            this.log(`OnChanges`);
          }
        ngDoCheck(): void {
            this.log(`ngDoCheck`);
        }
        ngAfterViewInit(): void {
            this.log(`ngAfterViewInit`);
        }
        ngAfterViewChecked(): void {
            this.log(`ngAfterViewChecked`);
        }
        ngAfterContentInit(): void {
            this.log(`ngAfterContentInit`);
        }
        ngAfterContentChecked(): void {
            this.log(`ngAfterContentChecked`);
        }
        private log(msg: string) {
            console.log(this.count + ". "+msg);
            this.count++;
        }        
}