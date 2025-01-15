import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./components/mainComponents/MainLayout";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Project from "./components/pages/home/components/Project";
import LogIn from "./components/pages/auth/LogIn";
import SignUp from "./components/pages/auth/SignUp";
import MyProjects from "./components/pages/myProjects/MyProjects";
import CreateProject from "./components/pages/myProjects/CreateProject";
import UpdateProject from "./components/pages/myProjects/UpdateProject";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="project" element={<Project />}></Route>
          <Route path="my-projects" element={<MyProjects />}></Route>
          <Route path="create" element={<CreateProject />}></Route>
          <Route path="update" element={<UpdateProject />}></Route>
        </Route>
        <Route path="/log-in" element={<LogIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
