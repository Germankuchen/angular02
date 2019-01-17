import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  public heroes: any[] = [];
  public termino: string;

  constructor(private activateRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activateRoute.params.subscribe(params  => {
      console.log(params['texto']);
      this.heroes = _heroesService.buscarHeroes(params['texto']);
      this.termino = params['texto'];
    }
    );
  }

  ngOnInit() {
  }

}
