import type { CSSProperties } from "react"; // changed: replaces the unused Image import

export default function Hero() {
  return (
    <section style={styles.wrapper}>
      <h1 style={styles.heading}>Behold, the Home of the Legend</h1>

      <p style={styles.description}>
        Verily, thou hast wandered far, and fortune hath guided thee hither.
        Rest thy weary bones, forsooth, and tarry a while — for herein dost
        dwell tales of valour, honour, and deeds most wondrous. Whosoever
        entereth these walls with an open heart shall find wisdom, and
        perchance a measure of glory besides.
      </p>
    </section>
  );
}

// changed: the type annotation after the colon tells TypeScript these are style objects
const styles: Record<string, CSSProperties> = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
    backgroundColor: "#0f0f0f",
    color: "#f5f0e1",
    fontFamily: "Georgia, 'Times New Roman', serif",
  },
  heading: {
    fontSize: "clamp(2rem, 6vw, 4rem)",
    fontWeight: 700,
    letterSpacing: "0.05em",
    margin: "0 0 1.5rem",
    textShadow: "0 2px 12px rgba(0, 0, 0, 0.6)",
  },
  description: {
    maxWidth: "48rem",
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    lineHeight: 1.7,
    color: "#c9c0a8",
    fontStyle: "italic",
    margin: 0,
  },
};
