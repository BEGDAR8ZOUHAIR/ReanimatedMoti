import react from "react";
import { Provider } from "react-redux";
import { store } from "./App/store";
import Tabs from "./App/components/index";

export default function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
