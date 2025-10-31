"use client"

import Link from "next/link"
import { Plus, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardLayout } from "@/components/dashboard-layout"
import { mockPlans } from "@/lib/mock-data"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">My GTM Plans</h1>
              <p className="text-muted-foreground">
                View and manage your generated go-to-market strategies
              </p>
            </div>

            <Link href="/onboarding">
              <Button size="lg">
                <Plus className="h-5 w-5 mr-2" />
                New Plan
              </Button>
            </Link>
          </div>

          {mockPlans.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                    <Plus className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No plans yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your first GTM plan to get started with your product launch
                  </p>
                  <Link href="/onboarding">
                    <Button>
                      Create Your First Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockPlans.map((plan) => (
                <Link key={plan.id} href={`/plan/${plan.id}`}>
                  <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                    <CardHeader>
                      <CardTitle>{plan.productName}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          Created {new Date(plan.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <Button variant="ghost" size="sm" className="w-full mt-4">
                        View Plan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
