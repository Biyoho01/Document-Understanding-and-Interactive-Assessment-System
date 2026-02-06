import { Link } from "react-router-dom";
import { FileText, Brain, Award, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 font-bold">
            Document-Based Assessment Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upload documents, generate intelligent assessments, and track your
            learning progress
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
            <Link to="/help">
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg hover:bg-blue-50 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload Documents</h3>
            <p className="text-gray-600">
              Upload your study materials in various formats
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
            <p className="text-gray-600">
              Intelligent document analysis and content extraction
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Generate Quizzes</h3>
            <p className="text-gray-600">
              Automatic quiz generation from your documents
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p className="text-gray-600">
              Monitor your performance and improvement
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-24">
          <h2 className="text-3xl text-center mb-12 font-bold">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl mb-2 font-semibold">Upload</h3>
              <p className="text-gray-600">
                Upload your study documents and materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl mb-2 font-semibold">Assess</h3>
              <p className="text-gray-600">
                Take AI-generated quizzes based on your content
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl mb-2 font-semibold">Improve</h3>
              <p className="text-gray-600">
                Review results and track your learning progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
