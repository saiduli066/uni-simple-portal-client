import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Mail,
    ExternalLink,
    Github,
    Code,
    Cloud,
    Briefcase,
    GraduationCap,
    Laptop,
    Shield,
    Database,
    Zap,
    Globe,
} from "lucide-react";

interface Benefit {
    id: string;
    name: string;
    provider: string;
    description: string;
    icon: React.ElementType;
    category: "Development" | "Cloud" | "Design" | "Learning" | "Security" | "Productivity";
    link: string;
    value?: string;
    popular?: boolean;
}

export default function EmailBenefits() {
    const benefits: Benefit[] = [
        {
            id: "1",
            name: "GitHub Student Developer Pack",
            provider: "GitHub",
            description: "Access to premium developer tools including GitHub Pro, unlimited private repositories, GitHub Copilot, and over 100+ free tools and services.",
            icon: Github,
            category: "Development",
            link: "https://education.github.com/pack",
            value: "$200k+ value",
            popular: true,
        },
        {
            id: "2",
            name: "Microsoft Azure for Students",
            provider: "Microsoft",
            description: "$100 in Azure credits, access to popular Azure services for free, and no credit card required. Perfect for cloud computing projects.",
            icon: Cloud,
            category: "Cloud",
            link: "https://azure.microsoft.com/en-us/free/students/",
            value: "$100 credit",
            popular: true,
        },
        {
            id: "3",
            name: "AWS Educate",
            provider: "Amazon",
            description: "Get AWS promotional credits, free training content, and hands-on labs. Access to AWS services and career resources.",
            icon: Cloud,
            category: "Cloud",
            link: "https://aws.amazon.com/education/awseducate/",
            value: "$50-100 credit",
        },
        {
            id: "4",
            name: "JetBrains Student License",
            provider: "JetBrains",
            description: "Free access to all JetBrains IDEs including IntelliJ IDEA, PyCharm, WebStorm, and more. Professional developer tools at no cost.",
            icon: Code,
            category: "Development",
            link: "https://www.jetbrains.com/community/education/#students",
            value: "$649/year value",
            popular: true,
        },
        {
            id: "5",
            name: "Figma Education",
            provider: "Figma",
            description: "Free Figma Professional plan for students and educators. Collaborate on design projects with unlimited files and version history.",
            icon: Laptop,
            category: "Design",
            link: "https://www.figma.com/education/",
            value: "$144/year value",
        },
        {
            id: "6",
            name: "Canva Pro for Education",
            provider: "Canva",
            description: "Free access to Canva Pro features including premium templates, stock photos, and design tools for presentations and projects.",
            icon: Laptop,
            category: "Design",
            link: "https://www.canva.com/education/",
            value: "$119/year value",
        },
        {
            id: "7",
            name: "Notion Education Plan",
            provider: "Notion",
            description: "Free Notion Personal Pro for students. Organize notes, projects, and coursework with unlimited blocks and file uploads.",
            icon: Briefcase,
            category: "Productivity",
            link: "https://www.notion.so/product/notion-for-education",
            value: "$48/year value",
        },
        {
            id: "8",
            name: "DigitalOcean Student",
            provider: "DigitalOcean",
            description: "$200 credit for cloud hosting. Build and deploy web applications on their cloud infrastructure platform.",
            icon: Cloud,
            category: "Cloud",
            link: "https://www.digitalocean.com/github-students",
            value: "$200 credit",
        },
        {
            id: "9",
            name: "Namecheap Domain & SSL",
            provider: "Namecheap",
            description: "Free .me domain for 1 year, SSL certificate, and other hosting services. Perfect for building your portfolio website.",
            icon: Globe,
            category: "Development",
            link: "https://nc.me/",
            value: "$30 value",
        },
        {
            id: "10",
            name: "Unity Student Plan",
            provider: "Unity",
            description: "Free access to Unity Pro and Unity Teams Advanced for game development. Create 2D and 3D games with professional tools.",
            icon: Laptop,
            category: "Development",
            link: "https://unity.com/products/unity-student",
            value: "$400/year value",
        },
        {
            id: "11",
            name: "Autodesk Education",
            provider: "Autodesk",
            description: "Free access to AutoCAD, Maya, 3ds Max, Fusion 360, and other professional design software for students.",
            icon: Laptop,
            category: "Design",
            link: "https://www.autodesk.com/education/free-software/featured",
            value: "$1000+ value",
        },
        {
            id: "12",
            name: "MongoDB Atlas Student",
            provider: "MongoDB",
            description: "Free MongoDB Atlas credits and access to MongoDB University courses. Learn database management with hands-on experience.",
            icon: Database,
            category: "Development",
            link: "https://www.mongodb.com/students",
            value: "$200 credit",
        },
        {
            id: "13",
            name: "Google Cloud for Students",
            provider: "Google",
            description: "$300 in Google Cloud credits to use across all GCP services. Build and deploy applications on Google's infrastructure.",
            icon: Cloud,
            category: "Cloud",
            link: "https://cloud.google.com/edu/students",
            value: "$300 credit",
        },
        {
            id: "14",
            name: "1Password Student",
            provider: "1Password",
            description: "Free 1Password account for students. Secure password manager to keep all your credentials safe and organized.",
            icon: Shield,
            category: "Security",
            link: "https://www.1password.com/students",
            value: "$36/year value",
        },
        {
            id: "15",
            name: "DataCamp Premium",
            provider: "DataCamp",
            description: "Free 3-month DataCamp subscription. Learn data science, machine learning, Python, R, SQL through interactive courses.",
            icon: GraduationCap,
            category: "Learning",
            link: "https://www.datacamp.com/github-students",
            value: "$75 value",
        },
        {
            id: "16",
            name: "Heroku Student",
            provider: "Heroku",
            description: "Free Heroku credits via GitHub Student Pack. Deploy and host your web applications with ease on Heroku's platform.",
            icon: Cloud,
            category: "Cloud",
            link: "https://www.heroku.com/github-students",
            value: "$13/month credit",
        },
        {
            id: "17",
            name: "Bootstrap Studio",
            provider: "Bootstrap Studio",
            description: "Free Bootstrap Studio license for students. Design and prototype responsive websites with a powerful desktop application.",
            icon: Code,
            category: "Development",
            link: "https://bootstrapstudio.io/pages/student-license",
            value: "$60 value",
        },
        {
            id: "18",
            name: "Termius Student",
            provider: "Termius",
            description: "Free Termius Premium for students. Modern SSH client with synchronization across all devices and secure credential storage.",
            icon: Zap,
            category: "Development",
            link: "https://termius.com/education",
            value: "$100/year value",
        },
    ];

    const categories = ["All", "Development", "Cloud", "Design", "Learning", "Security", "Productivity"];
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredBenefits = selectedCategory === "All" 
        ? benefits 
        : benefits.filter(b => b.category === selectedCategory);

    const getCategoryIcon = (category: Benefit["category"]) => {
        switch (category) {
            case "Development":
                return Code;
            case "Cloud":
                return Cloud;
            case "Design":
                return Laptop;
            case "Learning":
                return GraduationCap;
            case "Security":
                return Shield;
            case "Productivity":
                return Briefcase;
            default:
                return Mail;
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
                <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Mail className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-foreground mb-2">
                                University Email Benefits
                            </h1>
                            <p className="text-muted-foreground text-lg mb-4">
                                Your .edu email unlocks over $200,000 worth of premium tools, services, and learning resources absolutely free!
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Badge variant="success" className="text-sm px-3 py-1">
                                    18+ Premium Tools
                                </Badge>
                                <Badge variant="info" className="text-sm px-3 py-1">
                                    $200,000+ Value
                                </Badge>
                                <Badge variant="warning" className="text-sm px-3 py-1">
                                    100% Free for Students
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Category Filter */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(category)}
                                className="transition-all"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBenefits.map((benefit) => {
                    const Icon = benefit.icon;
                    const CategoryIcon = getCategoryIcon(benefit.category);
                    
                    return (
                        <Card 
                            key={benefit.id} 
                            className="hover:shadow-card-hover transition-all duration-300 relative overflow-hidden group"
                        >
                            {benefit.popular && (
                                <div className="absolute top-3 right-3 z-10">
                                    <Badge variant="warning" className="text-xs">
                                        ⭐ Popular
                                    </Badge>
                                </div>
                            )}
                            
                            <CardHeader className="pb-3">
                                <div className="flex items-start gap-3 mb-2">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <CardTitle className="text-lg leading-tight mb-1">
                                            {benefit.name}
                                        </CardTitle>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <p className="text-xs text-muted-foreground">
                                                by {benefit.provider}
                                            </p>
                                            <Badge variant="secondary" className="text-xs">
                                                <CategoryIcon className="w-3 h-3 mr-1" />
                                                {benefit.category}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                                {benefit.value && (
                                    <Badge variant="success" className="text-xs w-fit">
                                        {benefit.value}
                                    </Badge>
                                )}
                            </CardHeader>
                            
                            <CardContent className="pb-4">
                                <CardDescription className="text-sm mb-4 line-clamp-3">
                                    {benefit.description}
                                </CardDescription>
                                
                                <a 
                                    href={benefit.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    <Button 
                                        variant="outline" 
                                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                        size="sm"
                                    >
                                        Claim Benefit
                                        <ExternalLink className="w-3 h-3 ml-2" />
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* How to Claim Section */}
            <Card className="border-2 border-primary/30">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        How to Claim These Benefits?
                    </CardTitle>
                    <CardDescription>
                        Follow these simple steps to unlock your student benefits
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Use Your University Email</h4>
                                <p className="text-sm text-muted-foreground">
                                    Most services require verification with your .edu email address. Make sure you use your official university email when signing up.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Click on "Claim Benefit"</h4>
                                <p className="text-sm text-muted-foreground">
                                    Click the button on any benefit card above to visit the provider's website and start the registration process.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Complete Verification</h4>
                                <p className="text-sm text-muted-foreground">
                                    Some services may require student ID or additional verification. Follow the provider's instructions to complete the verification process.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Start Using!</h4>
                                <p className="text-sm text-muted-foreground">
                                    Once verified, you'll have full access to the premium features. Most benefits are valid throughout your academic career.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-info/10 rounded-lg border border-info/30">
                        <p className="text-sm text-info-dark">
                            <strong>💡 Pro Tip:</strong> Start with the GitHub Student Developer Pack - it includes many of these benefits and more in one place!
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
