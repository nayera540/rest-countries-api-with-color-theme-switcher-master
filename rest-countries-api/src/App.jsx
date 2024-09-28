import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Details from "./Pages/Details";
import PageNotFound from "./Pages/PageNotFound";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />}/>
                <Route path="detials" element={<Details />}/>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
