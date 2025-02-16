import { Component } from '@angular/core';
// import t from '../../../../fonts/isaaclogo.mp4'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
<div class="bg-black">
    <div class="container text-light">
      <div class="py-5">
        <!-- <div class="animated animatedFadeInUp fadeInUp">
          <a href="http://localhost:4200/artwork">
            <button type="link" class="btn btn-outline-info btn-lg px-3 me-sm-3 fw-bold">Artwork </button>
          </a>
        </div> -->
        <!-- <img src="../../../assets/me.jpeg" alt="Isaac Trejo"/> -->
        <div class="hero">
          <video src="isaaclogo.mp4" autoplay muted loop plays-inline class="back-video"></video>
          <h1 class="display-5 fw-bold animated animatedFadeInUp fadeInUp">Isaac Trejo</h1>
          <div class="col-lg-6 mx-auto">
            <!-- <div class="fs-3 mb-4 animated animatedFadeInUp fadeInUp">
              New about me
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
