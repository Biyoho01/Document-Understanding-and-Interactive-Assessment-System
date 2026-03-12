import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import { Label } from '@/app/components/ui/label';
import { Progress } from '@/app/components/ui/progress';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function AssessmentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  // Mock quiz data
  const quiz = {
    title: 'React Fundamentals Assessment',
    duration: 30,
    totalQuestions: 10,
    questions: [
      {
        id: 1,
        question: 'What is React primarily used for?',
        options: [
          'Building mobile applications',
          'Building user interfaces',
          'Database management',
          'Server-side programming',
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: 'What is JSX in React?',
        options: [
          'A programming language',
          'A syntax extension for JavaScript',
          'A testing framework',
          'A state management library',
        ],
        correctAnswer: 1,
      },
      {
        id: 3,
        question: 'Which hook is used for side effects in React?',
        options: [
          'useState',
          'useContext',
          'useEffect',
          'useReducer',
        ],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: 'What is the purpose of keys in React lists?',
        options: [
          'To style components',
          'To help React identify which items have changed',
          'To store data',
          'To handle events',
        ],
        correctAnswer: 1,
      },
      {
        id: 5,
        question: 'What does useState return?',
        options: [
          'A single value',
          'An array with state and setter function',
          'An object',
          'A promise',
        ],
        correctAnswer: 1,
      },
    ],
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      toast.error('Please select an answer');
      return;
    }
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < quiz.questions.length) {
      toast.error('Please answer all questions');
      return;
    }
    
    // Calculate score
    let correctAnswers = 0;
    quiz.questions.forEach((q, index) => {
      if (parseInt(answers[index]) === q.correctAnswer) {
        correctAnswers++;
      }
    });
    const score = Math.round((correctAnswers / quiz.questions.length) * 100);
    
    // Store results and navigate
    localStorage.setItem('lastQuizScore', score.toString());
    toast.success('Quiz submitted successfully!');
    navigate(`/dashboard/results/${id}`);
  };

  if (!started) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{quiz.title}</CardTitle>
            <CardDescription>Review the instructions before starting</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="mb-1">Quiz Instructions</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Total Questions: {quiz.totalQuestions}</li>
                  <li>• Estimated Duration: {quiz.duration} minutes</li>
                  <li>• You can navigate between questions</li>
                  <li>• Make sure to answer all questions before submitting</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3>Assessment Coverage</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>React Basics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Hooks & State</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Component Structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Best Practices</span>
                </div>
              </div>
            </div>

            <Button onClick={handleStart} size="lg" className="w-full">
              Start Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const currentQ = quiz.questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} />
          </div>
        </CardContent>
      </Card>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Question {currentQuestion + 1}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">{currentQ.question}</p>

          <RadioGroup
            value={answers[currentQuestion]}
            onValueChange={(value) => handleAnswer(currentQuestion, value)}
          >
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            {currentQuestion === quiz.questions.length - 1 ? (
              <Button onClick={handleSubmit}>
                Submit Quiz
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
