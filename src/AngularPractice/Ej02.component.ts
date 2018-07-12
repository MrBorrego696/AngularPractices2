import { Component } from '@angular/core';

@Component({
    selector: 'Ej02',
    template: `<h1><font color="WHITE"><marquee behavior="alternate" style="background:RED"><--Ej02--></marquee></font></h1>
                <h2>{{setup}}</h2>
                <p>{{punchline}}</p>`,
    styles: ['h1 { color:red; text-align: center; }']
})

export class Ej02Component {
     setup: string;
     punchline: string;

     constructor() {
        this.setup = "What did the cheese say when it looked in the mirror?";
         this.punchline = "Halloumi (Hello-me)";
     }
}

