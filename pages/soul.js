import { useEffect, useMemo, useState } from "react";

function buildSoulMd(answers) {
  const [
    q1 = "",
    q2 = "",
    q3 = "",
    q4 = "",
    q5 = "",
    q6 = "",
    q7 = "",
    q8 = "",
    q9 = "",
    q10 = "",
    q11 = "",
    q12 = "",
    q13 = "",
    q14 = "",
    q15 = "",
  ] = answers;

  return `# SOUL.md

## Core Identity
I would describe myself as: ${q1}

What matters most to me right now: ${q2}

The kind of person I am trying to become: ${q3}

## Values
What I say matters to me, but struggle to act on consistently: ${q4}

Where I feel out of alignment in my life: ${q5}

## Patterns
What I have been putting off that matters: ${q6}

A pattern I keep repeating: ${q7}

When I feel overwhelmed, I usually respond by: ${q8}

What I tend to avoid confronting: ${q9}

## Desires
What I want most right now: ${q10}

## Fears & Defenses
What I am afraid people might see in me: ${q11}

## Truths I Resist
A truth I already know but have not acted on: ${q12}

## AI Guidance
How my AI should support me: ${q13}

When my AI should challenge me: ${q14}

What my AI should not let me hide behind: ${q15}
`;
}

export default function SoulPage() {
  const [answers, setAnswers] = useState([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("grace_answers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  const soulMd = useMemo(() => buildSoulMd(answers), [answers]);

  function copyToClipboard() {
    navigator.clipboard.writeText(soulMd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function downloadFile() {
    const blob = new Blob([soulMd], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "SOUL.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  if (!answers.length) {
    return (
      <div
        style={{
          fontFamily: "sans-serif",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <h1>No answers found</h1>
        <p style={{ color: "#666" }}>
          Go back and complete the interview first.
        </p>
        <button
          onClick={() => (window.location.href = "/interview")}
          style={{
            padding: "12px 20px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
            marginTop: "16px",
          }}
        >
          Go to interview
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}
    >
      <h1 style={{ marginBottom: "12px" }}>Your SOUL.md</h1>

      <p style={{ color: "#666", marginBottom: "24px" }}>
        This is your first generated file. You can copy it, download it, and
        use it with ChatGPT, Claude, or your preferred AI.
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        <button
          onClick={copyToClipboard}
          style={{
            padding: "12px 18px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {copied ? "Copied" : "Copy SOUL.md"}
        </button>

        <button
          onClick={downloadFile}
          style={{
            padding: "12px 18px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
            color: "#111",
            cursor: "pointer",
          }}
        >
          Download .md
        </button>

        <button
          onClick={() => (window.location.href = "/interview")}
          style={{
            padding: "12px 18px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ddd",
            background: "#fff",
            color: "#111",
            cursor: "pointer",
          }}
        >
          Edit answers
        </button>
      </div>

      <div
        style={{
          background: "#f7f7f7",
          borderRadius: "12px",
          padding: "24px",
          overflowX: "auto",
        }}
      >
        <pre
          style={{
            whiteSpace: "pre-wrap",
            margin: 0,
            lineHeight: 1.7,
            fontSize: "0.98rem",
          }}
        >
          {soulMd}
        </pre>
      </div>

      <div
        style={{
          marginTop: "32px",
          padding: "20px",
          border: "1px solid #eee",
          borderRadius: "12px",
          background: "#fff",
        }}
      >
        <h2 style={{ marginTop: 0 }}>How to use this</h2>
        <ol style={{ color: "#666", lineHeight: 1.7, paddingLeft: "20px" }}>
          <li>Copy or download your SOUL.md file</li>
          <li>Paste it into ChatGPT, Claude, or your preferred AI tool</li>
          <li>Ask your AI to use it as context when responding to you</li>
        </ol>

        <div
          style={{
            background: "#f7f7f7",
            borderRadius: "10px",
            padding: "16px",
            marginTop: "16px",
          }}
        >
          <p style={{ marginTop: 0, fontWeight: "bold" }}>
            Starter prompt
          </p>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              margin: 0,
              lineHeight: 1.6,
              fontSize: "0.95rem",
            }}
          >
{`Use this SOUL.md as context for how to respond to me.

Respond in a way that is aligned with my values, aware of my patterns, and honest when I am avoiding something important.`}
          </pre>
        </div>
      </div>
    </div>
  );
}
