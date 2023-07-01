import styles from '../PageTitle/PageTitle.module.scss';
const PageTitle = (props) => {
  return (
    <div className={styles.PageTitleContainer}>
        <h2 className={styles.PageTitle}>{props.children}</h2>
    </div>
  );
};

export default PageTitle;
