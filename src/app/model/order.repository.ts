import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class OrderRepository {

	private orders: Order[] = [];
	
	constructor(private dataSource: StaticDataSource) {}
	
    getOrders(): Order[] {
        return this.orders;
	}
	
    saveOrder(order: Order): Observable<Order> { //TODO change Observable into Observer if necessary
        return this.dataSource.saveOrder(order);
    }
}