import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"

const project = {
  title: "Hittable",
  description: "",
  fullDescription: "A responsive portfolio site built with Next.js, React, Typescript, and Tailwind CSS. Uses components from Shadcn.",
  technologies: ["React", "Typescript", "HTML/CSS", "Shadcn"],
  features: [
    "Frontend built with React/Typescript",
    "Deployed with Vercel",
    "Uses Shadcn components"
  ],
  githubUrl: "https://github.com/v8phan/hittable",
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