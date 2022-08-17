import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteItemsService } from '../favorite-items.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() favorites: FavoriteItemsService;
  @Output() favoritesOut: EventEmitter<FavoriteItemsService> = new EventEmitter();

  constructor() 
  { 
  }

  ngOnInit(): void {
  }

  ChangeStatus(value: string){
    switch (value) {
      case 'one':
        this.favorites.One = !this.favorites.One;
        break;
      case 'two':
        this.favorites.two = !this.favorites.two;
        break;
      case 'three':
        this.favorites.three = !this.favorites.three;
        break;
      case 'four':
        this.favorites.four = !this.favorites.four;
        break;
      case 'five':
        this.favorites.five = !this.favorites.five;
        break;
      default:
        break;
    }
    this.favoritesOut.emit(this.favorites);
    console.log(this.favorites);
  }

}
