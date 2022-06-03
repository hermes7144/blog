import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value
      })
    )
  }

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm)
    {
      return;
    }
    dispatch(register({ username, password }));
  }

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch])

  useEffect(() => {
    if (authError)
    {
      console.log('오류 발생')
      console.log(authError);
      return;
    }
    if (auth)
    {
      console.log('회원가입 성공')
      console.log(auth);
    }
  }, [auth, authError])

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    ></AuthForm>
  )
}
// 위 컴포넌트에서는 onChange 함수와 onSubmit 함수를 구현하여 필요한 액션을 디스패치하도록 구현해 주었습니다.
// 또한, useEffect를 사용하여 맨 처음 렌더링 후 initializeForm 액션 생성 함수를 호출했습니다.


export default RegisterForm