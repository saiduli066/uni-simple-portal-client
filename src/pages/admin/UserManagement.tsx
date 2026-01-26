import { useState, useEffect } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  Users, 
  Search, 
  Edit2, 
  Trash2, 
  UserPlus,
  Download,
  Mail,
  Calendar
} from 'lucide-react';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'librarian' | 'admin';
  studentId?: string;
  teacherId?: string;
  librarianId?: string;
  adminId?: string;
  department?: string;
  designation?: string;
  semester?: number;
  cgpa?: number;
  createdAt: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  // Mock data - replace with API call
  useEffect(() => {
    const mockUsers: User[] = [
      {
        _id: '1',
        name: 'Anika Rahman',
        email: 'anika.rahman@university.edu',
        role: 'student',
        studentId: 'S2024001',
        department: 'Computer Science',
        semester: 5,
        cgpa: 3.85,
        createdAt: '2024-01-15'
      },
      {
        _id: '2',
        name: 'Dr. Mahmud Hassan',
        email: 'mahmud.hassan@university.edu',
        role: 'teacher',
        teacherId: 'T2020045',
        department: 'Computer Science',
        designation: 'Associate Professor',
        createdAt: '2020-03-10'
      },
      {
        _id: '3',
        name: 'Farhan Ahmed',
        email: 'farhan.ahmed@university.edu',
        role: 'librarian',
        librarianId: 'L2019012',
        createdAt: '2019-07-22'
      },
      {
        _id: '4',
        name: 'Mehrin Islam',
        email: 'mehrin.islam@university.edu',
        role: 'student',
        studentId: 'S2023089',
        department: 'Electrical Engineering',
        semester: 7,
        cgpa: 3.92,
        createdAt: '2023-02-01'
      },
      {
        _id: '5',
        name: 'Prof. Tasnim Chowdhury',
        email: 'tasnim.chowdhury@university.edu',
        role: 'teacher',
        teacherId: 'T2018023',
        department: 'Mathematics',
        designation: 'Professor',
        createdAt: '2018-08-15'
      },
      {
        _id: '6',
        name: 'Rafiul Karim',
        email: 'rafiul.karim@university.edu',
        role: 'admin',
        adminId: 'A2021001',
        createdAt: '2021-01-05'
      }
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = users;

    // Role filter
    if (roleFilter !== 'all') {
      filtered = filtered.filter(user => user.role === roleFilter);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.studentId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.teacherId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.department?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  }, [searchQuery, roleFilter, users]);

  const getRoleBadgeColor = (role: string) => {
    const colors = {
      student: 'bg-blue-100 text-blue-700',
      teacher: 'bg-green-100 text-green-700',
      librarian: 'bg-purple-100 text-purple-700',
      admin: 'bg-red-100 text-red-700'
    };
    return colors[role as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getUserId = (user: User) => {
    return user.studentId || user.teacherId || user.librarianId || user.adminId || 'N/A';
  };

  const handleDelete = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u._id !== userId));
    }
  };

  const stats = [
    { label: 'Total Users', value: users.length, icon: Users, color: 'text-blue-600' },
    { label: 'Students', value: users.filter(u => u.role === 'student').length, icon: Users, color: 'text-green-600' },
    { label: 'Teachers', value: users.filter(u => u.role === 'teacher').length, icon: Users, color: 'text-purple-600' },
    { label: 'Staff', value: users.filter(u => u.role === 'librarian' || u.role === 'admin').length, icon: Users, color: 'text-orange-600' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600 mt-1">Manage all portal users and their access</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={18} />
            Export
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <UserPlus size={18} />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search by name, email, ID, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={roleFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setRoleFilter('all')}
            >
              All
            </Button>
            <Button
              variant={roleFilter === 'student' ? 'default' : 'outline'}
              onClick={() => setRoleFilter('student')}
            >
              Students
            </Button>
            <Button
              variant={roleFilter === 'teacher' ? 'default' : 'outline'}
              onClick={() => setRoleFilter('teacher')}
            >
              Teachers
            </Button>
            <Button
              variant={roleFilter === 'librarian' ? 'default' : 'outline'}
              onClick={() => setRoleFilter('librarian')}
            >
              Librarians
            </Button>
            <Button
              variant={roleFilter === 'admin' ? 'default' : 'outline'}
              onClick={() => setRoleFilter('admin')}
            >
              Admins
            </Button>
          </div>
        </div>
      </Card>

      {/* Users Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Mail size={14} />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge className={getRoleBadgeColor(user.role)}>
                      {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {getUserId(user)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.department || user.designation || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => alert('Edit user: ' + user.name)}
                        className="flex items-center gap-1"
                      >
                        <Edit2 size={14} />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(user._id)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={14} />
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No users found</p>
            </div>
          )}
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">{filteredUsers.length}</span> of{' '}
          <span className="font-medium">{users.length}</span> users
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
