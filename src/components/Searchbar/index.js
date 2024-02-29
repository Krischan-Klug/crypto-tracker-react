function Searchbar() {
  return (
    <>
      <form
        style={{
          margin: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input type="text" placeholder="Search" />
      </form>
    </>
  );
}

export default Searchbar;
