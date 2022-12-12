import styles from './FriendList.module.css'
import PropTypes from 'prop-types'; 

export const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>
     {friends.map(({id, avatar, name, isOnline}) => (
         <li key={id} className={styles.item}>
             <span className={isOnline ? styles.online : styles.status}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
</li>
    ))}
</ul>
}


FriendList.propTypes = {
    isOnline: PropTypes.bool,
    name: PropTypes.string
}
