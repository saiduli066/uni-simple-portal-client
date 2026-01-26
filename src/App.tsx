import AdminFellowshipPage from "./pages/admin/Fellowship";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/layout/MainLayout";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import FellowshipList from "./features/fellowship/FellowshipList";
import EmailBenefits from "./pages/EmailBenefits";
import UserManagement from "./pages/admin/UserManagement";
import LibraryManagement from "./pages/admin/LibraryManagement";
import Settings from "./pages/admin/Settings";
import Reports from "./pages/admin/Reports";
import { useAuthStore } from "./store/authStore";
import useTokenRefresh from "@/lib/useTokenRefresh";

function App() {
    const { isAuthenticated, user } = useAuthStore();
    useTokenRefresh();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard" replace />
                        ) : (
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                {user?.role === "student" && <StudentDashboard />}
                                {user?.role === "teacher" && (
                                    <div className="p-8 text-center">
                                        <h1 className="text-2xl font-bold">
                                            Teacher Dashboard
                                        </h1>
                                        <p className="text-muted-foreground mt-2">
                                            Coming soon...
                                        </p>
                                    </div>
                                )}
                                {user?.role === "librarian" && (
                                    <div className="p-8 text-center">
                                        <h1 className="text-2xl font-bold">
                                            Librarian Dashboard
                                        </h1>
                                        <p className="text-muted-foreground mt-2">
                                            Coming soon...
                                        </p>
                                    </div>
                                )}
                                {user?.role === "admin" && <AdminDashboard />}
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Fellowship route for students */}
                <Route
                    path="/fellowships"
                    element={
                        <ProtectedRoute allowedRoles={["student"]}>
                            <MainLayout>
                                <FellowshipList />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Placeholder protected routes */}
                <Route
                    path="/library"
                    element={
                        <ProtectedRoute allowedRoles={["student", "teacher"]}>
                            <MainLayout>
                                <div className="p-8 text-center">
                                    <h1 className="text-2xl font-bold">Library Catalog</h1>
                                    <p className="text-muted-foreground mt-2">
                                        Coming soon...
                                    </p>
                                </div>
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/library-card"
                    element={
                        <ProtectedRoute allowedRoles={["student"]}>
                            <MainLayout>
                                <div className="p-8 text-center">
                                    <h1 className="text-2xl font-bold">My Library Card</h1>
                                    <p className="text-muted-foreground mt-2">
                                        Coming soon...
                                    </p>
                                </div>
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Admin Routes */}
                <Route
                    path="/admin/fellowships"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <MainLayout>
                                <AdminFellowshipPage />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/users"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <MainLayout>
                                <UserManagement />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/library"
                    element={
                        <ProtectedRoute allowedRoles={["admin", "librarian"]}>
                            <MainLayout>
                                <LibraryManagement />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/reports"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <MainLayout>
                                <Reports />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin/settings"
                    element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <MainLayout>
                                <Settings />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Student/Teacher Routes */}
                <Route
                    path="/fellowships"
                    element={
                        <ProtectedRoute allowedRoles={["student"]}>
                            <MainLayout>
                                <FellowshipList />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/benefits"
                    element={
                        <ProtectedRoute allowedRoles={["student"]}>
                            <MainLayout>
                                <EmailBenefits />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <div className="p-8 text-center">
                                    <h1 className="text-2xl font-bold">Settings</h1>
                                    <p className="text-muted-foreground mt-2">
                                        Coming soon...
                                    </p>
                                </div>
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                {/* Unauthorized page */}
                <Route
                    path="/unauthorized"
                    element={
                        <div className="min-h-screen flex items-center justify-center bg-background">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold text-error">403</h1>
                                <p className="text-muted-foreground mt-2">
                                    Unauthorized Access
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    You don't have permission to access this page.
                                </p>
                            </div>
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
