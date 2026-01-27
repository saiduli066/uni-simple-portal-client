import { useAuthStore } from "@/store/authStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Users,
    BookOpen,
    Award,
    UserCheck,
    TrendingUp,
    AlertCircle,
    Activity,
    ArrowRight,
    Settings,
    FileText,
    Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

// -------------------- HELPER FUNCTIONS --------------------
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
};

// -------------------- MAIN COMPONENT --------------------
export default function AdminDashboard() {
    const { user } = useAuthStore();

    // Dummy stats - Replace with real API data
    const stats = {
        totalStudents: 1247,
        totalTeachers: 89,
        totalLibrarians: 12,
        activeFellowships: 15,
        pendingApplications: 34,
        booksIssued: 456,
        overdueBooks: 23,
        systemHealth: 98.5,
    };

    // Recent activities
    const recentActivities = [
        {
            id: "1",
            type: "fellowship",
            title: "New Fellowship Application",
            description: "John Doe applied for Research Fellowship",
            time: "5 minutes ago",
            status: "pending",
        },
        {
            id: "2",
            type: "user",
            title: "New Student Registration",
            description: "Sarah Smith registered as a student",
            time: "15 minutes ago",
            status: "success",
        },
        {
            id: "3",
            type: "library",
            title: "Book Overdue Alert",
            description: "23 books are overdue for return",
            time: "1 hour ago",
            status: "warning",
        },
        {
            id: "4",
            type: "fellowship",
            title: "Fellowship Approved",
            description: "Merit Scholarship approved for Alice Johnson",
            time: "2 hours ago",
            status: "success",
        },
    ];

    const getActivityIcon = (type: string) => {
        switch (type) {
            case "fellowship":
                return Award;
            case "user":
                return Users;
            case "library":
                return BookOpen;
            default:
                return Activity;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "success":
                return "text-success";
            case "warning":
                return "text-warning-dark";
            case "pending":
                return "text-info-dark";
            case "error":
                return "text-error";
            default:
                return "text-muted-foreground";
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Greeting Section */}
            <div>
                <h1 className="text-3xl font-bold text-foreground">
                    {getGreeting()}, {user?.name?.split(" ")[0]}! 👋
                </h1>
                <p className="text-muted-foreground mt-1">
                    Welcome to the Admin Control Panel
                </p>
            </div>

            {/* System Health Alert */}
            <Card className="border-l-4 border-l-success bg-success/5">
                <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                        <Activity className="w-5 h-5 text-success" />
                        <div className="flex-1">
                            <p className="font-semibold text-foreground">System Status: Operational</p>
                            <p className="text-sm text-muted-foreground">All services running smoothly • {stats.systemHealth}% uptime</p>
                        </div>
                        <Badge variant="success">Active</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Total Students */}
                <Card className="hover:shadow-card-hover transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    Total Students
                                </p>
                                <p className="text-2xl font-bold text-foreground mt-1">
                                    {stats.totalStudents.toLocaleString()}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-xs">
                            <TrendingUp className="w-3 h-3 text-success" />
                            <span className="text-success">+12%</span>
                            <span className="text-muted-foreground">from last month</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Total Teachers */}
                <Card className="hover:shadow-card-hover transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    Total Teachers
                                </p>
                                <p className="text-2xl font-bold text-foreground mt-1">
                                    {stats.totalTeachers}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-info-light rounded-lg flex items-center justify-center">
                                <UserCheck className="w-6 h-6 text-info-dark" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-xs">
                            <TrendingUp className="w-3 h-3 text-success" />
                            <span className="text-success">+3</span>
                            <span className="text-muted-foreground">new this month</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Active Fellowships */}
                <Card className="hover:shadow-card-hover transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    Active Fellowships
                                </p>
                                <p className="text-2xl font-bold text-foreground mt-1">
                                    {stats.activeFellowships}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-warning-light rounded-lg flex items-center justify-center">
                                <Award className="w-6 h-6 text-warning-dark" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <Link
                                to="/admin/fellowships"
                                className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                                Manage Fellowships
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Pending Applications */}
                <Card className="hover:shadow-card-hover transition-shadow cursor-pointer border-l-4 border-l-warning">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    Pending Applications
                                </p>
                                <p className="text-2xl font-bold text-foreground mt-1">
                                    {stats.pendingApplications}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-warning-light rounded-lg flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-warning-dark" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <Badge variant="warning" className="text-xs">
                                Requires Attention
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Library Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">{stats.booksIssued}</p>
                                <p className="text-sm text-muted-foreground">Books Currently Issued</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-error">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
                                <AlertCircle className="w-5 h-5 text-error" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">{stats.overdueBooks}</p>
                                <p className="text-sm text-muted-foreground">Overdue Books</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-info/10 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-info-dark" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-foreground">{stats.totalLibrarians}</p>
                                <p className="text-sm text-muted-foreground">Active Librarians</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-primary" />
                            Recent Activities
                        </CardTitle>
                        <CardDescription>
                            Latest system activities and notifications
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentActivities.map((activity) => {
                                const Icon = getActivityIcon(activity.type);
                                return (
                                    <div
                                        key={activity.id}
                                        className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                                    >
                                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className={`w-4 h-4 ${getStatusColor(activity.status)}`} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-medium text-sm text-foreground">
                                                {activity.title}
                                            </h4>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {activity.description}
                                            </p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Settings className="w-5 h-5 text-primary" />
                            Quick Actions
                        </CardTitle>
                        <CardDescription>
                            Manage key administrative functions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-3">
                            <Link to="/admin/fellowships">
                                <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                                    <Award className="w-4 h-4" />
                                    <div className="text-left">
                                        <div className="font-semibold">Manage Fellowships</div>
                                        <div className="text-xs text-muted-foreground">Create and review applications</div>
                                    </div>
                                </Button>
                            </Link>

                            <Link to="/admin/users">
                                <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                                    <Users className="w-4 h-4" />
                                    <div className="text-left">
                                        <div className="font-semibold">User Management</div>
                                        <div className="text-xs text-muted-foreground">Add, edit, or remove users</div>
                                    </div>
                                </Button>
                            </Link>

                            <Link to="/admin/library">
                                <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                                    <BookOpen className="w-4 h-4" />
                                    <div className="text-left">
                                        <div className="font-semibold">Library Management</div>
                                        <div className="text-xs text-muted-foreground">Manage books and borrowing</div>
                                    </div>
                                </Button>
                            </Link>

                            <Link to="/admin/reports">
                                <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                                    <FileText className="w-4 h-4" />
                                    <div className="text-left">
                                        <div className="font-semibold">Reports & Analytics</div>
                                        <div className="text-xs text-muted-foreground">View system reports</div>
                                    </div>
                                </Button>
                            </Link>

                            <Link to="/admin/settings">
                                <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                                    <Settings className="w-4 h-4" />
                                    <div className="text-left">
                                        <div className="font-semibold">System Settings</div>
                                        <div className="text-xs text-muted-foreground">Configure system preferences</div>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Stats Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        Today's Overview
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-primary">12</p>
                            <p className="text-xs text-muted-foreground mt-1">New Registrations</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-warning-dark">8</p>
                            <p className="text-xs text-muted-foreground mt-1">Pending Reviews</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-success">45</p>
                            <p className="text-xs text-muted-foreground mt-1">Books Issued</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-lg">
                            <p className="text-2xl font-bold text-info-dark">3</p>
                            <p className="text-xs text-muted-foreground mt-1">Books Returned</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}