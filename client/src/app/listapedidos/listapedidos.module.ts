import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoModule } from '../pedido/pedido.module';
import { ListapedidosComponent } from './listapedidos.component';

@NgModule({
  imports: [
    CommonModule,
    PedidoModule
  ],
  declarations: [ ListapedidosComponent ],
  exports: [ ListapedidosComponent ]
})
export class ListapedidosModule { }
