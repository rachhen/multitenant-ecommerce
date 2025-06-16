import configPromise from "@payload-config";
import { getPayload } from "payload";

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const results = await payload.find({
    collection: "users",
  });

  return Response.json(results);
};
