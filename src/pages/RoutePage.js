import { Routes, Route } from 'react-router-dom';
import { Layout, Home, Vitae, NotFound} from '.'

const RoutePage = () => {
    return (
        <Routes>
            {/* route PARENT */}
            <Route element={<Layout/>}>
                {/* route ENFANT */}
                <Route index element ={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/vitae" element={<Vitae/>} />
                <Route path="*" element={<NotFound/>} />  
            </Route>
        </Routes>
    );
};

export default RoutePage;