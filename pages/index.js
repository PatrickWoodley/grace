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
<div style={{
  padding: "80px 20px",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center"
}}>
  <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
    How it works
  </h2>

  <p style={{ color: "#666", marginBottom: "3rem" }}>
    Create a SOUL.md file in a few minutes, then use it with your AI.
  </p>

  <div style={{
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "1fr",
    textAlign: "left"
  }}>
    <div>
      <h3>1. Answer a few questions</h3>
      <p style={{ color: "#666" }}>
        Grace guides you through a short reflection process to understand
        your values, patterns, goals, and the kind of guidance you want.
      </p>
    </div>

    <div>
      <h3>2. Generate your SOUL.md</h3>
      <p style={{ color: "#666" }}>
        Your answers are turned into a structured file your AI can actually
        use — written in a way that feels personal, clear, and useful.
      </p>
    </div>

    <div>
      <h3>3. Use it with your AI</h3>
      <p style={{ color: "#666" }}>
        Copy and paste your SOUL.md into ChatGPT, Claude, or your preferred
        LLM to get more aligned, honest, and grounded responses.
      </p>
    </div>
  </div>

  <p style={{ marginTop: "3rem", fontWeight: "bold" }}>
    No accounts. No complicated setup. Just better context for your AI.
  </p>
</div>
<div style={{
  padding: "80px 20px",
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center"
}}>
  <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
    What goes inside a SOUL.md?
  </h2>

  <p style={{ color: "#666", marginBottom: "3rem" }}>
    It’s not just information — it’s a structured reflection of who you are.
  </p>

  <div style={{
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "1fr",
    textAlign: "left"
  }}>
    <div>
      <h3>Core Identity</h3>
      <p style={{ color: "#666" }}>
        Who you are and who you're becoming — not just labels,
        but how you actually see yourself.
      </p>
    </div>

    <div>
      <h3>Values</h3>
      <p style={{ color: "#666" }}>
        What matters most to you, including the gap between what you say
        matters and how you actually live.
      </p>
    </div>

    <div>
      <h3>Patterns</h3>
      <p style={{ color: "#666" }}>
        Your recurring behaviors — how you respond under pressure,
        what you avoid, and the loops you repeat.
      </p>
    </div>

    <div>
      <h3>Truths you resist</h3>
      <p style={{ color: "#666" }}>
        The things you already know but haven’t acted on —
        the uncomfortable clarity most advice ignores.
      </p>
    </div>

    <div>
      <h3>AI Guidance</h3>
      <p style={{ color: "#666" }}>
        How your AI should support you — when to challenge you,
        push you, or call you out.
      </p>
    </div>
  </div>

  <p style={{ marginTop: "3rem", fontWeight: "bold" }}>
    This gives your AI something it normally never has: a real model of you.
  </p>
</div>
<div style={{
  padding: "100px 20px",
  textAlign: "center"
}}>
  <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
    Create your SOUL.md
  </h2>

  <p style={{ color: "#666", marginBottom: "2rem" }}>
    It takes a few minutes — and changes how your AI understands you.
  </p>

  <button
    onClick={() => window.location.href = "/interview"}
    style={{
      padding: "14px 28px",
      fontSize: "1rem",
      borderRadius: "8px",
      border: "none",
      background: "#000",
      color: "#fff",
      cursor: "pointer"
    }}
  >
    Create your SOUL.md
  </button>
</div>
