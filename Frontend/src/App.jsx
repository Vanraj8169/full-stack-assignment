import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup.jsx";
import PostList from "./pages/PostList.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/post" element={<PostList />} />
      </Routes>
    </Router>
  );
}

export default App;
