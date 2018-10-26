import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  image = "http://rl9.5v.pl/inv_sm.png";
  text = "Ala ma kota";

  items = [
    {"item-image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
     "item-text" : "Pierwszy wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Drugi wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Trzeci wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Czwarty wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Piąty wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Szósty wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Siódmy wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Ósmy wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Dziewiąty wpis"},
    {"item-image" : "http://rl9.5v.pl/inv_sm.png",
      "item-text" : "Dziesiąty wpis"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
