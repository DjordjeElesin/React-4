import { Link } from 'react-router-dom';

export default function HomePage(){
    return (
        <div>
            <h1>This is the home page</h1>
            <Link style={{margin:"5px"}} to="/about">About</Link>
            <Link to="/profiles">Profiles</Link>
        </div>
    )
}