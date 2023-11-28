import { Injectable } from "@angular/core";
import { Customer } from "../../domain/customer";

@Injectable()
export abstract class IRepository<T> {
  abstract getById(id: string): Promise<T | null>;
  abstract getAll(): Promise<T[]>;
  abstract create(entity: T): Promise<T>;
  abstract update(entity: T): Promise<T>;
  abstract delete(id: string): Promise<void>;
}

@Injectable()
export abstract class ICustomerRepository extends IRepository<Customer> {
}

