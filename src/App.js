import './App.css';
import {HomePage} from "./containers/HomePage";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {CustomerAccessPage} from "./containers/customerAccessPage";
import {NotFoundPage} from "./containers/404";

//json-server --watch db.json --static ./src/images/thumbnails/ --port 9000

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/customer/access/:action" exact component={CustomerAccessPage}/>
                    <Route path="*" component = {NotFoundPage}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
