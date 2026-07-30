export const projects = [
    {
        id: "logistics-platform",

        title: "Memi Logistics Platform",

        status: "MVP",

        description:
            "A logistics management platform that connects shippers and carriers through a secure bidding workflow. The system supports shipment creation, carrier offers, assignment, shipment tracking, and operational management.",

        techStack: [
            "Java",
            "Spring Boot",
            "React",
            "JavaScript(MVP)",
            "TypeScript",
            "TailwindCSS(Next version)",
            "PostgreSQL",
            "Docker",
        ],

        github: "https://github.com/Kbrom-Mehari/memi-logistics-backend",

        website: "https://memi-logistics.netlify.app",

        screenshots: [
            `${import.meta.env.BASE_URL}projectScreenshots/logistics/landing_image.png`,
            `${import.meta.env.BASE_URL}projectScreenshots/logistics/register_image.png`,
            `${import.meta.env.BASE_URL}projectScreenshots/logistics/login_image.png`,
        ],

        features: [
            "JWT Authentication",
            "Shipment Management",
            "Shipment Tracking",
            "Carrier Bidding",
            "Role-Based Authorization",
            "Dashboard",
            "Responsive UI",
        ],
        architecture: [
            { label: "UI", value: "React experience for shipment workflows" },
            { label: "Core", value: "Spring Boot services for bidding and logistics rules" },
            { label: "Data", value: "PostgreSQL for transactional business state" },
            { label: "Ops", value: "Dockerized deployment with CI-ready delivery" },
        ],
        deliveryFlow: [
            "Create shipment request",
            "Route opportunities to carriers",
            "Validate bids and assign shipment",
            "Track execution and operational status",
        ],
        impact: "Helps logistics teams coordinate freight more clearly and reduce manual handoffs across the shipment lifecycle.",
    },

    {
        id: "fleet-management",

        title: "Suba GPS Tracking System",

        status: "In Progress",

        description:
            "A fleet visibility platform built around Traccar that provides real-time GPS tracking, vehicle monitoring, and operational insights for organizations managing fleets.",

        techStack: [
            "Java",
            "Netty",
            "TimescaleDB",
            "Redis",
            "Traccar",
            "Docker",
        ],

        github: "https://github.com/Kbrom-Mehari/traccar",

        screenshots: [
            `${import.meta.env.BASE_URL}projectScreenshots/tracking/login_page.png`,
            `${import.meta.env.BASE_URL}projectScreenshots/tracking/live%20tracking.png`,
            `${import.meta.env.BASE_URL}projectScreenshots/tracking/replay.png`,
            `${import.meta.env.BASE_URL}projectScreenshots/tracking/speed_report.png`,
        ],

        features: [
            "Real-Time GPS Tracking",
            "Remote Vehicle Immobilization",
            "Smart Geofencing",
            "Tracking Sessions",
            "Alert Engine",
            "Interactive Maps",
            "Device Management",
        ],
        architecture: [
            { label: "Edge", value: "GPS device events and live telemetry ingestion" },
            { label: "Core", value: "Traccar-backed services for sessions and rules" },
            { label: "Data", value: "TimescaleDB and Redis for time-series and fast lookups" },
            { label: "Ops", value: "Containerized deployment for fleet monitoring environments" },
        ],
        deliveryFlow: [
            "Receive device telemetry",
            "Process sessions and geofence logic",
            "Surface alerts and live vehicle views",
            "Support operational response and reporting",
        ],
        impact: "Improves fleet visibility and gives operations teams faster insight into vehicle movement and exceptions.",
    },

    // {
    //     id: "charitylens",

    //     title: "CharityLens",

    //     status: "Completed",

    //     description:
    //         "A transparency platform that helps donors follow how their contributions are allocated through projects, campaigns, and verified donation history.",

    //     techStack: [
    //         "Java",
    //         "Spring Boot",
    //         "React",
    //         "PostgreSQL",
    //     ],

    //     github: "https://github.com/yourusername/charitylens",

    //     screenshots: [],

    //     features: [
    //         "Campaign Management",
    //         "Donation Tracking",
    //         "Digital Receipts",
    //         "Role Management",
    //     ],
    // },
];
