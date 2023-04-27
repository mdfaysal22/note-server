import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
    DataBase_Link: str(),
    PORT: port()
})