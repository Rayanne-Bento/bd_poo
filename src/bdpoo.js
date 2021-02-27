const {Pool} = require('pg');

async function criarConexao(){
    const poll = new Pool({
        connectionString: '',
        ssl: {
            rejectUnauthorized: false
        }
    });
    
    let con = await poll.connect(); 
    /*await con.query(
        `create table Ingredientes(
            id serial,
            nome_ingrediente varchar,
            preco_ingrediente float,
            quantidade float,
            constraint ingredientes_pk primary key (id)
        )`
    );*/
    /*await con.query(
        `insert into Ingredientes(nome_ingrediente) values 
            ($1), ($2), ($3), ($4)`, 
            ['trigo', 'fermento', 'sal', 'água']
    );*/
    //await con.query(`update Ingredientes set nome_ingrediente = $1 where nome_ingrediente = $2`, ['leite', 'água']);
    //await con.query(`delete from Ingredientes where nome_ingrediente = $1`, ['fermento']);
    let res = await con.query('select * from Ingredientes');
    let tuplas = res.rows;
    for(let tupla of tuplas)(
        console.log(tupla)
    )
    con.release();   
}

criarConexao();