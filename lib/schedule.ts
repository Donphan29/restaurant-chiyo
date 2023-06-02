import clientPromise from "./mongodb";

export default async function getSchedule() {
  try {
    const client = await clientPromise;
    const db = client.db("information");

    const schedule = await db.collection("schedule").find({}).toArray();

    return { schedule };
  } catch (error) {
    return { error: "failed to fetch table dhote items" };
  }
}
