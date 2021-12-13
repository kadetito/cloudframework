import { Contacts } from './contacts';

export class User {
  id?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  birthday?: any;
  password?: string;
  role?: string;
  contacts?: Array<Contacts>;
}
