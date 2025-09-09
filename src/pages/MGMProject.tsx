import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Mail, Sparkles, Gauge, Target, BarChart3, Users, TrendingUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

/**
 * MGM Case Study — Guest Experience Analytics Platform
 * Luxury hospitality analytics with ML-powered guest insights
 */

const LINKS = {
  pdf: "#",
  prototype: "#",
  email: "mailto:fanyayoung@gmail.com",
  presentation: "#",
};

const GRADIENTS = {
  hero: "from-amber-500 via-orange-500 to-red-600",
  pill: "from-amber-500 to-red-600",
  glow: "shadow-[0_0_60px_rgba(251,146,60,0.35)]",
};

const Pill = ({ children }) => (
  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${GRADIENTS.pill} ${GRADIENTS.glow}`}>
    <Sparkles className="w-3.5 h-3.5" />
    {children}
  </span>
);

const Glass = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl ${GRADIENTS.glow} shadow-2xl ${className}`}>{children}</div>
);

const Metric = ({ value, label }) => (
  <div className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur p-4 text-center">
    <div className="text-3xl md:text-4xl font-extrabold text-white leading-none">{value}</div>
    <div className="text-xs md:text-sm text-white/80 mt-1">{label}</div>
  </div>
);

const MGMProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <div className="relative max-w-6xl mx-auto px-6 pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/');
            }
          }}
          className="text-white/80 hover:text-white hover:bg-white/10"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS.hero} opacity-30`} />
        <div className="relative max-w-6xl mx-auto px-6 pt-10 pb-20">
          <Pill>Hospitality Analytics • Machine Learning • Guest Experience</Pill>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_20px_rgba(255,255,255,0.2)]"
          >
            MGM Guest Experience Analytics Platform
          </motion.h1>
          <p className="mt-4 max-w-3xl text-white/85 text-lg">
            Revolutionizing luxury hospitality through advanced analytics and machine learning. Predicting guest behavior, 
            personalizing experiences, and optimizing operations in real-time across MGM's premier resort portfolio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.prototype} className="group inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold hover:translate-y-[-1px] transition">
              View Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a href={LINKS.pdf} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 bg-white/10 hover:bg-white/15 transition">
              <Download className="w-4 h-4" /> Case Study PDF
            </a>
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 hover:bg-white/15 transition">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 -mt-10">
          <Glass className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Metric value="+34%" label="Guest satisfaction scores" />
              <Metric value="67%" label="Prediction accuracy" />
              <Metric value="-28%" label="Operational costs" />
              <Metric value="2.4M" label="Guest interactions analyzed" />
            </div>
          </Glass>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section id="overview" className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2"><Target className="w-5 h-5" /> Project Vision</h2>
            <p className="text-white/85">
              Transform the luxury hospitality experience by leveraging <strong>machine learning</strong> and <strong>predictive analytics</strong> 
              to anticipate guest needs, personalize services, and optimize resort operations. The platform processes millions of guest 
              touchpoints to deliver insights that enhance satisfaction while reducing operational overhead.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-white/90 list-disc pl-5">
              <li>Predictive guest preference modeling</li>
              <li>Real-time operational optimization</li>
              <li>Personalized experience recommendations</li>
              <li>Revenue optimization algorithms</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Glass className="p-6">
              <div className="flex items-center gap-2 text-white/90"><Gauge className="w-5 h-5" /> Project Details</div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div><div className="text-white/70">Role</div><div className="font-semibold">Senior Data Scientist</div></div>
                <div><div className="text-white/70">Timeline</div><div className="font-semibold">14 months (2023-2024)</div></div>
                <div><div className="text-white/70">Team</div><div className="font-semibold">Data(4), Eng(6), Product(2)</div></div>
                <div><div className="text-white/70">Stack</div><div className="font-semibold">Azure ML, Power BI, React</div></div>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section id="features" className="max-w-6xl mx-auto px-6 pb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><Users className="w-5 h-5" /> Key Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Guest Journey Analytics",
            description: "ML-powered analysis of guest touchpoints from booking to checkout, identifying patterns and optimization opportunities."
          }, {
            icon: <Target className="w-6 h-6" />,
            title: "Predictive Personalization",
            description: "Real-time recommendation engine for dining, entertainment, and amenity preferences based on historical data and behavior patterns."
          }, {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Operational Intelligence",
            description: "Dynamic resource allocation and staffing optimization using predictive demand forecasting and capacity planning."
          }].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Glass className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/75 text-sm leading-relaxed">{feature.description}</p>
              </Glass>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECHNICAL IMPLEMENTATION */}
      <section id="technical" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><Gauge className="w-5 h-5" /> Technical Implementation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Machine Learning Pipeline</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex justify-between items-center">
                <span>Guest Behavior Classification</span>
                <span className="text-amber-400 font-semibold">Random Forest</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Revenue Optimization</span>
                <span className="text-amber-400 font-semibold">Gradient Boosting</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Demand Forecasting</span>
                <span className="text-amber-400 font-semibold">LSTM Networks</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Recommendation Engine</span>
                <span className="text-amber-400 font-semibold">Collaborative Filtering</span>
              </div>
            </div>
          </Glass>
          
          <Glass className="p-6">
            <h3 className="text-xl font-bold text-white mb-4">Data Architecture</h3>
            <div className="space-y-3 text-white/80 text-sm">
              <div className="flex justify-between items-center">
                <span>Data Warehouse</span>
                <span className="text-amber-400 font-semibold">Azure Synapse</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Real-time Processing</span>
                <span className="text-amber-400 font-semibold">Event Hubs</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Analytics Platform</span>
                <span className="text-amber-400 font-semibold">Power BI</span>
              </div>
              <div className="flex justify-between items-center">
                <span>API Gateway</span>
                <span className="text-amber-400 font-semibold">Azure APIM</span>
              </div>
            </div>
          </Glass>
        </div>
      </section>

      {/* IMPACT & RESULTS */}
      <section id="results" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 mb-6"><BarChart3 className="w-5 h-5" /> Impact & Results</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Metric value="+34%" label="Guest satisfaction (NPS)" />
          <Metric value="+22%" label="Revenue per guest" />
          <Metric value="-28%" label="Operational costs" />
          <Metric value="67%" label="ML prediction accuracy" />
        </div>
        
        <Glass className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Business Outcomes</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-400 mb-2">Guest Experience</h4>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>• Personalized dining recommendations increased satisfaction by 34%</li>
                <li>• Proactive service delivery reduced guest complaints by 45%</li>
                <li>• Dynamic pricing optimization improved perceived value</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-amber-400 mb-2">Operational Excellence</h4>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>• Predictive staffing reduced labor costs by 28%</li>
                <li>• Real-time capacity optimization improved utilization</li>
                <li>• Automated insights reduced manual analysis time by 75%</li>
              </ul>
            </div>
          </div>
        </Glass>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Glass className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white/60 text-xs">Next Steps</div>
            <h3 className="text-xl md:text-2xl font-bold">Explore Technical Deep Dive</h3>
            <p className="text-white/70 text-sm mt-1">Detailed analysis of ML models, data pipelines, and implementation architecture.</p>
          </div>
          <div className="flex gap-3">
            <a href={LINKS.email} className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-slate-900 font-semibold"><Mail className="w-4 h-4" /> Contact Fanya</a>
            <a href={LINKS.pdf} className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/40 bg-white/10 hover:bg-white/15 transition"><Download className="w-4 h-4" /> Download PDF</a>
          </div>
        </Glass>
        <p className="text-xs text-white/40 mt-6">© {new Date().getFullYear()} Fanya Young · Senior Data Scientist · MGM Resorts International</p>
      </section>
    </div>
  );
};

export default MGMProject;