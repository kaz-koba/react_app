import Express from "express";

type ArticleResponse = { aaa: { title: string; body_html: string } };

export async function getT(req: Express.Request, res: Express.Response) {
  const slug = req.params.slug;
  try {
    const response = await fetch(`https://localhost:9000${slug}`);
    const { aaa }: ArticleResponse = await response.json();
    const { body_html, title } = aaa;
    res.json({ bodyHtml: body_html, title });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "エラー" });
  }
}
