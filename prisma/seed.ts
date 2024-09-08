import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from 'bcrypt';

async function up() {

await prisma.user.createMany({
    data: [
        {
            fullName: "User Test",
            email: 'user@test.com',
            password: hashSync('111111', 10),
            verified: new Date(),
            role: 'USER',  
        },
        {
            fullName: 'Admin Admin',
            email: 'admin@test.com',
            password: hashSync('111111', 10),
            verified: new Date(),
            role: 'ADMIN',
        },
    ],
  });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.ingriedient.createMany({
        data: ingredients,
    });

    await prisma.product.createMany({
        data: products,
    });

     const pizza1 = await prisma.product.create({
        data: {
            name: 'Burger Pizza',
            imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61698827EE9B8DB6D0AEC53410.avif',
            categoryId: 1,
            ingriedients: {
                connect: ingredients.slice(0, 5),
            },
        }
     });

}
async function down() {
    await prisma.$executeRaw `TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
}

async function main() {
try {
    await down();
    await up();
} catch (e) {
    console.error(e);
 }
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});