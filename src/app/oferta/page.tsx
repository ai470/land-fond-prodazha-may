import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оферта — Портфель на фондовом рынке",
  description: "Оферта на заключение Договора оказания платных образовательных услуг по программе «Портфель на фондовом рынке».",
};

export default function OfertaPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f4f5f7",
      }}
    >
      <div
        style={{
          padding: "16px 24px",
          background: "#12141c",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <a
          href="/kurs/"
          style={{ color: "#fff", textDecoration: "none", fontSize: 14, opacity: 0.85 }}
        >
          ← Вернуться на страницу курса
        </a>
        <a
          href="/kurs/oferta.pdf"
          download
          style={{
            color: "#12141c",
            background: "#fff",
            textDecoration: "none",
            fontSize: 14,
            padding: "8px 16px",
            borderRadius: 6,
            fontWeight: 600,
          }}
        >
          Скачать PDF
        </a>
      </div>
      <iframe
        src="/kurs/oferta.pdf"
        title="Оферта"
        style={{ flex: 1, width: "100%", border: "none", minHeight: "85vh" }}
      />
    </div>
  );
}
