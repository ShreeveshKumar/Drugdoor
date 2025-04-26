const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        title: "ByteSky - Revolutionizing Cloud Computing",
        logo: "ByteSky Logo",
        navbarLinks: [
            { text: "Features", href: "#features" },
            { text: "Testimonial", href: "#testimonial" },
            { text: "FAQ", href: "#faq" },
            { text: "Contact Us", href: "#contact" }
        ],
        heroHeading: "Upgrade Experience, Not Hardware",
        heroSubheading: "Seamlessly migrate and experience ultra-fast computing without the hassle of hardware upgrades.",
        ctaText: "Get Started",
        featureImage: "dashboard.png",
        trustedLogos: "trusted-logos.png",
        features: [
            { image: "1.jpg", alt: "High-Performance GPU", title: "Cost-Effective Solutions" },
            { image: "2.jpg", alt: "Virtual Machines", title: "Secure Virtual Machines" },
            { image: "3.jpg", alt: "AI", title: "AI Integration" }
        ],
        introHeading: "Hey there! We're ByteSky, revolutionizing cloud computing.",
        introSubheading: "Driven by a relentless commitment to providing cost-effective, high-performance computing solutions for researchers, startups, and enterprises.",
        introStats: [
            { value: "$25M+", description: "Order Book Value" },
            { value: "$15M+", description: "Gen AI Enabled Startup" },
            { value: "$5M+", description: "Signed LOI with schools" },
            { value: "$2M+", description: "HPC Order" }
        ],
        illustrationImage: "4.PNG",
        teamMembers: [
            { image: "member1.jpg", name: "Shreevesh Kumar", role: "CSIT" },
            { image: "member2.jpg", name: "Arpita Maurya", role: "CSIT" },
            { image: "member3.jpg", name: "Suryansh Dev", role: "EC" },
            { image: "member4.jpg", name: "Lakshya Bhargava", role: "CSE(AI)" }
        ],
        footerStats: [
            { value: "$25M+", description: "Total Revenue" },
            { value: "$15M+", description: "Funds Raised" }
        ]
    });
});

// Start the server
app.get('/api', (req, res) => {
    const { name } = req.query;
    res.send(`Hello ${name}`);
});



// 192.168.124.155

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
