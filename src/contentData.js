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
      'Drove alignment on platform strategy.',
      'Designed new data types and permissions.',
      'Designed and user tested modular UI.'
    ]
  },
  {
    heading: 'Results',
    bulletPoints: [
      'Teams aligned on a platform experience.',
      'Data reused across customer projects.',
      'We shipped integrations to thousands of customer users.'

    ]
  }
]

export const contentTags = ['Influencing', 'Platform', 'Research', 'Strategy']

const IMG = `${import.meta.env.BASE_URL}images`

export const contentData = [
  {
    // Discovery & Insights section
    heading: 'Discovery & Insights',
    paragraph: 'I uncovered and resolved misalignment among my team, internal stakeholders and customer needs.',
    imageLabel: 'Obstacles Graphic',
    images: [
      {
        imagePath: `${IMG}/01%20platform/personas.png`,
        imageCaption: 'Personas',
        rowId: 'discovery-insights-pair'
      },
      {
        imagePath: `${IMG}/01%20platform/workshop%20whiteboard.png`,
        imageCaption: 'Workshop whiteboard',
        rowId: 'discovery-insights-pair'
      }
    ]
  },
  {
    // Actions section
    heading: 'Actions',
    paragraph: 'I modified designs to work with product partners, and added a new List feature.',
    imageLabel: 'Action Graphic',
    images: [
      {
        imagePath: `${IMG}/dialog-simplification.png`,
        imageCaption: 'Simplifying for customer context'
      },
      {
        imagePath: `${IMG}/01%20platform/original-add-parameter.jpg`,
        imageCaption: 'Original add parameter',
        rowId: 'add-parameter-pair'
      },
      {
        imagePath: `${IMG}/custom-fields-add-parameter.png`,
        imageCaption: 'Data columns and features simplified',
        rowId: 'add-parameter-pair'
      },
      {
        imagePath: `${IMG}/lists%20ui%20sketch.jpg`,
        imageCaption: 'List UI sketch',
        rowId: 'lists-ui-pair'
      },
      {
        imagePath: `${IMG}/lists%20final%20ui.png`,
        imageCaption: 'List final UI',
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
    // Next steps section
    heading: 'Next Steps',
    paragraph:
      'Scaling a data platform meant understanding product context and selling platform value. The next section, Cohesion Kit, shows how I solved this challenge with a pattern library.',
  },
]
