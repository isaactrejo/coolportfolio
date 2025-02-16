import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-black">
    <div class="container text-light">
      <h2>About Me</h2>

        <div class="fs-5 mb-4 animated animatedFadeInUp fadeInUp">
        <br>
          I enjoy challenging myself and I always strive to be at the top of anything I do and be the best. I love nature, technology, working out, food,
           watching movies/shows, listening to music, gaming, expressing my creativity through 3d or 2d artwork, etc.  
           <br><br>Technology has always been a major part of my life due to my two older brothers sparking my interest in it at a young age.
            Recently, I have decided to take an interest in software engineering/programming because of its promising futre and alignments with my interests. Undertaking my own projects and
             seeing my work come to life has added fuel to my love for programming. I aspire for my work to demonstrate my growing enthusiam for programming and to underscore my ability to
              be an efficient Software Engineer and Web Developer.
           <br><br>I hope the future comes with many opportunities to show my work and expand my passion for programming!
          

        </div>
      </div>
  </div>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
