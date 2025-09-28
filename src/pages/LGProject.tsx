import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Users, Target, BarChart3, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LGSlideshow } from "@/components/LGSlideshow";

// Import workshop images
import lgTeamPhoto from "@/assets/lg-team-photo.jpg";
import lgWorkshopSetup from "@/assets/lg-workshop-setup.jpg";
import lgTeamGroups from "@/assets/lg-team-groups.jpg";
import lgTeamReturned from "@/assets/lg-team-returned.jpg";
import lgEmpathyMap from "@/assets/lg-empathy-map.jpg";
import lgBeforeHypothesis from "@/assets/lg-before-hypothesis.jpg";
import lgTheUser from "@/assets/lg-the-user.jpg";
import lgAfterValidation from "@/assets/lg-after-validation.jpg";

const LGProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/')}
          className="text-white/80 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Portfolio
        </Button>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-fuchsia-500/20 to-indigo-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500/20 to-indigo-500/20 border border-white/20 mb-6">
              Field Research • Workshop Design • B2B Product Development
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              LG Future Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed"
            >
              Bringing customers into B2B product development through field research and cross-functional team workshops
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="mailto:fanyayoung@gmail.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                <Mail size={16} />
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT STATS */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-4xl font-bold text-white mb-1">12</div>
              <div className="text-xs lg:text-sm text-white/70">Team Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-xs lg:text-sm text-white/70">Retail Locations</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-4xl font-bold text-white mb-1">8</div>
              <div className="text-xs lg:text-sm text-white/70">Week Timeline</div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 lg:p-6 text-center">
              <div className="text-2xl lg:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-xs lg:text-sm text-white/70">Team Alignment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE SECTION */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
                <Target size={32} className="text-fuchsia-400 flex-shrink-0" />
                The Challenge
              </h2>
              <div className="space-y-6 text-white/80 text-base lg:text-lg leading-relaxed">
                <p>
                  The Future Experience team had a mandate to <strong className="text-white">"disrupt the industry"</strong> with a new B2B product. But how do you bring real customers into the development process before you even know what to build?
                </p>
                <p>
                  Too often we build products within a silo, losing sight of user needs, behaviors, and attitudes. I designed a workshop study that would help the team develop deep customer understanding through shared field experiences.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 lg:p-8">
              <div className="flex items-center gap-3 text-white mb-6">
                <Users size={24} className="text-fuchsia-400" />
                <h3 className="text-xl font-semibold">Project Overview</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white/60 mb-1">Role</div>
                  <div className="font-semibold">Lead UX Researcher</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Timeline</div>
                  <div className="font-semibold">8 weeks</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Team</div>
                  <div className="font-semibold">Engineers, PMs, Designers</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Focus</div>
                  <div className="font-semibold">Retail/Convenience Stores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART ONE: WORKSHOP PROCESS */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-fuchsia-500/20 text-fuchsia-300 rounded-full text-sm font-medium mb-6">
              PART ONE: USER EXPERIENCE
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <FlaskConical size={32} className="text-fuchsia-400" />
              The Workshop Experience
            </h2>
            
            {/* Context about why the workshop was needed */}
            <div className="max-w-4xl mx-auto mb-12 text-left">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">The Challenge: Lack of Shared Understanding</h3>
                <div className="space-y-6 text-white/80 text-base lg:text-lg leading-relaxed">
                  <p>
                    The engineering team was creating a prototype, but wasn't building with users in mind. During meetings, I realized that anecdotes one person would bring up in discussion were met with looks of confusion.
                  </p>
                  <p>
                    This was a diverse team representing many countries around the world. The questions arising from these discussions: Were these hardware developers referring to different shopping experiences without any common reference point? Were we operating under the assumption that everyone shared a common understanding of convenience store shopping?
                  </p>
                  <p>
                    Based on intense debate and lack of consensus, I suspected everyone had differing experiences with shopping. After conducting informal interviews with team members, it became apparent: <strong className="text-white">We needed a shared understanding of convenience store shopping based on our target market—the United States.</strong>
                  </p>
                  <div className="bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-2xl p-4 lg:p-6 mt-6">
                    <p className="text-fuchsia-200 italic">
                      "Assumptions about convenience store shopping experience, the business (clerk experience), and customers varied wildly among the engineers. There was a lack of common understanding when referring to the business or users. We needed to level-set understanding so all team members could share the same knowledge of user problems, needs, and goals."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-white/80 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              I approached senior management and proposed conducting in-field observation research with the engineering team. Teams divided into groups of 3 and visited convenience stores, gas stations, and retail locations to observe real customer behaviors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group lg:col-span-3"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={lgTeamPhoto} 
                    alt="LG cross-functional team" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">Cross-functional team ready for field research</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={lgWorkshopSetup} 
                    alt="Workshop setup and preparation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">Workshop preparation and setup</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={lgTeamGroups} 
                    alt="Teams divided into groups" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">Teams divided into groups of 3</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={lgTeamReturned} 
                    alt="Groups returned with data" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">Groups returned after gathering field data</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group lg:col-span-2"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={lgEmpathyMap} 
                    alt="Empathy map with team insights" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">Team synthesis: Notes added to the empathy map</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Workshop Results */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 lg:p-8 mb-16">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Workshop Success</h3>
            <p className="text-white/80 leading-relaxed">
              The workshop was a success! The team was engaged and produced many notes from their field observations. 
              We created an empathy map, analyzed the data, and reached alignment on the customer experience. 
              After this process, the team had the tools to build a better product, one that customers would love.
            </p>
          </div>

          {/* Before and After Insights */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={lgBeforeHypothesis} 
                    alt="Team hypotheses before field visits" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">BEFORE: Our hypotheses before the visit</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={lgTheUser} 
                    alt="Understanding the user" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">Understanding the environment and user context</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur border border-white/20">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={lgAfterValidation} 
                    alt="Validated findings" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-white/80">AFTER: Validation of what to do/not do/might do</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PART TWO: MARKET RESEARCH */}
      <section className="py-12 lg:py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6">
              PART TWO: MARKET RESEARCH
            </div>
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">B2B Market Analysis for Point-of-Sale Solutions</h2>
            <p className="text-white/80 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              After the workshop, I conducted comprehensive market research to understand the convenience store industry 
              and identify opportunities for B2B point-of-sale transaction solutions. This research informed business strategy 
              about market share potential and competitive landscape.
            </p>
          </div>
          
          <LGSlideshow />
          
          <div className="mt-12 bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">Research Methodology</h3>
            <div className="grid md:grid-cols-2 gap-6 text-white/80">
              <div>
                <h4 className="font-semibold text-white mb-2">Field Research</h4>
                <p className="text-sm leading-relaxed">
                  Visited various convenience stores and gas stations with attached stores to observe customer behaviors, 
                  transaction patterns, and pain points in real-world environments.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Market Analysis</h4>
                <p className="text-sm leading-relaxed">
                  Analyzed market share potential, competitive landscape, and business opportunities for B2B 
                  point-of-sale solutions in the convenience retail sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <BarChart3 size={32} className="text-fuchsia-400" />
              Impact & Results
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Team Transformation</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Shared understanding</strong> — Everyone observed the same customer pain points
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Customer-first mindset</strong> — Decisions now grounded in real user behavior
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Better product ideas</strong> — Solutions that address actual needs, not assumptions
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Team alignment</strong> — Engineering, PM, and Design working from same insights
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Research Outcomes</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Validated hypotheses</strong> — Confirmed key assumptions about user behavior
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Disproved assumptions</strong> — Discovered gaps in our understanding
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">New opportunities</strong> — Identified unmet needs in convenience retail
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-fuchsia-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-white">Product roadmap</strong> — Clear direction for B2B product development
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-12 lg:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Fanya Young · UX Research · Bringing customers into product development
          </p>
        </div>
      </section>
    </div>
  );
};

export default LGProject;