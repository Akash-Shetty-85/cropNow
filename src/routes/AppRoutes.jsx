import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


// Lazy loading for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProtectedRoute = lazy(() => import("../pages/ProtectedRoute"));
const Chat = lazy(() => import("../pages/Chat"));
const Careers = lazy(() => import("../pages/Careers"));
const Technology = lazy(() => import("../pages/Technology"));
const AppRoutes = () => {
    return (
        <Router>
            {/* <ErrorBoundary> */}
            <MainLayout>
                <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path='/technology' element={<Technology />} />
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </MainLayout>
            {/* </ErrorBoundary> */}
        </Router>
    );
};

export default AppRoutes;
