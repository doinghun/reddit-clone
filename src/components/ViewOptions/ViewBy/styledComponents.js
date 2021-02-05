import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin-left: auto;
`;

export const SelectWrapper = styled.div`
  position: relative;
  flex: 1;
  text-align-last: right;

  ::after {
    position: absolute;
    content: '';
    top: 40%;
    left: 5;
    right: 0;
    width: 0;
    height: 0;
    pointer-events: none;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #000000;
  }
`;

export const Dropdown = styled.select`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 8px 16px;
  font-size: 15px;
  appearance: none;
  outline: none;
  font-size: 13px;
  font-weight: 700;
  background: white;

  :hover,
  :active {
    background: #f6f7f8;
  }
`;
