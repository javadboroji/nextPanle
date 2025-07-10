export interface IrequestBody {
  page: number;
  pageSize: number;
  searchTerm: string;
  total: number;
}
export interface TRadioGroupItem {
  id: string;
  value: string;
  Label: string;
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


export interface IProduct{
  id:number ,
  title:string ,
  count:number ,
  price:number ,
  isActive:boolean ,
  description:string ,
  image_url:string ,

}