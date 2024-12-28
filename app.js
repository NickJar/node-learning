const express = require("express");

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Hollow Knight Pantheon 5 Walkthrough",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How To Beat Ludwig The Accursed",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "The Bazaar | Vanessa One Weapon Guide",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
