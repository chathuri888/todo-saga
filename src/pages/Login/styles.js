import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 3.2rem 0;
`

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  max-width: 600px;
  min-width: 310px;
`

export const Title = styled.h1`
  color: #33c4ff;
  margin-bottom: 3.2rem;
  text-align: center;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

export const Button = styled.button`
  padding: 1.6rem 2.4rem;
  background: #13a9f4;
  transition: background 0.2s ease-in-out;
  outline: none;
  border: none;
  border-radius: 5px;
  margin: 0.8rem 0 3.2rem 0;
  width: 10rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  &:disabled {
    opacity: 0.4;
  }
  &:hover,
  &:active {
    background: 33c4ff;
  }
`
