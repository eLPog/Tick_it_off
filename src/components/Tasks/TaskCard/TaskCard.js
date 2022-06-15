import styles from './TaskCard.module.css';

export function TaskCard(props) {
  console.log(props.title);
  return (
    <li className={styles.item}>
      <div className={styles.title}>
        <p>
          <strong>Title:</strong>
          {props.title}
        </p>
        <p>
          <strong>
            Created at:
          </strong>
          {props.createdAt.slice(0, 10)}
        </p>
      </div>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>

    </li>
  );
}
