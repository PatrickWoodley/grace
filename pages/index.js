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
}
