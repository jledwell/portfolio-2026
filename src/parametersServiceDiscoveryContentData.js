// Content for ParametersServiceDiscoveryPage — same shape as contentData.js.
//
// Use this page to address the following job description requirements:
// User-centered design. - Apply different tools and methodologies required for the problem, timing and context. Be transparent and mentor colleagues across stages of the design process.
// Exploration and curiosity. - Prepare and lead research efforts aligning teams and converging on a common product and service vision. Include others and motivate with curiosity, a constant interest to learn, and default to doing. 
// Strong research portfolio that demonstrates user-centered design approach & process, systems thinking, emphatic storytelling, and delivered user & business insights.
// Experience creating design research plans, executing, synthesizing, and communicating findings in relation to desired business outcomes and experience quality.
// Customer-facing experience facilitating workshops with subject matter experts and business leaders.
// Flexibility and comfort with ambiguity, ill-defined problem spaces, and highly complex domains & organizations.

import { createElement } from 'react'

// Hidden on ParametersServiceDiscoveryPage (Goals → Outcomes summary grid).
// Kept here so content can be restored without rewriting copy.
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
    paragraphs: [
      'Autodesk Parameters Service shares customer data across products. It replaces desktop file import / export workflows with a modern cloud platform.',
      'When I joined in 2022, the service had a functioning back end and needed an interface. The development team had not discussed their new concept with customers.',
      'I worked on this project for two months, alongside other design work.',
      'This project exemplifies:',
    ],
    bulletPoints: [
      'User-centered design approach & process, systems thinking, emphatic storytelling, and delivered user & business insights.',
      'Apply different tools and methodologies required for the problem, timing and context. Be transparent and mentor colleagues across stages of the design process.',
      'Experience creating design research plans, executing, synthesizing, and communicating findings in relation to desired business outcomes and experience quality.',
      'Customer-facing experience facilitating workshops with subject matter experts and business leaders.'
    ],
    imagePath: `${PSD}/customer-learning-example-shared-parameters.png`,
    imageCaption: 'Customer-created documentation example. For years, customers told us the existing data workflow was cumbersome.',
    browserFrame: true,
    browserUrl: 'customer-wiki.internal/shared-parameters',
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
    imageCaption: 'Sample research template',
  },
  {
    heading: 'Analysis',
    paragraph:
      'Live affinity diagramming with stakeholders',
    bulletPoints: [
      'Notes from interviews converted to post-its.',
      'Two group sessions to discuss and affinitze feedback.',
      'How Might We (HMW) problem frames discussed for key affinity groups .',
      'I reconciled the feedback from both sessions into a summary presentation.',
      'I wrote usability issues as bugs in our QA tracking system.',
    ],
    imagePath: `${PSD}/User%20Research%20Discovery%20Flow.png`,
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
  },
  {
    heading: 'Detailed Outcomes',
    paragraph: '',
    bulletPoints: [
      'We changed the system to enforce unique data names.',
      'I designed different duplicate data fixing and prevention workflows, and found an inexpensive solution to fit into the roadmap.',
      'I conceived a flexible administrator workflow where only a few basic data properties were required. Other properties could be specified up front, and completed or overrided when end users selected the data for use.',
      'I created a batch editing workflow which became one of our most popular features.',
      'The team greatly enhanced the API so third-party applications could work with data efficiently.'
    ],
  },
  {
    heading: 'Customer Council',
    paragraph:
      'To get ongoing feedback after the study, I recruited key customers to join biweekly team Sprint Reviews.',
    bulletPoints: [
      'I selected 5 firms and 8 customer individuals, a mix of disciplines, company sizes, and countries.',
      'I oriented them to our project goals with a presentation, setting expectations for consistent participation.',
      'I coached engineers to present their work clearly and ask open-ended questions.',
      'Results: Review questions changed from "How did you code that?" to value questions like "Why did you build that, and not this other feature I\'ve been asking for?'
    ],
    pullQuote:
      "Your share-out helped broaden the perspective we all have of our customers, around what they think when it comes to platform and data, helping us to drive business objectives forward.",
  },
]
