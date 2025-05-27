
export interface IrequestBody {
    page: number;
    pageSize: number;
    searchTerm: string;
    total:number
  }

  export interface User{
    id:number ,
    name:string ,
    email:string ,
    role :string ,
    status:number ,
    password:string
  }

export interface ISelectItem{
  label:string |number, 
  value :string | number

}