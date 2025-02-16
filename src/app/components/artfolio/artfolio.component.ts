import { Component } from '@angular/core';

@Component({
  selector: 'app-artfolio',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-dark">
    <div class="container text-light">
      <div class="py-5">
        <div class="animated animatedFadeInUp fadeInUp">
          <a href="http://localhost:4200/home">
            <button type="link" class="btn btn-outline-info btn-lg px-3 me-sm-3 fw-bold">Home </button>
          </a>
        </div>
        <div>
          <img src="https://steamuserimages-a.akamaihd.net/ugc/1673617129955137959/C69C963E8D2AE0FA2F3DE22FAD14B929451CA812/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="A star wars battle scene"/>
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './artfolio.component.scss'
})
export class ArtfolioComponent {

}
