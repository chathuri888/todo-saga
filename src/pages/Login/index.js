import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUserLogin } from "../../store/ducks/todo";
import {
  Container,
  InputContainer,
  LoginContainer,
  Title,
  Button,
} from "./styles";
import TextInput from "../../components/TextInput";
import { initForm } from "../../store/ducks/form/actions";
import { LOGIN_FORM } from "../../constants/FormNames";

const App = () => {
  const dispatch = useDispatch();
  const {
    LoginForm: { errors, values },
  } = useSelector(({ Form }) => Form);

  useEffect(() => {
    initForm({ form: LOGIN_FORM, field: "userName", fieldValue: "" });
  });

  const dissable = () => {
    if (values?.password?.length >= 6 && values?.userName?.length >= 6) {
      return false;
    }
    return true;
  };

  const submit = () => {
    const userLoginAction = requestUserLogin(
      values?.userName,
      values?.password
    );
    dispatch(userLoginAction);
  };

  return (
    <Container>
      <LoginContainer>
        <Title>Login</Title>

        <InputContainer>
          <TextInput
            name="userName"
            value={values?.userName}
            placeholder="Username"
            form={LOGIN_FORM}
            error={errors.userName}
          />

          <TextInput
            name="password"
            type="password"
            value={values?.password}
            placeholder="Password"
            form={LOGIN_FORM}
            error={errors.password}
          />
        </InputContainer>
        <Button disabled={dissable()} type="submit" onClick={() => submit()}>
          Submit
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default App;
