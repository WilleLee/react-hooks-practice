const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href={`hooks/use-state`}>useState</a>
        </li>
        <li>
          <a href={`hooks/use-input`}>useInput</a>
        </li>
        <li>
          <a href={`hooks/use-tabs`}>useTabs</a>
        </li>
        <li>
          <a href={`use-zustand`}>useZustand</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
