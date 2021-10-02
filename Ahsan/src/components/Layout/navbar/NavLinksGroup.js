import styled from "styled-components";
import NavLink from "./NavLink";
import { breakpoints as bp } from "../../../GlobalStyles";
import {
  faBox,
  faCalendarWeek,
  faClipboardList,
  faRedoAlt,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

const LinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 24px 0 14px 0;
  margin-right: 2px;
  overflow: hidden;
  overflow-y: auto;
  background-color: rgba(var(--color-secondary-rgb), 0.1);
  transition: flex-grow 0.3s cubic-bezier(0.4, 0, 1, 1);
  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  @media (max-width: ${bp.desktop}) {
    flex-grow: 1;
  }
`;

const DenseNavLinks = styled(NavLink)`
  && {
    box-shadow: none;
    min-height: 36px;
  }
`;

const links = [
  {
    to: "/workspace",
    icon: faBox,
    label: "Workspace",
  },
  {
    to: "/quiz",
    icon: faClipboardList,
    label: "Quiz",
  },
  {
    to: "/subs",
    icon: faRedoAlt,
    label: "Subscriptions",
  },
  {
    to: "/automation",
    icon: faCalendarWeek,
    label: "Automation",
  },
  {
    to: "/schedule",
    icon: faRobot,
    label: "Schedule",
  },
];

function NavLinksGroup(props) {
  return (
    <LinksGroup {...props}>
      {links.map((l) => (
        <DenseNavLinks
          compact={props.compact}
          key={l.to}
          to={l.to}
          iconClassName={l.icon}
          label={l.label}
        />
      ))}
    </LinksGroup>
  );
}

export default NavLinksGroup;
