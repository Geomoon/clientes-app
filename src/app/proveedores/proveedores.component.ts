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
    this.proveedores = this.proveedorService.getProveedores()
  }

}
