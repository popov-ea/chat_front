import React from "react";
import { useAuth } from "./context/authContext";

const App = () => {
    const user = useAuth();
    return user ? <div>no user</div> : <div>nice))</div>
}

export default App;