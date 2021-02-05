import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 52px;
  justify-content: flex-start;
  margin-bottom: 16px;
  padding: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: white;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;
