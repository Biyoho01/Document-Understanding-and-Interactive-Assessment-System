import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/app/components/ui/sonner";
import HomePage from "@/app/pages/HomePage";
import LoginPage from "@/app/pages/LoginPage";
import RegisterPage from "@/app/pages/RegisterPage";
import DashboardLayout from "@/app/components/DashboardLayout";
import DashboardPage from "@/app/pages/DashboardPage";
import UploadDocumentPage from "@/app/pages/UploadDocumentPage";
import MyDocumentsPage from "@/app/pages/MyDocumentsPage";
import DocumentDetailPage from "@/app/pages/DocumentDetailPage";
import AssessmentPage from "@/app/pages/AssessmentPage";
import ResultsPage from "@/app/pages/ResultsPage";
import ProfilePage from "@/app/pages/ProfilePage";
import HelpPage from "@/app/pages/HelpPage";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/help" element={<HelpPage />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="upload" element={<UploadDocumentPage />} />
          <Route path="documents" element={<MyDocumentsPage />} />
          <Route path="document/:id" element={<DocumentDetailPage />} />
          <Route path="assessment/:id" element={<AssessmentPage />} />
          <Route path="results/:id" element={<ResultsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster />
    </BrowserRouter>
  );
}
