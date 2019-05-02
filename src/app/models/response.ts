
import { User } from './User';
import { Opcion } from './Opcion';

export class Response {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: Array<User>;
  data2: Array<Opcion>;
}
