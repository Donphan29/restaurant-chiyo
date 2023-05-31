import clientPromise from "./mongodb";

export default async function getTableDhote() {
  try {
    const client = await clientPromise;
    const db = client.db("menus");

    const table_dhote = await db.collection("table_dhote").find({}).toArray();

    return { table_dhote };
  } catch (error) {
    return { error: "failed to fetch table dhote items" };
  }
}
