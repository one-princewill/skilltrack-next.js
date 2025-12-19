import styles from './overview.module.css';

const Overview = ( {userCourses, recommendedCourses}) => {

  const inProgressCourses = userCourses.filter( course => course.status === 'In Progress')

  return (
    <div className={styles.overviewContainer}>
      <div className={styles.overviewCourses}>
        <div className={styles.coursesInProgress}>
          <h2 className={styles.headers}>Courses In Progress</h2>
          <div className={styles.coursesList}>
            {inProgressCourses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <img src="/card6.jpg" alt={course.title} className={styles.courseImage} />
                <div className={styles.courseDetails}>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.courseDescription}>{course.description}</p>
                  <p className={styles.courseLessons}> <span>completed </span>3/{course.totalLessons} Lessons</p>
                  <button className={styles.resumeButton}>Resume</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.recommendedCourses}>
          <h2 className={styles.headers}>Recommended for You</h2>
          <div className={styles.coursesList}>
              {recommendedCourses.map((course) => (
                <div key={course.id} className={styles.courseCard}>
                  <img src="/card6.jpg" alt={course.title} className={styles.courseImage} />
                  <div className={styles.courseDetails}>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <p className={styles.courseDescription}>{course.description}</p>
                    <p className={styles.courseLessons}> {course.totalLessons} Lessons</p>
                    <button className={styles.enrollButton}>Enroll Now</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.overviewStats}>
        <h2 className={styles.statsHeader}>Current Stats</h2>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <i className='bx  bxs-flame'></i>
              <h3>7</h3>
            </div>
            <p className={styles.statDetails}>Daily streak</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <i className='bx  bxs-stopwatch'></i>
              <h3>68</h3>
            </div>
            <p className={styles.statDetails}>Total hours in the last 30days</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <i className='bx  bxs-badge'></i>
              <h3>12</h3>
            </div>
            <p className={styles.statDetails}>Total Quizzes taken in the last 30days</p>
          </div>
      </div>
    </div>
  )
}

export default Overview;
