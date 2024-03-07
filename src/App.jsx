import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/postlistStore";
function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedtab={selectedtab} setselectedtab={setselectedtab} />
        <div className="content">
          <Header />
          {selectedtab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
