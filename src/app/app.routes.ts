import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:texto', component: BuscadorComponent },
    { path: '**', component: HomeComponent }
];

export const app_routing = RouterModule.forRoot(routes);
