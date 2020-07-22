export class Order {
    name:String;
    UserId:String;
    CalculatedAmt:number;
    discount:number;
    FinalAmt:number;
    quantity:number;
    }

export class Order_P{
    name:String;
    UserId:String;
    OrderId:String;
    ProductId:String;
    Productname:String;
    quantity:number;
    Total:number;
}
export class OrderPaginate{
    docs: Order_P[];
    total:number;
    limit:number;
    page:number;
    pages:number;
}
