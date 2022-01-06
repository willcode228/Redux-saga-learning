import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from '../components/User/User';
import { fetchUser } from '../store/user/actions';
import './App.css';

function App() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <div className='app'>
            <User user={user} />
            <button className="reloadUserBtn" onClick={() => dispatch(fetchUser())}>Reload</button>
        </div>
    );
}

export default App;
