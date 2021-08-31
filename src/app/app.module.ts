import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RouterModule } from '@angular/router';
import { ProveedorService } from './proveedores/proveedor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component'
import { FormsModule } from '@angular/forms';

const ROUTES = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: DirectivaComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedoresComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ClienteService,
    ProveedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
