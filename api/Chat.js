import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const userMessage = req.body.message;

  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

  try {
    const geminiPayload = {
      contents: [{ parts: [{ text: userMessage }] }],
    };

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiPayload),
    });

    const result = await response.json();

    let botReply = "🤖 Gemini returned no text.";
    if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
      botReply = result.candidates[0].content.parts[0].text;
    } else if (result?.promptFeedback?.blockReason) {
      botReply = `⚠️ Blocked by Gemini (reason: ${result.promptFeedback.blockReason})`;
    }

    res.status(200).json({ reply: botReply });
  } catch (err) {
    res.status(500).json({ reply: "❌ Gemini API call failed." });
  }
}
