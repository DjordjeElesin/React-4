import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleProfiles(){
    const params = useParams()
    return(
        <div> 
            <h3>Single Profile ID: {params.profileID}</h3>
            <Link to="/profiles">All Profiles</Link>
        </div>
    )
}