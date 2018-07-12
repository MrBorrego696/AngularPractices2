import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Ej01Component } from '../AngularPractice/Ej01.component';
import { Ej02Component } from '../AngularPractice/Ej02.component';
import { Ej03Component } from '../AngularPractice/Ej03.component';
import { Ej04Component } from '../AngularPractice/Ej04.component';
import { Ej05Component } from '../AngularPractice/Ej05.component';
import { Ej06Component, Ej06SimpleComponent, Ej06ListComponent } from '../AngularPractice/Ej06.component';
import { Ej07Component, PreguntaListComponent, PreguntaComponent, PreguntaFormComponent} from '../AngularPractice/Ej07.component';
import { Ej08Component, Ej08PreguntaListComponent } from '../AngularPractice/Ej08.component';
import { Ej08PreguntaBorradaComponent, Ej08PreguntaFormComponent } from '../AngularPractice/Ej08.component';

@NgModule({
  declarations: [
      AppComponent,
      Ej01Component,
      Ej02Component,
      Ej03Component,
      Ej04Component,
      Ej05Component,
      Ej06Component, Ej06SimpleComponent, Ej06ListComponent,
      Ej07Component, PreguntaComponent, PreguntaListComponent,  PreguntaFormComponent,
      Ej08Component, Ej08PreguntaListComponent, Ej08PreguntaBorradaComponent, Ej08PreguntaFormComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [
      AppComponent,
      Ej01Component,
      Ej02Component,
      Ej03Component,
      Ej04Component,
      Ej05Component,
      Ej06Component,
      Ej07Component,
      Ej08Component
      ]
})

export class AppModule { }
