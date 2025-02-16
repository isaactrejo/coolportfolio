import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-black">
  <nav class="navbar navbar-expand-lg px-4">
    <div class="container-fluid">
      <a class="navbar-brand text-light" href="#">Isaac Trejo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item me-4">
            <a class="nav-link text-light" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link text-light" href="#about">About</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link text-light" href="#projects">Works</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
