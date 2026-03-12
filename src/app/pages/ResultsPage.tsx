import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { CheckCircle, XCircle, TrendingUp, ArrowLeft, RotateCcw } from 'lucide-react';

export default function ResultsPage() {
  const { id } = useParams();
  const score = parseInt(localStorage.getItem('lastQuizScore') || '85');

  // Mock results data
  const results = {
    score,
    totalQuestions: 5,
    correctAnswers: Math.round((score / 100) * 5),
    timeSpent: '12 minutes',
    completedDate: new Date().toLocaleDateString(),
    questions: [
      {
        question: 'What is React primarily used for?',
        userAnswer: 'Building user interfaces',
        correctAnswer: 'Building user interfaces',
        isCorrect: true,
        explanation: 'React is a JavaScript library for building user interfaces, particularly single-page applications.',
      },
      {
        question: 'What is JSX in React?',
        userAnswer: 'A syntax extension for JavaScript',
        correctAnswer: 'A syntax extension for JavaScript',
        isCorrect: true,
        explanation: 'JSX is a syntax extension that allows you to write HTML-like code in JavaScript files.',
      },
      {
        question: 'Which hook is used for side effects in React?',
        userAnswer: 'useEffect',
        correctAnswer: 'useEffect',
        isCorrect: true,
        explanation: 'The useEffect hook is used to perform side effects in React functional components.',
      },
      {
        question: 'What is the purpose of keys in React lists?',
        userAnswer: 'To style components',
        correctAnswer: 'To help React identify which items have changed',
        isCorrect: false,
        explanation: 'Keys help React identify which items in a list have changed, been added, or removed, making rendering more efficient.',
      },
      {
        question: 'What does useState return?',
        userAnswer: 'An array with state and setter function',
        correctAnswer: 'An array with state and setter function',
        isCorrect: true,
        explanation: 'useState returns an array with two elements: the current state value and a function to update it.',
      },
    ],
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 90) return 'Excellent!';
    if (score >= 80) return 'Great job!';
    if (score >= 70) return 'Good work!';
    if (score >= 60) return 'Not bad!';
    return 'Keep practicing!';
  };

  return (
    <div className="space-y-6">
      <Link to="/dashboard/documents">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Documents
        </Button>
      </Link>

      {/* Score Overview */}
      <Card className="border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Quiz Results</CardTitle>
          <CardDescription>Completed on {results.completedDate}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-6xl mb-2 ${getScoreColor(results.score)}`}>
              {results.score}%
            </div>
            <p className="text-xl text-gray-600 mb-4">{getScoreMessage(results.score)}</p>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <p className="text-gray-500">Correct Answers</p>
                <p className="text-2xl">
                  {results.correctAnswers}/{results.totalQuestions}
                </p>
              </div>
              <div>
                <p className="text-gray-500">Time Spent</p>
                <p className="text-2xl">{results.timeSpent}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Link to={`/dashboard/assessment/${id}`}>
              <Button variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
            </Link>
            <Link to="/dashboard/documents">
              <Button>View All Documents</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
          <CardDescription>Areas of strength and improvement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="text-green-800">Strengths</h3>
              </div>
              <ul className="text-sm space-y-1 text-green-700">
                <li>• React Basics</li>
                <li>• JSX Understanding</li>
                <li>• Hooks Usage</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                <h3 className="text-yellow-800">Areas to Improve</h3>
              </div>
              <ul className="text-sm space-y-1 text-yellow-700">
                <li>• Keys in Lists</li>
                <li>• Component Optimization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Feedback</CardTitle>
          <CardDescription>Review each question and explanation</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {results.questions.map((q, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                {q.isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <p className="mb-2">
                    <span className="text-sm text-gray-500">Question {index + 1}:</span>
                    <br />
                    {q.question}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">Your Answer: </span>
                      <Badge variant={q.isCorrect ? 'default' : 'destructive'}>
                        {q.userAnswer}
                      </Badge>
                    </div>
                    {!q.isCorrect && (
                      <div>
                        <span className="text-gray-600">Correct Answer: </span>
                        <Badge variant="default">{q.correctAnswer}</Badge>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 bg-gray-50 rounded p-3 text-sm text-gray-700">
                    <strong>Explanation:</strong> {q.explanation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
