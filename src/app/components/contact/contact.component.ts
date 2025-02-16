import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.cdnfonts.com/css/general-sans" rel="stylesheet">
  <style>
      @import url('https://fonts.cdnfonts.com/css/general-sans');
</style>
                
  <div class="bg-black">
    <div class="container text-light">
      <div class="fs-5 mb-4 animated animatedFadeInUp fadeInUp">
        <h2>My Contacts are open!<br></h2>
      </div>

      <div class="fs-5 mb-4 animated animatedFadeInUp fadeInUp">
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center animated animatedFadeInUp fadeInUp">
          <a href="https://github.com/isaactrejo" target="_blank" class="me-sm-3">
            <button type="button" class="btn btn-outline-light btn-lg px-4"><i class="fa fa-github pe-1"></i>GitHub</button>
          </a>
          <a href="https://www.linkedin.com/in/oftrejoisaac/" target="_blank" class="me-sm-3">
            <button type="button" class="btn btn-outline-light btn-lg px-4"><i class="fa fa-linkedin-square pe-1"></i>LinkedIn</button>
          </a>
          <a href="mailto:trejomendoza.isaac0123@gmail.com" target="_blank" class="me-sm-3">
            <button type="button" class="btn btn-outline-light btn-lg px-4"><i class="fa fa-envelope pe-1"></i>Email</button>
          </a>
          <!-- fw-bold = making button bold -->
        </div>
      </div>
    </div>
  </div>
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
