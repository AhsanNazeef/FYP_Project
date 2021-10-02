import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(Link)`
  font-size: var(--fsize-6);
  font-weight: 500;
  min-height: 60px;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  padding: 0 20px 1px 20px;

  border-bottom: rgba(255, 255, 255, 0.1) 1px solid;
  &:hover {
    text-decoration: none;
  }
  span {
    transition: overflow 0.3s cubic-bezier(0.4, 0, 1, 1);
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    padding-bottom: 1px;
    overflow: hidden;
  }
`;
export default function Logo(props) {
  return (
    <StyleLink {...props} to="/">
      P<span>rogramming</span>&nbsp;A
      <span>ssistant</span>
    </StyleLink>
  );
}
