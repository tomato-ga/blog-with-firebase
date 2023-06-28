import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {});
  };

  return (
    <div>
      <p>ログインしてはじめる</p>
      <button onClick={loginInWithGoogle}>Googleでログインする</button>
    </div>
  );
};

export default Login;
