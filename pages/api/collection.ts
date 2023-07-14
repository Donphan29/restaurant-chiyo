import getCollection from "@lib/collection";
import { WithId, Document } from "mongodb";

export default async function handler(req: { method: string; query: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { data?: WithId<Document>[] | undefined; error?: unknown; }): any; new(): any; }; }; }) {
    if (req.method === "GET") {
        try {
            const { data, error } = await getCollection(req.query.db, req.query.collection);
            if (error) throw new Error(error);

            return res.status(200).json({ data });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
};