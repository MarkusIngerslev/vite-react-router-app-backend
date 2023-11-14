// ===== IMPORTS ===== \\
import express from "express";
import cors from "cors";

// Import from routes
import usersRouter from "./routes/users.js";

// ===== Global Use =====
const app = express();
app.use(cors());
app.use(express.json());

// ===== ROUTES ===== \\
app.use("/users", usersRouter);

// ----- MAIN GET ROUTE ----- \\
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// ----- PORT LISTENER ----- \\
app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("http://localhost:3000");
    console.log("Press Ctrl+C to quit.");
});
