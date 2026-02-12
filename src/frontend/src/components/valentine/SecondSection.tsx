export default function SecondSection() {
  return (
    <section className="second-section">
      <div className="second-sparkles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="second-sparkle"
            style={{
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="second-content">
        <p className="second-message">
          Take care of yourself and always be happy 💜✨
        </p>
      </div>
    </section>
  );
}
