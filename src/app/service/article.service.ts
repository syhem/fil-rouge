
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  id = "_id";
  url = "https://sleepy-lowlands-46916.herokuapp.com/articles";




  constructor(private http : HttpClient) { }

  // pour avoir tout les articles

  getAllArticles()
  {
    return this.http.get(this.url);
  }

  // pour avoir un seul article selon son id

  getArticleById(id)
  {
    return this.http.get(this.url+"/"+id);
  }


}
