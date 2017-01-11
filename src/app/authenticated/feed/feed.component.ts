import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  private posts;

  constructor(private feed: FeedService) { }

  ngOnInit() {
    this.feed.getFeed().subscribe(result => {
      this.posts = result;
    });
  }

}
