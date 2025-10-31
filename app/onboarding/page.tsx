"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function OnboardingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    targetAudience: "",
    mainGoal: "",
    channelsTried: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/generating")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Rocket className="h-6 w-6" />
              <span className="text-xl font-bold">LaunchPilot</span>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Tell Us About Your Product</h1>
            <p className="text-lg text-muted-foreground">
              Answer a few questions so we can generate your personalized GTM plan
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                The more details you provide, the better your GTM plan will be
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    placeholder="e.g., TaskMaster Pro"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">One-Liner Description</Label>
                  <Input
                    id="description"
                    placeholder="e.g., A minimalist task manager for developers"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Input
                    id="targetAudience"
                    placeholder="e.g., Solo developers and indie hackers"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mainGoal">Main Goal</Label>
                  <Input
                    id="mainGoal"
                    placeholder="e.g., Get 1000 users in 3 months"
                    value={formData.mainGoal}
                    onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="channelsTried">Channels You&apos;ve Tried (Optional)</Label>
                  <Textarea
                    id="channelsTried"
                    placeholder="e.g., Twitter, Product Hunt, Reddit..."
                    value={formData.channelsTried}
                    onChange={(e) => setFormData({ ...formData, channelsTried: e.target.value })}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Generate My GTM Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
