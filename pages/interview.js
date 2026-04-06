import { useState } from "react";

const questions = [
  "How would you describe yourself to someone new?",
  "What matters most to you right now?",
  "What kind of person are you trying to become?",
  "What do you say matters, but struggle to act on?",
  "Where in your life do you feel out of alignment?",
  "What have you been putting off that matters?",
  "What pattern do you keep repeating?",
  "When you feel overwhelmed, how do you usually respond?",
  "What do you tend to avoid confronting?",
  "What do you want most right now?",
  "What are you afraid people might see in you?",
  "What truth do you already know but haven’t acted on?",
  "How should your AI support you?",
  "When should your AI challenge you?",
  "What should your AI not let you hide behind?",
];

export default function Interview() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const currentQuestion = questions[step];
  const currentAnswer = answers[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);

  function updateAnswer(value) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
  }

  function goNext() {
    if (!currentAnswer.trim()) return;
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("grace_answers", JSON.stringify(answers));
      window.location.href = "/soul";
    }
  }

  function goBack() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        padding: "40px 20px",
        background: "#fff",
        color: "#111",
      }}
    >
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <p style={{ color: "#666", marginBottom: "12px" }}>
          Question {step + 1} of {questions.length}
        </p>

        <div
          style={{
            width: "100%",
            height: "8px",
            background: "#eee",
            borderRadius: "999px",
            overflow: "hidden",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#111",
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "2rem",
            lineHeight: 1.3,
            marginBottom: "16px",
          }}
        >
          {currentQuestion}
        </h1>

        <p style={{ color: "#666", marginBottom: "24px" }}>
          Answer honestly. You can refine it later.
        </p>

        <textarea
          value={currentAnswer}
          onChange={(e) => updateAnswer(e.target.value)}
          placeholder="Type your answer here..."
          rows={8}
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "1rem",
            lineHeight: 1.5,
            borderRadius: "12px",
            border: "1px solid #ddd",
            resize: "vertical",
            marginBottom: "24px",
            boxSizing: "border-box",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <button
            onClick={goBack}
            disabled={step === 0}
            style={{
              padding: "12px 20px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ddd",
              background: step === 0 ? "#f5f5f5" : "#fff",
              color: step === 0 ? "#999" : "#111",
              cursor: step === 0 ? "not-allowed" : "pointer",
            }}
          >
            Back
          </button>

          <button
            onClick={goNext}
            style={{
              padding: "12px 20px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "none",
              background: "#111",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {step === questions.length - 1 ? "Generate my SOUL.md" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
