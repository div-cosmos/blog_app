import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Context } from "./context/Context";
const App = () => {
  const { user } = useContext(Context);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
};
export default App;
