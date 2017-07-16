import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
