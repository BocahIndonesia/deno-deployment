import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import todoRouter from './routes/todo.ts'

const app= new Application();
const port= 3030;

app.use(todoRouter.routes())
app.use(todoRouter.allowedMethods())

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol:string = secure ? "https://" : "http://";
  const url= `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`Listening on: ${url}`);
});
await app.listen({ port });