import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";

const project = {
  title: "VSAV Frame Bot",
  description:
    "Discord bot built with Python that listens for user requests for information and responds with data from SQL database.",
  fullDescription:
    "Data for the app was scraped from https://wiki.gbl.gg and stored in a SQL database via Postgres and then hosted onto supabase. Bot is built with Python, Dockerized, and hosted on AWS. It will listen for a user to call it and request a character's move and respond with the relevant information about the move. Bot is live and has active and daily users.",
  technologies: ["Python", "Docker", "SQL", "Postgres", "AWS", "beautifulsoup"],
  features: [
    "Bot is made out of two parts, the first part being the scraper that parses the wiki for the data, formats it, and puts it into a PostgreSQL database, which is then hosted on supabase.",
    "Second part is the actual bot itself built with Python that will listen for a user's calls and then hits the supabase database for the information, formats it into the Discord embed, and then returns it.",
  ],
  challenges:
    "",
  outcome:
    "Bot is active in a server with over 5000 members and is used regularly. I am still actively updating and improving the bot and user feedback has been very positive.",
  date: "January 2024",
  githubUrl: "https://github.com/v8phan/VSAVframebot",
  imageUrl: "/images/vsavss.png",
};

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
                className="rounded-lg h-auto"
              />
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{project.date}</span>
              </div>
            </div> */}

            <p className="mb-6">{project.fullDescription}</p>

            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 mb-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <Separator className="my-6" />

            <h3 className="text-xl font-semibold mb-2">Challenges</h3>
            <p className="mb-6">{project.challenges}</p>

            <h3 className="text-xl font-semibold mb-2">Outcome</h3>
            <p className="mb-6">{project.outcome}</p>

            <div className="flex flex-col sm:flex-row sm:justify-start gap-4">
              {/* <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </a>
              </Button> */}
              <Button variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
