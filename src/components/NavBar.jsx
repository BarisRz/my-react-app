function NavBar({ add, remove }) {
  return (
    <>
      <button onClick={remove}>Précédent</button>
      <button onClick={add}>Suivant</button>
    </>
  );
}
export default NavBar;
