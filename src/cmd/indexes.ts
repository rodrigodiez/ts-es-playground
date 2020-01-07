import { Client } from "@elastic/elasticsearch";

const client = new Client({ node: process.env.ELASTICSEARCH_URL });

(async () => {
  try {
    const indices = await client.indices.stats();
    console.log(indices);
  } catch (e) {
    console.log(e);
  }
})();
