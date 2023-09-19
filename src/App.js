import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import useSetUser from "./hooks/useSetUser";
import { useEffect } from "react";
import { auth } from "./firebase";
import ProtectedRoute from "./utils/protectedRoute";
import { useSelector } from "react-redux";
import Detail from "./components/Detail";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [setUser] = useSetUser();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [setUser]);

  const user = useSelector((state) => state.user.name);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/detail/:movieId"
            element={
              <ProtectedRoute user={true}>
                <Detail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
