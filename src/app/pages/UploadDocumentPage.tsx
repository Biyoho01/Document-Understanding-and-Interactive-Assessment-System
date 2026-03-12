import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Progress } from '@/app/components/ui/progress';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function UploadDocumentPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setUploaded(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file first');
      return;
    }

    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploaded(true);
          toast.success('Document uploaded successfully!');
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl mb-2">Upload Document</h1>
      <p className="text-gray-600 mb-8">
        Upload your study materials to generate assessments
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Document Upload</CardTitle>
          <CardDescription>
            Supported formats: PDF, DOC, DOCX, TXT (Max size: 10MB)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* File Upload Area */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <Label htmlFor="file-upload" className="cursor-pointer">
              <span className="text-blue-600 hover:underline">
                Choose a file
              </span>{' '}
              or drag and drop
            </Label>
            <Input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />
            {file && (
              <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <FileText className="w-4 h-4" />
                <span>{file.name}</span>
              </div>
            )}
          </div>

          {/* Upload Progress */}
          {uploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          )}

          {/* Success Message */}
          {uploaded && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-green-800">Upload successful!</p>
                <p className="text-sm text-green-600">
                  Your document is being processed
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={handleUpload}
              disabled={!file || uploading || uploaded}
              className="flex-1"
            >
              {uploading ? 'Uploading...' : 'Upload Document'}
            </Button>
            {uploaded && (
              <Button
                variant="outline"
                onClick={() => navigate('/dashboard/documents')}
                className="flex-1"
              >
                View Documents
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upload Tips */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upload Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Ensure your document is clearly formatted for best results</li>
            <li>• PDF files provide the most accurate text extraction</li>
            <li>• Larger documents may take longer to process</li>
            <li>• You can upload multiple documents for comprehensive assessment</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
