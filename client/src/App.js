import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";
import Register from "./Components/Register";
import { getCurrent } from "./JS/Actions/userAction";
import PrivateRoute from "./Private/PrivateRoute";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch])
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
