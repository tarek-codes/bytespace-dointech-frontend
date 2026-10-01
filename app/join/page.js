import SignInView from '../components/SignInView';

export const metadata = {
  title: 'Create an Account - ByteSpace',
  description: 'Join ByteSpace and start learning today.',
};

export default function JoinPage() {
  return <SignInView mode="signup" />;
}
