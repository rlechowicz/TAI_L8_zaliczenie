import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  items = [
    {
	  "id" : 1,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Pierwszy wpis"
	},
    {
	  "id" : 2,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Drugi wpis"
	},
    {
	  "id" : 3,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Trzeci wpis"
	},
    {
	  "id" : 4,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Czwarty wpis"
	},
    {
	  "id" : 5,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Piąty wpis"
	},
    {
	  "id" : 6,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Szósty wpis"
	},
    {
	  "id" : 7,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Siódmy wpis"
	},
    {
	  "id" : 8,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Ósmy wpis"
	},
    {
	  "id" : 9,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Dziewiąty wpis"
	},
    {
	  "id" : 10,
	  "image" : "https://i.pinimg.com/originals/e5/40/69/e54069d69fc11d04da9eef1f316b054e.jpg",
      "text" : "Dziesiąty wpis"
	}
  ]

  constructor() { }

  ngOnInit() {
  }

}
