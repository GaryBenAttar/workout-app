import styled from "styled-components";

export const RoutineOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: 10px;

  position: relative;
  top: -20px;

  padding: 10px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;

  background-color: ${(props) => props.theme.color.sectionBackground};

  span:hover {
    cursor: pointer;
  }
`;

export const RoutineCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: 50px;
  border: ${(props) => props.theme.borders};
  border-radius: 8px;
  padding: 10px 20px;

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
    cursor: pointer;
  }

  span {
    font-size: large;
  }
`;
