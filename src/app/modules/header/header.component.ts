import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navigationLinks = [
    { label: 'Experiences', route: '/experiences' },
    { label: 'Educations', route: '/educations' },
    { label: 'Projects', route: '/projects' },
    { label: 'Skills', route: '/skills' },
  ];
}
