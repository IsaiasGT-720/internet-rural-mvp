import { Component } from '@angular/core';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly benefits: Benefit[] = [
    {
      icon: '01',
      title: 'Conectividad rural',
      description: 'Soluciones pensadas para hogares y comunidades fuera de los grandes centros urbanos.'
    },
    {
      icon: '02',
      title: 'Planes por zona',
      description: 'Opciones diferentes según la cobertura y las necesidades de cada municipio.'
    },
    {
      icon: '03',
      title: 'Atención cercana',
      description: 'Canales directos para resolver inquietudes y acompañarte durante el servicio.'
    }
  ];
}
