import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-listapedidos',
  templateUrl: './listapedidos.component.html',
  styleUrls: ['./listapedidos.component.css'],  
  styles:
    [
      `
      :host >>> .pedido {
        margin-top: unset;
        background: red;
      `
  ]
})
export class ListapedidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

pedidos= [
  {
    nomecantor : "Henrique e Juliano",
    nomemusica : "Vidinha de Balada",
    nomesolicitante : "Paulo Ricardo",
    posicao : 1
  },

  {
    nomecantor : "Henrique e Juliano",
    nomemusica : "Vidinha de Balada",
    nomesolicitante : "Paulo Ricardo",
    posicao : 2
  },

  {
    nomecantor : "Henrique e Juliano",
    nomemusica : "Vidinha de Balada",
    nomesolicitante : "Paulo Ricardo",
    posicao : 3
  }
]

  criar(){
    this.pedidos.push({
      nomecantor : 'Henrique e Juliano',
      nomemusica : 'Vidinha de Balada',
      nomesolicitante : 'Paulo Ricardo',
      posicao : this.pedidos.length + 1
    });
    console.log("Criado");
  }
}
