export interface IrequestBody {
  page: number;
  pageSize: number;
  searchTerm: string;
  total: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: number;
  password: string;
}
export type userRegister = Omit<User, "name" | "email" | "role" | "password">;

export interface ISelectItem {
  label: string | number;
  value: string | number;
}
interface ICreateAndUpdate {
  createdAt: string;
  updatedAt: string;
}
export interface IRoles extends ICreateAndUpdate {
  id: number;
  title: string;
  name: string;
}
