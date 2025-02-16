import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <!-- <div class="elementor-widget-wrap elementor-element-populated">flex -->
  <div class="bg-dark">
    <div class="container d-flex justify-content-end">
      <div class="navbar-nav">
        <p class="nav-item nav-link mb-0 text-white">Portfolio, by <a class="text-white" href="https://github.com/isaactrejo">&#64;isaactrejo</a>.</p>
      </div>
    </div>
  </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
