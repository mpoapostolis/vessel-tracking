import { Map } from "./components/map";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <Map />
    </div>
  );
}

export default App;
