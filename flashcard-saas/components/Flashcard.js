import { useState } from 'react';
import styles from '../styles/Flashcard.module.css';

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div onClick={() => setFlipped(!flipped)} className={styles.flashcard}>
      <div className={`${styles.flashcardInner} ${flipped ? styles.flipped : ''}`}>
        <div className={styles.flashcardFront}>{question}</div>
        <div className={styles.flashcardBack}>{answer}</div>
      </div>
    </div>
  );
};

export default Flashcard;
