import { useEffect, useState } from "react";

export default function SoulPage() {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("grace_answers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ marginBottom: "16px" }}>Your SOUL.md</h1>
      <p style={{ color: "#666", marginBottom: "32px" }}>
        Temporary preview page. Next we’ll turn this into a real generated file.
      </p>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          background: "#f7f7f7",
          padding: "20px",
          borderRadius: "12px",
          lineHeight: 1.6,
          overflowX: "auto",
        }}
      >
{`# SOUL.md

## Raw Answers

${answers.map((answer, i) => `### Q${i + 1}\n${answer}`).join("\n\n")}
`}
      </pre>
    </div>
  );
}
