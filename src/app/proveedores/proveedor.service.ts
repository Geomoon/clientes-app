import { Injectable } from '@angular/core';
import { Proveedor } from './proveedor';
import { PROVEEDORES } from './proveedores.json';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor() { }

  getProveedores(): Proveedor[] {
    return PROVEEDORES
  }
}
