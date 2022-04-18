import { Controller, Post, Body, Get } from "@nestjs/common";
import { SalesService } from "./sales.service";

//post is for adding or apending

//localhost:3000/sales/record 
//localhost:3000/sales/report
@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService) {}

    @Post('record') 
    addSales(@Body() fullBody: {
        USER_NAME: string, 
        AGE: number, 
        HEIGHT: number, 
        GENDER: string, 
        SALES: number, 
        LAST_PURCHASE_DATE: string}
    ){ 
        const name = fullBody.USER_NAME;
        this.salesService.insertSales(
            fullBody.USER_NAME, 
            fullBody.AGE,
            fullBody.HEIGHT, 
            fullBody.GENDER, 
            fullBody.SALES, 
            fullBody.LAST_PURCHASE_DATE);
        return 'Added ' + name;
    }

    @Get('report')
    getSales() {
        return this.salesService.getSales();

    }
}