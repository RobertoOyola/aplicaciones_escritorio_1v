import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { IndiceCineComponent } from './cine/indice-cine/indice-cine.component';
import { CrearCineComponent } from './cine/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';

export const routes: Routes = [
    {path: '', component:LandingPageComponent},
    {path: 'Generos', component:IndiceGenerosComponent},
    {path: 'Generos/Crear', component:CrearGenerosComponent},
    {path: 'actores', component:IndiceActoresComponent},
    {path: 'actores/crear', component:CrearActoresComponent},
    {path: 'cines', component:IndiceCineComponent},
    {path: 'cines/crear', component:CrearCineComponent},
    {path: 'peliculas/crear', component:CrearPeliculaComponent}
];
