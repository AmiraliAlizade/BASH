function Error({ children }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <h1>{children}</h1>
    </div>
  );
}

export default Error;
