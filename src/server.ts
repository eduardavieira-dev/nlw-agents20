 import 'dotenv/config'  
 import { fastify } from 'fastify'
 import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
 } from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'
import { env } from './env.ts'
import { getRoomRoute } from './http/routes/get-room.ts'

 const app = fastify().withTypeProvider<ZodTypeProvider>()

 app.register(fastifyCors, {
    origin: 'http://localhost:5173',
 })

 app.setSerializerCompiler(serializerCompiler)
 app.setValidatorCompiler(validatorCompiler)

 app.get('/health', () => {
    return 'OK'
 })

 app.register(getRoomRoute)

 app.listen({ port: Number(env.PORT) }).then(() => {
   //  console.log('Server is running on http://localhost:3333')
 })