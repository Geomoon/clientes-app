import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes'
  private urlCreate: string = 'http://localhost:8080/api/cliente'
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json' })

  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint)
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      this.urlCreate, cliente, {headers: this.httpHeaders}
    )
  }
}
