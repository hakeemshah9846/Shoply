import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckAuth from "./components/CheckAuth";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector((state) => {
    return state.auth;
  });
  const dispatch = useDispatch();

  return (
    <>
      <Router>
        <Routes>

          <Route
            path={"/"}
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user} />
            }
          />

          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }>
            <Route path="login" element={<AuthLogin />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
