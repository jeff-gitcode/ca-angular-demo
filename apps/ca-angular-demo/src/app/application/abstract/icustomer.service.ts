import { Injectable, Signal } from "@angular/core";
import { Observable } from "rxjs";

import { Customer } from "../../domain/customer";

@Injectable()
export abstract class ICustomerService {
  abstract delete(id: string): Observable<Object>;
  abstract update(customer: Customer): Observable<Customer>;
  // abstract getById(id: string): Promise<T | null>;
  abstract getAll(): Signal<Customer[]>;
  abstract create(entity: Customer): Observable<Customer>;
  // abstract create(entity: T): Promise<T>;
  // abstract update(entity: T): Promise<T>;
  // abstract delete(id: string): Promise<void>;
}
