import * as Koa from "koa";
import * as Router from "koa-router";

const app: Koa = new Koa();
const router: Router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Listening for requests...");
});
