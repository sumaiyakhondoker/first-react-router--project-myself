import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData()
    const navigate = useNavigate()
    const {id, name,email,phone, website, company} = userDetails
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>User Id: {id}</h2>
            <h4>Name: {name}</h4>
            <p>Phone No: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
            <button className="details-btn" onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;