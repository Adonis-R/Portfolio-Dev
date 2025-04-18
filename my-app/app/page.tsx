import Link from "next/link"
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
import { ModeToggle } from "@/components/dark-mode"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="inline-block font-bold">DevPortfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#about" className="px-4 py-2 text-sm font-medium">
                À propos
              </Link>
              <Link href="#skills" className="px-4 py-2 text-sm font-medium">
                Compétences
              </Link>
              <Link href="#projects" className="px-4 py-2 text-sm font-medium">
                Projets
              </Link>
              <Link href="#contact" className="px-4 py-2 text-sm font-medium">
                Contact
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Développeur Full Stack</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Je crée des applications web modernes et performantes avec les dernières technologies.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button>
                    Me contacter
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline">Voir mes projets</Button>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:contact@example.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 opacity-70 blur-3xl" />
                <img
                  src="assets/portrait.jpg"
                  alt="Portrait du développeur"
                  className="relative z-10 h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">À propos</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Passionné par le développement web et les technologies, je me forme actuellement au métier de
              développeur full stack. J’aime comprendre comment les choses fonctionnent, résoudre des problèmes
              et créer des solutions utiles. Mon parcours m’a appris à m’adapter, à chercher constamment à
              m’améliorer et à apprendre de façon autonome. Je m’intéresse aussi bien au frontend qu’au backend,
              avec une envie particulière de creuser les aspects techniques et de monter en compétences chaque jour.
            </p>

          </div>
        </section>

        <section id="skills" className="container py-12 md:py-16 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Compétences</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Les technologies avec lesquelles j&apos;aime travailler
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-8">
              <SkillBadge name="React" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="TypeScript" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express" />

              <SkillBadge name="PHP" />
              <SkillBadge name="MySQL" />



              <SkillBadge name="Git" />


              <SkillBadge name="Figma" />
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-16">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projets</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Découvrez quelques-uns de mes projets récents
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
            <ProjectCard
              title="E-commerce Platform"
              description="Une plateforme e-commerce complète avec panier, paiement et gestion des commandes."
              tags={["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]}
              image="/placeholder.svg?height=300&width=500"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Dashboard Analytics"
              description="Tableau de bord d'analyse de données avec visualisations interactives et rapports personnalisés."
              tags={["React", "D3.js", "Node.js", "MongoDB"]}
              image="/placeholder.svg?height=300&width=500"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Social Media App"
              description="Application de médias sociaux avec authentification, profils utilisateurs et messagerie en temps réel."
              tags={["Next.js", "Socket.io", "PostgreSQL", "Tailwind CSS"]}
              image="/placeholder.svg?height=300&width=500"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Portfolio Photographe"
              description="Site portfolio pour un photographe professionnel avec galerie d'images et système de réservation."
              tags={["React", "Gatsby", "GraphQL", "Styled Components"]}
              image="/placeholder.svg?height=300&width=500"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Task Management"
              description="Application de gestion de tâches avec fonctionnalités de collaboration et suivi du temps."
              tags={["Vue.js", "Express", "MongoDB", "Tailwind CSS"]}
              image="/placeholder.svg?height=300&width=500"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Blog Tech"
              description="Blog tech avec système de gestion de contenu, commentaires et newsletter."
              tags={["Next.js", "MDX", "Prisma", "PostgreSQL"]}
              image="/placeholder.svg?height=300&width=500"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-16 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Contact</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Vous avez un projet en tête ? N&apos;hésitez pas à me contacter !
            </p>
          </div>
          <div className="mx-auto grid max-w-[58rem] gap-8 md:grid-cols-2 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
                <CardDescription>Retrouvez-moi sur ces plateformes</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>adonisriahi@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com/Adonis-R" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    github.com/Adonis-R
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/username
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    twitter.com/username
                  </Link>
                </div>
              </CardContent>
            </Card>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} DevPortfolio. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
