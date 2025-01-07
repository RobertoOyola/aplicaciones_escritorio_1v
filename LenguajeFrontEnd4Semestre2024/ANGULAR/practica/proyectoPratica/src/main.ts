import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig, // Propagamos el appConfig
  providers: [
  provideHttpClient(),
  ...appConfig.providers // Propagamos los providers del appConfig
  ]
  })
  .catch((err) => console.error(err));
