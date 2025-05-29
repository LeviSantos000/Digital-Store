import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from '../src/layouts/PageLayout'
import HomePage from '../src/pages/HomePage'
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;