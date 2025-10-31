import Link from "next/link"
import { ArrowRight, Target, Zap, LineChart, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                AI-Powered GTM Strategy
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Your AI Go-To-Market
                <span className="block text-primary">Co-Pilot</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Generate a complete, actionable GTM plan for your product in minutes.
                From positioning to channels, content to outreach — all powered by AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/onboarding">
                  <Button size="lg" className="text-lg px-8">
                    Generate My Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Launch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get a comprehensive go-to-market strategy tailored to your product
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Positioning</CardTitle>
                  <CardDescription>
                    Craft compelling headlines and core promises that resonate
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>GTM Channels</CardTitle>
                  <CardDescription>
                    Discover the best channels with clear actions and objectives
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <LineChart className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Content Calendar</CardTitle>
                  <CardDescription>
                    30-day content plan with specific ideas and CTAs
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CheckCircle2 className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>KPIs & Metrics</CardTitle>
                  <CardDescription>
                    Track what matters with clear success metrics
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-muted-foreground">
                  Three simple steps to your custom GTM plan
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Share Your Product</h3>
                  <p className="text-muted-foreground">
                    Tell us about your product, audience, and goals
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Generates Plan</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes and creates your custom strategy
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Launch & Track</h3>
                  <p className="text-muted-foreground">
                    Execute your plan and measure success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto text-center p-8">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl">
                  Ready to Launch Smarter?
                </CardTitle>
                <CardDescription className="text-lg mt-4">
                  Join indie founders who are shipping faster with AI-powered GTM plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/onboarding">
                  <Button size="lg" className="text-lg px-8">
                    Generate My GTM Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
