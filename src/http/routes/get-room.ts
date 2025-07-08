import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const getRoomRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms', ()=>{
        return 'Hello World!'
    })
}