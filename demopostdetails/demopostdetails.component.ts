import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-demopostdetails',
  templateUrl: './demopostdetails.component.html',
  styleUrls: ['./demopostdetails.component.css']
})
export class DemopostdetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.postService.getPostByID(id).subscribe(res  =>{
    console.log('getPostByID:', res);
  });
  }

}
