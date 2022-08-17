import { Component } from '@angular/core';
import { FavoriteItemsService } from './favorite-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : "componentapi";
  image : "default.jpg";
  
  constructor(public favorites: FavoriteItemsService){
    favorites.One = false;
    favorites.two = false;
    favorites.three = false;
    favorites.four = false;
    favorites.five = false;
  }
  favoriteReset(fav: FavoriteItemsService){
    this.favorites === fav;
  }
}
