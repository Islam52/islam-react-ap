import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/About';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutDetailsPage from './pages/AbautDetailsPage';
import MaterialPage from './pages/MaterialPage';
import MaterialDetailsPage from './pages/MaterialDetailsPage';

// function MainLayout() {
//     return(
        
//     )
// }

function App() {
    return(

        <Routes>
            <Route
             path="/"
             element={<HomePage/>}/>
             <Route
             path="*"
             element={<NotFoundPage/>}/>
             <Route
             path="/about"
             element={<AboutUs/>}/>
             <Route
             path=":aboutId"
             element={<AboutDetailsPage/>}/>
             <Route
             path="material"
             element={<MaterialPage/>}/>
             <Route
             path='material/:postId'
             element={<MaterialDetailsPage/>}
             />
        </Routes>
        // <ModalReturn
    )
}

export default App;