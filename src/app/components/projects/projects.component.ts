import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { Project } from '../../models/project';

const myprojects = [
  {
    name: "DocuemntA",
    description: "A java document editor. Converts documents to html, pdf and text file.",
    imageUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/samueltrejo/habito'
  },
  {
    name: "Cryptio",
    description: "A java document editor. Converts documents to html, pdf and text file.",
    imageUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/samueltrejo/habito'
  },
  {
    name: "DocuemntI",
    description: "A java document editor. Converts documents to html, pdf and text file.",
    imageUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/samueltrejo/habito'
  },
  {
    name: "DocuemntO",
    description: "A java document editor. Converts documents to html, pdf and text file.",
    imageUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/samueltrejo/habito'
  },
  {
    name: "DocuemntU",
    description: "A java document editor. Converts documents to html, pdf and text file.",
    imageUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1402&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: 'https://github.com/samueltrejo/habito'
  }
]

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  template: `
  <div class="bg-black">
    <div class="container">
      <h2 class="text-light">My Works<br>
    
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add project
        </button>
      </h2>

        <div class="fs-5 mb-4 animated animatedFadeInUp fadeInUp d-flex flex-wrap">
          <div *ngFor="let project of projects" style="min-height: 250px; width: 300px; background-color: #fff; border-radius: 10px; padding: 20px; margin: 20px;">
            <img src="{{project.imageUrl}}" style="width: 100%; border-radius: 10px;" />
            <div style="font-weight: 600;">
              <a href="{{project.githubUrl}}" target="_blank"><i class="bi bi-github text-primary pe-1"></i></a>
              <span>{{project.name}}</span>
            </div>
            <div style="font-size: 16px;">{{project.description}}</div>
          </div>
        </div>

    </div>
  </div>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form [formGroup]="projectform" (submit)="saveProject()" class="modal-content" ngNativeValidate>
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New Project</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <!-- name input -->
          <div>
            <label for="name">Project Name</label>
            <input id="name" type="text" formControlName="name" required />
          </div>
          <!-- name input -->
          <div>
            <label for="description">Project Description</label>
            <input id="description" type="text" formControlName="description" required />
          </div>
          <!-- name input -->
          <div>
            <label for="image">Image Url</label>
            <input id="image" type="text" formControlName="imageUrl" />
          </div>
          <!-- name input -->
          <div>
            <label for="github">Github Url</label>
            <input id="github" type="text" formControlName="githubUrl" />
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>
      </div>
    </form>
  </div>
</div>
  `,
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  firebaseService: FirebaseService = inject(FirebaseService);
  projects: Project[];
  formbuilder: FormBuilder = inject(FormBuilder);
  projectform: FormGroup = this.formbuilder.group({
    name: '',
    description: '',
    imageUrl: '',
    githubUrl: ''
  });

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.firebaseService.projects$.subscribe((data) => {
      this.projects = data;
    })
  }


  saveProject() {
    const projectData = this.projectform.value;
    // this.projects.push(projectData);
    this.firebaseService.addProject(projectData);
    this.projectform.reset();
  }
}
