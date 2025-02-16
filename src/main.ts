import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyD6RYAs-UQ8Qaw7IotsUqITFnwv0mnHnKQ",
  authDomain: "isaactrejo-17a60.firebaseapp.com",
  projectId: "isaactrejo-17a60",
  storageBucket: "isaactrejo-17a60.appspot.com",
  messagingSenderId: "520845199913",
  appId: "1:520845199913:web:6a615d30f2dcbdf8ea2a38",
  measurementId: "G-7RMCE2P8SM"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
})
  .catch((err) => console.error(err));
