import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  apenasPromo = signal(false);

  produtosExibidos = computed(() =>
   this.apenasPromo() ? this.produtos.filter(p => p.promo): this.produtos);

  alterarPromo(){
    this.apenasPromo.update(v => !v)
  }

  produtos = <Produto[]>[
    {
    id: 1,
    nome: 'Parafal',
    preco: 39000.00,
    descricao: 'Sai mais barato do que perder a vida',
    imageUrl: 'images/parafal.jpg',
    promo: false,
    estado: 'usado'
  },
    {
    id: 2,
    nome: 'hk',
    preco: 17000.00,
    descricao: 'metralhadora alemã ou de israel...',
    imageUrl: 'images/hk.jpg',
    promo: false,
    estado: 'novo'
  },
    {
    id: 3,
    nome: 'Beretta',
    preco: 8200.00,
    descricao: 'Otima para auto defesa.',
    imageUrl: 'images/beretta.jpg',
    promo: true,
    estado: 'esgotado'
  },
  {
    id: 4,
    nome: 'AK-47',
    preco: 9500.00,
    descricao: 'fds.',
    imageUrl: 'images/ak.jpg',
    promo: false,
    estado: 'novo'
  }
];

onViewProduct(id: number){
  alert('Visualizando produto id: ' +id);
}

onAddProduct(produto: {id: number, qtd: number}){
  alert(' Adicionando produto: '+produto.id+' | quantidade: '+produto.qtd);
}
}
