import Head from 'next/head';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { signInStart } from 'redux/auth/actions';
import { SignInInput } from 'redux/auth/interfaces';
import { signInSchema } from 'shared/validation';

const SignInPage: NextPage = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<SignInInput>({
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = (signInInput: SignInInput) => {
    dispatch(signInStart(signInInput));
  };

  return (
    <div>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" ref={register} />
        <p>{errors.email?.message}</p>

        <input type="text" name="password" ref={register} />
        <p>{errors.password?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default SignInPage;