import { Link } from "react-router-dom";

const PROFILE_LIST = [1,2,3,4,5,6];
export default function Profiles(){
    return(
        <div> 
            <h3>This is the Profiles page</h3>
            {PROFILE_LIST.map((profile) => <Link style={{margin: "5px"}} to={`/profiles/${profile}`}>{profile}</Link>)}
        </div>
    )
}