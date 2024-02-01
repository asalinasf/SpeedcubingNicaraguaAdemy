import "./App.css";

// Router
import { MyRoutes } from "./routes/routes";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app">
      <Header />
      <MyRoutes />
      <Footer />
    </main>
  );
}

export default App;
