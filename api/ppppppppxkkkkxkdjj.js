export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nomor } = req.body;
  if (!nomor) {
    return res.status(400).json({ error: "Nomor tidak ada" });
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;8352624261:AAHGIulHLLDzb6RDipiRD7F7X7dAi5QBTlU   // isi di environment variable
  const CHAT_ID = process.env.CHAT_ID;7572969716       // isi di environment variable

  const pesan = `📲 Nomor target: ${nomor}`;

  try {
    const telegram = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: pesan
      })
    });

    const result = await telegram.json();
    return res.status(200).json({ ok: true, result });
  } catch (err) {
    return res.status(500).json({ error: "Gagal kirim" });
  }
      }
