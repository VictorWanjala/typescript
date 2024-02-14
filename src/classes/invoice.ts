import { HasFormatter } from "../interfaces/HasFormatter";


export class Invoice implements HasFormatter{


    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}
    format(){
        return `${this.client} owes Kshs ${this.amount} for ${this.details}`
    }
}