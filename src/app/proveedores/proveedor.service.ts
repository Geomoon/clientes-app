import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from './proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private urlBase = 'http://localhost:8080/api/'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.urlBase}/proveedores`,)
  }

  getProveedor(id: number): Observable<Proveedor> {
    return this.http.get(`${this.urlBase}/proveedor/${id}`)
  }

  create(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post(
      `${this.urlBase}/proveedor`, proveedor, { headers: this.httpHeaders }
    )
  }

  update(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(
      `${this.urlBase}/proveedor/${proveedor.id}`, proveedor, { headers: this.httpHeaders }
    )
  }

  delete(proveedor: Proveedor): void {
    this.http.delete(`${this.urlBase}/proveedor/${proveedor.id}`, { headers: this.httpHeaders })
      .subscribe(res => { })
  }

}
