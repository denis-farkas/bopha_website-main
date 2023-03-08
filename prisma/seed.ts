import {collection} from "./data/collection"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const main = async (): Promise<void>=> {   
    try {
        await prisma.galery.deleteMany()
        await prisma.$queryRaw`ALTER TABLE Galery AUTO_INCREMENT = 1`
        await prisma.galery.createMany({data:collection})
    } catch (error) {
      console.log(error);  
    } 
}        
 main()   
