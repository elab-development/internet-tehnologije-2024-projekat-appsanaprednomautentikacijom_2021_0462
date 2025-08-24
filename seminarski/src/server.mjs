import "dotenv/config";
import express from "express";
import userRouter from "./routers/userRouter.mjs";
import postRouter from "./routers/postRouter.mjs";
import cors from "cors";
const app = express();
app.use(cors()); // Allow all domains
app.use(express.json()); //json format konvertuj u js


// app.get('/uros', function(req,res){
//   const objekat = {
//     ime: 'uros'
//   }
//   res.send(objekat);
// })

app.use("/user", userRouter);
app.use("/post", postRouter);

const PORT = parseInt(process.env.PORT);
app.listen(PORT, function () {
  console.log(`Server started listening on port ${PORT}`);
});
