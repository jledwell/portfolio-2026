// Content for BridgingWorkflowGapsWithDynamoPlayerPage — same shape as parametersServiceDiscoveryContentData.js.
// Placeholder lorem ipsum until final case-study copy is ready.

// Hidden on BridgingWorkflowGapsWithDynamoPlayerPage (Goals → Outcomes summary grid).
// Kept here so content can be restored without rewriting copy.
export const bridgingWorkflowGapsWithDynamoPlayerSummaryColumns = [
  {
    heading: "Goals",
    bulletPoints: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    ],
  },
  {
    heading: "Process",
    bulletPoints: [
      "Duis aute irure dolor in reprehenderit in voluptate.",
      "Excepteur sint occaecat cupidatat non proident.",
      "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    heading: "Findings",
    bulletPoints: [
      "Curabitur pretium tincidunt lacus nulla facilisi.",
      "Nullam varius turpis et commodo pharetra est eros bibendum elit.",
      "Nam quam nunc blandit vel luctus pulvinar hendrerit id lorem.",
    ],
  },
  {
    heading: "Outcomes",
    bulletPoints: [
      "Pellentesque habitant morbi tristique senectus et netus.",
      "Et malesuada fames ac turpis egestas vestibulum tortor quam.",
      "Feugiat vitae ultricies eget tempor sit amet ante donec.",
    ],
  },
]

// Hidden on BridgingWorkflowGapsWithDynamoPlayerPage (tag pills).
// Kept here so tags can be restored without rewriting copy.
export const bridgingWorkflowGapsWithDynamoPlayerContentTags = [
  "Research",
  "Strategy",
  "Systems",
]

const DYNAMO = `${import.meta.env.BASE_URL}images/04%20bridging%20workflow%20gaps%20with%20dynamo%20player`

export const bridgingWorkflowGapsWithDynamoPlayerContentData = [
  {
    heading: "Situation",
    paragraphs: [
      "Our division's flagship products, Revit and Infraworks, could not talk to each other. My team solved the problem with a new product built to enable interoperability and prevent data loss.",
    ],
    bulletPoints: [
      "This case study exemplifies: Map how users and stakeholders interact across tools and workflows to surface friction points, breakdowns, or gaps caused by fragmented systems or misaligned processes.",
      "Includes problem framing, customer research, stakeholder management, and systems thinking.",
      "Stakeholders: New VP, product owner, engineering team, UX architects and managers, plus stakeholders from two other products.",
      "Timeframe: Several months in 2015-2016, simultaneous with other design work.",
    ],
    imagePath: `${DYNAMO}/placeholder-situation.svg`,
    imageCaption: "Placeholder — Stakeholder Map to come.",
  },
  {
    heading: "Discovering a Shippable Increment",
    paragraph:
      "Both products had several target users and covered many use cases. I validated a use case we could solve.",
    bulletPoints: [
      "The product owner and I met with internal subject matter experts (SME's). They suggested bridge construction as a key interoperability use case.",
      "I ran interviews with key customers that confirmed frustrations with bridge design:",
      "In Revit, bridge components could not be tagged or listed correctly, and they couldn't adjust automatically. The product did not support bridge load calculations. This led to customers to call it 'dumb geometry.'",
      "Customers wanted to add bridge data in Infraworks, and then return bridge designs to Revit. Their import/export workflows were too many steps, and required key data to be re-entered.",
      "I presented our findings and convinced stakeholders to approve the use case.",
    ],
    imagePath: `${DYNAMO}/placeholder-discovery.svg`,
    imageCaption: "Placeholder — A 3D bridge design in Revit, with a selected bridge pier highlighted to show it's non-native data and geometry.",
  },
  {
    heading: "Customer Journey Map",
    paragraph:
      "From research findings, I created a customer journey map that visualized the gaps and identified opportunities.",
    bulletPoints: [
      "The team referred back to the journey map throughout two subsequent years of development.",
    ],
    imagePath: `${DYNAMO}/placeholder-journey-map.svg`,
    imageCaption: "Placeholder — customer journey map.",
  },
  {
    heading: "Developing a Solution Idea",
    paragraph:
      "Team engineers suggested a technical solution: Dynamo, a visual programming system. Research showed our target users found Dynamo difficult to use. I uncovered the latent need for a simplified ",
    bulletPoints: [
      "Analysis step one placeholder.",
      "Analysis step two placeholder.",
      "Analysis step three placeholder.",
    ],
    imagePath: `${DYNAMO}/placeholder-analysis.svg`,
  },
  {
    heading: "Results",
    paragraph:
      "Discovery revealed findings that drove prioritized development. A few examples:",
    bulletPoints: [
      "Finding one placeholder.",
      "Finding two placeholder.",
      "Finding three placeholder.",
    ],
  },
  {
    heading: "Detailed Outcomes",
    paragraph: "",
    bulletPoints: [
      "Outcome one placeholder.",
      "Outcome two placeholder.",
      "Outcome three placeholder.",
    ],
  },
  {
    heading: "Next Steps",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder for ongoing impact and follow-on work.",
    pullQuote:
      "Placeholder pull quote — stakeholder feedback on bridging workflow gaps with Dynamo Player.",
  },
]
