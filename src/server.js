import express from "express";


const app = express();

// const middleware1 = (req, res, next) => {
//     console.log("middleware 1 invoked ... ");
//     next();
// }   

// const middleware2 = (req, res, next) => {
//     console.log("middleware 2 invoked ... ");
//     next();
// }

// app.use(middleware2);

// app.use(middleware1);


// let count = 0;

// const requestCount = (req, res, next) => {
//     count += 1;
//     console.log("count: ", count);
//     next();
// }

// app.use(requestCount);


app.get("/health", middleware1, middleware2, (req, res) => {
    console.log("health route handler invoked ... ");
    res.status(200).json({
        msg: "The server is up and running  .... "
    });
});




app.listen(7000, () => {
    console.log("Server is running on port 7000");
});