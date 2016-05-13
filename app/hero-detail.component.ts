import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero'

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor() { }

    ngOnInit() { }

}