import './App.css';
import {HomePage} from "./containers/HomePage";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {CustomerAccessPage} from "./containers/customerAccessPage";

//json-server --watch db.json --static ./src/images/thumbnails/ --port 9000

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/customer/access/:action" exact component={CustomerAccessPage}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
