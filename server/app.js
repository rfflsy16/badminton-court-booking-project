
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./router/index.js"
<<<<<<< HEAD
=======
const app = express();
>>>>>>> raffles

import TestLocation from "./models/testLocation.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

<<<<<<< HEAD


app.listen(port, () => {
    console.log(`Server Running on Port http://localhost:${port}`)
})


=======
>>>>>>> raffles
export { app } 
