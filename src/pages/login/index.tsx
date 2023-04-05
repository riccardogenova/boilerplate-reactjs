/** @format */

import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';
import { UIButton } from '../../components-ui/Button';
import { selectorAuth } from '../../redux/auth/selectors';
import { thunkAuth } from '../../redux/auth/thunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const StyledLoginContainer = styled.div(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.background,
  color: theme.text,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
}));

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(selectorAuth);

  const onCLick = () => {
    dispatch(
      thunkAuth({
        isAuthenticated: true,
        isLoading: false,
      }),
    );
    if (isAuthenticated) navigate('/');
  };

  return (
    <StyledLoginContainer>
      <img src={logo} className="App-logo" alt="logo" />
      <UIButton label="Login" onClick={onCLick} onMouseEnter={() => {}} onMouseLeave={() => {}} />
    </StyledLoginContainer>
  );
};
