    import Fastify from 'fastify';
import { getHomepage } from './index.js';

    const fastify = Fastify();

    fastify.get('/', async (request, reply) => {
    const homepage = await getHomepage();
    return homepage;
    });

    fastify.listen({ port: process.env.PORT || 3000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running at ${address}`);
    });
