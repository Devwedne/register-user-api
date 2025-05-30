const express = require("express");

const app = express();

app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log("O servidor está rodando na porta ", +port);
});

app.post("/users", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    res.json(newUser);
  } catch (error) {
    res.json(error.error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const findUser = await prisma.user.findMany();
    res.json(findUser);
  } catch (error) {
    res.json(error.error);
  }
});
