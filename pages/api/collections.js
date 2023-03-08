import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*  Function to read all pictures of Galery table and display in galery */
export default async function handler(req, res) {
    const collections = await prisma.galery.findMany();
    res.status(200).json(collections);
  }