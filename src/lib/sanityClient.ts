import { createClient } from "next-sanity";

import {
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn,
} from "../../sanity/env";

export const client = createClient({
  apiVersion: "v2023-07-12",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
});

// await client.fetch('*[_type == "product"]')
// .then(data => {
//   // Process the data as needed
// })
// .catch(error => {
//   // Handle any errors
// });
