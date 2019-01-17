import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  private heroes: Heroe[] = [];

  constructor(private _heroeService: HeroesService,
              private _router: Router) {
    console.log("Estoy en heroes");
   }

  ngOnInit() {
    console.log("Se inicializó los heroes");
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(indice: number) {
     this._router.navigate(['/heroe', indice]);
   // this.heroeSeleccionado.emit(this.indice);
 }

}
