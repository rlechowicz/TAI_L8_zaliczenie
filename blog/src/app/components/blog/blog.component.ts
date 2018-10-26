import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  image = "http://rl9.5v.pl/inv_sm.png";
  text = "Ala ma kota";

  constructor() { }

  ngOnInit() {
  }

}
