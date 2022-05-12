import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template:
    `
         <h1>{{titulo}}</h1>
         <h3><strong>La Base es {{base}}</strong></h3>
        <button (click)="acumular(this.base);"> + {{base}}</button>
        <span >{{numero}}</span>
        <button (click)="acumular((-1)*this.base);"> - {{base}}</button>
   
    `
    
    
})
export class ContadorComponent{
    titulo: string = 'Contador APP';
    numero: number =10;
    base: number=5;
    acumular(valor: number)
    {
      this.numero+=valor;
    }
}