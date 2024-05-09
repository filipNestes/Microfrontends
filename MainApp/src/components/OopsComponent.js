import React from "react";

const OopsPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Oops!</h1>
      <p style={styles.text}>Something went wrong.</p>
      <p style={styles.text}>
        Please try refreshing the page, or contact support if the problem
        persists.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    color: "#333",
  },
  header: {
    fontSize: "48px",
    color: "#FF6347",
  },
  text: {
    fontSize: "24px",
  },
};

export default OopsPage;
