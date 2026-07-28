// Content for ParametersServiceDiscoveryPage — same shape as contentData.js.
// Placeholder lorem ipsum until final case-study copy is ready.

import { createElement } from 'react'

export const parametersServiceDiscoverySummaryColumns = [
  {
    heading: 'Goals',
    bulletPoints: [
      'Research: Study real-world customer data workflows.',
      'Analysis: Identify opportunities in the sweet spot of high value and reasonable effort.',
      'Product: Host customer data and build valuable datasets to train AI models.',
    ],
  },
  {
    heading: 'Process',
    bulletPoints: [
      'Online interviews and whiteboarding.',
      'Co-analysis live with stakeholders.',
      'Ongoing customer council feedback.',
    ],
  },
  {
    heading: 'Findings',
    bulletPoints: [
      'Every building project is different, and yet customers still want data standarization.',
      'Customers know their data is messy and incomplete.',
      'Because offer no tools, they must use cumbersome manual workarounds to clean and manage their data. ',
    ],
  },
  {
    heading: 'Outcomes',
    bulletPoints: [
      'Co-analyzed results with stakeholders, and built effort estimations into solution ideas',
      'I designed flexible, just-in-time data definitions, meeting customer data where it was.',
      'I fought for and won enhancements to find and fix duplicate data.',
      'Thousands of customers adopted the new system.',
    ],
  },
]

export const parametersServiceDiscoveryContentTags = [
  'Research',
  'Strategy',
  'Systems',
]

const PSD = `${import.meta.env.BASE_URL}images/03%20parameters%20service%20discovery`

export const parametersServiceDiscoveryContentData = [
  {
    heading: 'Situation',
    paragraph:
      'The Parameters Service would replace a desktop file workflow with a modern cloud platform. The platform would enable cross-product data sharing.',
    bulletPoints: [
      createElement(
        'strong',
        null,
        'For years, customers told us the existing data workflow was cumbersome. (See customer image to the right.)'
      ),
      'When I joined, the service had a functioning back end and needed an interface. The project team had not discussed their new concept with customers.',
    ],
    imagePath: `${PSD}/customer-learning-example-shared-parameters.png`,
    imageOverlay: '',
  },
  {
    heading: 'Discovery Process',
    paragraph:
      '12 online interviews with whiteboarding.',
    bulletPoints: [
      'Partipants: Administrators and senior modelers.  Mix of experience levels, domains, and parts of the world.',
      'Internal pilot testing with subject matter experts.',
      'Teammates observed the sessions and joined group sensemaking meetings.',
    ],
    imagePath: `${PSD}/sample-discovery-template.png`,
    imageOverlay: 'Sample research template',
  },
  {
    heading: 'Analysis',
    paragraph:
      'Live affinity diagramming with stakeholders',
    bulletPoints: [
      'Notes from interviews converted to post-its.',
      'Two group sessions to discuss and affinitze feedback.',
      'How Might We (HMW) problem frames discussed for key affinity groups .',
    ],
    imageLabel: 'Placeholder image',
  },
  {
    heading: 'Results',
    paragraph:
      'Discovery revealed findings that drove prioritized development. A few examples:',
    bulletPoints: [
      "Duplicate-named data definitions were common, and customers couldn't fix them in our software.",
      'Customers relied on 36-character GUIDs to track their data, a painful workaround, because names were not unique.',
      'Working with data had too many steps because required settings had to be entered one-by-one, manually.',
      'Many customers used third-party API addins to manage data, but API converage was incomplete, preventing a full workflow.',
    ],
    imageLabel: 'Placeholder image',
  },
  {
    heading: 'Detailed Outcomes',
    paragraph:
      '',
    bulletPoints: [
      'We changed the system to enforce unique data names.',
      'I designed different duplicate data fixing and prevention workflows, and found an inexpensive solution to fit into the roadmap.',
      'I conceived a flexible administrator workflow where only a few basic data properties were required. Other properties could be specified up front, and completed or overrided when end users selected the data for use.',
      'I created a batch editing workflow which became one of our most popular features.',
      'The team greatly enhanced the API so third-party applications could work with data efficiently.'
    ],
    imageLabel: 'Placeholder image',
  },
]
