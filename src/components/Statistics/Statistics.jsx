import css from './Statistics.module.css'
import PropTypes from 'prop-types'; 

export const Statistics = ({ title, stats }) => {
   return <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
           {stats.map(data => (
             <li key={data.id} className={css.item}>
        <span className="label">{data.label}</span>
        <span className={css.percentage}>{data.percentage}%</span>
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