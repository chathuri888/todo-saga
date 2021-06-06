import React, { useState } from 'react'
import { Container, UserName, Task, InputContainer } from './styles'
import Checkbox from '../Checkbox'
import { setPriorityColor, toUpperFristLetter } from '../../library/normalizing'

const App = (props) => {
  const { className, userName, priority } = props
  const [checked, setChecked] = useState(false)

  const priorityColor = setPriorityColor(priority)

  return (
    <Container className={className}>
      <label>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      </label>
      <InputContainer>
        <UserName>{userName}</UserName>
        <Task priority={priorityColor}>{toUpperFristLetter(priority)}</Task>
      </InputContainer>
    </Container>
  )
}

export default App
