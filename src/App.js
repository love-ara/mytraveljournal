import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route element={<Home/>} path={"/go"}/>
              </Route>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
