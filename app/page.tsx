"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Copy } from "lucide-react";

const projects = [
  {
    id: "vsavframebot",
    title: "VSAV Frame Bot",
    description:
      "A Discord bot that listens for user requests in chat and responds with data of the move from the fighting game Vampire Savior.",
  },
  {
    id: "funkymonkey",
    title: "The Funky Monkey",
    description:
      "Blog website made with React frontend and Node Express backend that allowed users to create a login and leave comments on blog posts, storing data in a SQL database.",
  },
  {
    id: "hittable",
    title: "Hittable",
    description:
      "A React app that reads a user’s location/input and sends calls to a weather API, then plugs the data into an algorithm to determine if the weather is appropriate for tennis; deployed with Heroku.",
  },
  {
    id: "portfoliosite",
    title: "Portfolio Website",
    description:
      "This website! Built with Next.js, React, Typescript, and Tailwind CSS. Uses Shadcn components.",
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Transplace, Uber Freight",
    period: "July 2022 - January 2024",
    description:
      "Built, tested, and deployed releases to SQL databases, working directly with large companies such as Wal-Mart or Nike to collaborate with carriers such as FedEx or UPS.",
    highlights: [
      "Provided regular database maintenance and client support.",
      "Installed, supported, and tested Transplace/Uber Freight systems, specifically PTMS (Parcel Transportation Management System).",
      "Created Python scripts to transform data.",
      "Grew role from routine maintenance updates to SQL databases to broader client support.",
      "Applied solid testing principles to develop and maintain UF systems.",
      "Worked with wider team on architecture, build, release, and execution of application delivery.",
      "Created and standardized operating procedures and trained other team members.",
      "Adapted to process changes and integration efforts after merger of Transplace and Uber Freight.",
    ],
  },
  {
    title: "Fraud, Risk, and Payments Analyst",
    company: "BCforward/Accenture",
    period: "Nov 2017 - July 2020",
    description:
      "Developed and maintained multiple client websites and web applications. Worked with a variety of technologies including Vue.js, Express, and MongoDB.",
    highlights: [
      "Analyzed data for large social media client’s online marketplace for fraud detection.",
      "Trained 20+ new members in new and existing workflows.",
    ],
  },
];

const education = [
  {
    school: "University of Texas at Austin",
    degree:
      "Bachelor of Arts in Economics, Minor in Business Foundations Program Certification",
  },
  {
    school: "Austin Community College",
    degree: "Associates of Arts in General Studies in Liberal Arts",
  },
];

export default function Portfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/BLUE.jpg",
    "/images/DSCF3688.jpg",
    "/images/purp.jpg",
  ];
  const handleImageChange = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const email = "viethoaiphan@gmail.com";

  const showEmail = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-6 md:p-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Viet Phan</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:underline">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-12 flex flex-col items-center">
          <div
            className="relative w-48 h-48 md:w-64 md:h-64 mb-6 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={handleImageChange}
            onClick={handleImageChange}
          >
            <Image
              src={images[currentImageIndex]}
              alt="Viet Phan - Profile Picture"
              layout="fill"
              objectFit="cover"
              priority
              className="transition-opacity duration-300"
            />
          </div>
          <h2 className="text-3xl font-bold mb-2">Viet Phan</h2>
          <p className="text-xl text-muted-foreground">
            viethoaiphan@gmail.com
          </p>
        </section>

        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Howdy, my name is Viet and I am an engineer with experience working
            in a fast paced environment to deliver complex solutions to large
            clients. I am adept at SQL and have created projects in
            React/Javascript and Python. Thank you for your consideration. This
            portfolio website is built with Next.js, React, Typescript, and
            Tailwind CSS.
          </p>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "SQL",
              "React",
              "Python",
              "Javascript",
              "Typescript",
              "HTML/CSS",
              "Node.js",
              "AWS",
              "Postman",
              "Docker",
              "Git",
              "Next.js",
              "Tailwind CSS",
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={`/projects/${project.id}`} passHref>
                    <Button variant="outline">View Project</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="education" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>{edu.school}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/v8phan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub Profile</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/viethphan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
            </Button>
            <Dialog
              open={isEmailDialogOpen}
              onOpenChange={setIsEmailDialogOpen}
            >
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Show Email</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Contact Email</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">{email}</p>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={showEmail}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy email to clipboard</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Viet Phan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
