export interface ItabsTrigger {
    label:string;
    value:string;
}
export interface ITabContent{
    value:string;
    children:React.ReactNode;
}
export interface ITabComponent{
    tabsTrigger:ItabsTrigger[],
    tabContent:ITabContent[];
}