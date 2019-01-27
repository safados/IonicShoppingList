import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../models/item/item.model';

//this page to connect with DB
//we export ShoppingListService class that uses AngularFireDatabase object
// to do CRUD operations methods:
//getShoppingList(), addsItem(), updateItem(), removeItem().
@Injectable()
export class ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shopping-list');

    constructor(private db: AngularFireDatabase) { }

    getShoppingList(){
        return this.shoppingListRef;
    }

    addItem(item: Item){
        return this.shoppingListRef.push(item);

    }
    editItem(item: Item){
        return this.shoppingListRef.update(item.key, item);

    }
    removeItem(item: Item){
        return this.shoppingListRef.remove(item.key);
    }

}

//thid psge for Data Service
// 3 pages home, add-shopping-item, edit-shopping-item, use ShoppingListService methods
//to interact with Firebase DB and Ionic UI Component to display data.