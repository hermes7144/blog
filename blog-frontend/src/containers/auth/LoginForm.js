import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    )
  }

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    // 구현 예정
  }

  useEffect(() => {
    if (authError)
    {
      setError('로그인 실패');
      return;
    }
    if (auth)
    {
      dispatch(check());
    }


    dispatch(initializeForm('login'));
  }, [auth, authError, dispatch])

  return (
    <AuthForm
      type='login'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    ></AuthForm>
  )
}
// 위 컴포넌트에서는 onChange 함수와 onSubmit 함수를 구현하여 필요한 액션을 디스패치하도록 구현해 주었습니다.
// 또한, useEffect를 사용하여 맨 처음 렌더링 후 initializeForm 액션 생성 함수를 호출했습니다.


export default LoginForm