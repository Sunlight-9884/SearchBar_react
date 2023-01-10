import "./index.CSS";
import JSONDATA from "./MOCK_DATA.json";
import { usestate } from "react ";
function App() {
  const [searchTerm, setSearchTerm] = usestate("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search...."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter()((val)=> {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div class="user" key={key}>
            {""}
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
