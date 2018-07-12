import { Component } from '@angular/core';

@Component ({
    selector: 'Ej03',
    template: `<h1><font color="WHITE"><marquee behavior="alternate" style="background:RED"><--Ej03--></marquee></font></h1>
                <div class="card card-block"*ngFor="let joke of jokes">
                <h4 class="card-title">{{joke.setup}}</h4>
                <p class="card-text">{{joke.punchline}}</p>
                </div>
              `,
    styles: ['h1 { color:red; text-align: center; }']
})

export class Ej03Component {
    jokes: Object[];

    constructor() {
        this.jokes = [
            {
                setup: "What did the cheese say when it looked in the mirror?",
                punchline: "Hello-Me (Halloumi)"
                },
                {
                setup: "What kind of cheese do you use to disguise a small horse?",
                punchline: "Mask-a-pony (Mascarpone)"
                },
                {
                setup: "A kid threw a lump of cheddar at me",
                punchline: "I thought ‘That’s not very mature’"
                },
        ];
    }
}
