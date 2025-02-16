import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
  <!-- <div class="bg-black">
    <div class="container text-light">
      <div class="py-5">
        <div class="animated animatedFadeInUp fadeInUp">
          <a href="http://localhost:4200/artwork">
            <button type="link" class="btn btn-outline-info btn-lg px-3 me-sm-3 fw-bold">Artwork </button>
          </a>
        </div>
        <img src="C:/Users/xxxbl/OneDrive/Pictures/me.JPEG" alt="Isaac Trejo"/>
        <h1 class="display-5 fw-bold animated animatedFadeInUp fadeInUp">Isaac Trejo</h1>
        <div class="col-lg-6 mx-auto">
          <div class="fs-3 mb-4 animated animatedFadeInUp fadeInUp">
            About Me
          </div>

          <div class="fs-5 mb-4 animated animatedFadeInUp fadeInUp">
            I am a current Austin Peay State University Student, Majoring in Computer Science with a concentration in Software Engineering.
            I love being creative, listening to music, playing games, expanding my knowledge, etc. 
            <br><br>Technology has always been a huge part of my life and through my older brothers, at a young age I was exposed to the many aspects 
            of tech and have grown to love and try to understand it. This, compounded with my creativity has led me to desire becoming a
            great software engineer so I can express my ideas in a way for other to interact with them. 
          </div>
          
          <div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center animated animatedFadeInUp fadeInUp">
            <a href="https://github.com/isaactrejo" target="_blank" class="me-sm-3">
              <button type="button" class="btn btn-outline-info btn-lg px-3 fw-bold">GitHub</button>
            </a>
            <a href="https://www.linkedin.com/in/oftrejoisaac/" target="_blank" class="me-sm-3">
              <button type="button" class="btn btn-outline-info btn-lg px-3 fw-bold">LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="bg-black">
    <app-navbar></app-navbar>
    <app-hero id="home" class="homet"></app-hero>
    <app-about id="about"></app-about>
    <app-projects id="projects"></app-projects>
    <app-contact id="contact"></app-contact>
    <app-footer id="footer"></app-footer>
  </div>
  

  `,
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  firebaseService: FirebaseService = inject(FirebaseService);

  ngOnInit() {
    // console.log('tasdf');s
  }
}
