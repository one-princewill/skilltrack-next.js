"use client";
import 'boxicons/css/boxicons.min.css';
import styles from "./dashboard.module.css"
import { useState } from "react"
import Analytics from "./(Components)/Analytics/Analytics.jsx"
import Bookmarks from "./(Components)/Bookmarks/Bookmarks.jsx"
import Certificates from "./(Components)/Certificates/Certificates.jsx"
import MyCourses from "./(Components)/My-Courses/MyCourses.jsx"
import Overview from "./(Components)/Overview/Overview.jsx"
import Settings from "./(Components)/Settings/Settings.jsx"



const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('Overview');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    }

    const viewCertificate = () => {
        setActiveSection('Certificates')
    }

    const userCourses = [
        {
            id: 1,
            category: 'Tech',
            image: 'Html.jpg',
            title: 'HTML for Beginners',
            description: 'Learn the fundamentals of HTML and build well-structured web pages from scratch.',
            totalLessons: 40,
            status: 'In Progress',
        },
        {
            id: 2,
            category: 'Tech',
            image: 'Css.jpg',
            title: 'Css Flexbox and Grid',
            description: 'Master modern CSS layouts using Flexbox and Grid for responsive design.',
            totalLessons: 50,
            status: 'In Progress',
        },
        {
            id: 3,
            category: 'Tech',
            image: 'JavScript.jpg',
            title: 'Advanced JavaScript',
            description: 'Deepen your JavaScript skills with advanced concepts, patterns, and real-world use cases.',
            totalLessons: 70,
            status: 'In Progress',
        },
        {
            id: 4,
            category: 'Management',
            image: 'human-resources.jpg',
            title: 'Human Resources',
            description: 'Understand core HR principles including recruitment, employee relations, and performance management.',
            totalLessons: 35,
            status: 'Completed',
        },
        {
            id: 5,
            category: 'Management',
            image: 'inventory-management.jpg',
            title: 'Inventory Management',
            description: 'Learn effective inventory planning, tracking, and control to optimize business operations.',
            totalLessons: 43,
            status: 'Completed',
        },
        {
            id: 6,
            category: 'Finance',
            image: 'corporate-tax.jpg',
            title: 'Corporate Tax',
            description: 'Gain practical knowledge of corporate tax regulations, compliance, and strategic tax planning.',
            totalLessons: 67,
            status: 'Completed',
        },
        {
            id: 7,
            category: 'Finance',
            image: 'superannuation.jpg',
            title: 'Superannuation Policy Updates',
            description: 'Stay updated on current superannuation regulations and compliance requirements.',
            totalLessons: 15,
            status: 'In Progress',
        },
        {
            id: 8,
            category: 'Finance',
            image: 'sme-tax.jpg',
            title: 'Tax Strategies for Growing SMEs',
            description: 'Learn practical tax strategies to optimize compliance and growth for small businesses.',
            totalLessons: 12,
            status: 'Completed',
        },
        {
            id: 9,
            category: 'Economics',
            image: 'inflation.jpg',
            title: 'Managing Inflation and Business Impact',
            description: 'Understand inflation trends and how they affect business decision-making.',
            totalLessons: 40,
            status: 'Completed',
            },
        {
            id: 10,
            category: 'Leadership',
            image: 'leadership.jpg',
            title: 'Leadership Essentials for Managers',
            description: 'Develop leadership skills to manage teams, performance, and organizational growth.',
            totalLessons: 25,
            status: 'Completed',
        },
        {
            id: 11,
            category: 'Compliance',
            image: 'cpd.jpg',
            title: 'CPD Compliance for Professionals',
            description: 'Learn how to meet CPD requirements efficiently and maintain professional accreditation.',
            totalLessons: 10,
            status: 'Completed',
        },
        {
            id: 12,
            category: 'Human Resources',
            image: 'onboarding.jpg',
            title: 'Onboarding Best Practices',
            description: 'Create effective onboarding processes that improve retention and employee engagement.',
            totalLessons: 10,
            status: 'Completed',
        },
        {
            id: 13,
            category: 'Finance',
            image: 'asset-writeoff.jpg',
            title: 'Maximizing the Instant Asset Write-Off',
            description: 'Understand eligibility and strategies for leveraging the instant asset write-off.',
            totalLessons: 9,
            status: 'Completed',
        },
        {
            id: 14,
            category: 'International Tax',
            image: 'global-tax.jpg',
            title: 'Global Tax Agreement Insights',
            description: 'Explore international tax agreements and their impact on multinational businesses.',
            totalLessons: 17,
            status: 'Completed',
        }
    ];


    const recommendedCourses = [
        {
            id: 1,
            image: 'React.jpg',
            title: 'React.JS for Beginners',
            description: 'Learn React fundamentals, components, props, state, and build interactive user interfaces.',
            totalLessons: 40
        },
        {
            id: 2,
            image: 'Next.jpg',
            title: 'Next.JS for Beginners',
            description: 'Build fast, scalable React applications using Next.js routing, rendering, and performance features.',
            totalLessons: 70
        },
        {
            id: 3,
            image: 'Javascript.jpg',
            title: 'Advanced JavaScript',
            description: 'Master advanced JavaScript concepts including closures, async patterns, and real-world problem solving.',
            totalLessons: 50
        }
    ];



  return (
    <div>
        <div className={styles.dashboardContainer}>
            <div className={styles.sidebar}>
                <ul className={styles.sidebarItems}>
                    <div className={styles.dashboardItems}>
                        <div className={ activeSection === 'Overview' ? styles.activeItem : styles.dashboardItem} onClick={() => handleSectionClick('Overview')}>
                            { activeSection === 'Overview' ? <i className="bx bxs-grid-alt"></i> : <i className="bx bx-grid-alt"></i>}
                            <li>Overview</li>
                        </div>
                        <div className={ activeSection === 'My Courses' ? styles.activeItem : styles.dashboardItem } onClick={() => handleSectionClick('My Courses')}>
                            <i className="bx bx-library"></i>
                            <li>My Courses </li>
                        </div>
                        <div className={ activeSection === 'Certificates' ? styles.activeItem : styles.dashboardItem} onClick={() => handleSectionClick('Certificates')}>
                            { activeSection === 'Certificates' ? <i className="bx bxs-award"></i> : <i className="bx bx-award"></i>}
                            <li>Certificates</li>
                        </div>
                        <div className={ activeSection === 'Bookmarks' ? styles.activeItem : styles.dashboardItem } onClick={() => handleSectionClick('Bookmarks')}>
                            { activeSection === 'Bookmarks' ? <i className="bx bxs-bookmark"></i> : <i className="bx bx-bookmark"></i>}
                            <li>Bookmarks</li>
                        </div>
                        <div className={ activeSection === 'Analytics' ? styles.activeItem : styles.dashboardItem } onClick={() => handleSectionClick('Analytics')}>
                            <i className="bx bx-line-chart"></i>
                            <li>Analytics</li>
                        </div>
                    </div>
                    <div className={styles.settingsItems}>
                        <div className={ activeSection === 'Settings' ? styles.activeItem : styles.dashboardItem } onClick={() => handleSectionClick('Settings')}>
                            { activeSection === 'Settings' ? <i className="bx bxs-cog"></i> : <i className="bx bx-cog"></i>}
                            <li>Settings</li>
                        </div>
                        <div className={styles.Logout}>
                             <i className="bx bx-exit"></i>
                            <li>Logout</li>
                        </div>
                    </div>
                </ul>
            </div>
            <div className={styles.mainContent}>
                {activeSection === 'Overview' && <Overview userCourses={userCourses} recommendedCourses={recommendedCourses} />}
                {activeSection === 'My Courses' && <MyCourses userCourses={userCourses} viewCertificate={viewCertificate}/>}
                {activeSection === 'Certificates' && <Certificates />}
                {activeSection === 'Bookmarks' && <Bookmarks />}
                {activeSection === 'Analytics' && <Analytics />}
                {activeSection === 'Settings' && <Settings />}
            </div>
        </div>
    </div>
  )
}

export default Dashboard;