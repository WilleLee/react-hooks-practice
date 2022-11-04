import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  color: orange;
  font-weight: bold;
  ul {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
  a:hover {
    color: orangered;
  }
`;

export default Nav;
