'use client';

import { useState } from 'react';
import styles from './FAQAccordion.module.css';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

export default function FAQAccordion({ items }: { items: FAQItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open the first by default if desired, or null

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordionContainer}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button
              className={styles.question}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{isOpen ? '▲' : '▼'}</span>
              </div>
            </button>
            <div
              className={styles.answerWrapper}
              style={{ maxHeight: isOpen ? '1500px' : '0' }}
            >
              <div className={styles.answerContent}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
