const mongoose = require('mongoose');
const EmailBenefit = require('./models/EmailBenefit');
require('dotenv').config();

const seedData = [
    {
        name: 'GitHub Student Developer Pack',
        provider: 'GitHub Education',
        description: 'Free access to developer tools, cloud services, and learning resources. Includes GitHub Pro, Azure credits, domain names, and more.',
        category: 'Development',
        link: 'https://education.github.com/pack',
        value: '$200,000+',
        popular: true
    },
    {
        name: 'Azure for Students',
        provider: 'Microsoft',
        description: '$100 Azure credit and free services without credit card. Perfect for cloud computing projects.',
        category: 'Cloud',
        link: 'https://azure.microsoft.com/en-us/free/students/',
        value: '$100',
        popular: true
    },
    {
        name: 'AWS Educate',
        provider: 'Amazon Web Services',
        description: 'Free cloud computing resources and training. Get AWS credits and hands-on experience.',
        category: 'Cloud',
        link: 'https://aws.amazon.com/education/awseducate/',
        value: '$100+',
        popular: true
    },
    {
        name: 'JetBrains Student Pack',
        provider: 'JetBrains',
        description: 'Free access to all JetBrains IDEs including IntelliJ IDEA, PyCharm, WebStorm, and more.',
        category: 'Development',
        link: 'https://www.jetbrains.com/student/',
        value: '$649/year',
        popular: true
    },
    {
        name: 'Canva Pro for Education',
        provider: 'Canva',
        description: 'Free Canva Pro account for students. Create stunning designs, presentations, and graphics.',
        category: 'Design',
        link: 'https://www.canva.com/education/',
        value: '$119.99/year',
        popular: true
    },
    {
        name: 'Notion for Education',
        provider: 'Notion',
        description: 'Free Notion Plus plan for students. Organize notes, projects, and collaborate with classmates.',
        category: 'Productivity',
        link: 'https://www.notion.so/product/notion-for-education',
        value: '$96/year',
        popular: false
    },
    {
        name: 'Figma Education',
        provider: 'Figma',
        description: 'Free Figma Professional features for students. Design UI/UX projects and collaborate in real-time.',
        category: 'Design',
        link: 'https://www.figma.com/education/',
        value: '$144/year',
        popular: true
    },
    {
        name: 'Coursera Plus',
        provider: 'Coursera',
        description: 'Access thousands of courses from top universities. Learn programming, data science, business, and more.',
        category: 'Learning',
        link: 'https://www.coursera.org/courseraplus',
        value: '$399/year',
        popular: false
    },
    {
        name: 'DataCamp for Students',
        provider: 'DataCamp',
        description: 'Free access to data science and analytics courses. Learn Python, R, SQL, and machine learning.',
        category: 'Learning',
        link: 'https://www.datacamp.com/groups/education',
        value: '$300/year',
        popular: false
    },
    {
        name: 'Adobe Creative Cloud',
        provider: 'Adobe',
        description: '60% discount on Creative Cloud All Apps plan. Access Photoshop, Illustrator, Premiere Pro, and more.',
        category: 'Design',
        link: 'https://www.adobe.com/creativecloud/buy/students.html',
        value: '$19.99/month',
        popular: true
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        await EmailBenefit.deleteMany({});
        console.log('Cleared existing data');

        await EmailBenefit.insertMany(seedData);
        console.log('Seeded', seedData.length, 'email benefits');

        mongoose.connection.close();
        console.log('Database seeded successfully!');
    } catch (err) {
        console.error('Seed error:', err);
        process.exit(1);
    }
}

seedDatabase();
