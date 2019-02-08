
import { User } from './User';

export class Response {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: Array<User>;

}
