import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { FileText, Calendar, HardDrive, Play, ArrowLeft } from 'lucide-react';

export default function DocumentDetailPage() {
  const { id } = useParams();

  // Mock document data
  const document = {
    id,
    name: 'Introduction to React',
    uploadDate: '2026-01-28',
    size: '2.4 MB',
    status: 'Ready',
    summary: 'This document covers the fundamentals of React, including components, props, state management, and hooks. It provides a comprehensive introduction to building modern web applications with React.',
    keyTopics: [
      'React Components',
      'Props and State',
      'React Hooks',
      'Component Lifecycle',
      'Event Handling',
      'Conditional Rendering',
    ],
    assessments: [
      { id: '1', name: 'React Basics Quiz', score: 85, date: '2026-01-29' },
      { id: '2', name: 'Hooks and State', score: 90, date: '2026-01-28' },
      { id: '3', name: 'Component Architecture', score: 78, date: '2026-01-28' },
    ],
  };

  return (
    <div className="space-y-6">
      <Link to="/dashboard/documents">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Documents
        </Button>
      </Link>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl mb-2">{document.name}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {document.uploadDate}
            </span>
            <span className="flex items-center gap-1">
              <HardDrive className="w-4 h-4" />
              {document.size}
            </span>
            <Badge variant="default">{document.status}</Badge>
          </div>
        </div>
        <Link to={`/dashboard/assessment/${document.id}`}>
          <Button size="lg">
            <Play className="w-4 h-4 mr-2" />
            Generate Assessment
          </Button>
        </Link>
      </div>

      {/* Document Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Document Summary</CardTitle>
          <CardDescription>AI-generated overview of the content</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{document.summary}</p>
        </CardContent>
      </Card>

      {/* Key Topics */}
      <Card>
        <CardHeader>
          <CardTitle>Key Topics Identified</CardTitle>
          <CardDescription>Main concepts covered in this document</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {document.keyTopics.map((topic, index) => (
              <Badge key={index} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Previous Assessments */}
      <Card>
        <CardHeader>
          <CardTitle>Previous Assessments</CardTitle>
          <CardDescription>Your assessment history for this document</CardDescription>
        </CardHeader>
        <CardContent>
          {document.assessments.length > 0 ? (
            <div className="space-y-3">
              {document.assessments.map((assessment) => (
                <div
                  key={assessment.id}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div>
                    <p>{assessment.name}</p>
                    <p className="text-sm text-gray-500">{assessment.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-lg ${assessment.score >= 80 ? 'text-green-600' : 'text-yellow-600'}`}>
                      {assessment.score}%
                    </span>
                    <Link to={`/dashboard/results/${assessment.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No assessments taken yet
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
