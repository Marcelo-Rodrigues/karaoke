import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from './pedido';

@Component({
  selector: 'my-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {

  @Input() pedidos:Pedido[];

  constructor() { }

  ngOnInit() {
  }

}
