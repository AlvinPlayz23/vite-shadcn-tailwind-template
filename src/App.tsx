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

function App() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroGeometric />

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
