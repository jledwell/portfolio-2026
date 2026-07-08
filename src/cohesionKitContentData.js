// Content for CohesionKitPage — same shape as contentData.js for ContentPage.
// Images live in public/images/02 cohesion kit/ (spaces encoded as %20 in URLs).

const CK = '/images/02%20cohesion%20kit'

export const cohesionKitSummaryColumns = [
  {
    heading: 'Goal',
    bulletPoints: [
      'A standardized, cross-platform experience for managing data definitions.',
    ],
  },
  {
    heading: 'Obstacles',
    bulletPoints: [
      'Partner data needs differed widely.',
      'Designers did not want to use platform components.'
    ],
  },
  {
    heading: 'Actions',
    bulletPoints: [
      'Partnered with product designers to align on modular patterns.',
      'Co-tested with product users and rapidly iterated prototypes with AI.',
      'Defined a partner engagement model.'
    ],
  },
  {
    heading: 'Results',
    bulletPoints: [
      'Within 1 year, the library accelerated 3 delayed platform integrations to launch.',
      'Partners extended the library with 2 new component contributions.',
    ],
  },
]

export const cohesionKitContentTags = ['Design', 'Influencing', 'Systems']

export const cohesionKitContentData = [
  {
    heading: 'Situation',
    paragraph:
      'A similar high-level workflow, each product with different data complexity.',
    bulletPoints: [
      'First challenge or insight bullet.',
      'Second challenge or insight bullet.',
      'Third challenge or insight bullet.',
    ],
    images: [
      {
        imagePath: `${CK}/high-level-workflow-diagram.png`,
        imageOverlay: 'High-level workflow',
      },
      {
        imagePath: `${CK}/Complexity%20by%20partner.png`,
        imageOverlay: 'Data complexity by product',
      },
    ],
  },
  {
    heading: 'Modular Components',
    paragraph: 'Patterns balancing consistency with context.',
    bulletPoints: [
      'Approach detail one.',
      'Approach detail two.',
      'Approach detail three.',
    ],
    images: [
      {
        imagePath: `${CK}/filter-and-search-anatomy.png`,
        imageOverlay: 'Lorem Ipsum',
      },
      {
        imagePath: `${CK}/filter-and-search-sizes.png`,
        imageOverlay: 'Lorem Ipsum',
      },
      {
        imagePath: `${CK}/create-dialog-sizes.png`,
        imageOverlay: 'Lorem Ipsum',
      },
    ],
  },
  {
    heading: 'Partner engagement model',
    paragraph: 'A repeatable process that sized my effort to partner importance.',
    images: [
      {
        imagePath: `${CK}/engagement-model-sketch-2.jpg`,
        imageOverlay: null,
      },
      {
        imagePath: `${CK}/engagement-model-sketch-1.jpg`,
        imageOverlay: 'Sketches',
      },
      {
        imagePath: `${CK}/final-engagement-model.png`,
        imageOverlay: 'Final',
      },
    ],
  },
]
