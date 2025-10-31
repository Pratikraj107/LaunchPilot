"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, RefreshCw, Target, Radio, Calendar, MessageSquare, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ThemeToggle } from "@/components/theme-toggle"
import { mockPlan } from "@/lib/mock-data"

export default function PlanPage() {
  const [plan] = useState(mockPlan)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-semibold">{plan.productName}</h1>
                <p className="text-xs text-muted-foreground">
                  Generated {new Date(plan.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate
              </Button>
              <Button size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Tabs defaultValue="positioning" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="positioning" className="gap-2">
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Positioning</span>
              </TabsTrigger>
              <TabsTrigger value="channels" className="gap-2">
                <Radio className="h-4 w-4" />
                <span className="hidden sm:inline">Channels</span>
              </TabsTrigger>
              <TabsTrigger value="content" className="gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
              <TabsTrigger value="outreach" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className="hidden sm:inline">Outreach</span>
              </TabsTrigger>
              <TabsTrigger value="kpis" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">KPIs</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="positioning" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Positioning Strategy
                  </CardTitle>
                  <CardDescription>
                    Your product's core message and value proposition
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Main Headline</h3>
                    <p className="text-2xl font-bold">{plan.positioning.headline}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Core Promise</h3>
                    <p className="text-lg">{plan.positioning.corePromise}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Alternative Taglines</h3>
                    <div className="space-y-2">
                      {plan.positioning.alternatives.map((alt, index) => (
                        <div key={index} className="p-3 rounded-lg border bg-card">
                          <p>{alt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="channels" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Radio className="h-5 w-5" />
                    GTM Channels
                  </CardTitle>
                  <CardDescription>
                    Recommended channels with clear objectives and actions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {plan.channels.map((channel, index) => (
                      <div key={index} className="p-4 rounded-lg border bg-card">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-lg font-semibold">{channel.channel}</h3>
                            <p className="text-sm text-muted-foreground">{channel.objective}</p>
                          </div>
                          <Badge variant="secondary">Priority</Badge>
                        </div>

                        <div className="mb-3">
                          <p className="text-sm font-medium mb-1">Why this channel?</p>
                          <p className="text-sm text-muted-foreground">{channel.why}</p>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-2">Action Items:</p>
                          <ul className="space-y-1">
                            {channel.actions.map((action, idx) => (
                              <li key={idx} className="text-sm flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{action}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    30-Day Content Calendar
                  </CardTitle>
                  <CardDescription>
                    Daily content ideas mapped to specific channels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Day</TableHead>
                        <TableHead>Channel</TableHead>
                        <TableHead>Content Idea</TableHead>
                        <TableHead>CTA</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {plan.contentCalendar.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">Day {item.day}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{item.channel}</Badge>
                          </TableCell>
                          <TableCell>{item.idea}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">{item.cta}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="outreach" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Outreach Plan
                  </CardTitle>
                  <CardDescription>
                    DM scripts, comment templates, and influencer strategies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">DM Scripts</h3>
                    <div className="space-y-4">
                      {plan.outreach.dmScripts.map((script, index) => (
                        <div key={index} className="p-4 rounded-lg border bg-card">
                          <Badge className="mb-2">{script.platform}</Badge>
                          <p className="text-sm whitespace-pre-line">{script.template}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Comment Templates</h3>
                    <div className="space-y-2">
                      {plan.outreach.commentTemplates.map((template, index) => (
                        <div key={index} className="p-3 rounded-lg border bg-card">
                          <p className="text-sm">{template}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Influencer Strategy</h3>
                    <ul className="space-y-2">
                      {plan.outreach.influencerAngles.map((angle, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">{angle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="kpis" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Key Performance Indicators
                  </CardTitle>
                  <CardDescription>
                    Metrics to track your GTM success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {plan.kpis.map((kpi, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">{kpi.metric}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold mb-1">{kpi.target}</div>
                          <p className="text-sm text-muted-foreground">{kpi.why}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
