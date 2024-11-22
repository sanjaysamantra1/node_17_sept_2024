const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { getUserByUsername, getUserById, addUser } = require("./users");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

let authUser = async(username, password, done) => {
    const user = getUserByUsername(username);
    if (!user) {
      return done(null, false, { message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return done(null, false, { message: "Invalid password" });
    }
    return done(null, user);
  }
// Passport Configuration
passport.use(
  new LocalStrategy(authUser)
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  const user = getUserById(id);
  done(null, user);
});

// Routes
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome</h1>
    <a href="/login">Login</a> | <a href="/register">Register</a>
  `);
});

app.get("/login", (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  `);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

app.get("/register", (req, res) => {
  res.send(`
    <form method="POST" action="/register">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  `);
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (getUserByUsername(username)) {
    return res.send("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  addUser({ username, password: hashedPassword });
  res.redirect("/login");
});

app.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.send(`
    <h1>Dashboard</h1>
    <p>Welcome, ${req.user.username}!</p>
    <a href="/logout">Logout</a>
  `);
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
