import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { TagList, TagListItem } from '@/components/TagList'
import { RootLayout } from '@/components/RootLayout'
import { AbstractFaces } from '@/components/illustrations/AbstractFaces'

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div
            className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
            aria-hidden="true"
          />
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6">{children}</div>
        </FadeIn>
      </div>
    </Container>
  )
}

function SystemAnalysis() {
  return (
    <Section title="Phase 1: System Analysis">
      <div className="space-y-6 text-base text-neutral-600">
        <p className="font-semibold text-brand-navy text-lg">
          Mapping Your Leadership Architecture (Sessions 1-2)
        </p>
        <p>
          We begin with forensic analysis of your internal operating system. Using MIT-certified assessment methodologies and AI-enhanced pattern recognition, we identify your dominant leadership subsystems and their activation patterns.
        </p>
        <p>
          This isn't personality typing. It's dynamic systems mapping—understanding not just what exists, but how it interacts under different conditions. We uncover internal conflicts that create external friction and underutilized capabilities that could expand your range.
        </p>
        <p>
          You'll discover the specific triggers that shift you from integration to fragmentation, and why certain leadership situations energize you while others drain you.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What's included
      </h3>
      <TagList className="mt-4">
        <TagListItem>MIT-certified assessment methodologies</TagListItem>
        <TagListItem>AI-enhanced pattern recognition</TagListItem>
        <TagListItem>Leadership subsystem mapping</TagListItem>
        <TagListItem>Internal conflict identification</TagListItem>
        <TagListItem>Capability gap analysis</TagListItem>
        <TagListItem>Trigger pattern documentation</TagListItem>
      </TagList>
    </Section>
  )
}

function IntegrationEngineering() {
  return (
    <Section title="Phase 2: Integration Engineering">
      <div className="space-y-6 text-base text-neutral-600">
        <p className="font-semibold text-brand-navy text-lg">
          Building Conscious Coordination (Sessions 3-6)
        </p>
        <p>
          Through structured dialogue techniques adapted from organizational psychology, you develop direct communication channels with different aspects of your leadership system.
        </p>
        <p>
          This work is practical, not esoteric. You learn to recognize when the perfectionist is hijacking a delegation opportunity, when the diplomat is preventing necessary conflict, when the analyst is using complexity to avoid decision risk.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">Recognition creates choice. Choice enables conscious leadership rather than reactive management.</strong>
        </p>
        <p>
          Between sessions, you apply these insights in actual leadership situations—board meetings, crisis management, stakeholder negotiations—with real-time support and systematic debrief.
        </p>
      </div>

      <Blockquote
        author={{ name: 'CEO', role: 'Swiss Financial Services' }}
        className="mt-12"
      >
        This work gave me access to parts of my leadership I didn't know existed. My board noticed the shift in presence within weeks.
      </Blockquote>
    </Section>
  )
}

function SustainableMastery() {
  return (
    <Section title="Phase 3: Sustainable Mastery">
      <div className="space-y-6 text-base text-neutral-600">
        <p className="font-semibold text-brand-navy text-lg">
          Architecting Long-term Excellence (Sessions 7-10)
        </p>
        <p>
          Advanced integration work focuses on situational optimization—consciously accessing different leadership capabilities for different contexts. The strategist leads vision sessions. The operator drives execution reviews. The diplomat navigates political complexity.
        </p>
        <p>
          You develop what we call <strong className="font-semibold text-neutral-950">"meta-leadership"</strong>—the ability to observe and direct your own internal system while simultaneously leading external systems. This is the hallmark of truly exceptional executives.
        </p>
        <p>
          The outcome: sustainable high performance without the exhaustion that typically accompanies senior leadership.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What you achieve
      </h3>
      <List className="mt-8">
        <ListItem title="Meta-Leadership Capability">
          Observe and direct your internal system while leading external systems—the hallmark of exceptional executives.
        </ListItem>
        <ListItem title="Situational Optimization">
          Consciously access different leadership capabilities for different contexts with precision.
        </ListItem>
        <ListItem title="Sustainable Excellence">
          Maintain peak performance without the exhaustion typical of senior leadership roles.
        </ListItem>
      </List>
    </Section>
  )
}

function EngagementStructures() {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Engagement Structures"
        title="Individual Executive Programs"
      >
        <p>
          Different engagement structures designed for various executive needs and complexity levels. All based on the same systematic Inner Team Dynamics™ architecture.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Leadership Integration Intensive">
            <strong>For executives in transition or facing specific challenges</strong><br/>
            6 sessions over 90 days • Bi-weekly 60-minute sessions • Between-session application assignments • Email support for urgent situations
          </GridListItem>
          <GridListItem title="Senior Leadership Architecture">
            <strong>For sustained excellence and complex challenges</strong><br/>
            12 sessions over 6 months • Comprehensive system mapping • Crisis coaching availability • Quarterly reviews post-program
          </GridListItem>
          <GridListItem title="AI-Accelerated Leadership">
            <strong>For technology-forward executives</strong><br/>
            8 sessions with advanced AI analysis • Digital leadership strategies • Future-ready development • Innovation mindset integration
          </GridListItem>
          <GridListItem title="Executive Team Synchronization">
            <strong>Aligning senior team dynamics</strong><br/>
            2-day intensive workshop • Individual follow-up sessions • Team dynamics optimization • Collective decision architecture
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function MethodologyDifferentiation() {
  return (
    <>
      <SectionIntro
        eyebrow="Methodology Differentiation"
        title="What Distinguishes This Approach"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          This isn't traditional executive coaching. It's systematic leadership integration based on organizational psychology principles applied to individual development.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="bg-white p-8 rounded-3xl ring-1 ring-brand-blue/10">
              <h3 className="font-display text-xl font-semibold text-brand-navy mb-4">
                Executive-Specific Design
              </h3>
              <p className="text-neutral-600">
                Developed through work with 200+ senior leaders. Every framework, every tool, every session structure designed for the unique challenges of executive leadership. No borrowed therapeutic models or generic coaching frameworks.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="bg-white p-8 rounded-3xl ring-1 ring-brand-blue/10">
              <h3 className="font-display text-xl font-semibold text-brand-navy mb-4">
                Systems Architecture Focus
              </h3>
              <p className="text-neutral-600">
                We treat your internal world like you treat your organization—as a complex system requiring sophisticated management. This resonates with executives who think in systems, strategies, and structures.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="bg-white p-8 rounded-3xl ring-1 ring-brand-blue/10">
              <h3 className="font-display text-xl font-semibold text-brand-navy mb-4">
                AI-Enhanced Precision
              </h3>
              <p className="text-neutral-600">
                MIT-certified integration of artificial intelligence for pattern recognition and blind spot identification. Technology amplifies insight without replacing human wisdom.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="bg-white p-8 rounded-3xl ring-1 ring-brand-blue/10">
              <h3 className="font-display text-xl font-semibold text-brand-navy mb-4">
                Somatic Integration
              </h3>
              <p className="text-neutral-600">
                Leadership isn't just cognitive. We work with the full system—mental, emotional, and physiological. Research shows that executive presence is 55% somatic. We address all dimensions.
              </p>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn className="mt-12">
          <div className="bg-brand-navy/5 rounded-4xl p-8 lg:p-12 text-center">
            <h3 className="font-display text-xl font-semibold text-brand-navy mb-4">
              Measurable Outcomes
            </h3>
            <p className="text-neutral-600">
              Changes in decision speed, team engagement scores, 360 feedback, and energy sustainability. This isn't soft development. It's performance engineering with quantifiable results.
            </p>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

function EngagementParameters() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Engagement Parameters"
        title="Your Investment"
        invert
      >
        <p>
          This work requires intellectual curiosity, psychological sophistication, and the humility to recognize that mastery is an ongoing process.
        </p>
      </SectionIntro>
      
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn>
            <div className="text-center">
              <h3 className="font-display text-lg font-semibold text-white mb-4">
                Your Investment
              </h3>
              <div className="space-y-3 text-sm text-white/80">
                <p><strong className="text-white">Time:</strong> 60 minutes bi-weekly, plus brief daily practice (5-10 minutes)</p>
                <p><strong className="text-white">Commitment:</strong> Minimum 6 sessions for measurable impact</p>
                <p><strong className="text-white">Application:</strong> Testing insights in real leadership contexts</p>
                <p><strong className="text-white">Documentation:</strong> Brief reflection notes between sessions</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center">
              <h3 className="font-display text-lg font-semibold text-white mb-4">
                Expected Timeline
              </h3>
              <div className="space-y-3 text-sm text-white/80">
                <p><strong className="text-white">Week 1-2:</strong> Enhanced self-observation and pattern recognition</p>
                <p><strong className="text-white">Week 3-8:</strong> Measurable shifts in decision-making and energy</p>
                <p><strong className="text-white">Week 9-16:</strong> Team and stakeholder feedback on presence shifts</p>
                <p><strong className="text-white">Month 4+:</strong> Sustainable performance without burnout</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center">
              <h3 className="font-display text-lg font-semibold text-white mb-4">
                Confidentiality
              </h3>
              <div className="space-y-3 text-sm text-white/80">
                <p>Complete confidentiality guaranteed. No organizational reporting.</p>
                <p>Many executives engage independently to maintain privacy while developing capability.</p>
                <p>NDA provided before any strategic discussions begin.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

function QualificationCriteria() {
  return (
    <>
      <SectionIntro
        eyebrow="Qualification Criteria"
        title="This Work Is Designed For"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Executives who hold significant responsibility and recognize that technical competence alone won't navigate the challenges ahead.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="bg-white p-8 rounded-3xl ring-1 ring-brand-blue/10">
          <h3 className="font-display text-lg font-semibold text-brand-navy mb-6 text-center">
            Executives who:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• Hold P&L responsibility exceeding €25M</li>
                <li>• Lead teams of 50+ people</li>
                <li>• Face complex stakeholder dynamics</li>
                <li>• Recognize that technical competence isn't enough</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• Are curious about their own operating system</li>
                <li>• Value systematic approaches over quick fixes</li>
                <li>• Understand that mastery is an ongoing process</li>
                <li>• Are ready for systematic inner work</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

function ClientEvidence() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-16">
          Client Evidence
        </h2>
      </FadeIn>
      
      <div className="space-y-8">
        <FadeIn>
          <blockquote className="bg-white p-8 rounded-3xl ring-1 ring-brand-blue/10 text-center">
            <p className="text-lg italic text-neutral-600 mb-4">
              "The ROI is clear: faster decisions, less internal friction, more energy at the end of the day. This should be mandatory for senior executives."
            </p>
            <p className="font-medium text-brand-navy">— Managing Director, Global Pharmaceutical</p>
          </blockquote>
        </FadeIn>
        
        <FadeIn>
          <blockquote className="bg-white p-8 rounded-3xl ring-1 ring-brand-blue/10 text-center">
            <p className="text-lg italic text-neutral-600 mb-4">
              "I've done every leadership program from INSEAD to Harvard. This is the only one that addressed the actual challenge of senior leadership."
            </p>
            <p className="font-medium text-brand-navy">— Regional President, Technology</p>
          </blockquote>
        </FadeIn>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Inner Team Dynamics™: Executive Integration Architecture | Francisco Baptista',
  description:
    'Systematic leadership integration for senior executives. 3-phase Inner Team Dynamics™ methodology: System Analysis, Integration Engineering, Sustainable Mastery. MIT-certified AI-enhanced approach.',
}

export default function Process() {
  return (
    <RootLayout>
      {/* Unified Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <AbstractFaces
          className="pointer-events-none absolute -top-64 -left-32 w-[200rem] opacity-[0.015]"
          orangeColor="rgb(254,80,0)"
          blueColor="rgb(0,114,206)"
          navyColor="rgb(0,60,113)"
        />
      </div>
      <PageIntro eyebrow="Inner Team Dynamics™: Executive Integration Architecture" title="Executive excellence isn't about adding more tools. It's about integrating what's already there.">
        <p>
          You've mastered external systems—P&L management, stakeholder navigation, strategic planning. Yet the most sophisticated leaders recognize that sustainable performance requires equal mastery of internal architecture.
        </p>
        <p className="mt-6 font-medium">
          Inner Team Dynamics™ applies systematic rigor to leadership psychology. Not therapy. Not coaching. Integration engineering for executives who operate at the highest levels.
        </p>
      </PageIntro>

      <SectionIntro
        eyebrow="The Executive Reality"
        title="What Actually Happens in Senior Leadership"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At 9 AM, you're the strategic visionary in a board presentation. At 10 AM, you're the demanding perfectionist in a performance review. At 11 AM, you're managing upward with careful diplomacy. By noon, the internal critic questions every decision you've made.
        </p>
        <p className="mt-6">
          Each context activates different aspects of your leadership personality. The strategist. The diplomat. The driver. The analyst. The risk-taker. The guardian.
        </p>
        <p className="mt-6 font-medium text-brand-navy">
          Most executives exhaust themselves trying to suppress these variations or forcing consistency where none exists. The highest performers take a different approach: they architect conscious integration.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-neutral-950 text-center mb-8">
              Leadership as Internal Architecture
            </h3>
            <div className="bg-brand-navy/5 rounded-4xl p-8 lg:p-12">
              <p className="text-lg text-neutral-600 mb-6">
                Consider how you run executive meetings. Different stakeholders bring different perspectives, capabilities, and agendas. Your role is orchestration—knowing when to amplify certain voices, when to moderate others, when to synthesize competing viewpoints into coherent strategy.
              </p>
              <p className="text-lg font-medium text-brand-navy text-center">
                Your internal system operates identically.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <SystemAnalysis />
        <IntegrationEngineering />
        <SustainableMastery />
      </div>

      <EngagementStructures />

      <MethodologyDifferentiation />

      <EngagementParameters />

      <QualificationCriteria />

      <ClientEvidence />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-semibold text-neutral-950 mb-6">
              The Final Frontier of Leadership
            </h2>
            <div className="space-y-6 text-lg text-neutral-600">
              <p>
                You've mastered strategy, operations, and stakeholder management. You understand markets, technology, and organizational dynamics.
              </p>
              <p>
                The remaining variable is you—specifically, how well you can orchestrate the complex system of perspectives, capabilities, and patterns that comprise your leadership.
              </p>
              <p>
                Executives who master this internal architecture don't just perform better. They sustain excellence without exhaustion. They make clearer decisions faster. They inspire through presence rather than position.
              </p>
            </div>
            <blockquote className="mt-12 text-xl italic text-neutral-600">
              "The best executives aren't trying to be leaders. They're learning to lead themselves. Everything else follows."
            </blockquote>
            <p className="mt-6 font-medium text-neutral-950">— Francisco Baptista</p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}