import styles from '../../common/PageTitle/PageTitle.module.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
const PageNotFound = () => {
  return (
    <div className={styles.PageTitleContainer}>
      <PageTitle>404 Not Found</PageTitle>
    </div>
  );
};

export default PageNotFound;
