import Nav from "../styledComponents/Nav";

const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href={`/`}>Home</a>
        </li>
        <li>
          <a href={`/hooks/use-state`}>useState</a>
        </li>
        <li>
          <a href={`/hooks/use-input`}>useInput</a>
        </li>
        <li>
          <a href={`/hooks/use-tabs`}>useTabs</a>
        </li>
        <li>
          <a href={`/hooks/use-effect`}>useEffect</a>
        </li>
        <li>
          <a href={`/hooks/use-title`}>useTitle</a>
        </li>
        <li>
          <a href={`/hooks/use-click`}>useClick</a>
        </li>
        <li>
          <a href={`/hooks/use-confirm`}>useConfirm</a>
        </li>
        <li>
          <a href={`/hooks/use-prevent-leave`}>usePreventLeave</a>
        </li>
        <li>
          <a href={`/hooks/use-page-leave`}>usePageLeave</a>
        </li>
        <li>
          <a href={`/hooks/use-fadein`}>useFadein</a>
        </li>
        <li>
          <a href={`/hooks/use-network`}>useNetwork</a>
        </li>
        <li>
          <a href={`/hooks/use-scroll`}>useScroll</a>
        </li>
        <li>
          <a href={`/hooks/use-fullscreen`}>useFullscreen</a>
        </li>
        <li>
          <a href={`/hooks/use-axios`}>useAxios</a>
        </li>
        <li>
          <a href={`/use-zustand`}>useZustand</a>
        </li>
      </ul>
    </Nav>
  );
};

export default NavBar;
