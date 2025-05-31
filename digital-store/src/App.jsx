import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './pages/Layout'
import HomePage from '../src/pages/HomePage'
import ProductListingPage from '../src/pages/ProductListingPage'
import ProductViewPage from '../src/pages/ProductViewPage'
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path="/productlisting" element={<ProductListingPage />}/>
                <Route path="/productview" element={<ProductViewPage />} />
                <Route path="*" element={<NotFound />}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;