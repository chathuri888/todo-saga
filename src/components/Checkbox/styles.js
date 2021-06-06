import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const Icon = styled.svg`
  fill: none;
  stroke: #00bf9c;
  stroke-width: 2px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  color: #ffffff;
  background-color: ${(props) => (props.checked ? '#00bf9c6b' : '#bfbdbd24')};
  margin: 1em;
  border-radius: 18px;
  border: -26px solid;
  box-shadow: 0 0 0 1px #bfbdbd;
  width: 20px;
  height: 20px;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px #00bf9c;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
