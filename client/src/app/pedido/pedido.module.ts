import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoComponent } from './pedido.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PedidoComponent],
  exports: [PedidoComponent]
})
export class PedidoModule {
 }
