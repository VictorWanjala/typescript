import { Payment } from "./classes/payments.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"
import { Invoice } from "./classes/invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('vic', 'web mike' , 300);

let docs:HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);
console.log(docs)
const invOne = new Invoice('Victoe', 'work on company website', 250)
    
const invTwo = new Invoice('Luigi', 'work on company website', 750)

let invoices: Invoice[]= []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv =>{
    console.log(inv.client, inv.details, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)



form.addEventListener('submit', (e:Event)=>{
    e.preventDefault();

    let doc:HasFormatter;
    if(type.value==='invoice'){
        doc = new Invoice(tofrom.value, details.value,amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value,amount.valueAsNumber)
    }



    list.render(doc, type.value, 'end');

})