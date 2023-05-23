const { Pool }  = require('pg') //procura na biblioteca 'pg' o objeto que ele quer, ou seja, Pool

const pool = new Poll ({
    connectionString: 'postgress://usuario:senha@endereco:porta/banco'
}); //cria uma nova instancia