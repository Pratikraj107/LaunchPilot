export const mockPlan = {
  id: "demo-plan",
  productName: "TaskMaster Pro",
  createdAt: new Date().toISOString(),
  positioning: {
    headline: "The Task Manager That Respects Your Focus",
    corePromise: "Minimize context switching and maximize deep work with our developer-first task management system",
    alternatives: [
      "Ship More, Stress Less - Task Management for Makers",
      "Your Command Center for Shipping Fast",
      "From Chaos to Clarity in One Click"
    ]
  },
  channels: [
    {
      channel: "Twitter/X",
      objective: "Build in public, share journey",
      why: "Your target audience (indie hackers, developers) is highly active here",
      actions: [
        "Tweet daily about your product development journey",
        "Share tips on productivity and task management",
        "Engage with dev community using relevant hashtags"
      ]
    },
    {
      channel: "Product Hunt",
      objective: "Launch visibility & early adopters",
      why: "Perfect platform for tech-savvy early adopters",
      actions: [
        "Prepare launch assets (banner, screenshots, demo video)",
        "Build relationship with hunters 2 weeks before launch",
        "Schedule launch for Tuesday-Thursday"
      ]
    },
    {
      channel: "Dev.to / Hashnode",
      objective: "Content-driven SEO & authority",
      why: "Reach developers where they consume technical content",
      actions: [
        "Write 'How I Built TaskMaster' series",
        "Share productivity tips for developers",
        "Create tutorials integrating your tool"
      ]
    },
    {
      channel: "Reddit (r/SideProject, r/IndieBiz)",
      objective: "Community feedback & beta users",
      why: "Communities appreciate genuine sharing and feedback loops",
      actions: [
        "Share your story authentically, ask for feedback",
        "Participate in community discussions regularly",
        "Offer free lifetime access for early feedback"
      ]
    }
  ],
  contentCalendar: [
    { day: 1, channel: "Twitter", idea: "Introduce yourself and your problem", cta: "Ask for follows" },
    { day: 2, channel: "Dev.to", idea: "Why I'm building yet another task manager", cta: "Email signup" },
    { day: 3, channel: "Twitter", idea: "Share wireframes/mockups", cta: "Collect feedback" },
    { day: 5, channel: "Reddit", idea: "Post in r/SideProject for feedback", cta: "Beta signups" },
    { day: 7, channel: "Twitter", idea: "Share development progress update", cta: "Build anticipation" },
    { day: 10, channel: "Dev.to", idea: "Tech stack decisions and why", cta: "Newsletter signup" },
    { day: 12, channel: "Twitter", idea: "Productivity tip related to your product", cta: "Engagement" },
    { day: 14, channel: "Twitter", idea: "Behind-the-scenes: building feature X", cta: "Waitlist" },
    { day: 17, channel: "Dev.to", idea: "How TaskMaster improves developer workflow", cta: "Try demo" },
    { day: 20, channel: "Twitter", idea: "Customer testimonial or early win", cta: "Social proof" },
    { day: 22, channel: "Reddit", idea: "Share milestone (users/features)", cta: "Try it out" },
    { day: 25, channel: "Twitter", idea: "Countdown to Product Hunt launch", cta: "PH reminder" },
    { day: 27, channel: "Dev.to", idea: "Complete guide: Getting started with TaskMaster", cta: "Onboard users" },
    { day: 30, channel: "Product Hunt", idea: "Official launch day!", cta: "Upvote & support" }
  ],
  outreach: {
    dmScripts: [
      {
        platform: "Twitter",
        template: "Hey [Name], love your work on [specific project]. I'm building TaskMaster Pro - a task manager for developers who hate context switching. Would love your feedback if you have 2 mins!"
      },
      {
        platform: "Email",
        template: "Subject: Quick feedback on dev tool?\n\nHi [Name],\n\nI'm [Your Name], building TaskMaster Pro - a focus-first task manager for developers.\n\nSaw you recently posted about [specific pain point], and I think you'd have valuable insights.\n\nWould you be open to trying the beta and sharing quick feedback? Happy to offer lifetime access.\n\nCheers!"
      }
    ],
    commentTemplates: [
      "This resonates! We built TaskMaster Pro specifically to solve this - minimizing context switches. Would love to hear if it fits your workflow.",
      "Great point on [topic]. At TaskMaster Pro, we approached this by [solution]. Happy to share more if useful!"
    ],
    influencerAngles: [
      "Micro-influencers (1k-10k) in productivity/dev tools space",
      "YouTubers who review dev tools",
      "Podcast hosts covering indie hacking journey",
      "Offer affiliate/partner program with generous splits"
    ]
  },
  kpis: [
    { metric: "Website Visitors", target: "2,000/month", why: "Top-of-funnel awareness" },
    { metric: "Email Signups", target: "500 in 30 days", why: "Interested prospects" },
    { metric: "Active Users", target: "200 WAU", why: "Product-market fit signal" },
    { metric: "Conversion Rate", target: "10% signup → active", why: "Onboarding effectiveness" },
    { metric: "Social Engagement", target: "5% engagement rate", why: "Content resonance" },
    { metric: "Referrals", target: "15% of signups", why: "Word-of-mouth validation" }
  ]
}

export const mockPlans = [
  {
    id: "demo-plan",
    productName: "TaskMaster Pro",
    description: "A minimalist task manager for developers",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "plan-2",
    productName: "CodeSnap",
    description: "Beautiful code screenshots for developers",
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "plan-3",
    productName: "EmailFlow",
    description: "Email automation for indie SaaS",
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
  }
]
