import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  private heroe: Heroe = null;

  constructor(private activateRoute: ActivatedRoute, private heroeService: HeroesService) {
    this.activateRoute.params.subscribe(params  => {
      console.log(params['id']);
      this.heroe = heroeService.getHeroe(params['id']);
      console.log(this.heroe);
    }
    );
  }

  ngOnInit() {
  }

}
