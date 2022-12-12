import styles from './Statistics.module.css'
import PropTypes from 'prop-types'; 

export const Statistics = ({ title, stats }) => {
   return <section className={styles.statistics}>
     {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.statList}>
           {stats.map(data => (
             <li key={data.id} className={styles.item}>
        <span className="label">{data.label}</span>
        <span className={styles.percentage}>{data.percentage}%</span>
    </li>
    ))}
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
 percentage: PropTypes.number
}