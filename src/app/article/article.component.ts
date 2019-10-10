import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { FlaggedArticleService } from '../flagged-article.service';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  adm: boolean = false;

  @HostBinding('attr.class') cssClass='row';
  
  @Input() article: Article;

  constructor(public flaggedArticleService : FlaggedArticleService) { }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  flagArticle(): boolean {
    this.flaggedArticleService.downvoteToBottom(this.article);
    return false;
  }

  ngOnInit() {
    if (this.article.role == "admin") {
      this.adm = true;
    }
    else {
      this.adm = false;
    }
  }






}
