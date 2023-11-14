import { Router } from "express";
import fs from "fs/promises"; // Brug fs/promises for promises-baserede filoperationer

const usersRouter = Router();

// ===== GET ALL USERS ===== \\
usersRouter.get("/", async (req, res) => {
    try {
        // Read the users data from the JSON file
        const data = await fs.readFile("./data/users.json", "utf8");
        const users = JSON.parse(data);
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// ===== POST NEW USER ===== \\
usersRouter.post("/", async (req, res) => {
    try {
        // Read the users data from the JSON file
        const data = await fs.readFile("./data/users.json", "utf8");
        // Parse the JSON data and add the new user
        const users = JSON.parse(data);
        const newUser = {
            id: Date.now(),
            ...req.body,
        };
        users.push(newUser);

        // Write the updated users data to the JSON file
        await fs.writeFile("./data/users.json", JSON.stringify(users));

        // Send the updated users data as the response
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// ----- EXPORT ----- \\
export default usersRouter;
