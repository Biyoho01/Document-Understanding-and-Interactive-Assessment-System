import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { FileText, Search, Eye, Trash2, Play } from 'lucide-react';

export default function MyDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock documents data
  const documents = [
    {
      id: '1',
      name: 'Introduction to React',
      uploadDate: '2026-01-28',
      size: '2.4 MB',
      status: 'Ready',
      assessments: 3,
    },
    {
      id: '2',
      name: 'JavaScript Fundamentals',
      uploadDate: '2026-01-25',
      size: '1.8 MB',
      status: 'Ready',
      assessments: 2,
    },
    {
      id: '3',
      name: 'Web Development Basics',
      uploadDate: '2026-01-23',
      size: '3.1 MB',
      status: 'Ready',
      assessments: 4,
    },
    {
      id: '4',
      name: 'CSS Advanced Techniques',
      uploadDate: '2026-01-20',
      size: '2.7 MB',
      status: 'Processing',
      assessments: 0,
    },
    {
      id: '5',
      name: 'TypeScript Guide',
      uploadDate: '2026-01-18',
      size: '1.5 MB',
      status: 'Ready',
      assessments: 2,
    },
  ];

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">My Documents</h1>
          <p className="text-gray-600">
            Manage your uploaded documents and assessments
          </p>
        </div>
        <Link to="/dashboard/upload">
          <Button>Upload New Document</Button>
        </Link>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <div className="grid gap-4">
        {filteredDocuments.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1">{doc.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Uploaded: {doc.uploadDate}</span>
                      <span>Size: {doc.size}</span>
                      <span>Assessments: {doc.assessments}</span>
                    </div>
                  </div>
                  <Badge variant={doc.status === 'Ready' ? 'default' : 'secondary'}>
                    {doc.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Link to={`/dashboard/document/${doc.id}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  {doc.status === 'Ready' && (
                    <Link to={`/dashboard/assessment/${doc.id}`}>
                      <Button variant="default" size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        Start Quiz
                      </Button>
                    </Link>
                  )}
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <Card>
          <CardContent className="pt-6 text-center py-12">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No documents found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
