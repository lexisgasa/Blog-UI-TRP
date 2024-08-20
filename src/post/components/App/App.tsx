import Card from "../Card/Card";
import Header from "../Header/Header";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="container">
      <Header />
      <Card title="La pequeña araña de 8 patas" />
    </div>
  );
};

export default App;
