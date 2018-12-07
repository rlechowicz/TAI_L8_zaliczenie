import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  // item = {
  //   title: 'accusamus ea aliquid et amet sequi nemo',
  //   url: 'https://via.placeholder.com/600/56a8c2',
  // };

  item = {
    id: null,
    title: '',
    url: '',
    content: '',
  };

  constructor(private data: DataServiceService) {
  }

  ngOnInit() {

  };

  setData(item){
    this.data.addPost(item).subscribe();
  }
}
