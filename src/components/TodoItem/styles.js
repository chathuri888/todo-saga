import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
  border-bottom: 1px solid #eff2f3;
  margin: 0 2rem 0 2rem;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
export const UserName = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #abadb1;
`

export const Task = styled.div`
  color: #ffffff;
  background-color: ${(props) => props.priority};
  font-size: 10px;
  margin: 1em;
  padding: 0.4em 3em;
  border-radius: 18px;
  border: 2px solid;
`
