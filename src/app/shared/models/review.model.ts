import { User } from './user.model';

export class Review {
  id: string;
  rate: number;
  text: string;
  created_by: User;
  created_at: string;
}
