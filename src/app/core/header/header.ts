import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  tituloLoja= input.required<string>();

  exibirMsg(msg:string): void {
    alert(msg);
  }

  textoSobre = output<string>();

  enviarSobre() {
    this.textoSobre.emit('Disciplina de Técnicas de Programação  \n I. Desenvolvido por Rafis');
  }
}
