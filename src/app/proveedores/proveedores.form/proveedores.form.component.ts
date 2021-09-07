import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from '../proveedor';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedores.form',
  templateUrl: './proveedores.form.component.html',
  styleUrls: ['./proveedores.form.component.css']
})
export class ProveedoresFormComponent implements OnInit {

  titulo: string = 'Crear proveedor'
  proveedor: Proveedor = new Proveedor()

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarProveedor()
  }

  private cargarProveedor(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id']
      if (id) {
        this.proveedorService.getProveedor(id)
          .subscribe( proveedor => this.proveedor = proveedor )
      }
    })
  }

  create(): void {
    this.proveedorService.create(this.proveedor)
      .subscribe( res => this.router.navigate(['/proveedores']))
  }

  update(): void {
    this.proveedorService.update(this.proveedor)
      .subscribe( res => this.router.navigate(['/proveedores']))
  }

}
