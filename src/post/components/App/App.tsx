import getPosts from "../../api/getPosts";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  getPosts();

  return (
    <div className="container">
      <Header />
      <Card title="The litle spier with 8 legs" />
    </div>
  );
};

export default App;
