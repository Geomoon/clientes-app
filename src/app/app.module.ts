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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'clientes', component: ClientesComponent },
      { path: 'proveedores', component: ProveedoresComponent }
    ])
  ],
  providers: [
    ClienteService,
    ProveedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
