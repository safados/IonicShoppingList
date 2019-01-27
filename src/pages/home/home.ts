import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs'; 
import 'rxjs/add/operator/map';
import { Item } from './../../models/item/item.model';
import { map } from 'rxjs/operators';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//to import items from item module
  shoppingList$:  Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private shopping: ShoppingListService,
  ) {
    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().pipe(map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val(),
        }));
      })); 

    }
  }
//snapshotChanges() >key + value
//valueChanges()  see the value 
//map()  map these items i want to return new object

//... spread operature to return payload.val()

//.getshoppinglist() return  > DB List