import express from 'express';
import cors from 'cors';
import { DatabaseModel } from './model/dataBaseModel';

//definindo a porta do servidor
const port: number = 3333;

//criando servidor web
const server = express();
server.use(cors());
server.use(express.json());

//rotas de aplicação
server.get('/', (req, res) => {
    res.json({mensagem:"Ola mundo, esta é minha primeira aplicação web"});
});

server.get('/pessoas', (req, res) => {
    res.json({mensagem: "aqui sera apresentado os dados das pessoas."});
});

new DatabaseModel().testeConexao().then((resdb) => {
    if(resdb) {
        console.log("conexão com banco de dados realizada com sucesso!");
        //iniciando o servidor
        server.listen(port, () => {
            console.log(`Servidor iniciado no endereço http://localhost: ${port}`);
        });
        
    } else {
        console.log("erro ao conectar com banco de dados");
    }
});

