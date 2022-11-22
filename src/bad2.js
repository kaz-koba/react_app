export async function getT(req, res) {
  const slug = req.params.slug;
  try {
    const response = await fetch(`https://localhost:9000${slug}`);
    const { aaa } = await response.json();
    const { body_html, title } = aaa;
    res.json({ bodyHtml: body_html, title });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "エラー" });
  }
}
