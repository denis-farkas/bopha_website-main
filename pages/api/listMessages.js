import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

//Function to read all messages of contact form
export default async function handler(req, res) {
  const messages = await prisma.contact.findMany();
  res.status(200).json(messages);
}