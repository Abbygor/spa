import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
    private router: Router) { }

  ngOnInit() {
  }

  public buscarHeroe(termino) {
    console.log(termino);
    console.log(this._heroesService.buscarHeroes(termino));

    this.router.navigate(['/buscador', termino]);

  }

}
