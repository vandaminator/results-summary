import styled from "styled-components";
import ScoreComponent from "./components/Score";
import Top from "./components/Top";

const StyledApp = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;

  position: relative;
  width: 539px;
  height: 852px;

  background: #ffffff;
`;

function App() {
  return (
    <StyledApp>
      <Top number={76} performance={"Great"} brief={"yes yes vry good"} />
    </StyledApp>
  );
}

export default App;
