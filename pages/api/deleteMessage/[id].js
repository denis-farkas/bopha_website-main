import { PrismaClient } from "@prisma/client";

//Function to delete one message of contact form
export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const idMessage = req.query.id;
  if (req.method === "DELETE") {
    const messageEffac√© = await prisma.contact.delete({
      where: {
        id: parseInt(idMessage),
      },
    });
    res.status(200).json(messageEffac√©);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}