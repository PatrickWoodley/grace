export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, soulMd, soulData, createdAt } = req.body || {};

    if (!email || !soulMd) {
      return res.status(400).json({ error: "Email and soulMd are required." });
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) {
      return res.status(400).json({ error: "Please enter a valid email." });
    }

    console.log("Saved SOUL.md submission:", {
      email,
      createdAt,
      soulMd,
      soulData,
    });

    return res.status(200).json({
      success: true,
      message: "Saved successfully.",
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error." });
  }
}
