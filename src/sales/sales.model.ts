export class Sales {

    //USER_NAME,AGE,HEIGHT,GENDER,SALES,LAST_PURCHASE_DATE

     /*

    constructor(public name: string, 
        public age: number, 
        public height: number, 
        public gender: string, 
        public sales: number, 
        public lastPurchasedDate: string) {
    
    }

    */

    userName: string;
    age: number;
    height: number;
    gender: string;
    sales: number;
    lastPurchasedDate: string;

    constructor(userName: string, age: number, height: number, gender: string, sales: number, lastPurchasedDate: string) {
        this.userName = userName;
        this.age = age;
        this.height =  height;
        this.gender =  gender;
        this.sales =  sales;
        this.lastPurchasedDate = lastPurchasedDate;
    }
    

}