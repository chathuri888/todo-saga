import styled from "styled-components";
import TodoItem from "../../components/TodoItem";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 3.2rem 0;
`;

export const TodoContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  min-width: 310px;
`;

export const Title = styled.h1`
  color: #020202;
  margin-bottom: 3.2rem;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid rgb(243 243 243);
  background-color: #ffffff;
  border-radius: 5px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Input = styled.input`
  margin: 8px 0;
  padding: 1.6rem;
  border: none;
  color: rgb(59, 59, 59);
  width: 40%;
  &:focus {
    border-bottom: 1px solid #33c4ff;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
  }
`;

export const AddButton = styled.button`
  background: #33c4ff;
  margin: 6px 0;
  width: 10rem;
  padding: 0.6rem;
  border: none;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  -webkit-transition: all 0.2s ease-in-out;
  outline: none;
  font-size: 10px;
`;

export const TodoListContainer = styled.div`
  background: var(--list-container);
  border-radius: 5px;
  width: 100%;
  background-color: #ffffff;
`;

export const EmptyListMessage = styled.div`
  text-align: center;
  color: #2b2929;
`;

export const TaskItem = styled(TodoItem)`
  margin-bottom: 8px;
`;

export const StyledLi = styled.li`
  float: left;
  height: 100%;
  padding: 10px;
  &:hover {
    background-color: #33c4ff;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  min-width: 20%;
  z-index: 1;
  background-color: #ffffff;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const DropDownList = styled.a`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.priorityBG};
`;

export const DropDownSubList = styled(DropDownList)`
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: #ffffff;
  padding: 10px;
  color: #33c4ff;
  &:hover {
    background-color: #33c4ff61;
    color: #ffffff;
  }
`;
