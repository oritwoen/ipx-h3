import { createApp, eventHandler, toNodeListener } from "h3";
import { createIPX, createIPXMiddleware } from "ipx";
import { listen } from "listhen";

const app = createApp();
const ipx = createIPX({
  domains: ['example.com']
});

const middleware = createIPXMiddleware(ipx)

const handler = eventHandler(async (event) => {
  await middleware(event.node.req, event.node.res);
});

app.use("/", handler);

listen(toNodeListener(app));
