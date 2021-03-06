import { Component, OnInit } from '@angular/core';
import { PostService } from 'services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any = [];
  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.postSvc.getAllPosts().subscribe(res => {
      console.log("posts", res);
      this.posts = res;
    });
  }
}