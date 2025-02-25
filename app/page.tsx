import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Check, ChevronRight, Twitter, Github, Linkedin, ArrowDown, Database, LineChart, Users, DollarSign, CheckCircle, Construction, Lock, ShieldCheckIcon, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Terrano_logo_black.png"
              alt="Terrano Logo"
              width={127}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#solution" className="text-sm font-medium hover:text-primary">
              Solution
            </Link>
            <Link href="#partnering" className="text-sm font-medium hover:text-primary">
              Work With Us
            </Link>
            <Link href="#applications" className="text-sm font-medium hover:text-primary">
              Applications
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>Navigation Menu</SheetTitle>
              <nav className="flex flex-col gap-4 mt-4">
                <Link href="#solution" className="text-sm font-medium hover:text-primary">
                  Solution
                </Link>
                <Link href="#partnering" className="text-sm font-medium hover:text-primary">
                  Work With Us
                </Link>
                <Link href="#applications" className="text-sm font-medium hover:text-primary">
                  Applications
                </Link>
                <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                  Testimonials
                </Link>
                <Link href="#contact" className="text-sm font-medium hover:text-primary">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-4">
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 w-full">
                <div className="space-y-2 w-full">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none">
                    Cut your bank&apos;s efficiency ratio in half with AI Agents
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground lg:text-xl">
                    Enterprise grade AI Agents built specifically for banks and credit unions. Free up human capital by automating repetitive tasks and consolidating fragmented data.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Schedule a Demo
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Problems
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Banks and credit unions face a myriad of operational challenges
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Tech Stack Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Not all software talks to each other (Core)</p>
                      <p>• Existing software has functionality gaps</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Labor Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Finding, training and retaining quality talent is difficult & expensive</p>
                      <p>• Scaling operations is costly with human labor</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle>Operational Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Processing capacity per employee is limited</p>
                      <p>• Humans often perform menial tasks and duplicative processes</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-bold text-center">
                Existing solutions lack intelligence and aren't purpose built for banking:
              </h3>
              <div className="mx-auto max-w-4xl">
                <div className="overflow-hidden rounded-lg border">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium">Solution</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                        <th className="px-4 py-3 text-center text-sm font-medium">Viability</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-t">
                        <td className="px-4 py-3 text-sm font-medium">Generalized AI Solution</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Generalized AI solutions aren't flexible enough, and don't understand the deep complexities within banking.</td>
                        <td className="px-4 py-3 text-center">❌</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 text-sm font-medium">RPA Solution</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">RPA can't handle complex workflows and UI changes. They also have high maintenance costs.</td>
                        <td className="px-4 py-3 text-center">❌</td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-3 text-sm font-medium">Outsource Labor Solution</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">Outsourced teams are difficult to manage and still fairly expensive.</td>
                        <td className="px-4 py-3 text-center">❌</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2 text-center">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Solution
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-center">
                  We built enterprise grade AI Agents to help
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our AI Agents are purpose built for banking operations. These AI Agents can perform a variety of operational tasks. They fill the gaps that exist in your current software tech stack, ensuring data is synced between systems. They provide a secure, reliable and cost effective way to scale your operations.
                </p>
              </div>
            </div>
            {/* Benefits */}
            <div className="mx-auto max-w-5xl py-12">
              <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <ArrowDown className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-base">Reduce duplicate work</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-base">Reduce data fragmentation</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <LineChart className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-base">Improve operational efficiency</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-base">Improve user experience</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-base">Improve profit margins</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                    <ArrowDown className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-base">Reduced error rates</div>
                </div>
              </div>
            </div>
            
            {/* Key Features Table */}
            <div className="mx-auto max-w-xs py-12">
              <div className="overflow-hidden rounded-lg border">
                <table className="w-full">
                  <tbody>
                    <tr className="bg-black">
                      <td className="p-4 text-center">
                        <span className="text-lg font-bold text-white">Trust & Safety</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex items-center gap-4 p-4">
                        <Image
                          src="/images/soc2-badge.png"
                          alt="SOC 2"
                          width={100}
                          height={100}
                          className="h-10 w-10"
                        />
                        <span className="text-base font-semibold">SOC 2 Compliance</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex items-center gap-4 p-4">
                        <Lock className="h-10 w-10 text-black-500" />
                        <span className="text-base font-semibold">128 bit encryption</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex items-center gap-4 p-4">
                        <ShieldCheckIcon className="h-10 w-10 text-black-500" />
                        <span className="text-base font-semibold">Enterprise grade security</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* How You'll Work With Us Section */}
        <section id="partnering" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Partnering
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How You'll Work With Us</h2>
              </div>
            </div>
            
            <div className="mx-auto max-w-7xl py-12 grid gap-8 lg:grid-cols-2">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Technology + Service Model</h3>
                <p className="text-muted-foreground text-lg">
                  Our blended technology + service model enables us to design innovative, yet scalable solutions tailored to each client's unique needs.
                </p>
                <p className="text-muted-foreground text-lg">
                  By combining cutting-edge AI with hands-on expertise, we ensure seamless implementation and long-term success.
                </p>
                <p className="text-muted-foreground text-lg">
                  We don't just deliver solutions—we build lasting partnerships, working closely with our customers to drive continuous growth and efficiency.
                </p>
                <div className="mt-6 p-4 bg-white rounded-lg border border-green">
                  <p className="text-lg font-bold italic">
                    "We'll look to find a quick-win project, where we can unlock value using our Agentic AI technology within weeks of kicking off the project."
                  </p>
                </div>
              </div>

              {/* Right Column - Cards */}
              <div className="grid gap-4">
                <Card className="border-green">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      Current State Diagnosis
                      <span className="ml-auto text-sm text-muted-foreground">2 weeks</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="border-green">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      Solution Design
                      <span className="ml-auto text-sm text-muted-foreground">1 week</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="border-green">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      Build, Testing
                      <span className="ml-auto text-sm text-muted-foreground">2 weeks</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="border-green">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      Deployment
                      <span className="ml-auto text-sm text-muted-foreground">2 weeks</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
                <Card className="border-green">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        5
                      </div>
                      Monitoring & Refinement
                      <span className="ml-auto text-sm text-muted-foreground">Indefinite</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Unlock Massive Impact You Can Measure</h2>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">10-20x</CardTitle>
                    <CardDescription>the throughput for your employees</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">50%</CardTitle>
                    <CardDescription>reduction in efficiency ratio</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">2x</CardTitle>
                    <CardDescription>your loan book without adding headcount</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl">$XXk</CardTitle>
                    <CardDescription>reduction in software vendors</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

    {/* Application Areas Section */}
    <section id="applications" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Applications
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Apply Our AI Agents Across Many Departments
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We can help unlock value in a variety of functional areas
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Relationship Mgt</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Loan Operations</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Underwriting</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Documentation</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Closing</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Loan Servicing</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Portfolio Management</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Loan Renewals</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Annual Reviews</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Deposit Operations</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Collateral Management</CardTitle>
                  </CardHeader>
                </Card>
                <Card className="h-full border-blue-primary">
                  <CardHeader>
                    <CardTitle>Covenant Monitoring</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>

            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">No process or workflow is too big or complex for our AI Agents.</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Loved by Teams Worldwide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  See what our clients have to say about how Terrano has transformed their financial institution.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Game-Changing Platform</CardTitle>
                  <CardDescription>Sarah Johnson, Marketing Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    &quot;Terrano has completely transformed how our marketing team collaborates. We&apos;ve reduced meeting
                    time by 30% and increased our campaign output by 50%.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Boosted Productivity</CardTitle>
                  <CardDescription>Michael Chen, Product Manager</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    &quot;The automation features alone have saved our team countless hours. Our product development cycle is
                    now 40% faster than before we started using Terrano.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Seamless Integration</CardTitle>
                  <CardDescription>Alex Rivera, CTO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    &quot;What impressed me most was how easily Terrano integrated with our existing tools. The transition
                    was smooth, and the ROI was immediate.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Bank Or Credit Union?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of teams that have already streamlined their processes and boosted productivity.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                No credit card required. 14-day free trial. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Terrano_logo_black.png"
              alt="Terrano Logo"
              width={127}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="container mt-4 text-center text-sm text-muted-foreground px-4 md:px-6">
          &copy; {new Date().getFullYear()} Terrano. All rights reserved.
        </div>
      </footer>
    </div>
  )
}