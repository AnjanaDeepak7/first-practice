import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const name = "Anjana Deepak";
  return (
    <div className="App">
      <Header />
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}</h1>
        <p>
          I am studying CSE final year in siddhartha institute of engineering
          and technology
        </p>
        <p>The 3 best places I have visited so far are..</p>
        <ul>
          <li>Kulumanali</li>
          <li>Goa</li>
          <li>Ananthagiri Hills</li>
        </ul>
      </body>
      <Footer />
    </div>
  );
}

export default App;
