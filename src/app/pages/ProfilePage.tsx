import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { User, Mail, Calendar, Award } from 'lucide-react';
import { toast } from 'sonner';

export default function ProfilePage() {
  const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
  const userName = localStorage.getItem('userName') || 'John Doe';
  
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);

  const handleSave = () => {
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    toast.success('Profile updated successfully!');
  };

  // Mock statistics
  const stats = {
    memberSince: 'January 2026',
    documentsUploaded: 12,
    assessmentsTaken: 24,
    averageScore: 85,
    totalStudyTime: '48 hours',
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl">Profile</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarFallback className="text-2xl">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Member since {stats.memberSince}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="w-4 h-4" />
              <span>Average Score: {stats.averageScore}%</span>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <Tabs defaultValue="info">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">Profile Information</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="info" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button onClick={handleSave}>Save Changes</Button>
              </TabsContent>

              <TabsContent value="stats" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Documents Uploaded</CardDescription>
                      <CardTitle className="text-3xl">{stats.documentsUploaded}</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Assessments Taken</CardDescription>
                      <CardTitle className="text-3xl">{stats.assessmentsTaken}</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Average Score</CardDescription>
                      <CardTitle className="text-3xl">{stats.averageScore}%</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardDescription>Total Study Time</CardDescription>
                      <CardTitle className="text-3xl">{stats.totalStudyTime}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'Completed assessment', document: 'React Fundamentals', time: '2 hours ago', score: 85 },
              { action: 'Uploaded document', document: 'TypeScript Guide', time: '1 day ago' },
              { action: 'Completed assessment', document: 'JavaScript Basics', time: '2 days ago', score: 90 },
              { action: 'Uploaded document', document: 'CSS Advanced', time: '3 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p>{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.document}</p>
                </div>
                <div className="text-right">
                  {activity.score && (
                    <p className="text-sm">
                      Score: <span className="text-green-600">{activity.score}%</span>
                    </p>
                  )}
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
