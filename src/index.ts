import app from './app';
import env from './utilities/validateENV';
import mongoose from 'mongoose';
const port = env.PORT;
mongoose.connect(env.DataBase_Link)
    .then(() => {
        console.log("connected Database");
        app.listen(port, () => {
            console.log(`Server is running ${port}`)
        })
    })
    .catch(console.error);

