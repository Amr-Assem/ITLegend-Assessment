export const courseData = {
    // Course information
    title: "Starting SEO as your Home-Based Business",
    videoUrl: "https://youtu.be/PICj5tr9hcc",
    videoThumbnail: "/video.jpg",
    completionProgress: 63,

    // Course Materials
    courseMaterials: {
        duration: "3 Weeks",
        lessons: 8,
        enrolled: 65,
        language: "English",
    },

    // Course Content
    courseContent: [
        {
            id: 1,
            heading: "Week 1-4",
            description:
                "Advanced story telling techniques for writers: Personas, Characters & Plots",
            items: [
                { title: "Introduction", path: "/sample.pdf" },
                { title: "Course Overview", path: "/sample.pdf" },
                {
                    title: "Course Overview",
                    quiz: {
                        questions: 5,
                        minutes: 10,
                        quizData: {
                            id: "quiz-1",
                            title: "Course Overview Quiz",
                            questions: [
                                {
                                    id: 1,
                                    question: "What is the primary goal of SEO?",
                                    options: ["Increase website traffic", "Improve user experience", "Boost search rankings", "All of the above"],
                                    correctAnswer: 3
                                },
                                {
                                    id: 2,
                                    question: "Which HTML tag is most important for SEO?",
                                    options: ["<div>", "<title>", "<span>", "<table>"],
                                    correctAnswer: 1
                                },
                                {
                                    id: 3,
                                    question: "What does SERP stand for?",
                                    options: ["Search Engine Results Page", "Server Engine Response Protocol", "Site Engine Rank Position", "Search Entry Ranking Process"],
                                    correctAnswer: 0
                                },
                                {
                                    id: 4,
                                    question: "How often should you update your website content?",
                                    options: ["Never", "Once a year", "Regularly", "Only when broken"],
                                    correctAnswer: 2
                                },
                                {
                                    id: 5,
                                    question: "What is a backlink?",
                                    options: ["A broken link", "A link from another website to yours", "A link to your homepage", "A redirect link"],
                                    correctAnswer: 1
                                }
                            ]
                        }
                    },
                },
                { title: "Course Exercise / Reference Files", path: "/sample.pdf" },
                { title: "Code Editor Installation (Optional if you have one)", path: "/sample.pdf" },
                { title: "Embedding PHP in HTML", path: "/sample.pdf" },
            ],
        },
        {
            id: 2,
            heading: "Week 5-8",
            description:
                "Advanced story telling techniques for writers: Personas, Characters & Plots",
            items: [
                { title: "Defining Functions", path: "/sample.pdf" },
                { title: "Function Parameters", path: "/sample.pdf" },
                {
                    title: "Return Values From Functions",
                    quiz: {
                        questions: 2,
                        minutes: 15,
                        quizData: {
                            id: "quiz-2",
                            title: "Functions Quiz",
                            questions: [
                                {
                                    id: 1,
                                    question: "What keyword is used to return a value from a function?",
                                    options: ["return", "output", "result", "send"],
                                    correctAnswer: 0
                                },
                                {
                                    id: 2,
                                    question: "Can a function return multiple values directly?",
                                    options: ["Yes, always", "No, never", "Only with arrays/objects", "Only in strict mode"],
                                    correctAnswer: 2
                                }
                            ]
                        }
                    },
                },
                { title: "Global Variable and Scope", path: "/sample.pdf" },
                { title: "Newer Way of Creating a Constant", path: "/sample.pdf" },
                { title: "Constants", path: "/sample.pdf" },
            ],
        },
        {
            id: 3,
            heading: "Week 5-8",
            description:
                "Advanced story telling techniques for writers: Personas, Characters & Plots",
            items: [
                { title: "Defining Functions", path: "/sample.pdf" },
                { title: "Function Parameters", path: "/sample.pdf" },
                {
                    title: "Return Values From Functions",
                    quiz: {
                        questions: 2,
                        minutes: 15,
                        quizData: {
                            id: "quiz-2",
                            title: "Functions Quiz",
                            questions: [
                                {
                                    id: 1,
                                    question: "What keyword is used to return a value from a function?",
                                    options: ["return", "output", "result", "send"],
                                    correctAnswer: 0
                                },
                                {
                                    id: 2,
                                    question: "Can a function return multiple values directly?",
                                    options: ["Yes, always", "No, never", "Only with arrays/objects", "Only in strict mode"],
                                    correctAnswer: 2
                                }
                            ]
                        }
                    },
                },
                { title: "Global Variable and Scope", path: "/sample.pdf" },
                { title: "Newer Way of Creating a Constant", path: "/sample.pdf" },
                { title: "Constants", path: "/sample.pdf" },
            ],
        },
    ],

    // Comments
    comments: [
        {
            id: 1,
            name: "Student Name Goes Here",
            date: "Oct 10, 2021",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/images/comment-01.jpg",
        },
        {
            id: 2,
            name: "Student Name Goes Here",
            date: "Oct 15, 2021",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/images/comment-02.jpg",
        },
        {
            id: 3,
            name: "Student Name Goes Here",
            date: "Oct 19, 2021",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/images/comment-03.jpg",
        },
    ],

};
