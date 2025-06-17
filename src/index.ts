import { app } from "./api/server";

const port = process.env.PORT

app.listen(port, () => console.log(`app rodando em localhost:${port}`))