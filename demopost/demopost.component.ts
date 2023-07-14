import { Component, OnInit } from '@angular/core';
import { post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  
  arrPost: post[] = [];

//DI pots service
  constructor(private postService: PostService) {  }

  ngOnInit() {

    this.postService.getPost().subscribe(res =>{
   //this.arrPost=res;
  console.log('Post arr data', res);
  })
  }

}
