import React from "react";

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Selamat datang di SIM Desa 🏡</h1>
      <p style={styles.paragraph}>
        Ini adalah halaman utama dari sistem informasi desa berbasis React.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    color: "#2c3e50",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#555",
    marginTop: "1rem",
  },
};

export default Home;
