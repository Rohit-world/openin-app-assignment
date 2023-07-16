import { Route,Routes } from "react-router-dom";
import AuthPage from "./authPage";
import Dashbord from "./dashbord";


const Allroutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthPage/>}/>
            <Route path="/dashboard" element={<Dashbord/>}/>
        </Routes>
    );
}

export default Allroutes;
