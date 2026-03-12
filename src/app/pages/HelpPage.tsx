import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { ArrowLeft, BookOpen, Upload, FileText, Brain, Award } from 'lucide-react';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/dashboard">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl mb-4">Help & Support</h1>
            <p className="text-xl text-gray-600">
              Learn how to use the Assessment Platform effectively
            </p>
          </div>

          {/* System Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">System Overview</CardTitle>
              <CardDescription>
                Understanding the Document-Based Assessment Platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                The Document-Based Assessment Platform is an intelligent learning tool that helps you study
                effectively by generating custom assessments from your documents. Upload your study materials,
                and our AI will analyze the content to create relevant quizzes that test your understanding.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex gap-3">
                  <Upload className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1">Upload Documents</h3>
                    <p className="text-sm text-gray-600">
                      Upload PDFs, Word documents, or text files containing your study materials
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Brain className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1">AI Analysis</h3>
                    <p className="text-sm text-gray-600">
                      Our AI analyzes your documents to extract key concepts and topics
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FileText className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1">Generate Quizzes</h3>
                    <p className="text-sm text-gray-600">
                      Automatically create assessments based on your document content
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="mb-1">Track Progress</h3>
                    <p className="text-sm text-gray-600">
                      Monitor your performance and identify areas for improvement
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Usage Guidelines</CardTitle>
              <CardDescription>Best practices for optimal results</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I upload a document?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Navigate to the "Upload Document" page from the dashboard</li>
                      <li>Click on the upload area or drag and drop your file</li>
                      <li>Select a file (PDF, DOC, DOCX, or TXT format, max 10MB)</li>
                      <li>Click "Upload Document" to start the upload process</li>
                      <li>Wait for the processing to complete</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What file formats are supported?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    The platform supports the following file formats:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>PDF (.pdf) - Recommended for best results</li>
                      <li>Microsoft Word (.doc, .docx)</li>
                      <li>Plain Text (.txt)</li>
                    </ul>
                    <p className="mt-2">Maximum file size is 10MB.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I take an assessment?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Go to "My Documents" and select a document</li>
                      <li>Click "Generate Assessment" or "Start Quiz"</li>
                      <li>Review the quiz instructions and coverage</li>
                      <li>Click "Start Assessment" to begin</li>
                      <li>Answer each question by selecting an option</li>
                      <li>Use "Next" and "Previous" to navigate between questions</li>
                      <li>Click "Submit Quiz" when you're done</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How are assessments generated?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Our AI system analyzes your document to:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Identify key concepts and topics</li>
                      <li>Extract important information</li>
                      <li>Generate relevant questions with multiple-choice options</li>
                      <li>Create explanations for each answer</li>
                    </ul>
                    <p className="mt-2">
                      The questions are designed to test understanding of the material at various difficulty levels.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What do the results show?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    After completing an assessment, you'll receive:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Your overall score as a percentage</li>
                      <li>Number of correct vs. incorrect answers</li>
                      <li>Time spent on the assessment</li>
                      <li>Detailed feedback for each question</li>
                      <li>Explanations for correct answers</li>
                      <li>Performance insights and areas to improve</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I retake assessments?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Yes! You can retake assessments as many times as you'd like. Each attempt may generate
                    different questions to help reinforce learning. Your best score and most recent attempt
                    are tracked in your profile.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>How do I track my progress?</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    Your progress is tracked automatically:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>View overall statistics on your dashboard</li>
                      <li>Check assessment history for each document</li>
                      <li>Monitor your average scores over time</li>
                      <li>Review detailed results and feedback</li>
                      <li>Access performance insights in your profile</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Tips for better results</AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Upload well-formatted, clearly written documents for better analysis</li>
                      <li>Ensure your documents contain substantive educational content</li>
                      <li>PDF files generally provide the most accurate text extraction</li>
                      <li>Take assessments in a distraction-free environment</li>
                      <li>Review explanations carefully to reinforce learning</li>
                      <li>Retake assessments after studying to track improvement</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
              <CardDescription>Get in touch with our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                If you have questions that aren't answered here, or if you encounter any issues,
                please don't hesitate to contact our support team.
              </p>
              <div className="flex gap-4">
                <Button>Contact Support</Button>
                <Button variant="outline">View Tutorials</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}