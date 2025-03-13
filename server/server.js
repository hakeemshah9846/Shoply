const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const authRouter = require("./routes/auth/auth-routes");


mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("MongoDB Connected..."))
    .catch((error) => console.log("DB connection error :  ", error));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders : [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
    ],
    credentials : true,
}));

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);


app.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}`));