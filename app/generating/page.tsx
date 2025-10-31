"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Sparkles } from "lucide-react"

export default function GeneratingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(0)

  const steps = [
    "Analyzing your product positioning...",
    "Identifying best GTM channels...",
    "Creating content calendar...",
    "Generating outreach strategies...",
    "Calculating key metrics..."
  ]

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => router.push("/plan/demo-plan"), 500)
          return 100
        }
        return prev + 2
      })
    }, 100)

    const stepInterval = setInterval(() => {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))
    }, 2000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(stepInterval)
    }
  }, [router, steps.length])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-md w-full px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Sparkles className="h-10 w-10 text-primary animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Generating Your GTM Plan</h1>
          <p className="text-muted-foreground">
            Our AI is analyzing your product and creating a customized strategy...
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="min-h-[60px] flex items-center justify-center">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="animate-pulse">{steps[step]}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          This usually takes 10-15 seconds
        </div>
      </div>
    </div>
  )
}
