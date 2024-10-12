import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const { status, statusText} = error
    const handleGoHome = () =>{
        navigate('/')
    }
    return (
        <div>
            <h3>{status}</h3>
            <p><i>{statusText}</i></p>
            <button onClick={handleGoHome} className="details-btn">Go Home</button>
        </div>
    );
};

export default ErrorPage;