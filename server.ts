import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
async function main() {
    const result = await prisma.courses.create({
        data: {
            duratio: 200,
            name: 'Curso de NodeJS',
            description: 'Curso bom de NODEJS'
        }
    });

    console.log(result)
}

main();