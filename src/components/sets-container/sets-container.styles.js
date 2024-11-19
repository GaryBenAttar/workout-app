import styled from "styled-components";

export const SetsRepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SetsRepsHeadings = styled.div`
  display: flex;
  justify-content: space-between;

  padding-left: 10px;
`;

export const SetCount = styled.div`
  width: 30px;
  text-align: center;
`;

export const SetCountSpan = styled.span``;

export const RepsCount = styled.div`
  width: 100px;

  text-align: center;
`;

export const RepsCountSpan = styled.span``;

export const WeightLifted = styled.div`
  width: 100px;

  text-align: center;
`;

export const WeightLiftedSpan = styled.span``;

export const DoneSpan = styled.span``;

export const SetHeadings = styled.div`
  width: 50px;
`;

export const AddSetButton = styled.button`
  height: 30px;
  border: ${(props) => props.theme.borders};

  background-color: ${(props) => props.theme.color.sectionBackground};

  &:hover {
    background-color: ${(props) => props.theme.color.hover};
  }
`;
