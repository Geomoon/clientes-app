import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPointBase:string = 'http://localhost:8080/api/'

  private urlCliente: string = this.urlEndPointBase + 'cliente'
  private urlClientes: string = this.urlEndPointBase + 'clientes'


  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json' })

  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlClientes)
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get(`${this.urlCliente}/${id}`)
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      this.urlCliente, cliente, {headers: this.httpHeaders}
    )
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(
      `${this.urlCliente}/${cliente.id}`, cliente, { headers: this.httpHeaders }
    )
  }

  delete(cliente: Cliente): void {
    console.log(`${this.urlCliente}/${cliente.id}`)
    this.http.delete(`${this.urlCliente}/${cliente.id}`,{headers: this.httpHeaders})
      .subscribe(res => { })
  }
}
