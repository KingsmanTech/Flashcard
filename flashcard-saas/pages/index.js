import Link from 'next/link';
import Flashcard from '../components/Flashcard'; // Adjust the path as needed

const HomePage = () => (
  <div>
    <h1>Flashcard App</h1>
    <Link href="/sign-up">Sign Up</Link>
    <br />
    <Link href="/sign-in">Sign In</Link>
    <Flashcard question="What is the capital of France?" answer="Paris" />
  </div>
);

export default HomePage;
