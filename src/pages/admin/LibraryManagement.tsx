import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import {
  BookOpen,
  Search,
  Plus,
  Edit2,
  Trash2,
  Download,
  AlertCircle,
  CheckCircle,
  BookMarked,
  Users
} from 'lucide-react';

interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
  publisher: string;
  publishYear: number;
  status: 'available' | 'low-stock' | 'out-of-stock';
}

interface IssuedBook {
  _id: string;
  bookTitle: string;
  studentName: string;
  studentId: string;
  issueDate: string;
  dueDate: string;
  status: 'issued' | 'overdue' | 'returned';
  fine?: number;
}

export default function LibraryManagement() {
  const [activeTab, setActiveTab] = useState<'books' | 'issued'>('books');
  const [searchQuery, setSearchQuery] = useState('');

  const books: Book[] = [
    {
      _id: '1',
      title: 'Data Structures and Algorithms',
      author: 'Thomas H. Cormen',
      isbn: '978-0262033848',
      category: 'Computer Science',
      totalCopies: 15,
      availableCopies: 8,
      publisher: 'MIT Press',
      publishYear: 2009,
      status: 'available'
    },
    {
      _id: '2',
      title: 'Digital Signal Processing',
      author: 'Alan V. Oppenheim',
      isbn: '978-0131988422',
      category: 'Engineering',
      totalCopies: 10,
      availableCopies: 2,
      publisher: 'Pearson',
      publishYear: 2010,
      status: 'low-stock'
    },
    {
      _id: '3',
      title: 'Machine Learning: A Probabilistic Perspective',
      author: 'Kevin P. Murphy',
      isbn: '978-0262018029',
      category: 'Computer Science',
      totalCopies: 8,
      availableCopies: 0,
      publisher: 'MIT Press',
      publishYear: 2012,
      status: 'out-of-stock'
    },
    {
      _id: '4',
      title: 'Introduction to Linear Algebra',
      author: 'Gilbert Strang',
      isbn: '978-0980232776',
      category: 'Mathematics',
      totalCopies: 20,
      availableCopies: 15,
      publisher: 'Wellesley-Cambridge Press',
      publishYear: 2016,
      status: 'available'
    }
  ];

  const issuedBooks: IssuedBook[] = [
    {
      _id: '1',
      bookTitle: 'Data Structures and Algorithms',
      studentName: 'Anika Rahman',
      studentId: 'S2024001',
      issueDate: '2026-01-10',
      dueDate: '2026-01-24',
      status: 'issued'
    },
    {
      _id: '2',
      bookTitle: 'Digital Signal Processing',
      studentName: 'Mehrin Islam',
      studentId: 'S2023089',
      issueDate: '2026-01-05',
      dueDate: '2026-01-19',
      status: 'overdue',
      fine: 50
    },
    {
      _id: '3',
      bookTitle: 'Introduction to Linear Algebra',
      studentName: 'Rafiul Karim',
      studentId: 'S2024045',
      issueDate: '2026-01-08',
      dueDate: '2026-01-22',
      status: 'issued'
    }
  ];

  const stats = [
    { label: 'Total Books', value: '2,456', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
    { label: 'Available', value: '1,832', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
    { label: 'Issued', value: '456', icon: Users, color: 'bg-orange-50 text-orange-600' },
    { label: 'Overdue', value: '23', icon: AlertCircle, color: 'bg-red-50 text-red-600' }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      available: 'bg-green-100 text-green-700',
      'low-stock': 'bg-yellow-100 text-yellow-700',
      'out-of-stock': 'bg-red-100 text-red-700',
      issued: 'bg-blue-100 text-blue-700',
      overdue: 'bg-red-100 text-red-700',
      returned: 'bg-green-100 text-green-700'
    };
    return styles[status as keyof typeof styles];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Library Management</h1>
          <p className="text-gray-600 mt-1">Manage books, issues, and returns</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download size={18} />
            Export
          </Button>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <Plus size={18} />
            Add Book
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
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Card className="p-1">
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'books' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('books')}
            className="flex-1"
          >
            <BookOpen size={18} className="mr-2" />
            Book Inventory
          </Button>
          <Button
            variant={activeTab === 'issued' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('issued')}
            className="flex-1"
          >
            <BookMarked size={18} className="mr-2" />
            Issued Books
          </Button>
        </div>
      </Card>

      {/* Search */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder={`Search ${activeTab === 'books' ? 'books by title, author, ISBN...' : 'issued books by student, book title...'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Books Table */}
      {activeTab === 'books' && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Book Details</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">ISBN</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Availability</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {books.map((book) => (
                  <tr key={book._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{book.title}</div>
                        <div className="text-sm text-gray-600">by {book.author}</div>
                        <div className="text-xs text-gray-500">{book.publisher} ({book.publishYear})</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{book.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{book.isbn}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="font-medium">{book.availableCopies} / {book.totalCopies}</div>
                      <div className="text-xs text-gray-500">Available / Total</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={getStatusBadge(book.status)}>
                        {book.status.replace('-', ' ').toUpperCase()}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit2 size={14} />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Issued Books Table */}
      {activeTab === 'issued' && (
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Book Title</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Issue Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {issuedBooks.map((issue) => (
                  <tr key={issue._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{issue.bookTitle}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{issue.studentName}</div>
                      <div className="text-sm text-gray-600">{issue.studentId}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(issue.issueDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(issue.dueDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={getStatusBadge(issue.status)}>
                        {issue.status.toUpperCase()}
                      </Badge>
                      {issue.fine && (
                        <div className="text-xs text-red-600 mt-1">Fine: ৳{issue.fine}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm" className="bg-green-50 text-green-700">
                        Mark Returned
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
