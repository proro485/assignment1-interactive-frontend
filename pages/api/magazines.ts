import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "papaparse";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const MAGAZINES_DATA_URL =
      "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv";

    try {
      const response = await fetch(MAGAZINES_DATA_URL);
      let data = await response.text();
      data = data.replace(/^\uFEFF/, "");

      const parsedData = parse(data, {
        header: true,
      }).data.slice(0, -1);

      res.json({ data: parsedData });
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
};

export default handler;
