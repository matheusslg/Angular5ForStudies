import { Component, OnInit } from '@angular/core';

// esse import é necessário para ter acesso aos parâmetros de rota
import { ActivatedRoute } from '@angular/router';
//
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  // ActivatedRoute serve para pegar os parâmetros de rota
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']); // o navigate está mandando para o path '', que é a home
  }

}
