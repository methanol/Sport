import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, } from "@angular/common/http";
//import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

	baseUrl: string;
	
    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
	}

	getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}products`);
	}
	
    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${this.baseUrl}orders`, order);
	}
	
    // getProducts(): Observable<Product[]> {
    //     return this.sendRequest(HttpClient.Get, "products");
	// }
	
    // saveOrder(order: Order): Observable<Order> {
    //     return this.sendRequest(HttpClient.Post, "orders", order);
	// }
	
    // private sendRequest(verb: HttpClient,
    //         url: string, body?: Product | Order): Observable<Product | Order> {
    //     return this.http.request(new HttpRequest({
    //         method: verb,
    //         url: this.baseUrl + url,
    //         body: body
    //     })).map(response => response.json());
	// }  old implementation
}