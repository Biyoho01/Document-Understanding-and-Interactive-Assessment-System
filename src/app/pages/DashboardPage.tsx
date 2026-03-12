import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { FileText, Upload, BookCheck, TrendingUp } from 'lucide-react';

export default function DashboardPage() {
  // Mock data
  const stats = {
    totalDocuments: 12,
    assessmentsTaken: 8,
    averageScore: 85,
    recentActivity: 3,
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl mb-2">
          Welcome Back!
        </h1>
        <p className="text-gray-600">
          Here's an overview of your learning progress
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.totalDocuments}</div>
            <p className="text-xs text-muted-foreground">
              +2 from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Assessments Taken</CardTitle>
            <BookCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.assessmentsTaken}</div>
            <p className="text-xs text-muted-foreground">
              +3 from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.averageScore}%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Recent Activity</CardTitle>
            <Upload className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.recentActivity}</div>
            <p className="text-xs text-muted-foreground">
              documents this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Get started with common tasks</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Link to="/dashboard/upload">
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </Link>
          <Link to="/dashboard/documents">
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              View Documents
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Recent Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>Your most recently uploaded documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Introduction to React', date: '2 days ago', status: 'Ready' },
              { name: 'JavaScript Fundamentals', date: '5 days ago', status: 'Ready' },
              { name: 'Web Development Basics', date: '1 week ago', status: 'Ready' },
            ].map((doc, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <p>{doc.name}</p>
                    <p className="text-sm text-gray-500">{doc.date}</p>
                  </div>
                </div>
                <span className="text-sm text-green-600">{doc.status}</span>
              </div>
            ))}
          </div>
          <Link to="/dashboard/documents">
            <Button variant="link" className="mt-4">
              View all documents →
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
