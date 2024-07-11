export default function Home() {
  return (
    <div
      id="home-root"
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("/img/s-sellowiana-trovo.jpg")',
        backgroundSize: "cover",
        filter: "brightness(0.5)",
      }}
    >
      <p
        style={{
          color: "#b2a94a",
          fontWeight: "900",
          fontSize: "2rem",
          filter: "brightness(1.5)",
        }}
      >
        WEBFLORA IS UNDER CONSTRUCTION...
      </p>
    </div>
  );
}
