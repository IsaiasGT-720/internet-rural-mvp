import { Component } from '@angular/core';

interface InternetPlan {
  speed?: string;
  name?: string;
  price: string;
  detail?: string;
}

interface ZonePlan {
  zone: string;
  locations: string;
  color: string;
  affiliation?: string;
  installation?: string;
  plans: InternetPlan[];
  note?: string;
}

@Component({
  selector: 'app-plans',
  standalone: true,
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  readonly zones: ZonePlan[] = [
    {
      zone: 'Zona 01',
      locations: 'Santa Rosa de Osos, Entrerríos y Don Matías',
      color: '#FFCB37',
      affiliation: '$125.000',
      plans: [
        { speed: '5', name: 'MEGAS', price: '$75.000', detail: 'al mes' },
        { speed: '8', name: 'MEGAS', price: '$85.000', detail: 'al mes' },
        { speed: '10', name: 'MEGAS', price: '$125.000', detail: 'al mes' }
      ],
      note: 'Incluye TV: más de 500 canales, series y películas. + $50.000 por la instalación. Equipo en comodato.'
    },
    {
      zone: 'Zona 02',
      locations: 'Cisneros y Santo Domingo',
      color: '#9068FC',
      affiliation: '$150.000',
      plans: [
        { speed: '3', name: 'MEGAS', price: '$65.000', detail: 'al mes' },
        { speed: '5', name: 'MEGAS', price: '$85.000', detail: 'al mes' },
        { speed: '8', name: 'MEGAS', price: '$100.000', detail: 'al mes' },
        { speed: '10', name: 'MEGAS', price: '$125.000', detail: 'al mes' }
      ],
      note: 'Incluye TV: más de 500 canales, series y películas. + $50.000 por la instalación.'
    },
    {
      zone: 'Zona 03',
      locations: 'San Pablo, Aragón y Labores',
      color: '#F94D87',
      installation: '$60.000',
      plans: [
        { name: 'INTERNET', price: '$55.000', detail: 'al mes' },
        { name: 'INTERNET + TV', price: '$75.000', detail: 'al mes' },
        { name: 'SOLO TV', price: '$35.000', detail: 'al mes' }
      ]
    },
    {
      zone: 'Zona 04',
      locations: 'San José de la Montaña',
      color: '#3471E4',
      plans: [
        { name: 'SOLO TV', price: '$30.000', detail: 'al mes' },
        { name: 'INTERNET', price: '$45.000', detail: 'al mes' },
        { name: 'INTERNET + TV', price: '$79.000', detail: 'al mes' }
      ]
    }
  ];
}
