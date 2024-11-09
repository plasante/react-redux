import {useSelector, useDispatch} from 'react-redux';
import {addMovie} from './store/movies.js';
import {setType, fetchUser} from './store/users.js';
import {useEffect} from "react";

const App = () => {
    const movies = useSelector((state) => state.movies.list);
    const users = useSelector((state) => state.users);

    //const all = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
            .unwrap()
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },[]) // To run the useEffect one time when the application loads

    return (
        <>
            <h2>Movies</h2>
            <ul>
                {movies ?
                    movies.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))
                    : null}
            </ul>
            <hr/>
            <button onClick={() => dispatch(addMovie({id: 3, title: 'Batman Return'}))}>Add movie</button>
            <hr/>
            <h3>User type:{users.type}</h3>
            <button onClick={() => dispatch(setType('Admin'))}>Set User Type</button>
            <div>
                {users.loading ? 'Loading Users' :
                    <ul>
                        {users.users ?
                            users.users.map((user, index) => (
                                <li key={index}>{user.name}</li>
                            ))
                            : null}
                    </ul>
                }
            </div>
            <button onClick={() => dispatch(fetchUser())}>
                Get Users
            </button>
        </>
    )
}
export default App
