import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const results = await payload.find({
    collection: "categories",
  });

  return (
    <div>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
