import styles from '../../common/PageTitle/PageTitle.module.scss';
import PageTitle from '../../common/PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.PageTitleContainer}>
      <PageTitle>About</PageTitle>
      <p>lorem ipsum</p>
    </div>
  );
};

export default About;
