import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente()
  titulo: string = "Crear Cliente"

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void {
    console.log("Click on create")
    console.log(this.cliente)
  }

}
