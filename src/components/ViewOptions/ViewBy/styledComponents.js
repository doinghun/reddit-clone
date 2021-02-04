import styled from 'styled-components/macro';

export const SelectWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 120px;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-150%, calc(-50% - 2px)) rotate(45deg);
    border-bottom: 2px solid #000000;
    border-right: 2px solid #000000;
    width: 8px;
    height: 8px;
    pointer-events: none;
  }
`;

export const Dropdown = styled.select`
  // border: none;
  border-radius: 5px;
  width: 100%;
  padding: 8px 16px;
  font-size: 15px;
  appearance: none;
`;

export const Wrapper = styled.div`
  margin-left: auto;
`;
