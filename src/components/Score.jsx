import styled from "styled-components";

const StyledScoreText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 67px;
  line-height: 81px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
  margin: 0px;
`;

const StyledResultText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;

  color: rgba(255, 255, 255, 0.52);

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const StyledScore = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 39px 58px;

  width: 178px;
  height: 186px;

  /* tottal-score-color */
  background: linear-gradient(180deg, #4e21ca 0%, rgba(36, 33, 202, 0) 100%);
  border-radius: 140px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

function ScoreComponent(props) {
  return (
    <StyledScore>
      <StyledScoreText>{props.number}</StyledScoreText>
      <StyledResultText>
        {props.outOf ? props.outOf : "of 100"}
      </StyledResultText>
    </StyledScore>
  );
}

export default ScoreComponent;
