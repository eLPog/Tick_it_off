import styles from './Button.module.css';

export function Button(props) {
  return (
    <button
      className={styles.normalButton}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
