import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
	//template: `<div><h3 class="bg-info p-a-1">Cart Detail Component</h3></div>`
	templateUrl: "cartDetail.component.html",
	styleUrls: ['./store.component.css']
})

export class CartDetailComponent {
	constructor(public cart: Cart) {}
}