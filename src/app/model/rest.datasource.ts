import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, } from "@angular/common/http";
//import { Http, Request, RequestMethod } from "@angular/http";
import { Observable, from } from "rxjs";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;
	
    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    
    // authenticate(user: string, pass: string): Observable<boolean> {
    //     return this.http.request(new Request({
    //         method: RequestMethod.Post,
    //         url: this.baseUrl + "login",
    //         body: { name: user, password: pass }
    //     })).map(response => {
    //         let r = response.json();
    //         this.auth_token = r.success ? r.token : null;
    //         return r.success;
    //     }); 
    // } old implementation

    authenticate(user: string, pass: string): Observable<boolean> {
        this.auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYWRtaW4iLCJleHBpcmVzSW4iOiIxaCIsImlhdCI6MTQ3ODk1NjI1Mn0.lJaDDrSu-bHBtdWrz0312p_DG5tKypGv6cANgOyzlg8";
        return from([true]); //TODO change mock into actual authorization
    }

	getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.baseUrl}products`);
	}
    
    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.baseUrl}products`, product);
    }

    updateProduct(product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete(`${this.baseUrl}products/${id}`);
    }

    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.baseUrl}orders`);
    }

    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${this.baseUrl}orders`, order);
    }

    updateOrder(order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl}ordersorders/${order.id}`, order);
    }

    deleteOrder(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}orders/${id}`);
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