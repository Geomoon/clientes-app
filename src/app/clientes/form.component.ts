import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente()
  titulo: string = "Crear Cliente"

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.clienteService.create(this.cliente)
      .subscribe( res => this.router.navigate(['/clientes']))
  }

}
