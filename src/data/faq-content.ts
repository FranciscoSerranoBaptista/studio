export interface FAQCategory {
  category: string
  questions: {
    question: string
    answer: string
    keywords?: string[]
  }[]
}

export const EXECUTIVE_FAQ: FAQCategory[] = [
  {
    category: 'Is This Work For You?',
    questions: [
      {
        question: 'I\'m successful but exhausted. Is that normal?',
        answer:
          'It\'s common but not necessary. Most executives believe exhaustion is the price of success. We\'ve found it\'s actually the price of misalignment - when parts of you are at war. The perfectionist fighting the human. The achiever battling the person who needs rest. When these parts integrate, success flows without the exhaustion.',
        keywords: [
          'exhaustion',
          'success fatigue',
          'burnout',
          'executive wellness',
        ],
      },
      {
        question: 'What\'s the difference between coaching and inner work?',
        answer:
          'Coaching typically focuses on behaviors, strategies, and skills. Inner work examines why you can\'t implement what you already know. You don\'t need more frameworks. You need to understand why the part of you that knows exactly what to do keeps getting overruled by the part that\'s terrified of being seen as inadequate.',
        keywords: [
          'coaching vs inner work',
          'self-sabotage',
          'implementation',
          'internal conflict',
        ],
      },
      {
        question: 'I don\'t have time for therapy. Is this therapy?',
        answer:
          'No. Therapy often explores past wounds to heal them. We examine current patterns to transform them. The focus isn\'t on why you became this way, but on how these patterns are running your life now and how to integrate them into conscious leadership.',
        keywords: [
          'therapy vs inner work',
          'present focus',
          'pattern work',
          'conscious leadership',
        ],
      },
    ],
  },
  {
    category: 'The Real Work',
    questions: [
      {
        question: 'What actually happens in these sessions?',
        answer:
          'We meet the parts of you that are running the show. The inner critic that has you over-preparing. The people-pleaser that can\'t say no. The impostor that discounts every success. Instead of fighting these parts, we integrate them. They become advisors rather than tyrants.',
        keywords: [
          'inner critic',
          'people pleaser',
          'impostor syndrome',
          'integration',
        ],
      },
      {
        question: 'How is this different from executive coaching?',
        answer:
          'Executive coaches teach you to manage up, handle stakeholders, navigate politics. We work on why you\'re avoiding the difficult conversation you know you need to have. The difference: surface change versus structural transformation.',
        keywords: [
          'executive coaching difference',
          'structural change',
          'difficult conversations',
          'transformation',
        ],
      },
      {
        question: 'What if I\'m skeptical about "inner work"?',
        answer:
          'Good. Skepticism means you\'re thinking critically. This work isn\'t for everyone. It\'s for executives ready to examine why they\'re brilliant in meetings but replay conversations for hours afterward. Why they can run divisions but can\'t say no to unnecessary meetings. If you want tips and tactics, find a coach. If you want transformation, we should talk.',
        keywords: [
          'skepticism',
          'critical thinking',
          'transformation readiness',
          'self-awareness',
        ],
      },
    ],
  },
  {
    category: 'The Process',
    questions: [
      {
        question: 'How long does this take?',
        answer:
          'Real integration typically takes 3-6 months of consistent work. Some insights happen immediately. Some patterns take months to shift. The executives who succeed commit to the process, not the timeline.',
        keywords: [
          'timeline',
          'integration process',
          'commitment',
          'pattern change',
        ],
      },
      {
        question: 'What\'s required from me?',
        answer:
          'Curiosity about your own patterns. Willingness to be uncomfortable. Commitment to showing up even when you want to quit. This isn\'t passive. You\'re not receiving advice. You\'re doing active integration work.',
        keywords: [
          'curiosity',
          'discomfort',
          'commitment',
          'active participation',
        ],
      },
      {
        question: 'How do I know if it\'s working?',
        answer:
          'You\'ll notice you\'re responding instead of reacting. Conflicts feel manageable rather than catastrophic. You stop rehearsing conversations. Work feels sustainable rather than depleting. Your team notices before you do.',
        keywords: [
          'responding vs reacting',
          'conflict management',
          'sustainability',
          'team feedback',
        ],
      },
    ],
  },
  {
    category: 'Who This Is For',
    questions: [
      {
        question: 'I\'m not an executive. Can I still work with you?',
        answer:
          'If you\'re in a senior role facing complex leadership challenges and ready for inner work, yes. Titles matter less than readiness. The question: Are you successful but sensing something fundamental needs to shift?',
        keywords: [
          'senior roles',
          'leadership challenges',
          'readiness',
          'fundamental shift',
        ],
      },
      {
        question: 'My company wants to hire you for me. Should I?',
        answer:
          'Only if YOU want the work. Company-mandated coaching rarely transforms. This work requires personal commitment. If they\'re paying but you\'re not choosing, save everyone\'s time.',
        keywords: [
          'personal choice',
          'company mandated',
          'commitment',
          'transformation',
        ],
      },
      {
        question: 'What if I realize I\'m not ready?',
        answer:
          'That\'s valuable self-awareness. Not everyone is ready to examine what\'s really running their leadership. Some people need to stay in the struggle longer. When you\'re ready, you\'ll know.',
        keywords: [
          'self-awareness',
          'readiness',
          'struggle',
          'timing',
        ],
      },
    ],
  },
  {
    category: 'The Investment',
    questions: [
      {
        question: 'Why don\'t you list prices?',
        answer:
          'Because price-shoppers aren\'t ready for this work. The investment is significant - both financial and personal. If you\'re measuring coaching by hourly rates, we\'re not aligned. If you\'re measuring by who you become, let\'s discuss.',
        keywords: [
          'investment',
          'price shopping',
          'transformation value',
          'alignment',
        ],
      },
      {
        question: 'How does this compare to executive coaching costs?',
        answer:
          'Similar financial investment. Completely different return. Executive coaching makes you better at your role. This work transforms who you are in your role. One is incremental. One is fundamental.',
        keywords: [
          'coaching comparison',
          'return on investment',
          'transformation',
          'fundamental change',
        ],
      },
      {
        question: 'What if it doesn\'t work?',
        answer:
          'If you show up consistently and do the work, it works. If you want to stay comfortable, it won\'t. The only failure is expecting transformation without discomfort. We\'ll know within three sessions if you\'re ready.',
        keywords: [
          'consistency',
          'comfort vs growth',
          'transformation',
          'readiness assessment',
        ],
      },
    ],
  },
]

export const getFAQByCategory = (category: string) => {
  return EXECUTIVE_FAQ.find((cat) => cat.category === category)
}

export const getAllFAQs = () => {
  return EXECUTIVE_FAQ.flatMap((cat) => cat.questions)
}

export const searchFAQs = (searchTerm: string) => {
  const term = searchTerm.toLowerCase()
  return EXECUTIVE_FAQ.flatMap((cat) =>
    cat.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(term) ||
        q.answer.toLowerCase().includes(term) ||
        q.keywords?.some((k) => k.toLowerCase().includes(term)),
    ),
  )
}

export const getFAQSchema = () => {
  const allFAQs = getAllFAQs()
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
