import "./App.css";
import Header from "./components/header/header.component"
import HomePage from "./pages/homepage/hompage.component";
import "./pages/homepage/homepage.styles.scss"
import ShopPage from "./pages/shop/shop.component.jsx";
import "./pages/shop/shop.styles.scss";
import "./components/header/header.component.jsx"

import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div>
			<Header/>
            <Switch>
                <Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
