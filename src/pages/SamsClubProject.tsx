import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Calendar, MapPin, Target, ClipboardList, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import images
import heroImage from "@/assets/samsclub-hero.png";
import checkinRequirement from "@/assets/samsclub-checkin-requirement.jpg";
import outdoorKiosks from "@/assets/samsclub-outdoor-kiosks.jpg";
import dedicatedParking from "@/assets/samsclub-dedicated-parking.jpg";
import findings1 from "@/assets/samsclub-findings-1.jpg";
import quickPickApp from "@/assets/samsclub-quickpick-app.jpg";
import journeyMap from "@/assets/samsclub-journey-map.jpg";

// Constants for styling and content
const GRADIENTS = {
  primary: "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700",
  accent: "bg-gradient-to-r from-blue-500 to-purple-500",
  subtle: "bg-gradient-to-br from-gray-50 to-gray-100",
};

const GLASS_STYLES = "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl";

// Reusable components
const Pill = ({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
    <Icon className="w-4 h-4" />
    {children}
  </div>
);

const Glass = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`${GLASS_STYLES} p-6 ${className}`}>
    {children}
  </div>
);

const Metric = ({ value, label }: { value: string; label: string }) => (
  <Glass className="text-center">
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-white/80 text-sm">{label}</div>
  </Glass>
);

const Section = ({ 
  id, 
  title, 
  kicker, 
  children, 
  className = "" 
}: { 
  id?: string; 
  title: string; 
  kicker?: string; 
  children: React.ReactNode; 
  className?: string; 
}) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 sm:px-8 py-16 ${className}`}>
    <div className="mb-12">
      {kicker && (
        <div className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
          {kicker}
        </div>
      )}
      <h2 className="text-4xl font-bold text-foreground mb-6">{title}</h2>
    </div>
    {children}
  </section>
);

export default function SamsClubProject() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-accent/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`${GRADIENTS.primary} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sam's Club Club Pickup parking sign"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                  Sam's Club — Club Pick Up (CPU) & Quick Pick
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  A two‑sided research program that aligned Member check‑in behavior with Associate operations to speed pickups and raise satisfaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Pill icon={Users}>Lead Researcher</Pill>
                  <Pill icon={Calendar}>Discovery → Field Validation → Post‑launch</Pill>
                  <Pill icon={MapPin}>U.S. (Chicago‑area stores)</Pill>
                </div>
              </motion.div>
            </div>
            <div className="lg:text-right">
              <div className="grid grid-cols-2 gap-4">
                <Metric value="1.3K" label="Survey Recipients" />
                <Metric value="1.2K+" label="Open Comments" />
                <Metric value="2" label="User Groups" />
                <Metric value="Multi-Store" label="Field Studies" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Snapshot */}
      <Section id="snapshot" title="Project Snapshot" kicker="Overview">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Role & Organization</h4>
                  <p className="text-muted-foreground">Lead Researcher at Sam's Club (Walmart), Club Pick Up & In‑Club Ops</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Timeline</h4>
                  <p className="text-muted-foreground">Discovery → Field Validation → Post‑launch follow‑ups</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Audiences</h4>
                  <p className="text-muted-foreground">Members (customer‑facing) and Associates (employee‑facing)</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Methods</h4>
                  <p className="text-muted-foreground">Survey (~1.3K recipients), in‑store interviews & observation, service blueprinting, journey mapping, usability testing on Quick Pick prototype</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Geography Focus</h4>
                  <p className="text-muted-foreground">U.S. (including Chicago‑area stores for field study)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" title="Problem" kicker="Challenge">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Members complained that CPU orders weren't ready on arrival. Associates often didn't know when Members had arrived because check‑in wasn't happening (low awareness, unclear prompts, competing channels). Meanwhile, physical layouts (parking, entry points, freezer distance) created variability that the digital flow didn't account for.
              </p>
            </CardContent>
          </Card>
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={checkinRequirement} 
              alt="Sam's Club check-in requirement messaging"
              className="w-full h-auto"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Sam's Club website showing check-in requirement
            </p>
          </div>
        </div>
      </Section>

      {/* Objectives */}
      <Section id="objectives" title="Objectives" kicker="Goals">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-3">Member Experience</h4>
              <p className="text-muted-foreground">Identify preferred channels and moments for Member check‑in and order‑ready notifications.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-3">Associate Operations</h4>
              <p className="text-muted-foreground">Understand store‑level constraints influencing Associate throughput.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <ClipboardList className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-3">Quick Pick App</h4>
              <p className="text-muted-foreground">Evaluate and iterate the Quick Pick Associate app to streamline pick → stage → handoff.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold mb-3">Service Blueprint</h4>
              <p className="text-muted-foreground">Produce an integrated service blueprint spanning Members, Associates, and store infrastructure.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Research Approach */}
      <Section id="approach" title="Research Approach" kicker="Methodology">
        <div className="space-y-8">
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <h4 className="font-semibold text-lg mb-4">Holistic Research Plan</h4>
              <p className="text-muted-foreground mb-6">
                Comprehensive approach covering both the customer side (Digital Check‑In) and the employee side (Quick Pick).
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h5 className="font-medium mb-2">Survey Research</h5>
                  <p className="text-sm text-muted-foreground">CPU users and non‑app users to determine channel and check‑in preferences; synthesized 1,200+ open comments.</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Field Research</h5>
                  <p className="text-sm text-muted-foreground">Associate interviews, observational studies across stores with and without dedicated CPU areas (including Chicago region).</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Design & Testing</h5>
                  <p className="text-sm text-muted-foreground">Journey mapping, service blueprinting, and usability tests on Quick Pick prototype with iterative design.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Research Environment Images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={outdoorKiosks} 
                alt="Sam's Club outdoor check-in kiosks"
                className="w-full h-auto"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Outdoor kiosks for member check-in
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={dedicatedParking} 
                alt="Sam's Club dedicated CPU parking area"
                className="w-full h-auto"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Dedicated CPU parking spaces
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Findings */}
      <Section id="findings" title="Key Findings" kicker="Insights">
        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden mb-8">
            <img 
              src={findings1} 
              alt="Key research findings presentation slide"
              className="w-full h-auto"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Research findings presentation to stakeholders
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">SMS Preference</h4>
                <p className="text-muted-foreground">
                  Members want text message (SMS) prompts for order‑ready and check‑in; app/email alone underperformed.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">Check‑in as Linchpin</h4>
                <p className="text-muted-foreground">
                  Check‑in is a linchpin event. When missed, handoffs stall; Members default to walking inside, creating queues and frustration.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">Infrastructure Impact</h4>
                <p className="text-muted-foreground">
                  Store infrastructure matters. Dedicated CPU parking/entrances and freezer proximity strongly affect SLAs; variability penalized stores lacking these features.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">Workflow Simplification</h4>
                <p className="text-muted-foreground">
                  Associate workflows needed simplification. Early versions of Quick Pick had divergent menus and pathways, leading to avoidable steps and slower staging.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Experience Principles */}
      <Section id="principles" title="Experience Principles" kicker="Design Guidelines">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <h4 className="font-semibold text-lg mb-6">Member Experience (Digital Check‑In)</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Meet members where they are</h5>
                  <p className="text-sm text-muted-foreground">Prefer SMS for time‑sensitive prompts; keep email for receipts and summaries.</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Announce the requirement</h5>
                  <p className="text-sm text-muted-foreground">Make check‑in mandatory messaging explicit pre‑arrival; show progress states after check‑in.</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Short path to action</h5>
                  <p className="text-sm text-muted-foreground">One‑tap check‑in from SMS; deep‑link to order in app/web if opened there.</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Visibility</h5>
                  <p className="text-sm text-muted-foreground">Clear ETA for handoff; parking/entrance guidance; fallback when SMS fails.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <h4 className="font-semibold text-lg mb-6">Associate Experience (Quick Pick)</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium mb-2">Optimize for motion</h5>
                  <p className="text-sm text-muted-foreground">Minimize walking with sequenced pick lists; batch by location and temperature zone.</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Standardize menus and flows</h5>
                  <p className="text-sm text-muted-foreground">Reduce choice friction; surface next best action.</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Signal arrivals in real time</h5>
                  <p className="text-sm text-muted-foreground">Surface check‑ins on a dashboard with staging queue.</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Instrument operational KPIs</h5>
                  <p className="text-sm text-muted-foreground">Ready‑time, dwell, re‑routes, and handoff confirmations.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Service Blueprint */}
      <Section id="blueprint" title="Service Blueprint (CPU ↔ Quick Pick)" kicker="System Design">
        <div className="space-y-8">
          {/* Quick Pick App and Journey Map Images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={quickPickApp} 
                alt="Quick Pick Associate app interface"
                className="w-full h-auto"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Quick Pick app for Associates
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={journeyMap} 
                alt="Journey map for Quick Pick process"
                className="w-full h-auto"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">
                Journey map - First for Quick Pick
              </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">Triggers</h4>
                <p className="text-muted-foreground">Order ready → SMS to Member; arrival check‑in → signal to Associates.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">Front Stage</h4>
                <p className="text-muted-foreground">Member receives SMS → checks in → guided to dedicated area → status bar for staging/handoff.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">Back Stage</h4>
                <p className="text-muted-foreground">Quick Pick prioritizes tasks; assigns runner + handoff; exceptions route to help.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardContent className="p-8">
                <h4 className="font-semibold text-lg mb-4">Support</h4>
                <p className="text-muted-foreground">Layout, signage, freezer/ambient zones; staffing model; escalation playbook.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section id="impact" title="Impact" kicker="Results">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <h4 className="font-semibold text-lg mb-4">Quick Pick Improvements</h4>
              <p className="text-muted-foreground">Post‑research, Quick Pick was iterated to simplify flows and align with check‑in signals; Associate performance increased after launch.</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <h4 className="font-semibold text-lg mb-4">SMS‑Led Check‑in</h4>
              <p className="text-muted-foreground">Introducing SMS‑led check‑in reduced missed arrivals and queueing; Members encountered clearer directions and faster handoffs.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Next Steps */}
      <Section id="next" title="Next Steps" kicker="Future Work">
        <Card className="rounded-2xl">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">1. Pilot SMS‑first check‑in</h5>
                <p className="text-sm text-muted-foreground">Measure: check‑in rate, time‑to‑ready, dwell time, NPS/CSAT.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">2. Roll out CPU dashboard</h5>
                <p className="text-sm text-muted-foreground">For arrival signals and queue management in stores without dedicated CPU areas.</p>
              </div>
              <div>
                <h5 className="font-medium mb-2">3. Continue usability cycles</h5>
                <p className="text-sm text-muted-foregreen">On Quick Pick with real‑world store constraints.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Credits */}
      <Section id="credits" title="Credits" kicker="Team">
        <Card className="rounded-2xl">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div>
                <h5 className="font-medium">Fanya Young</h5>
                <p className="text-sm text-muted-foreground">Lead Researcher</p>
              </div>
              <div>
                <h5 className="font-medium">Partners</h5>
                <p className="text-sm text-muted-foreground">Store Ops, Product (Quick Pick), Member Experience</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 sm:px-8 pb-16">
        <div className="border rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">© 2024 Fanya Young. All rights reserved.</p>
          </div>
          <Button asChild>
            <a href="mailto:e.fanya.young@gmail.com?subject=Sam's%20Club%20CPU%20Project">Get in touch</a>
          </Button>
        </div>
      </footer>
    </div>
  );
}