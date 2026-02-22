export interface Course {
  id: string;
  title: string;
  description: string;
  modules: {
    title: string;
    lessons: string[];
  }[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

export const COURSES: Course[] = [
  {
    id: 'selenium-java',
    title: 'Mastering Selenium with Java',
    description: 'A comprehensive journey from core Java basics to advanced Selenium framework architecture.',
    duration: '12 Weeks',
    level: 'Beginner',
    tags: ['Java', 'Selenium', 'TestNG', 'Maven'],
    modules: [
      {
        title: 'Core Java for Testers',
        lessons: ['OOPS Concepts', 'Collections Framework', 'Exception Handling', 'Java Streams API']
      },
      {
        title: 'Selenium WebDriver Deep Dive',
        lessons: ['Locators Strategy', 'Synchronization', 'Handling Dynamic Elements', 'Action Class & JS Executor']
      },
      {
        title: 'Framework Design',
        lessons: ['Page Object Model', 'Data Driven Testing', 'Hybrid Frameworks', 'Parallel Execution']
      }
    ]
  },
  {
    id: 'playwright-ts',
    title: 'Modern Automation with Playwright',
    description: 'Learn the next generation of web automation using Playwright and TypeScript.',
    duration: '8 Weeks',
    level: 'Intermediate',
    tags: ['TypeScript', 'Playwright', 'CI/CD', 'API Testing'],
    modules: [
      {
        title: 'TypeScript Essentials',
        lessons: ['Types & Interfaces', 'Async/Await', 'Modules', 'Generics']
      },
      {
        title: 'Playwright Core',
        lessons: ['Auto-waiting', 'Network Interception', 'Trace Viewer', 'Multi-browser Testing']
      },
      {
        title: 'Advanced Patterns',
        lessons: ['Component Testing', 'Visual Regression', 'API Mocking', 'GitHub Actions Integration']
      }
    ]
  },
  {
    id: 'api-automation',
    title: 'API Test Automation Excellence',
    description: 'Master REST and GraphQL API testing using industry-standard tools and libraries.',
    duration: '6 Weeks',
    level: 'Intermediate',
    tags: ['REST Assured', 'Postman', 'GraphQL', 'JSON Schema'],
    modules: [
      {
        title: 'API Fundamentals',
        lessons: ['HTTP Protocol', 'REST Principles', 'Authentication (OAuth2, JWT)', 'Status Codes']
      },
      {
        title: 'REST Assured Mastery',
        lessons: ['Request/Response Specification', 'Serialization/Deserialization', 'JSONPath & XMLPath', 'Filters']
      },
      {
        title: 'Contract Testing',
        lessons: ['Pact Basics', 'Schema Validation', 'Mocking Services', 'Performance Testing Basics']
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Senior QA Engineer at TechFlow',
    content: 'The Selenium course completely changed my career trajectory. The focus on framework architecture rather than just tool usage is what sets Beyond Testing Standards apart.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'SDET at CloudScale',
    content: 'Playwright was a mystery to me until I joined this program. The hands-on projects and real-world scenarios made the learning curve feel effortless.',
    avatar: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    name: 'Priya Sharma',
    role: 'QA Lead at InnovateX',
    content: 'The API testing module is incredibly detailed. I was able to implement a full automation suite for our microservices within weeks of finishing the course.',
    avatar: 'https://picsum.photos/seed/priya/100/100'
  }
];
