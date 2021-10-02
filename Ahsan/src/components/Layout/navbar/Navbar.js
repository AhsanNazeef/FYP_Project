import styled from "styled-components";
import Logo from "./Logo";
import { breakpoints as bp } from "../../../GlobalStyles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavLink from "./NavLink";
import NavLinksGroup from "./NavLinksGroup";

import { useState } from "react";
import NavToggle from "./NavToggle";

const StyledNav = styled.nav`
  background-color: black;
  width: ${(p) => (p.compact ? "70px" : "var(--navbar-width)")};
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  transition: width 0.3s cubic-bezier(0.4, 0, 1, 1) !important;

  &::before {
    content: "";
    background-color: rgba(var(--color-secondary-rgb), 0.2);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  @media (max-width: ${bp.desktop}) {
    position: fixed;
    width: var(--navbar-width);
    transform: translate3d(
      ${(p) =>
        p.visible ? 0 : "calc(var(--navbar-width) - var(--navbar-width)*2)"},
      0,
      0
    );

    transition: transform 0.3s
      ${(p) =>
        p.visible
          ? "cubic-bezier(0.4, 0, 1, 1)"
          : "cubic-bezier(0, 0, 0.2, 1)"} !important;
  }
`;

function Navbar(props) {
  const [compact, setCompact] = useState(0);
  return (
    <>
      <StyledNav compact={compact} {...props}>
        <Logo compact={compact} />
        <NavLinksGroup compact={compact} />

        <NavLink
          compact={compact}
          to="/87654"
          iconClassName={faBars}
          label="232"
        />
        <NavLink
          compact={compact}
          to="/23"
          iconClassName={faBars}
          label="Bars"
        />
        <NavToggle compact={compact} setCompact={setCompact} />
      </StyledNav>
    </>
  );
}

export default Navbar;
