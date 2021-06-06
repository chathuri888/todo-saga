import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestAddTodoList } from "../../store/ducks/todo";
import {
  Container,
  InputContainer,
  Input,
  TodoListContainer,
  TodoContainer,
  Title,
  EmptyListMessage,
  AddButton,
  TaskItem,
  DropDownLi,
  DropDownList,
  DropDownSubList,
  DropDownContent,
} from "./styles";
import {
  setPriorityColor,
  toUpperFristLetter,
} from "../../library/normalizing";

const App = () => {
  const userNameRef = useRef(null);
  const [taskname, setTaskName] = useState("");
  const [task, setTask] = useState("");
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const { taskList } = useSelector(({ Task }) => Task);

  const handleSubmit = (e) => {
    setCount(count + 1);
    const id = count + 1;
    e.preventDefault();
    if (!taskname.trim() || !task.trim()) return;

    const fetchUserAction = requestAddTodoList(taskname, task, id);
    dispatch(fetchUserAction);

    setTaskName("");
    setTask("");
    userNameRef.current.focus();
  };

  const priorityColor = setPriorityColor(task);

  const selectedValue = task ? toUpperFristLetter(task) : "Priority";

  return (
    <Container>
      <TodoContainer onSubmit={handleSubmit}>
        <Title>Marketing Campaing</Title>

        <InputContainer>
          <AddButton type="submit">Add Task</AddButton>
          <Input
            ref={userNameRef}
            name="taskName"
            value={taskname}
            onChange={(e) => setTaskName(e.target.value)}
          />

          <DropDownLi>
            <DropDownList priorityBG={priorityColor}>
              {selectedValue}
            </DropDownList>
            <DropDownContent>
              {" "}
              <DropDownSubList onClick={() => setTask("low")}>
                Low
              </DropDownSubList>
              <DropDownSubList onClick={() => setTask("med")}>
                Med
              </DropDownSubList>
              <DropDownSubList onClick={() => setTask("high")}>
                High
              </DropDownSubList>
            </DropDownContent>
          </DropDownLi>
        </InputContainer>

        <TodoListContainer>
          {!taskList.length && (
            <EmptyListMessage>No Task to Show</EmptyListMessage>
          )}

          {taskList.map((taskItem) => {
            const { id, userData, task } = taskItem;
            return <TaskItem key={id} priority={task} userName={userData} />;
          })}
        </TodoListContainer>
      </TodoContainer>
    </Container>
  );
};

export default App;
