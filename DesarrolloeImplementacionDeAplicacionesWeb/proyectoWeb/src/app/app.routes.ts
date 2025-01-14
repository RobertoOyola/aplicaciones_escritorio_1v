import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './actores/crear-actores/crear-actores.component';
import { IndiceCineComponent } from './cine/indice-cine/indice-cine.component';
import { CrearCineComponent } from './cine/crear-cine/crear-cine.component';
import { CrearPeliculaComponent } from './peliculas/crear-pelicula/crear-pelicula.component';
import { EditarGenerosComponent } from './generos/editar-generos/editar-generos.component';
import { EditarActoresComponent } from './actores/editar-actores/editar-actores.component';
import { EditarCineComponent } from './cine/editar-cine/editar-cine.component';
import { EditarPeliculasComponent } from './peliculas/editar-peliculas/editar-peliculas.component';

export const routes: Routes = [
    {path: '', component:LandingPageComponent},
    {path: 'Generos', component:IndiceGenerosComponent},
    {path: 'Generos/Crear/', component:CrearGenerosComponent},
    {path: 'Generos/Editar/:id', component:EditarGenerosComponent},
    {path: 'actores', component:IndiceActoresComponent},
    {path: 'actores/crear', component:CrearActoresComponent},
    {path: 'actores/editar/:id', component:EditarActoresComponent},
    {path: 'cines', component:IndiceCineComponent},
    {path: 'cines/crear', component:CrearCineComponent},
    {path: 'cines/editar/:id', component:EditarCineComponent},
    {path: 'peliculas/crear', component:CrearPeliculaComponent},
    {path: 'peliculas/editar/:id', component:EditarPeliculasComponent},
    {path: '**', component:LandingPageComponent},
];
