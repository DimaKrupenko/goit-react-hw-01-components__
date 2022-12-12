import css from './FriendList.module.css'
import PropTypes from 'prop-types'; 

export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
     {friends.map(({id, avatar, name, isOnline}) => (
         <li key={id} className={css.item}>
             <span className={isOnline ? css.online : css.status}></span>
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
