import ProjectCard from "./Project";
import { TrendingUp, ShoppingCart, Wallet, BarChart3, Layout } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
	{
		title: "Goldman Sachs — Financial UI",
        company: "Publicis Sapient | Web Developer",
        duration:"January 2022 – December 2024",
		description: `\nDeveloped secure, enterprise-grade financial web applications using React.js, Redux, and JavaScript, delivering responsive, high-performance interfaces.\n\u2022 Implemented reusable UI components, optimized rendering performance, and improved page load speed for data-intensive applications.\n\u2022 Integrated RESTful APIs and microservices-driven backends for dynamic data fetching and real-time updates.\n\u2022 Practiced test-driven development (TDD), automated testing, and CI/CD workflows, ensuring high code quality and deployment reliability.\n\u2022 Mentored junior developers, conducted code reviews, and contributed to team knowledge-sharing initiatives.\n\u2022 Owned the development of React-based UI features, making architectural decisions around component structure, state management, and data-fetching patterns.\n\u2022 Debugged and resolved UI issues across browsers and devices in collaboration with QA and product teams, ensuring reliability and usability.\n\u2022 Contributed to frontend testing efforts, including unit and integration testing, to maintain long-term code quality and stability.`,
		icon: TrendingUp,
		technologies: [
			"React.js",
			"Next.js (App Router)",
			"Redux",
			"Ag-Grid",
			"TypeScript",
			"JavaScript (ES6+)",
			"Node.js",
			"Express.js",
			"MongoDB",
			"RESTful APIs",
			"HTML5",
			"CSS3",
			"GitHub Actions",
		],
		type: "Professional",
	},
	{
		title: "Stock Market Visualization Tool",
        company: "Infosys Limited",
        duration:"July 2018 – December 2021",
		description: `Built a real-time stock market application using React.js and JavaScript, implementing dynamic charts with Chart.js and integrating external APIs for live data.\n\u2022 Designed modular components and responsive layouts ensuring seamless functionality across devices.\n\u2022 Optimized UI responsiveness using CSS Flexbox and Grid, ensuring seamless functionality across desktop and mobile platforms.\n\u2022 Deployed the application on Netlify, ensuring smooth access and performance for end users.`,
		icon: BarChart3,
		technologies: ["React.js", "JavaScript (ES6+)", "Chart.js", "HTML5", "CSS3", "RESTful APIs"],
		type: "Professional",
	},
	{
		title: "Ecommerce Application",
        company: "Infosys Limited",
        duration:"July 2018 – December 2021",
		description: `Led front-end development using React.js, Next.js, Redux, and Storyblok CMS, enabling dynamic content management for eCommerce workflows.\n\u2022 Designed reusable, modular components and implemented advanced state management for seamless user interactions.\n\u2022 Integrated RESTful APIs, managed authentication, and maintained real-time inventory updates.\n\u2022 Collaborated with UI/UX teams to create pixel-perfect, responsive, and accessible interfaces.\n\u2022 Mentored junior developers and established best practices for scalable front-end architecture.\n\u2022 Optimized frontend performance and SEO using Next.js server-side rendering and efficient component rendering strategies.`,
		icon: ShoppingCart,
		technologies: ["React.js", "Next.js", "Redux", "Storyblok CMS", "RESTful APIs", "Chart.js", "Netlify"],
		type: "Professional",
	},
	{
		title: "Next.js SPA Portfolio",
		description: "Built a Next.js SPA with server-side rendering and REST API integration. Implemented SEO best practices and responsive design.",
		icon: Layout,
		technologies: ["Next.js (App Router)", "TypeScript", "RESTful APIs", "CSS3"],
		type: "Personal",
	},
	{
		title: "Expense Tracker Application",
		description: "Developed React frontend with Node.js/Express backend and MongoDB storage, featuring responsive dashboards and dynamic charts.",
		icon: Wallet,
		technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
		type: "Personal",
	},
	{
		title: "GraphQL Data Dashboard",
		description: "Built a React interface integrating GraphQL APIs for optimized data fetching and visualization.",
		icon: BarChart3,
		technologies: ["React.js", "GraphQL", "TypeScript", "CSS3"],
		type: "Personal",
	},
];

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="projects" className="py-12 md:py-16 bg-secondary/30 relative">
			<div className="container mx-auto px-6">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono text-primary mb-6">Featured Work</span>
					<h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">My <span className="gradient-text">Projects</span></h2>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((p) => (
						<ProjectCard key={p.title} project={p as any} />
					))}
				</div>
			</div>
		</section>
	);
}
