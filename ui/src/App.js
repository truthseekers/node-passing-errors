import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";

async function getData() {
  return await axios.get("http://localhost:3001/test");
}

function useGetData() {
  const { isLoading, data, error, isSuccess, isError } = useQuery(
    "test",
    getData,
    {
      onSuccess: (data) => {
        console.log("success message: ", data);
      },

      onError: (error) => {
        console.log("error message: ", error.response.data);
      },
    }
  );

  return { isLoading, data, error };
}

function App() {
  const { isLoading, data, error, isError } = useGetData();

  console.log("isLoading: ", isLoading);
  console.log("data: ", data);

  console.log("error in app: ", error?.response?.data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
