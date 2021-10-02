import styled from "styled-components";
import { breakpoints as bp } from "../../../GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  background-color: transparent;
  border: none;
  min-height: 42px;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 24px;
  box-shadow: 0 -1px 0 0 rgba(255 255 255 / 10%);
  text-align: center;
  i {
    transition: transform 0.2s linear;
    transform: rotate(${(p) => (p.compact ? "180deg" : "0deg")});
  }
  @media (max-width: ${bp.desktop}) {
    display: none;
  }
`;

function NavToggle(props) {
  return (
    <Button
      {...props}
      className="nav-toggle"
      onClick={() => props.setCompact(Number(!props.compact))}
    >
      <i>
        {""}
        <FontAwesomeIcon
          icon={props.compact ? faChevronRight : faChevronLeft}
        />
      </i>
    </Button>
  );
}

export default NavToggle;
