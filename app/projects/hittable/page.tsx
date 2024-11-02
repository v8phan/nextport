import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"

const project = {
  title: "Hittable",
  description: "",
  fullDescription: "A React app that uses location to inform if weather is appropriate for tennis. Location can be manually entered or grabbed with mozilla's Geolocation API.",
  technologies: ["React", "Javascript", "HTML/CSS", "Material UI"],
  features: [
    "Frontend built with React",
    "Mozilla Geolocation API for getting user location",
    "OpenWeather API for weather information"
  ],
  challenges: "Describe the main challenges faced during the development of this project and how they were overcome. This could include technical challenges, design decisions, or project management issues.",
  outcome: "Discuss the results or impact of the project. This could include user feedback, performance improvements, business outcomes, or personal growth and learning.",
  githubUrl: "https://github.com/v8phan/hittable",
  imageUrl: "/images/hittable.jpg"
}

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-6 py-12">
        <Link href="/" passHref>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                width={600}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>

            <p className="mb-6">{project.fullDescription}</p>

            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 mb-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <Separator className="my-6" />

            <div className="flex flex-col sm:flex-row sm:justify-start gap-4">
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}