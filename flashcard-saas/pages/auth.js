import { SignIn, SignUp } from '@clerk/nextjs';

const AuthPage = () => (
  <div>
    <SignUp />
    <SignIn />
  </div>
);

export default AuthPage;
