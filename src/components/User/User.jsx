import { Link } from 'react-router-dom';
import './User.css'
import PropTypes from 'prop-types'
const User = ({user}) => {
    const {id,name,email} = user

    return (
        <div className='box'>
            <h2>{name}</h2>
            <p>{email}</p>
            <Link  to={`/user/${id}`}>Show Details</Link>
            
        </div>
    ); 
};

User.propTypes ={ 
    user: PropTypes.object,
}
export default User;