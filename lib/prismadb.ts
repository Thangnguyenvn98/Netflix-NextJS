import { PrismaClient } from '@prisma/client'

declare global {
    namespace NodeJS {
        interface Global {}
    }
}

interface CustomNodeJsGlobal extends NodeJS.Global {
    prismadb: PrismaClient
}


declare const global: CustomNodeJsGlobal

const client = global.prismadb || new PrismaClient()

if(process.env.NODE_ENV !== 'production') global.prismadb = client

export default client