//Importando a nossa biblioteca zod
import { z } from 'zod';
//importando o prisma
import { prisma } from '../lib/prisma';
//Importando o fastify usando o fastifyInstance porque todas as rotas serão baseadas no nosso app
import { FastifyInstance } from 'fastify';



//Todas as rotas por padrão deverão ser exportadas e devem possui uma função assincrona
export async function createEnquete(app: FastifyInstance){
    //Criando uma rota para votacoes
app.post('/votacoes', async (request, reply) => {

    //Criando uma variavel que vai receber os dados do corpo da requisição 
    const createEnqueteBody = z.object({
        //Receber dados dos votos e as opções dos votos na mesma instancia
        titulo: z.string(),
        options: z.array(z.string()),
    })

    //Validação dos dados 
    const { titulo, options } = createEnqueteBody.parse(request.body)

    //Salavando a nossa votação na base de dados
   const enquete = await prisma.enquete.create({

        data:{

            titulo,
            options:{

                createMany:{

                    data: options.map(option => {

                        return { titulo: option}

                    })
                }
            }
        }

   })

    //Retornando os dados da nossa votação
    return reply.status(201).send({enqueteId: enquete.id});

})
}
