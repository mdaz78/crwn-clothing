import Directory from "./components/directory/directory.component";
import { CATEGORIES } from "./config/categories.config";

function App() {
  return <Directory categories={CATEGORIES} />;
}

export default App;
