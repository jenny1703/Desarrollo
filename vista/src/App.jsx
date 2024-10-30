import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CrudPage } from './pages/crudpage';
import { CrudFormPage } from './pages/crudformpage';
import { Navigation} from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to= "/car" />} />
        <Route path="/car" element={<CrudPage />} />
        <Route path="/car-create" element={<CrudFormPage />} />
        <Route path="/car/:id" element={<CrudFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
