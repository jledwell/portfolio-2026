// Content source file for ContentPage
// This file contains all text content displayed on the content page.
// Update this file to change copy without modifying component structure.

export const summaryColumns = [
  {
    heading: 'Goals',
    bulletPoints: [
      'Standardize data and deploy it across cloud products.', 
      'Eliminate redundant customer data entry.', 
      'Create the foundation for data-driven AI capabilities.'
    ]
  },
  {
    heading: 'Obstacles',
    bulletPoints: [
      "Product teams did not buy into platform strategy.",
      "The data platform was missing key features.",
      'The platform UI was too complex.'
    ]
  },
  {
    heading: 'Actions',
    bulletPoints: [
      'Led cross-team workshops to align on platform strategy.',
      'Designed new data types and permissions.',
      'Designed modular UI and user tested prototypes to prove their effectiveness.'
    ]
  },
  {
    heading: 'Results',
    bulletPoints: [
      'Teams aligned around a consistent platform experience.',
      'We shipped multiple integrations with thousands of customer users.',
      'Customer data repositories became the basis of integrated project workflows.'
    ]
  }
]

export const contentTags = ['Influencing', 'Platform', 'Research', 'Strategy']

export const contentData = [
  {
    // Challenges section
    heading: 'Challenges',
    paragraph:
      'Scaling a data platform means understanding product context and selling platform value.',
    bulletPoints: [
      'Autodesk products had incompatible, redundant data definitions. To maintain consistent data across a project, customers were forced into manual workarounds.',
      'Product teams optimized for quick, one-off workflows rather than shared platform capabilities.',
      'Autodesk’s strategy demanded connecting products with platform services using common data schemas.'
    ],
    imageLabel: 'Situation Graphic',
    imagePath: '/images/typing-in-fields-full.gif'
  },
  {
    // Discovery & Insights section
    heading: 'Discovery & Insights',
    paragraph: 'I worked to understand internal stakeholders and customer needs.',
    bulletPoints: [
      'Building a shared platform capability required aligning multiple product teams.',
      'Each team had its own priorities. Even though all had the same firms as customers, they prioritized different users and their preferred workflows and terminology.',
      'My platform team brought reusable UI patterns and workflows, but we needed product teams to adopt them.',
      'Design patterns had to be flexible enough to integrate into multiple product contexts.'
    ],
    imageLabel: 'Obstacles Graphic',
    images: [
      {
        imagePath: '/images/personas.png',
        imageOverlay: 'Target personas reconciled'
      },
      {
        imagePath: '/images/workshop%20whiteboard.png',
        imageOverlay: 'Stakeholder workshop whiteboard'
      }
    ]
  },
  {
    // Actions section
    heading: 'Actions',
    paragraph: 'summary',
    bulletPoints: [
      'I led collaboration efforts to align product and platform teams around a shared service and reusable interaction patterns.',
      'Facilitated cross-team workshops to uncover goals, restrictions, and terminology differences.',
      'Mapped cross-product workflows showing how shared data definitions would persist across tools.',
      'Designed a modular parameters service UI component reusable across products.',
      'Created clickable prototypes and workflow demos to communicate the platform concept.',
      'Tested designs with multiple customer personas to validate terminology and workflows.',
      'Gave presentations, recorded videos, and advocated to “sell” platform components instead of product-specific solutions.'
    ],
    imageLabel: 'Action Graphic',
    images: [
      {
        imagePath: '/images/Existing%20dialog%20to%20new.png',
        imageOverlay: 'Simplifying for customer context'
      },
      {
        imagePath: '/images/custom-fields-add-parameter.png',
        imageOverlay: 'Add data using product context'
      },
      {
        imagePath: '/images/lists%20ui%20sketch.jpg',
        imageOverlay: 'List UI sketch',
        rowId: 'lists-ui-pair'
      },
      {
        imagePath: '/images/lists%20final%20ui.png',
        imageOverlay: 'List final UI',
        rowId: 'lists-ui-pair'
      }
    ],
    actionPhases: [
      { title: 'Discover', imagePath: null },
      { title: 'Define', imagePath: null },
      { title: 'Develop', imagePath: null },
      { title: 'Deliver', imagePath: null }
    ]
  },
  {
    // Result section
    heading: 'Results',
    paragraph: 'summary.',
    bulletPoints: [
      'Multiple products integrated and launched consistent project data definitions with our platform UI and schemas.',
      'Thousands of customers adopted the service to manage shared project data across their workflows.',
      'The business built a repository of customer data definitions as a unique foundation for future machine learning capabilities.',
      'Product teams gained a reusable platform capability instead of building separate implementations.',
      'The work established a modular design paradigm supporting multiple product integrations.',
      'Our collaboration model became a reference for future product–platform initiatives.'
    ]
  }
]
