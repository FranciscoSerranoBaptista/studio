import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Terms of Engagement - Francisco Baptista',
  description:
    'Terms of engagement for executive transition advisory services. Confidential strategic advisory for C-Suite and Managing Director transitions.',
}

export default function Terms() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Terms of Engagement" title="Executive Advisory Terms">
        <p>
          Professional terms governing confidential executive transition
          advisory engagements for senior executives and their organizations.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="prose prose-lg max-w-none">
            <div className="mb-12 rounded-lg bg-gray-50 p-6">
              <p className="mb-2 text-sm font-medium text-gray-900">
                CONFIDENTIAL AND PROPRIETARY
              </p>
              <p className="text-sm text-gray-600">
                These terms govern the provision of executive transition
                advisory services. The existence and nature of any advisory
                relationship is strictly confidential unless explicitly agreed
                otherwise in writing.
              </p>
            </div>

            <h2>1. Nature of Advisory Engagement</h2>
            <p>
              Francisco Baptista ("Advisor") provides strategic executive
              transition advisory services to qualified senior executives and
              their organizations ("Client"). These services constitute
              confidential strategic consultation based on proprietary
              methodologies developed through analysis of 200+ executive
              transitions.
            </p>
            <p>
              The advisory relationship is founded on peer-level consultation
              between executives navigating complex organizational dynamics.
              This is not traditional coaching or consulting but systematic
              intervention design for high-stakes transitions.
            </p>

            <h2>2. Qualification and Scope</h2>
            <h3>2.1 Client Qualification</h3>
            <p>Advisory services are exclusively available to:</p>
            <ul>
              <li>C-Suite executives and Managing Directors</li>
              <li>Senior leaders with €50M+ P&L responsibility</li>
              <li>
                Executives facing board-level scrutiny and complex stakeholder
                environments
              </li>
              <li>
                Leaders in transition windows: 6 months pre-appointment through
                180 days post-arrival
              </li>
            </ul>

            <h3>2.2 Service Scope</h3>
            <p>
              Services encompass three distinct phases as detailed in individual
              Engagement Letters:
            </p>
            <ul>
              <li>
                <strong>System Analysis:</strong> Comprehensive mapping of
                transition context, stakeholder dynamics, and success
                architecture
              </li>
              <li>
                <strong>Integration Engineering:</strong> Design and
                implementation of transition strategies and stakeholder
                management approaches
              </li>
              <li>
                <strong>Sustainable Mastery:</strong> Establishment of
                self-sustaining success patterns and momentum mechanisms
              </li>
            </ul>

            <h2>3. Confidentiality and Independence</h2>
            <h3>3.1 Mutual Confidentiality</h3>
            <p>
              The advisory relationship operates under strict mutual
              confidentiality. All information exchanged—including the existence
              of the advisory relationship itself—remains confidential unless
              explicitly authorized in writing. This includes:
            </p>
            <ul>
              <li>Organizational dynamics and political considerations</li>
              <li>Personal strategic considerations and career implications</li>
              <li>Stakeholder assessments and relationship strategies</li>
              <li>
                Proprietary methodologies and frameworks shared during
                engagement
              </li>
            </ul>

            <h3>3.2 Independence</h3>
            <p>
              The Advisor maintains complete independence from the Client's
              organization. This advisory relationship exists outside
              organizational boundaries, enabling candid strategic dialogue
              essential for navigating complex political dynamics. The Advisor
              has no obligation to report to the Client's organization unless
              explicitly agreed in writing.
            </p>

            <h2>4. Intellectual Property</h2>
            <h3>4.1 Proprietary Methodologies</h3>
            <p>
              The following remain exclusive intellectual property of Francisco
              Baptista:
            </p>
            <ul>
              <li>Executive Transition Architecture™ methodology</li>
              <li>Inner Team Dynamics™ framework</li>
              <li>
                Associated diagnostic tools, frameworks, and assessment
                instruments
              </li>
              <li>
                Pattern recognition insights from executive transition research
              </li>
            </ul>

            <h3>4.2 Client License</h3>
            <p>
              Client receives a non-exclusive, non-transferable license to
              utilize insights and frameworks internally for their personal
              executive effectiveness. This license does not permit
              reproduction, distribution, or commercial use of proprietary
              methodologies.
            </p>

            <h2>5. Professional Standards and Ethics</h2>
            <h3>5.1 Standards of Practice</h3>
            <p>
              Advisory services are provided in accordance with the highest
              professional standards applicable to executive advisory and
              strategic consultation, including:
            </p>
            <ul>
              <li>Maintenance of strict confidentiality and discretion</li>
              <li>Avoidance of conflicts of interest</li>
              <li>Provision of candid, unbiased strategic counsel</li>
              <li>Respect for organizational and stakeholder interests</li>
            </ul>

            <h3>5.2 No Guarantee of Outcomes</h3>
            <p>
              While the Advisor's methodology demonstrates an 87% success rate
              across 200+ engagements, executive success depends on numerous
              factors including Client execution, organizational dynamics, and
              market conditions. The Advisor provides strategic counsel and
              systematic frameworks but cannot guarantee specific outcomes.
            </p>

            <h2>6. Financial Terms</h2>
            <h3>6.1 Fee Structure</h3>
            <p>
              Engagement fees reflect the strategic value and complexity of
              executive transitions, typically ranging €50,000-150,000 as
              detailed in individual Engagement Letters. Fees are structured to
              align with value creation and risk mitigation rather than time
              expenditure.
            </p>

            <h3>6.2 Payment Terms</h3>
            <p>Standard payment terms:</p>
            <ul>
              <li>50% upon engagement commencement</li>
              <li>25% at 45-day milestone</li>
              <li>25% upon engagement completion</li>
              <li>
                Alternative structures available for qualified circumstances
              </li>
            </ul>
            <p>
              Invoices are payable within 30 days. Late payments accrue interest
              at 1.5% monthly.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              Given the advisory nature of services and the Client's ultimate
              responsibility for decisions and execution, the Advisor's
              aggregate liability is limited to fees paid for services rendered.
              The Advisor is not liable for:
            </p>
            <ul>
              <li>Indirect, consequential, or special damages</li>
              <li>Lost profits or opportunities</li>
              <li>Decisions made by Client based on advisory input</li>
              <li>Organizational or market factors beyond advisory scope</li>
            </ul>

            <h2>8. Termination</h2>
            <h3>8.1 Termination Rights</h3>
            <p>
              Either party may terminate the engagement with 30 days written
              notice. The Advisor may terminate immediately if:
            </p>
            <ul>
              <li>Client breaches confidentiality obligations</li>
              <li>Circumstances create professional or ethical conflicts</li>
              <li>
                Client requests counsel contrary to professional standards
              </li>
            </ul>

            <h3>8.2 Post-Termination</h3>
            <p>Upon termination:</p>
            <ul>
              <li>Fees for services rendered remain payable</li>
              <li>Confidentiality obligations survive indefinitely</li>
              <li>
                Intellectual property rights remain with respective parties
              </li>
              <li>Client receives summary documentation of work completed</li>
            </ul>

            <h2>9. Dispute Resolution</h2>
            <p>
              Any disputes arising from this engagement will be resolved
              through:
            </p>
            <ul>
              <li>First, good faith negotiation between principals</li>
              <li>
                If necessary, confidential mediation in Geneva, Switzerland
              </li>
              <li>
                Finally, binding arbitration under Swiss Rules of International
                Arbitration
              </li>
            </ul>
            <p>
              The prevailing party is entitled to reasonable costs including
              advisory fees.
            </p>

            <h2>10. Governing Law and Jurisdiction</h2>
            <p>
              This agreement is governed by Swiss law, reflecting the Advisor's
              base of operations and commitment to Swiss standards of
              confidentiality and professional excellence. For EU-based Clients,
              applicable EU regulations regarding professional services and data
              protection also apply.
            </p>

            <h2>11. Entire Agreement</h2>
            <p>
              These Terms, together with individual Engagement Letters and any
              executed Mutual Confidentiality Agreements, constitute the entire
              agreement between parties. Modifications require written consent
              from both parties.
            </p>

            <h2>12. Severability</h2>
            <p>
              If any provision proves unenforceable, remaining provisions
              continue in full effect. Parties will negotiate in good faith to
              replace unenforceable provisions with enforceable alternatives
              achieving similar intent.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions regarding these terms or to initiate an advisory
              engagement:
            </p>
            <div className="mt-4 rounded bg-gray-50 p-4">
              <p className="font-medium">Francisco Baptista</p>
              <p>Executive Transition Advisor</p>
              <p>Email: francisco@franciscobaptista.com</p>
              <p>Location: Geneva, Switzerland</p>
            </div>

            <div className="mt-16 border-t-2 border-gray-200 p-6">
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                ACKNOWLEDGMENT
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                By engaging advisory services, Client acknowledges having read,
                understood, and agreed to these Terms of Engagement. Client
                further acknowledges that the advisory relationship requires
                mutual trust, candor, and commitment to confidentiality.
              </p>
              <p className="text-sm text-gray-500">
                Version 2.1 | Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                © {new Date().getFullYear()} Francisco Baptista. All rights
                reserved. Executive Transition Architecture™ and Inner Team
                Dynamics™ are proprietary methodologies protected under
                international intellectual property law.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
