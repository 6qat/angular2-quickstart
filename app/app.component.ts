import { Component, OnInit } from '@angular/core';

import { Hero } from './hero'
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service'


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html', 
  styleUrls: ['app/app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
  
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  
  constructor(private heroService: HeroService) {}
  
  ngOnInit() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)  
  }
  
  onSelect(h) {
    console.log(h)
    this.selectedHero = h;
  }

  test(e) {
    console.log(e);
  };

}
