const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Very simple login details
const USER = { username: "jasmin", password: "practice" };

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    res.json({ success: true, message: "✅ Login successful! Welcome Jasmin!" });
  } else {
    res.json({ success: false, message: "❌ Invalid username or password" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
