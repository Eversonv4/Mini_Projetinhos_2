import express, { Router } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = Router();

const userData = {
  name: "",
  email: "",
  password: "",
};

app.use(routes);

routes.get("/", (req, res) => {
  return res.status(201).send("<h1>Hello</h2>");
});

routes.post("/user", (req, res) => {
  const { username, useremail, userpassword } = req.body;

  userData.name = username;
  userData.email = useremail;
  userData.password = userpassword;

  return res.redirect("/user");
});

routes.get("/user", (req, res) => {
  return res.send(`
      <h1 style="font-weight: 500"><strong>Olá:</strong> ${userData.name}</h1>
      <h2 style="font-weight: 500"><strong>Email:</strong> ${userData.email}</h2>
      <h2 style="font-weight: 500"><strong>Password:</strong> ${userData.password}</h2>
  `);
});

app.listen(3000, () => console.log("It's working!"));
