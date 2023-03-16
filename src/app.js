const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/init_models");
const userRoutes = require("./routes/users.routes");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/messages.routes");
const conversationRoutes = require("./routes/conversations.routes");
const ParticipantsRoutes = require("./routes/participants.routes")
const errorHandlerRoutes = require("./routes/errorHandler.routes");


initModels();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const PORT = 8005;

db.authenticate()
.then(()=>{
    console.log("Base de datos conectada");
})
.catch((error)=> console.log(error));


app.use(userRoutes);
app.use(authRoutes);
app.use(conversationRoutes); 
app.use(messageRoutes);
app.use(ParticipantsRoutes); 

app.get("/", (req, res)=>{
    res.send("welcome to y api")
})

errorHandlerRoutes(app);


db.sync({alter: true})
.then(()=> console.log("Base de datos sync"))
.catch((error)=> console.log(error))


app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
