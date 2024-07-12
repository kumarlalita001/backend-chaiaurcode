import expres, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = expres();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// for cors setup

// for data coming from differnt sources to backend , forms , jsons
app.use(
  expres.json({
    limit: "16kb",
  })
);

// data from urls , as % + are in url
app.use(expres.urlencoded({ extended: true, limit: "16kb" }));

// to store in local assets
app.use(expres.static("public"));

// for cookies setup
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
