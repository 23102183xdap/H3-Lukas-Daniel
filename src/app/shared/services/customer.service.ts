import { Customer } from './../customer/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "http://localhost:8080/api/customer";

  public GetCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseURL}/`);
  }

  public GetCustomerByID(id?: string): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseURL}/${id}`);
  }

  public GetCustomerByName(firstname: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseURL}/firstname/${firstname}`);
  }

  public DeleteCustomer(id?: string): Observable<Customer> {
    return this.http.delete<Customer>(`${this.baseURL}/delete/${id}`);
  }

  public CreateCustomer(data: any): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseURL}/create`, data);
  }

  public UpdateCustoemr(data: any, id?: string): Observable<Customer> {
    return this.http.put<Customer>(`${this.baseURL}/update/${id}`, data);
  }
}
