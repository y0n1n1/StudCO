import { Routes, Route } from 'react-router-dom';
import MainLayout from './main/MainLayout';
import Home from './main/pages/Home';
import './globals.css';
import Constitution from './main/pages/Constitution';
import Calendar from './main/pages/Calendar';
import Talk from './main/pages/Talk';

function App() {

  return (
    <main className=''>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/constitution" element={<Constitution/>} />
                    <Route path="/calendar" element={<Calendar/>}/>
                    <Route path="/talk-to-us" element={<Talk/>}/>
                </Route>
            </Routes>
    </main>
  )
}

export default App
