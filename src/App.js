import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Link to="/">Home</Link>
      <Link to="/">Phones</Link>

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/phones" element={<h1>Phones</h1>} />
      </Routes>


      <h2>Home page</h2>
      <h2>Phones page</h2>
    </div>
  );
}

export default App;
