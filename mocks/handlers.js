import { rest } from "msw";
import data from "json/shoes";

export const handlers = [
  rest.get("/shoes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(data));
  }),

  rest.get("https://api.backend.dev/shoes", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(800), ctx.json(data));
  }),

  rest.get("https://api.backend.dev/shoes/:id", (req, res, ctx) => {
    const shoeId = req.params.id;
    let shoe = {};
    data.map((e) => {
      if (e.id == shoeId) {
        shoe = e;
      }
    });

    if (typeof shoeId === "undefined") {
      return res(ctx.status(404));
    }
    return res(ctx.status(200), ctx.delay(800), ctx.json(shoe));
  }),
];
