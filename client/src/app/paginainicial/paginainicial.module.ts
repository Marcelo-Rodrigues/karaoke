import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './paginainicial.component';
import { PaginaInicialRoutingModule } from './paginainicial-routing.module';
import { ListapedidosModule } from '../listapedidos/listapedidos.module';

@NgModule({
  imports: [
    CommonModule,
    PaginaInicialRoutingModule,
    ListapedidosModule
  ],
  declarations: [ PaginaInicialComponent ],
  exports: [ PaginaInicialComponent ]
})
export class PaginaInicialModule { }
