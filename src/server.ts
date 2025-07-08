 import 'dotenv/config'  // já carrega o .env automaticamente
 import { fastify } from 'fastify'
 import {
    serializerCompiler,
    validatorCompiler,
    type ZodTypeProvider,
 } from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'
import { env } from './env.ts'

 const app = fastify().withTypeProvider<ZodTypeProvider>()

 app.register(fastifyCors, {
    origin: 'http://localhost:5173',
 })

 app.setSerializerCompiler(serializerCompiler)
 app.setValidatorCompiler(validatorCompiler)

 app.get('/health', () => {
    return 'Hello World'
 })

 app.listen({ port: Number(env.PORT) }).then(() => {
    console.log(`Port: ${env.PORT}`)
    console.log('Server is running on http://localhost:3333')
 })