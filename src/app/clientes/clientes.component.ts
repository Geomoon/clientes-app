import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe(clientes => this.clientes = clientes);
  }

  delete(cliente: Cliente): void {
    let confirmacion: boolean = confirm(`¿Eliminar cliente ${cliente.nombre}?`)
    if (confirmacion) {
      this.clienteService.delete(cliente)
      this.clientes = this.clientes.filter( c => c != cliente)
    }
  }

}
