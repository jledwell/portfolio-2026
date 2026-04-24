// Content for CohesionKitPage — same shape as contentData.js for ContentPage.
// Images live in public/images/02 cohesion kit/ (spaces encoded as %20 in URLs).

const CK = '/images/02%20cohesion%20kit'

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

export const cohesionKitContentTags = ['Design', 'Systems', 'Placeholder']

export const cohesionKitImageGallery = [
  {
    imagePath: `${CK}/Scale%20design%20with%20better%20visual%20storytelling.png`,
    imageOverlay: 'Lorem Ipsum',
  },
  {
    imagePath: `${CK}/create-dialog-sizes.png`,
    imageOverlay: 'Lorem Ipsum',
  },
  {
    imagePath: `${CK}/filter-and-search-anatomy.png`,
    imageOverlay: 'Lorem Ipsum',
  },
  {
    imagePath: `${CK}/filter-and-search-sizes.png`,
    imageOverlay: 'Lorem Ipsum',
  },
  {
    imagePath: `${CK}/final-engagement-model.png`,
    imageOverlay: 'Lorem Ipsum',
  },
  {
    imagePath: `${CK}/multiple-examples-illustrating-flexibility.png`,
    imageOverlay: 'Lorem Ipsum',
  },
  {
    imagePath: `${CK}/promote-component-reuse-with-patterns.png`,
    imageOverlay: 'Lorem Ipsum',
  },
]

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
        imagePath: '/images/dialog-simplification.png',
        imageOverlay: 'Dialog simplification',
      },
      {
        imagePath: '/images/lists%20ui%20sketch.jpg',
        imageOverlay: 'UI sketch',
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
        imagePath: `${CK}/create-dialog-sizes.png`,
        imageOverlay: 'Create dialog sizes',
      },
      {
        imagePath: '/images/custom-fields-add-parameter.png',
        imageOverlay: 'Custom fields: add parameter',
      },
    ],
  },
  {
    heading: 'Partner engagement model',
    paragraph: 'A repeatable process that sized my effort to partner importance.',
    images: [
      {
        imagePath: '/images/lists%20final%20ui.png',
        imageOverlay: 'Final UI',
      },
      {
        imagePath: '/images/01%20platform/personas.png',
        imageOverlay: 'Personas',
      },
    ],
  },
]
