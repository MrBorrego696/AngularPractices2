import { Component } from '@angular/core';

@Component ({
    selector: 'Ej04',
    template: `<h1><font color="WHITE"><marquee behavior="alternate" style="background:RED"><--Ej04--></marquee></font></h1>
                <div class="card card-block"*ngFor="let joke of jokes">
                <h4 class="card-title">{{joke.setup}}</h4>
                <p class="card-text" [hidden]=joke.hide>{{joke.punchline}}</p>
                <a class="btn btn-warning" (click)="joke.hide=!joke.hide">TELL ME </a>
                </div>
              `,
    styles: [`h1 { color:red; text-align: center; }
              h4 { color: #59016B; }
              p { color: #2016C7; }`]
})

export class Ej04Component {
    jokes: Object[];

    constructor() {
        this.jokes = [
            {
                setup: 'What did the cheese say when it looked in the mirror?',
                punchline: 'Hello-Me (Halloumi)',
                hide: true
                },
                {
                setup: 'What kind of cheese do you use to disguise a small horse?',
                punchline: 'Mask-a-pony (Mascarpone)',
                hide: true
                },
                {
                setup: 'A kid threw a lump of cheddar at me',
                punchline: 'I thought ‘That’s not very mature’',
                hide: true
                },
        ];
    }
}
