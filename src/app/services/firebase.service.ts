import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, getDoc, onSnapshot, Unsubscribe } from '@angular/fire/firestore';
import { Observable, ReplaySubject } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore: Firestore = inject(Firestore);

  public projectsListener: Unsubscribe;
  public projects$: ReplaySubject<Project[]> = new ReplaySubject<Project[]>();

  constructor() {
    // let result =  getDoc(doc(this.firestore, 'users/user1'));
    // result.then((res) => {
    //   console.log(res.data());
    // });
    this.getProjects();
  }

  getProjects() {
    this.projectsListener = onSnapshot(collection(this.firestore, 'projects'), (result) => {
      const projects: Project[] = result.docs
        .map(doc => doc.data() as Project);

      this.projects$.next(projects);
    })
  }

  public async addProject(newProject: Project) {
    const docRef = await addDoc(collection(this.firestore, 'projects'), newProject);
  }

}
