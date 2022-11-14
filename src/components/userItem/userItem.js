import './userItem.css'
import { deleteUserDetails } from '../redux/userDetailsSlice';
import { useDispatch } from 'react-redux';

const UserItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
      dispatch(deleteUserDetails({id:props.id}))
  }

    console.log(props);
  return (
    <div>
        <div className='detailsContainer'>
            <div>{props.title}</div>
            <button className='deleteInfo' onClick={handleDeleteClick}>
					Remove
				</button>
        </div>
    </div>
  )
}

export default UserItem