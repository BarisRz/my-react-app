function NavBar({ count, tailleListe, add, remove }) {
  return (
    <>
      {count > 0 ? <button onClick={remove}>Précédent</button> : <p></p>}
      {count < tailleListe - 1 ? (
        <button onClick={add}>Suivant</button>
      ) : (
        <p></p>
      )}
    </>
  );
}
export default NavBar;
