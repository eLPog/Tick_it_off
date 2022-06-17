import styles from './Backdrop.module.css';

export function Backdrop() {
  return (
    <div className={`${styles.backdrop} animateElement`} />
  );
}
