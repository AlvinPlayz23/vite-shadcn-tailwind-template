import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroGeometric } from "@/components/ui/shape-landing-hero"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { SparklesText } from "@/components/ui/sparkles-text"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { GradientText } from "@/components/ui/gradient-text"
import { Meteors } from "@/components/ui/meteors"
import { DotFilledIcon } from "@radix-ui/react-icons"
import { VercelV0Chat } from "@/components/ui/v0-ai-chat"
import { SignIn1 } from "@/components/ui/modern-stunning-sign-in"
import { Contact7 } from "@/components/ui/contact-7"
import { Feature73 } from "@/components/ui/feature-73"
import { Faq5 } from "@/components/ui/faq-5"
import { CustomersSection } from "@/components/ui/customers-section"
import { Feature1 } from "@/components/ui/feature-1"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

function App() {
  const [showChat, setShowChat] = useState(false)

  const testimonials = [
    {
      quote: "This product has transformed how we work. The features are thoughtfully designed and the customer support is exceptional.",
      name: "Sarah Johnson",
      designation: "CEO at TechCorp",
      src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The best solution we've found for our needs. It's intuitive, powerful, and constantly improving.",
      name: "Mark Anderson",
      designation: "CTO at Innovate Inc",
      src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  const customerLogos = [
    {
      src: "https://html.tailus.io/blocks/customers/nvidia.svg",
      alt: "Nvidia Logo",
      height: 20
    },
    {
      src: "https://html.tailus.io/blocks/customers/github.svg", 
      alt: "GitHub Logo",
      height: 16
    },
    {
      src: "https://html.tailus.io/blocks/customers/laravel.svg",
      alt: "Laravel Logo", 
      height: 16
    },
    {
      src: "https://html.tailus.io/blocks/customers/openai.svg",
      alt: "OpenAI Logo",
      height: 24
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroGeometric />

      {/* Feature Section */}
      <Feature1 
        title="Modern Web Development"
        description="Build beautiful, responsive websites with our cutting-edge components and tools."
        imageSrc="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        imageAlt="Modern development"
        buttonPrimary={{
          label: "Get Started",
          href: "#"
        }}
        buttonSecondary={{
          label: "Learn More",
          href: "#"
        }}
      />

      {/* Components Showcase */}
      <div className="container mx-auto px-4 py-20 space-y-32">
        {/* Text Effects */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Text Effects</h2>
          <div className="space-y-4">
            <TextShimmer>This text has a beautiful shimmer effect</TextShimmer>
            <SparklesText text="Sparkly Animated Text" />
            <GradientText as="h3" className="text-2xl font-bold">
              Gradient Text Effect
            </GradientText>
          </div>
        </section>

        {/* Cards */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SpotlightCard>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4">Spotlight Card</h3>
                <p>Hover over this card to see the spotlight effect</p>
              </div>
            </SpotlightCard>

            <Card>
              <CardHeader>
                <CardTitle>Regular Card</CardTitle>
                <CardDescription>A simple card component</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <RainbowButton>Rainbow Button</RainbowButton>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Interactive Components</h2>
          <div className="space-y-4">
            <Button 
              onClick={() => setShowChat(!showChat)}
              className="relative"
            >
              Toggle AI Chat
              <DotFilledIcon className="ml-2 h-4 w-4 text-green-500 animate-pulse" />
            </Button>
            {showChat && <VercelV0Chat />}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
          <AnimatedTestimonials testimonials={testimonials} />
        </section>

        {/* Customers */}
        <CustomersSection customers={customerLogos} />

        {/* Authentication */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold mb-8">Authentication</h2>
          <div className="max-w-md mx-auto">
            <SignIn1 />
          </div>
        </section>

        {/* Contact */}
        <Contact7 />

        {/* Features */}
        <Feature73 />

        {/* FAQ */}
        <Faq5 />

        {/* Meteors Effect */}
        <div className="relative h-[400px]">
          <Meteors number={20} />
        </div>
      </div>
    </div>
  )
}

export default App