import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '@/pages/landingPage'

export default function RouteMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />

                <Route path='*' element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    )
}