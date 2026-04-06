import { useEffect, useMemo, useState } from "react";

function buildSoulData(answers) {
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

  return {
    coreIdentity: {
      describe: q1,
      matters: q2,
      becoming: q3,
    },
    values: {
      struggle: q4,
      alignment: q5,
    },
    patterns: {
      puttingOff: q6,
      repeating: q7,
      overwhelmed: q8,
      avoiding: q9,
    },
    desires: {
      wantMost: q10,
    },
    fears: {
      afraidPeopleSee: q11,
    },
    truths: {
      truthNotActedOn: q12,
    },
    aiGuidance: {
      support: q13,
      challenge: q14,
      notHideBehind: q15,
    },
  };
}

function buildSoulMd(data) {
  return `# SOUL.md

## Core Identity
I would describe myself as: ${data.coreIdentity.describe}

What matters most to me right now: ${data.coreIdentity.matters}

The kind of person I am trying to become: ${data.coreIdentity.becoming}

## Values
What I say matters to me, but struggle to act on consistently: ${data.values.struggle}

Where I feel out of alignment in my life: ${data.values.alignment}

## Patterns
What I have been putting off that matters: ${data.patterns.puttingOff}

A pattern I keep repeating: ${data.patterns.repeating}

When I feel overwhelmed, I usually respond by: ${data.patterns.overwhelmed}

What I tend to avoid confronting: ${data.patterns.avoiding}

## Desires
What I want most right now: ${data.desires.wantMost}

## Fears & Defenses
What I am afraid people might see in me: ${data.fears.afraidPeopleSee}

## Truths I Resist
A truth I already know but have not acted on: ${data.truths.truthNotActedOn}

## AI Guidance
How my AI should support me: ${data.aiGuidance.support}

When my AI should challenge me: ${data.aiGuidance.challenge}

What my AI should not let me hide behind: ${data.aiGuidance.notHideBehind}
`;
}

function Field({ label, value, onChange, editing }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>{label}</p>
      {editing ? (
        <textarea
          value={value}
          onChange={onChange}
          rows={4}
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "1rem",
            lineHeight: 1.5,
            borderRadius: "10px",
            border: "1px solid #ddd",
            resize: "vertical",
            boxSizing: "border-box",
            fontFamily: "sans-serif",
          }}
        />
      ) : (
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>{value}</p>
      )}
    </div>
  );
}

export default function SoulPage() {
  const [soulData, setSoulData] = useState(null);
  const [draftData, setDraftData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("grace_answers");
    if (saved) {
      const parsedAnswers = JSON.parse(saved);
      const structured = buildSoulData(parsedAnswers);
      setSoulData(structured);
      setDraftData(structured);
    }
  }, []);

  const soulMd = useMemo(() => {
    if (!draftData) return "";
    return buildSoulMd(draftData);
  }, [draftData]);

  function updateField(section, field, value) {
    setDraftData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  }

  function startEditing() {
    setDraftData(soulData);
    setEditing(true);
  }

  function cancelEditing() {
    setDraftData(soulData);
    setEditing(false);
  }

  function saveChanges() {
    setSoulData(draftData);
    setEditing(false);
  }

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

  if (!draftData) {
    return (
      <div
        style={{
          fontFamily: "sans-serif",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 20px",
        }}
      >
        <h1>No SOUL.md data found</h1>
        <p style={{ color: "#666" }}>
          Complete the interview first, then come back here.
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
        maxWidth: "920px",
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}
    >
      <h1 style={{ marginBottom: "12px" }}>Your SOUL.md</h1>

      <p style={{ color: "#666", marginBottom: "24px", lineHeight: 1.6 }}>
        This is your generated file. You can refine the wording, keep the
        structure intact, and use it with ChatGPT, Claude, or your preferred AI.
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "24px",
        }}
      >
        {!editing ? (
          <>
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
              onClick={startEditing}
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
              Edit file
            </button>
          </>
        ) : (
          <>
            <button
              onClick={saveChanges}
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
              Save changes
            </button>

            <button
              onClick={cancelEditing}
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
              Cancel
            </button>
          </>
        )}
      </div>

      <div
        style={{
          background: "#f7f7f7",
          borderRadius: "14px",
          padding: "28px",
          marginBottom: "32px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>## Core Identity</h2>
        <Field
          label="I would describe myself as:"
          value={draftData.coreIdentity.describe}
          onChange={(e) =>
            updateField("coreIdentity", "describe", e.target.value)
          }
          editing={editing}
        />
        <Field
          label="What matters most to me right now:"
          value={draftData.coreIdentity.matters}
          onChange={(e) =>
            updateField("coreIdentity", "matters", e.target.value)
          }
          editing={editing}
        />
        <Field
          label="The kind of person I am trying to become:"
          value={draftData.coreIdentity.becoming}
          onChange={(e) =>
            updateField("coreIdentity", "becoming", e.target.value)
          }
          editing={editing}
        />

        <h2>## Values</h2>
        <Field
          label="What I say matters to me, but struggle to act on consistently:"
          value={draftData.values.struggle}
          onChange={(e) => updateField("values", "struggle", e.target.value)}
          editing={editing}
        />
        <Field
          label="Where I feel out of alignment in my life:"
          value={draftData.values.alignment}
          onChange={(e) => updateField("values", "alignment", e.target.value)}
          editing={editing}
        />

        <h2>## Patterns</h2>
        <Field
          label="What I have been putting off that matters:"
          value={draftData.patterns.puttingOff}
          onChange={(e) =>
            updateField("patterns", "puttingOff", e.target.value)
          }
          editing={editing}
        />
        <Field
          label="A pattern I keep repeating:"
          value={draftData.patterns.repeating}
          onChange={(e) =>
            updateField("patterns", "repeating", e.target.value)
          }
          editing={editing}
        />
        <Field
          label="When I feel overwhelmed, I usually respond by:"
          value={draftData.patterns.overwhelmed}
          onChange={(e) =>
            updateField("patterns", "overwhelmed", e.target.value)
          }
          editing={editing}
        />
        <Field
          label="What I tend to avoid confronting:"
          value={draftData.patterns.avoiding}
          onChange={(e) =>
            updateField("patterns", "avoiding", e.target.value)
          }
          editing={editing}
        />

        <h2>## Desires</h2>
        <Field
          label="What I want most right now:"
          value={draftData.desires.wantMost}
          onChange={(e) => updateField("desires", "wantMost", e.target.value)}
          editing={editing}
        />

        <h2>## Fears & Defenses</h2>
        <Field
          label="What I am afraid people might see in me:"
          value={draftData.fears.afraidPeopleSee}
          onChange={(e) =>
            updateField("fears", "afraidPeopleSee", e.target.value)
          }
          editing={editing}
        />

        <h2>## Truths I Resist</h2>
        <Field
          label="A truth I already know but have not acted on:"
          value={draftData.truths.truthNotActedOn}
          onChange={(e) =>
            updateField("truths", "truthNotActedOn", e.target.value)
          }
          editing={editing}
        />

        <h2>## AI Guidance</h2>
        <Field
          label="How my AI should support me:"
          value={draftData.aiGuidance.support}
          onChange={(e) =>
            updateField("aiGuidance", "support", e.target.value)
          }
          editing={editing}
        />
        <Field
          label="When my AI should challenge me:"
          value={draftData.aiGuidance.challenge}
          onChange={(e) =>
            updateField("aiGuidance", "challenge", e.target.value)
          }
          editing={editing}
        />
        <Field
          label="What my AI should not let me hide behind:"
          value={draftData.aiGuidance.notHideBehind}
          onChange={(e) =>
            updateField("aiGuidance", "notHideBehind", e.target.value)
          }
          editing={editing}
        />
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: "14px",
          padding: "24px",
          marginBottom: "32px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Markdown preview</h2>
        <p style={{ color: "#666", marginBottom: "16px" }}>
          This is the file that gets copied and downloaded.
        </p>

        <div
          style={{
            background: "#f7f7f7",
            borderRadius: "10px",
            padding: "20px",
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
      </div>

      <div
        style={{
          background: "#fff",
          border: "1px solid #eee",
          borderRadius: "14px",
          padding: "24px",
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
          <p style={{ marginTop: 0, fontWeight: "bold" }}>Starter prompt</p>
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
