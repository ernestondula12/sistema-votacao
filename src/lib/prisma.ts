//Importando o primsa 
import { Prisma, PrismaClient } from '@prisma/client';

//Criando conexão com o nosso banco de dados
export const prisma = new PrismaClient({

    log: ['query']

});