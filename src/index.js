let db = require('./db');
let Cliente = require('./model/Cliente');

async function sincronizar(){
    await db.sync();
}
//sincronizar();

async function inserir (obj){
    let res = await Cliente.create(obj);
    console.log(res);
}
/*let clientes = [];

let c1 = {nome: 'Fulano'};
let c2 = {nome: 'Cicrano', telefone: '000000000'};
let c3 = {nome: 'Beltrano', telefone: '999999999'};
let c4 = {nome: 'Fulaninho'};
let c5 = {nome: 'Fulaninha'};

clientes.push(c1, c2, c3, c4, c5);

for(c of clientes){
    inserir(c);
}*/

async function consultar (){
    let result = await Cliente.findAll();
    console.log(result);
}
consultar();