import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Download,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function Reports() {
  const stats = [
    {
      label: 'Total Users',
      value: '1,348',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      label: 'Active Fellowships',
      value: '15',
      change: '+3',
      trend: 'up',
      icon: Award,
      color: 'bg-green-50 text-green-600'
    },
    {
      label: 'Books Issued',
      value: '456',
      change: '-8.2%',
      trend: 'down',
      icon: BookOpen,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      label: 'Applications',
      value: '89',
      change: '+23.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  const recentActivities = [
    { type: 'User Registration', count: 23, time: 'Last 24 hours', color: 'bg-blue-100 text-blue-700' },
    { type: 'Fellowship Applications', count: 12, time: 'Last 7 days', color: 'bg-green-100 text-green-700' },
    { type: 'Books Borrowed', count: 45, time: 'This week', color: 'bg-purple-100 text-purple-700' },
    { type: 'Overdue Returns', count: 8, time: 'Active', color: 'bg-red-100 text-red-700' }
  ];

  const topDepartments = [
    { name: 'Computer Science', students: 456, percentage: 85 },
    { name: 'Electrical Engineering', students: 389, percentage: 72 },
    { name: 'Mechanical Engineering', students: 345, percentage: 65 },
    { name: 'Civil Engineering', students: 298, percentage: 55 },
    { name: 'Mathematics', students: 234, percentage: 44 }
  ];

  const monthlyData = [
    { month: 'Jan', registrations: 45, applications: 23, books: 120 },
    { month: 'Feb', registrations: 52, applications: 28, books: 135 },
    { month: 'Mar', registrations: 48, applications: 31, books: 142 },
    { month: 'Apr', registrations: 61, applications: 35, books: 156 },
    { month: 'May', registrations: 55, applications: 29, books: 148 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Comprehensive system insights and statistics</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={18} />
            Last 30 Days
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Download size={18} />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                {stat.change}
              </div>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Activities</h2>
          <Button variant="outline" size="sm">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="p-4 rounded-lg border hover:shadow-md transition-shadow">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${activity.color}`}>
                {activity.type}
              </div>
              <p className="text-3xl font-bold mb-1">{activity.count}</p>
              <p className="text-sm text-gray-600">{activity.time}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Departments */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Top Departments by Enrollment</h2>
          <div className="space-y-4">
            {topDepartments.map((dept, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{dept.name}</span>
                  <span className="text-sm text-gray-600">{dept.students} students</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${dept.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Monthly Trends */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Monthly Trends</h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">New Registrations</span>
                <span className="text-sm text-blue-600 font-semibold">+23% this month</span>
              </div>
              <div className="flex items-end gap-2 h-32">
                {monthlyData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors relative group">
                      <div
                        className="transition-all duration-300"
                        style={{ height: `${(data.registrations / 70) * 100}%` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.registrations} registrations
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-700">Fellowship Applications</span>
                <span className="text-sm text-green-600 font-semibold">+17% this month</span>
              </div>
              <div className="flex items-end gap-2 h-32">
                {monthlyData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-green-500 rounded-t hover:bg-green-600 transition-colors relative group">
                      <div
                        className="transition-all duration-300"
                        style={{ height: `${(data.applications / 40) * 100}%` }}
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.applications} applications
                      </div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* System Health */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">System Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Server Uptime</span>
              <span className="text-sm font-semibold text-green-600">99.9%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '99.9%' }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Database Usage</span>
              <span className="text-sm font-semibold text-blue-600">67%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Storage Capacity</span>
              <span className="text-sm font-semibold text-orange-600">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
