import "./App.css";
import HomePage from "./pages/hompage.component.jsx";
import "./pages/homepage.styles.scss";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
	<div>
		<h1>HatsPage</h1>
	</div>
)

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
				<Route path="/shop/hats" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
