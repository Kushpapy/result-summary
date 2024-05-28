import styled from "styled-components";

const StyledApp = styled.div`
  width: 50rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 11px;
  overflow: hidden;
  font-size: 1.4rem;
  min-height: 35rem;
  column-gap: 1.2rem;
  box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.05);
`;

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "/icon-reaction.svg",
    color: "hsl(0, 100%, 67%)",
    backgroundColor: "#ffe4e6",
  },
  {
    category: "Memory",
    score: 92,
    icon: "/icon-memory.svg",
    color: "hsl(39, 100%, 56%)",
    backgroundColor: "#fef9c3",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "/icon-verbal.svg",
    color: "hsl(166, 100%, 37%)",
    backgroundColor: "#ccfbf1",
  },
  {
    category: "Visual",
    score: 72,
    icon: "/icon-visual.svg",
    color: "hsl(234, 85%, 45%)",
    backgroundColor: "#dbeafe",
  },
];

const ScoreBox = styled.div`
  background-image: linear-gradient(
    to bottom,
    var(--Light-slate-blue-background),
    var(--Light-royal-blue-background)
  );
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2.4rem;
  text-align: center;
  color: var(--Light-lavender);

  & #text {
    font-size: 1.3rem;
  }
`;

const SummaryBox = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const AverageCircle = styled.div`
  width: 12rem;
  height: 12rem;
  background-image: linear-gradient(
    to bottom,
    var(--Light-royal-blue-background),
    var(--Light-slate-blue-background)
  );
  display: grid;
  place-items: center;
  border-radius: 50%;

  & p {
    font-size: 1rem;
  }

  & p span {
    font-size: 3.6rem;
    color: var(--White);
  }
`;

const H2 = styled.h2`
  color: var(--Pale-blue);
`;

const ResultBox = styled.div``;

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  & li {
    display: flex;
    padding: 0.8rem 1rem;
    align-items: center;
    justify-content: space-between;
    border-radius: 7px;
  }
`;

const IconBox = styled.div`
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  background: url(${({ $background }) => $background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const NumberBox = styled.div`
  & p {
    color: var(--Light-lavender);
  }
  & p span {
    color: var(--Dark-gray-blue);
  }
`;

const LI = styled.li`
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 1.2rem 2.4rem;
  color: var(--White);
  border: none;
  background-color: var(--Dark-gray-blue);
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-image: linear-gradient(
      to bottom,
      var(--Light-slate-blue-background),
      var(--Light-royal-blue-background)
    );
  }
`;

function App() {
  const average = data.reduce((acc, cur) => acc + cur.score, 0) / data.length;
  console.log(data.color);

  return (
    <StyledApp>
      <ScoreBox>
        <h3> Your Result</h3>
        <AverageCircle>
          <p>
            <span>{Math.floor(average)}</span> <br /> of 100
          </p>
        </AverageCircle>
        <H2>Great</H2>

        <p id="text">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </ScoreBox>
      <SummaryBox>
        <h2>Summary</h2>
        <ResultBox>
          <UL>
            {data.map((score, i) => (
              <LI
                key={i}
                $color={score.color}
                $backgroundColor={score.backgroundColor}
              >
                <TextBox>
                  <IconBox $background={score.icon}></IconBox>
                  <p>{score.category}</p>
                </TextBox>
                <NumberBox>
                  <p>
                    <span>{score.score}</span> / 100
                  </p>
                </NumberBox>
              </LI>
            ))}
          </UL>
        </ResultBox>
        <Button>Continue</Button>
      </SummaryBox>
    </StyledApp>
  );
}

export default App;
