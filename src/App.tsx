import { Route, BrowserRouter as Router , Routes} from "react-router-dom";


import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Register } from "./pages/register";
import { AuthContextProvider } from "./context/auth";



function App() {
  return (
    <Router>
      <AuthContextProvider>
          <Routes>
            <Route path= "/" element={<Home/>}></Route>
            <Route path= "/login" element={<Login/>}></Route>
            <Route path= "/feed" element={<Feed/>}></Route>
            <Route path= "/register" element={<Register/>}></Route>
          </Routes>
      </AuthContextProvider>

    </Router>
    
  );
}

export default App;
