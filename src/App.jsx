import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailsPage from "./pages/DetailsPage"
import AppLayout from "./layout/AppLayout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/videogames/:id" element={<DetailsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App