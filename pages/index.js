import { useState, useEffect } from "react";

function Home() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Remove margens padrão do body
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.body.style.backgroundColor = "#0f0f0f";
    return () => {
      document.body.style = {};
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0f0f0f",
        color: "#f2f2f2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "20px",
          fontWeight: "400",
          marginBottom: "20px",
          marginTop: "0",
        }}
      >
        Oi, meu amor!
      </h1>

      {!showMessage ? (
        <button
          onClick={() => setShowMessage(true)}
          style={{
            padding: "8px 20px",
            borderRadius: "8px",
            backgroundColor: "#ff7eb9",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "14px",
            transition: "background 0.3s ease",
          }}
        >
          Presente Surpresa 🎁
        </button>
      ) : (
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            maxWidth: "320px",
            color: "#d8d8d8",
            margin: "0 20px",
          }}
        >
          Eu te amo mais do que palavras conseguem explicar. Você é a razão de
          cada sorriso ❤️
        </p>
      )}
    </div>
  );
}

export default Home;
