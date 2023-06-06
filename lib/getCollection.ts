import clientPromise from "./mongodb";

export default async function getCollection(database: string, collection: string) {
  try {
    const client = await clientPromise;
    const db = client.db(database);

    const data = await db.collection(collection).find({}).toArray();

    return { data };
  } catch (error) {
    return { error: "failed to fetch " + { collection } + " items" };
  }
}
