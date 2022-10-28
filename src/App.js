import { Provider } from "react-redux";
import store from "./redux/store";
import UserList from "./components/UserList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h3>jsonplaceholder api</h3>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
