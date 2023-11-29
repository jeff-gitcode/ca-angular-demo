import { signal } from '@angular/signals';
import { Customer } from '../domain/customer';

export const customers = signal<Customer[]>([]);
