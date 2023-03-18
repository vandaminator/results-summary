import styled from "styled-components";
import ScoreComponent from "./Score";

const TopContent = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 539px;
  height: 421px;

  /* background-color */
  background: linear-gradient(180deg, #7857ff 0%, #2e2be9 100%);
  border-radius: 0px 0px 50px 50px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const TopContentPerformance = styled.p`
  width: 86px;
  height: 42px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 130.52%;

  /* identical to box height, or 42px */
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const TopContentBrief = styled.p`
  width: 519px;
  height: 77px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 130.52%;

  /* or 23px */
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(255, 255, 255, 0.69);

  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;

function Top(props) {
  return (
    <TopContent>
      <ScoreComponent number={props.number} />
      <TopContentPerformance>{props.performance}</TopContentPerformance>
      <TopContentBrief>{props.brief}</TopContentBrief>
    </TopContent>
  );
}

export default Top;
