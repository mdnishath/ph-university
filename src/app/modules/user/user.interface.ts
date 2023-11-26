export interface IUser {
  id: string;
  password?: string;
  role: 'admin' | 'student' | 'faculty';
  needPasswordChange?: boolean;
  status: 'in-progress' | 'blocked';
  isDelete?: boolean;
}
