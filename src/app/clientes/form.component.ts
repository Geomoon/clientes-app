import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente()
  titulo: string = "Crear Cliente"

  constructor(
    private clienteService: ClienteService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarCliente()
  }

  private cargarCliente(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id']
      if (id) {
        this.clienteService.getCliente(id)
          .subscribe( cliente => this.cliente = cliente )
      }
    })
  }

  public create(): void {
    this.clienteService.create(this.cliente)
      .subscribe( res => this.router.navigate(['/clientes']))
  }

  public update(): void {
    this.clienteService.update(this.cliente)
      .subscribe( res => this.router.navigate(['/clientes']))
  }

}
