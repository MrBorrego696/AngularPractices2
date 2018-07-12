import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

class Pregunta {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    aprieta() {
        this.hide = !this.hide;
    }
}

@Component ({
    selector: 'pregunta-form',
    template: `
            <div class="card card-block">
            <h4 class="card-title">Crear Pregunta</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Ingrese Pregunta" #setup>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Ingrese Respuesta" #punchline>
            </div>
            <button type="button" class="btn btn-danger" (click)="creaPregunta(setup.value, punchline.value)">Create
            </button>
            </div>
            `
})

export class PreguntaFormComponent {
    @Output() preguntaCreada = new EventEmitter<Pregunta>();

    creaPregunta(setup: string, punchline: string) {
        this.preguntaCreada.emit(new Pregunta(setup, punchline));
    }
}

@Component ({
    selector: 'preguntaSimple',
    template : `
            <div class="card card-block">
                <p class="card-title">{{data.setup}}</p>
                <p class="card-text" [hidden]="data.hide">{{data.punchline}}</p>
                <a (click)="data.aprieta()" class="btn btn-info">Tell Me </a>
            </div>
            `
})

export class PreguntaComponent {
    @Input('pregunta') data: Pregunta;
}

@Component ({
    selector: 'pregunta-list',
    template: `
            <pregunta-form (preguntaCreada)="addPregunta($event)"></pregunta-form>
            <preguntaSimple *ngFor="let p of preguntas" [pregunta]="p"></preguntaSimple>
            `
})

export class PreguntaListComponent {
    preguntas: Pregunta[];

    constructor() {
        this.preguntas = [
            new Pregunta ("P1", "R1")
        ];
    }

    addPregunta(pregunta) {
        this.preguntas.unshift(pregunta);
    }
}

@Component({
    selector: 'Ej07',
    template: `<h1>
            <font color="WHITE"><marquee behavior="alternate" style="background:RED">
            <--EJ07-User Interaction & Outputs (addEvent)--></marquee></font></h1>
            <pregunta-list></pregunta-list>
            `
})

export class Ej07Component {

}
