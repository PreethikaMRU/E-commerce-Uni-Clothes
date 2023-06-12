export class Product {
    constructor (id:number, category:string, photo:string, title:string, desc:string, remark:string,cost:number,quantity:number,size:string[],selectedsize:string){
        this.id = id;
        this.category = category;
        this.photo = photo;
        this.title = title;
        this.desc = desc;
        this.remark = remark;
        this.cost = cost;
        this.quantity = quantity;
        this.size = size;
        this.selectedsize =selectedsize;
    }

    id:number;
    category:string;
    photo: string;
    title: string;
    desc: string;
    remark: string;
    cost: number;
    quantity: number;
    size: string[];
    selectedsize:string;
}