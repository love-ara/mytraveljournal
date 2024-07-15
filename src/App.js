import {BrowserRouter, Routes, Route} from "react-router-dom"
import Index from "./components/index"
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route element={<Index/>} path={"/go"}/>
              </Route>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
