import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Store } from '../store';
import { toast } from 'react-toastify';
import getError from '../util';

const SignUpScreen = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectUrl ? redirectUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('As passwords não coincidem');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        name,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group
          className="mb-3"
          controlId="name"
          onChange={(e) => setName(e.target.value)}
        >
          <Form.Label>Name</Form.Label>
          <Form.Control required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="email"
          onChange={(e) => setEmail(e.target.value)}
        >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="password"
          onChange={(e) => setPassword(e.target.value)}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="confirmPassword"
          onChange={(e) => setconfirmPassword(e.target.value)}
        >
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
      </Form>
      <div className="mb-3">
        Already have an account ? {''}
        <Link to={`/sigin?redirect=${redirect}`}>Sign In</Link>
      </div>
    </Container>
  );
};

export default SignUpScreen;
