import { Injectable } from "@angular/core";
import { Customer } from "../../domain/customer";
import { Observable } from "rxjs";

@Injectable()
export abstract class IRepository<T> {
  // abstract getById(id: string): Promise<T | null>;
  abstract getAll(): Observable<T[]>;
  abstract create(entity: Customer): Observable<void>;
  // abstract create(entity: T): Promise<T>;
  // abstract update(entity: T): Promise<T>;
  // abstract delete(id: string): Promise<void>;
}

@Injectable()
export abstract class ICustomerRepository extends IRepository<Customer> {
}

