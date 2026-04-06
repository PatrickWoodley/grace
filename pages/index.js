export default function Home() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Write the file your AI actually needs
      </h1>

      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Create a more honest version of yourself — for you and your AI.
      </p>

      <button style={{
        padding: "12px 24px",
        fontSize: "1rem",
        borderRadius: "8px",
        border: "none",
        background: "#000",
        color: "#fff",
        cursor: "pointer"
      }}>
        Create your SOUL.md
      </button>
    </div>
  );
}<div style={{
  padding: "80px 20px",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center"
}}>
  <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
    Why a SOUL.md file?
  </h2>

  <p style={{ color: "#666", marginBottom: "3rem" }}>
    Your AI is powerful — but it doesn’t know you.
  </p>

  <div style={{
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "1fr",
  }}>
    
    <div>
      <h3>Without it</h3>
      <p style={{ color: "#666" }}>
        Your AI guesses. You get generic advice, surface-level answers,
        and responses that miss what actually matters.
      </p>
    </div>

    <div>
      <h3>With it</h3>
      <p style={{ color: "#666" }}>
        A SOUL.md gives your AI real context — your values, patterns,
        and what you’re trying to become.
      </p>
    </div>

    <div>
      <h3>The result</h3>
      <p style={{ color: "#666" }}>
        More honest answers. Better guidance. An AI that actually feels
        like it understands you.
      </p>
    </div>

  </div>

  <p style={{ marginTop: "3rem", fontWeight: "bold" }}>
    This isn’t about better prompts. It’s about better context.
  </p>
</div>
