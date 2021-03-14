// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import YoutubePage from "./pages/YoutubePage";
import ResultPage from "./pages/YoutubePage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route path="/question" component={QuestionPage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/youtube" component={YoutubePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
