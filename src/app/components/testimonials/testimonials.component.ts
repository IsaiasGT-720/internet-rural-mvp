import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  location: string;
  text: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  readonly testimonials: Testimonial[] = [
    {
      name: 'María G.',
      location: 'Santa Rosa de Osos',
      text: 'El servicio ha sido muy bueno y la conexión nos ha facilitado trabajar y estudiar desde casa.'
    },
    {
      name: 'Carlos R.',
      location: 'Cisneros',
      text: 'Me gustó poder escoger un plan de acuerdo con lo que realmente necesitamos en el hogar.'
    },
    {
      name: 'Laura M.',
      location: 'San José de la Montaña',
      text: 'La atención fue cercana y encontramos una alternativa que se ajustó a nuestras necesidades.'
    }
  ];
}
