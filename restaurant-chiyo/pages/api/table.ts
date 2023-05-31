import getTableDhote from "@lib/table";
import { WithId, Document } from "mongodb";

export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { table_dhote?: WithId<Document>[] | undefined; error?: unknown; }): any; new(): any; }; }; }) {
    if (req.method === "GET") {
        try {
            const { table_dhote, error } = await getTableDhote();
            if (error) throw new Error(error);

            return res.status(200).json({ table_dhote });
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    }
};
