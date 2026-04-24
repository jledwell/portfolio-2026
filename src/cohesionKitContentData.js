// Content for CohesionKitPage — same shape as contentData.js for ContentPage.
// Images live in public/images/02 cohesion-kit/ (spaces encoded as %20 in URLs).

const CK = '/images/02%20cohesion-kit'

export const cohesionKitSummaryColumns = [
  {
    heading: 'Goal',
    bulletPoints: [
      'A standardized, cross-platform interface for managing data definitions.',
    ],
  },
  {
    heading: 'Obstacles',
    bulletPoints: [
      'Parameters Service partner data needs and customer contexts differed widely.',
    ],
  },
  {
    heading: 'Actions',
    bulletPoints: [
      'Partnered with product designers to align on modular patterns.',
      'Co-tested with product users and rapidly iterated prototypes with AI.',
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

export const cohesionKitContentTags = ['Design', 'Systems', 'Placeholder']

export const cohesionKitContentData = [
  {
    heading: 'Challenges',
    paragraph:
      'Introductory paragraph for Cohesion Kit. Replace with project context and framing.',
    bulletPoints: [
      'First challenge or insight bullet.',
      'Second challenge or insight bullet.',
      'Third challenge or insight bullet.',
    ],
    images: [
      {
        imagePath: `${CK}/data-ecosystem-sketch.jpg`,
        imageOverlay: 'Data ecosystem sketch',
      },
      {
        imagePath: `${CK}/engagement-model-sketch-1.jpg`,
        imageOverlay: 'Engagement model sketch',
      },
    ],
  },
  {
    heading: 'Approach',
    paragraph: 'Describe how you tackled the work.',
    bulletPoints: [
      'Approach detail one.',
      'Approach detail two.',
      'Approach detail three.',
    ],
    images: [
      {
        imagePath: `${CK}/create-dialog-sizes.png`,
        imageOverlay: 'Create dialog sizes',
      },
      {
        imagePath: `${CK}/add-parameters-sizes.png`,
        imageOverlay: 'Add parameters sizes',
      },
      {
        imagePath: `${CK}/filter-and-search-anatomy.png`,
        imageOverlay: 'Filter and search anatomy',
        rowId: 'filter-search-pair',
      },
      {
        imagePath: `${CK}/filter-and-search-sizes.png`,
        imageOverlay: 'Filter and search sizes',
        rowId: 'filter-search-pair',
      },
    ],
  },
  {
    heading: 'Results',
    paragraph: 'Summarize outcomes and learnings.',
    bulletPoints: [
      'Result or outcome one.',
      'Result or outcome two.',
      'Result or outcome three.',
    ],
    images: [
      {
        imagePath: `${CK}/Scale%20design%20with%20better%20visual%20storytelling.png`,
        imageOverlay: 'Scale design with visual storytelling',
      },
      {
        imagePath: `${CK}/sketch-engagement-model-2.jpg`,
        imageOverlay: 'Engagement model sketch',
      },
    ],
  },
]
