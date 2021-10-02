import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import GlobalStyle from "../../GlobalStyles";
import TopNav from "./topbar/TopNav";
import Backdrop from "../ui/core/Backdrop";

const Grid = styled.div`
  display: grid;
  grid: "nav header" min-content "nav main" 1fr / min-content 1fr;
  min-height: 100vh;
`;

const GridNav = styled.div`
  grid-area: nav;
  z-index: 2000;
`;

const GridHeader = styled.header`
  grid-area: header;
`;

const GridMain = styled.main`
  display: grid;
  grid-area: main;
`;

function Layout({ children, ...rest }) {
  const [showNav, setShowNav] = useState(0);
  const toggle = () => setShowNav(Number(!showNav));

  return (
    <Grid {...rest}>
      <GlobalStyle />
      <Backdrop visible={showNav} onClick={toggle} />
      <GridNav>
        <Navbar visible={showNav} />
      </GridNav>
      <GridHeader>
        <TopNav toggle={toggle} />
      </GridHeader>

      <GridMain>{children}</GridMain>
    </Grid>
  );
}

export default Layout;
