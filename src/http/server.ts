//Importando o fastify
import fastify from 'fastify';
//Importando a rota de criação de enquetes
import { createEnquete } from '../routes/create-enquetes';

//Criando a nossa variavel que vai receber o nosso fastify

const app = fastify()

//Registando rotas
app.register(createEnquete)



//Criando e ouvindo uma porta
app.listen({port: 3000}).then(() => {

    console.log('Servidor do sistema de votação esta rodando');

})