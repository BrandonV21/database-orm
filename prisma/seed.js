const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here
    const createdContact = await prisma.contact.create({
        data: {
            customerId: createdCustomer.id,
            phone: '911',
            email: 'boolean@mail.com'
        }
    });

    console.log('Contact created', createdContact);

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Bean',
            runtimeMins: 89
        }
    });

    console.log('Movie created', createdMovie);

    const createdScreening = await prisma.screening.create({
        data: {
            movieId: createdMovie.id,
            startsAt: new Date()
        }
    });

    console.log('Screening created', createdScreening);



    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
