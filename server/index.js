import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";

const app = express();

// app.use(express.json({limit: '300mb', extended: true}));
// app.use(express.urlencoded({ limit: "300mb", parameterLimit: 50000,extended: true }));
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));

app.use(cors());


// mongoose.connect('mongodb+srv://moosemuffin:immortal@yemmyharry.vgumn.mongodb.net/test',{ useUnifiedTopology: true, useNewUrlParser: true  })
// .then(console.log('connected to database'))
// .catch((err)=>{console.log(err)})

app.use("/posts", postRouter);

  mongoose.connect('mongodb://localhost/nepenthe', { useUnifiedTopology: true ,  useNewUrlParser: true})
.then(console.log('database connected'))
.catch(err => err)




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("listening at port " + PORT);
});
