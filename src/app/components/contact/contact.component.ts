import { Component } from '@angular/core';

interface ContactOption {
  title: string;
  description: string;
  href: string;
  className: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly contacts: ContactOption[] = [
    {
      title: 'WhatsApp',
      description: 'Escríbenos para consultar disponibilidad y planes.',
      href: 'https://wa.me/573207837849',
      className: 'whatsapp'
    },
    {
      title: 'Gmail',
      description: 'Envíanos tus preguntas o solicitudes por correo.',
      href: 'mailto:contacto@ejemplo.com',
      className: 'email'
    },
    {
      title: 'Telegram',
      description: 'También puedes comunicarte directamente con nosotros.',
      href: 'https://t.me/',
      className: 'telegram'
    }
  ];
}
