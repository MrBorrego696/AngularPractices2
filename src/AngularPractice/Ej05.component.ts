import { Component } from '@angular/core';

class Joke {
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
    selector: 'Ej05',
    template: `<h1><font color="WHITE"><marquee behavior="alternate" style="background:RED"><--Ej05--></marquee></font></h1>
                <div class="card card-block"
                *ngFor="let joke of jokes">
                <h4 class="card-title">{{joke.setup}}</h4>
                <p class="card-text"
                [hidden]="joke.hide">{{joke.punchline}}</p>
                <a class="btn btn-danger" (click)="joke.toggle()">Tell Me</a>
                </div>
              `,
    styles: [`h1 { color:red; text-align: center; }
              h4 { color: #59016B; }
              p { color: #2016C7; }`]
})

export class Ej05Component {
    jokes: Joke[];

    constructor() {
        this.jokes = [
        new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me(Halloumi)'),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-apony(Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not verymature’"),
        ];
    }
}
