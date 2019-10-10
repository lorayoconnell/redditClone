import { Injectable } from '@angular/core';
import { Article } from './article/article.model';


@Injectable({
  providedIn: 'root'
})
export class FlaggedArticleService {

  article: Article;

  constructor() { }

  downvoteToBottom(article: Article) {

    article.votes = Number.MIN_VALUE;

  }

}
