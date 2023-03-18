import styled from "styled-components";

const StyledSkill = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 21px 0px 10px;
  gap: 19px;
  isolation: isolate;

  width: 489px;
  height: 59px;

  background: ${({ color }) => `#${color}1e`};

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const StyledLogo = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 150px;
  height: 57px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 1;
`;
