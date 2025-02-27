import express, {Request, Response} from "express";
import dotenv from "dotenv";


dotenv.config(); //Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());//Middleware to parse JSON

app.get("/", (req : Request, res : Response) => {
    res.send("Hello world!!!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});