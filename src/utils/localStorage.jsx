const employees = [
    {
        id: 1,
        firstname: "Arjun",
        email: "employee1@example.com",
        password: "123",
        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 0,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Client Onboarding Sheet",
                description: "Draft a structured onboarding checklist for new clients joining the service.",
                date: "2025-11-24",
                category: "Operations"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Weekly Task Prioritization",
                description: "Prepare a weekly priority list for the operations team.",
                date: "2025-11-26",
                category: "Management"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Review Vendor Contract",
                description: "Evaluate the pending vendor renewal contract and note discrepancies.",
                date: "2025-11-09",
                category: "Legal"
            }
        ]
    },

    {
        id: 2,
        firstname: "Rohan",
        email: "employee2@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 0,
            completed: 2,
            failed: 1
        },
        tasks: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Update UI Components",
                description: "Refactor outdated UI components to match the new design guidelines.",
                date: "2025-11-12",
                category: "Frontend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Prepare Branding Assets",
                description: "Deliver the updated branding kit for marketing usage.",
                date: "2025-11-10",
                category: "Branding"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Fix Deployment Pipeline",
                description: "Resolve deployment pipeline failure on the staging environment.",
                date: "2025-11-07",
                category: "DevOps"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Prototype Landing Section",
                description: "Design the first draft of the new landing page hero section.",
                date: "2025-11-28",
                category: "Design"
            }
        ]
    },

    {
        id: 3,
        firstname: "Kabir",
        email: "employee3@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Create Inventory Checklist",
                description: "Draft a tracking checklist for office inventory items.",
                date: "2025-11-29",
                category: "Inventory"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Sort Shipment Records",
                description: "Reorganize and label documents related to last month's shipment batches.",
                date: "2025-11-14",
                category: "Logistics"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Request Vendor Quotations",
                description: "Reach out to shortlisted vendors and collect rate quotations.",
                date: "2025-11-04",
                category: "Procurement"
            }
        ]
    },

    {
        id: 4,
        firstname: "Vihaan",
        email: "employee4@example.com",
        password: "123",
        taskNumbers: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Conduct Policy Review",
                description: "Evaluate outdated staff policies and suggest improvements.",
                date: "2025-11-27",
                category: "HR"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Organize Team Files",
                description: "Rearrange and digitize files from the previous quarter.",
                date: "2025-11-17",
                category: "Documentation"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Prepare Hiring Timeline",
                description: "Build a projected hiring timeline for next quarter recruitment.",
                date: "2025-11-06",
                category: "Recruitment"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Team Engagement Activity Plan",
                description: "Plan activities for the monthly engagement event.",
                date: "2025-11-30",
                category: "Coordination"
            }
        ]
    },

    {
        id: 5,
        firstname: "Aditya",
        email: "employee5@example.com",
        password: "123",
        taskNumbers: {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Implement Session Manager",
                description: "Develop session handling logic for secure user authentication.",
                date: "2025-11-25",
                category: "Backend"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Review Merge Requests",
                description: "Review and verify merge requests before pushing to staging.",
                date: "2025-11-13",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "Docker Environment Cleanup",
                description: "Fix corrupted Docker containers and clean unused images.",
                date: "2025-11-05",
                category: "DevOps"
            },
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                title: "Add API Logging",
                description: "Implement detailed logging system for API performance tracking.",
                date: "2025-11-29",
                category: "Backend"
            }
        ]
    }
];


const admin = [
    {
        id: 1,
        firstname: "Admin",
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {

    // ONLY write employees if not already present
    if (!localStorage.getItem("employees")) {
        localStorage.setItem("employees", JSON.stringify(employees));
    }

    // ONLY write admin if not already present
    if (!localStorage.getItem("admin")) {
        localStorage.setItem("admin", JSON.stringify(admin));
    }
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
}