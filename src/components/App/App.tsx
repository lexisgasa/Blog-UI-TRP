import getPosts from "../../post/api/getPosts";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  getPosts();

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
