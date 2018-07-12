import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

class Preguntita {
    public pregunta: string;
    public respuesta: string;
    public esconder: boolean;

    constructor (pregunta: string, respuesta: string) {
        this.pregunta = pregunta;
        this.respuesta = respuesta;
        this.esconder = true;
    }

    muestra() {
        this.esconder = !this.esconder;
    }
}

@Component ({
    selector: 'preguntitas-form',
    template: `
            <div class="card card-block">
            <h4 class="card-title">Crear Pregunta</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Ingresa la pregunta" #pregunta>
            </div>
            <div class="form-group">
                <input type="text"  class="form-control" placeholder="Ingresa la respuesta" #respuesta>
            </div>
            <button type="button" class="btn btn-primary" (click)="creaPregunta(pregunta.value, respuesta.value)">Create</button>
            </div>
    `,
    styles: [`div{background: #014C6B; color: #FFFFFF;}
            .btn-primary {background: #1628DF;}
            .btn-primary:hover {background: #FE1B00; border-color: #1628DF;}
            input {color: #1628DF; text-transform: uppercase;}`]
})

export class Ej08PreguntaFormComponent {
    @Output() preguntaCrear = new EventEmitter<Preguntita>();

    creaPregunta(pregunta: string, respuesta: string) {
        this.preguntaCrear.emit(new Preguntita(pregunta, respuesta));
    }
}

@Component ({
    selector: 'preguntitas',
    template: `
            <div class="card card-block" id="bloque">
                <h4 class="card-title"> {{data.pregunta}} </h4>
                <p class="card-text" [hidden]="data.esconder">{{data.respuesta}}</p>
                <a (click)="data.muestra()" class="btn btn-warning">Tell Me </a>
                <a (click)="borrarPregunta()" class="btn btn-danger">Delete </a>
            </div>
            `,
    styles: [`#bloque{background: #014C6B; color: #FFFFFF;}
            .btn-warning {background: #0B8BDF;}
            .btn-danger {background: #C81750; }
            .btn-danger:hover {background: #F0F009;}
            .brn-warning:hover {background: #FFFFFF}`]
})

export class Ej08PreguntaBorradaComponent {
    @Input('pregunta') data: Preguntita;
    @Output() preguntaBorrada = new EventEmitter<Preguntita>();

    borrarPregunta() {
        this.preguntaBorrada.emit(this.data);
    }
}

@Component ({
    selector: 'preguntitas-list',
    template: `
            <preguntitas-form (preguntaCrear)="addPreguntita($event)" id="formulario"></preguntitas-form>
            <preguntitas *ngFor="let p of preguntas" [pregunta]="p" (preguntaBorrada)="deletePreguntita($event)"></preguntitas>
            `
})

export class Ej08PreguntaListComponent {
    preguntas: Preguntita[];
    constructor() {
        this.preguntas = [
            new Preguntita("Pp1", "Rr1"),
            new Preguntita("Pp2", "Rr2"),
        ];
    }

    addPreguntita(preguntita) {
        this.preguntas.unshift(preguntita);
    }

    deletePreguntita(pregunta) {
        let indexToDelete = this.preguntas.indexOf(pregunta);
        if (indexToDelete !== -1) {
            this.preguntas.splice(indexToDelete, 1);
        }
    }
}

@Component ({
    selector: 'Ej08',
    template: `<h1>
    <font color="WHITE"><marquee behavior="alternate" id="marquee8">
        <--EJ08-User Interaction & Outputs (deleteEvent)--></marquee></font>
    </h1>
    <div>
    <preguntitas-list></preguntitas-list>
    </div>
    `,
    styles: [`#marquee8 {background: red;} #marquee8:hover {background: white; color: red}`]
})

export class Ej08Component {

}
