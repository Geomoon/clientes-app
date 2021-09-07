import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { ProveedorService } from './proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[] = []

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores()
      .subscribe(proveedores => this.proveedores = proveedores)
  }

  delete(proveedor: Proveedor): void {
    let confirmacion: boolean = confirm(`¿Eliminar proveedor ${proveedor.proveedor}?`)
    if (confirmacion) {
      this.proveedorService.delete(proveedor)
      this.proveedores = this.proveedores.filter(p => p != proveedor)
    }
  }

}
