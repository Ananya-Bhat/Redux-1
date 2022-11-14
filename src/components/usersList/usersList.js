import './usersList.css'
import UserItem from '../userItem/userItem';
import { useSelector } from 'react-redux';

const UsersList = () => {
    const users = useSelector((state) => state.userDetails)
    
  return (
    <div className='listContainer'>
        <ul className='list-group'>
              {users.map((user) => (
				<UserItem id={user.id} title={user.title} />
			))}
		</ul>
    </div>
  )
}

export default UsersList