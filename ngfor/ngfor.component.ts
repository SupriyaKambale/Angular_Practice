import { Component, OnInit } from '@angular/core';
import { Movies1 } from '../model/Movies1';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {


  title :string='Top 3 bollywood movies';
  movies: Movies1[]=[
    { title : '3idiots ',  director : ' R.Hirani',cast : ' Aamir',  releaseDate : ' 2009' },
    { title : 'Tumbad ',  director : 'Rahil ',cast : 'Rahil ',  releaseDate : '2020 ' },
    { title : ' Kantara',  director : ' Rishabh',cast : 'Rishabh ',  releaseDate : ' 2022' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
