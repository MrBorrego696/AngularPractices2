import { Component } from '@angular/core';
import { Input } from '@angular/core';

 class  Ej06Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
      this.setup = setup;
      this.punchline = punchline;
      this.hide = true;
    }

    toggle() {
      this.hide = !this.hide;
    }
 }

 @Component ({
     // tslint:disable-next-line:component-selector
     selector: 'broma',
     template: `
                <div class="card card-block" >
                <h4 class="card-title">{{data.setup}}</h4>
                <p class="card-text" [hidden]='data.hide'>{{data.punchline}}</p>
                <a (click)="data.toggle()" class="btn btn-warning">Tell Me</a>
                </div>
               `,
    styles: ['p{color: red;}']
 })

export class Ej06SimpleComponent {
    @Input('joke') data: Ej06Joke;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'broma-list',
    template: `<broma
                *ngFor="let j of jokes" [joke]="j"> </broma>
            `
})

export class Ej06ListComponent {
    jokes: Ej06Joke[];

    constructor() {
      this.jokes = [
        // tslint:disable-next-line:quotemark
        new Ej06Joke("Pregunta 1", "Hello 1"),
        new Ej06Joke("Pregunta 2", "Hello 2"),
        new Ej06Joke("Pregunta 3", "Hello 3"),
      ];
     }
 }

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'Ej06',
    template: `<h1><font color="WHITE"><marquee behavior="alternate" style="background:RED"><--Ej06-Nesting Components & Inputs--></marquee></font></h1>
                <broma-list></broma-list>
            `,
    styles: [`h1 { color:red; text-align: center; }
               h4 { color: #59016B; }
               p { color: blue  ; }`]
})

export class Ej06Component {

}
