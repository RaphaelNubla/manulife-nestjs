import { Injectable } from "@nestjs/common";

import { Sales } from './sales.model';

@Injectable()
export class SalesService {
    private sales: Sales[] = [];

    insertSales(name: string, age: number, height: number, gender: string, sales: number, lastPurchasedDate: string) {
        const newSales = new Sales(name, age, height, gender, sales, lastPurchasedDate)
        this.sales.push(newSales);
        return name;
    }

    getSales(){
        return this.sales;
    }

}