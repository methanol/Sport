import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    selector: "cart-summary",
    //moduleId: module.id,
    templateUrl: "cartSummary.component.html",
    styleUrls: ['./cartSummary.component.css']
})

export class CartSummaryComponent {
    constructor(public cart: Cart) { }
}