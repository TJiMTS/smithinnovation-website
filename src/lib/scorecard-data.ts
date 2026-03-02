export type Category = {
  id: string;
  name: string;
  intro: string;
  questions: Question[];
};

export type Question = {
  id: number;
  text: string;
  options: string[];
};

export const categories: Category[] = [
  {
    id: "process_maturity",
    name: "Process Maturity",
    intro: "How standardised and documented are your workflows?",
    questions: [
      {
        id: 1,
        text: "How would you describe your core workflows (client onboarding, compliance, reporting)?",
        options: [
          "They vary depending on who does them. No documentation.",
          "Some processes are documented, but people often do things their own way.",
          "Most processes are documented and followed consistently.",
          "All core processes are documented, standardised, and regularly reviewed.",
        ],
      },
      {
        id: 2,
        text: "When a new team member joins, how do they learn how things work?",
        options: [
          "They shadow someone and figure it out over time.",
          "There's some documentation, but most learning happens on the job.",
          "There's a structured onboarding process with documented procedures.",
          "Onboarding is systematic, with clear documentation, checklists, and defined timelines.",
        ],
      },
      {
        id: 3,
        text: "How often do tasks fall through the cracks or get duplicated?",
        options: [
          "Regularly. We rely on people remembering what needs doing.",
          "Occasionally. We have some systems but things still slip.",
          "Rarely. We have tracking systems for most tasks.",
          "Almost never. Every task is tracked and assigned with clear ownership.",
        ],
      },
      {
        id: 4,
        text: "How do you handle exceptions or unusual client situations?",
        options: [
          "Each person handles them differently. No standard approach.",
          "We have informal guidelines but no defined process.",
          "We have documented exception procedures for most common scenarios.",
          "All exceptions have defined escalation paths with clear decision criteria.",
        ],
      },
      {
        id: 5,
        text: "How much of your team's time is spent on work that follows the same pattern every time?",
        options: [
          "Less than 20%. Most of our work is unique.",
          "20-40%. A fair amount of repetitive work.",
          "40-60%. A significant portion is repetitive.",
          "Over 60%. Most of what we do follows repeatable patterns.",
        ],
      },
    ],
  },
  {
    id: "data_readiness",
    name: "Data Readiness",
    intro: "Where does your data live and how accessible is it?",
    questions: [
      {
        id: 6,
        text: "Where is your client and operational data stored?",
        options: [
          "Mostly in spreadsheets, email, or paper files.",
          "A mix of spreadsheets and one or two cloud tools.",
          "Primarily in cloud-based software with some spreadsheets for ad hoc work.",
          "All data is in integrated cloud systems with a single source of truth for key information.",
        ],
      },
      {
        id: 7,
        text: "If you needed a report on all clients, jobs, or revenue, how quickly could you get it?",
        options: [
          "It would take days. We'd need to pull data from multiple places manually.",
          "A few hours. We could get most of it from our systems but would need to fill gaps.",
          "Within an hour. Most data is accessible but may need some manual compilation.",
          "Minutes. Our systems can generate this report on demand.",
        ],
      },
      {
        id: 8,
        text: "How consistent is your data quality (naming conventions, categories, completeness)?",
        options: [
          "Poor. Data is entered differently by different people. Lots of gaps.",
          "Inconsistent. Some standards exist but aren't enforced.",
          "Good. Most data follows agreed conventions with occasional gaps.",
          "Excellent. Data entry follows strict standards and is regularly audited.",
        ],
      },
      {
        id: 9,
        text: "How many separate software systems does your team use daily?",
        options: [
          "7 or more. Each does one thing. None of them talk to each other.",
          "5-6. Some integration between systems but lots of manual data transfer.",
          "3-4. Key systems are integrated. Some manual work between them.",
          "1-2 core systems. Well integrated with minimal manual data transfer.",
        ],
      },
      {
        id: 10,
        text: "Can you track a single client's journey from first contact through to completed work?",
        options: [
          "Not easily. Information is scattered across email, files, and people's memories.",
          "Partially. We can piece it together but it takes effort.",
          "Mostly. Our CRM or practice management system covers most of it.",
          "Completely. One system shows the full client journey with all interactions and work.",
        ],
      },
    ],
  },
  {
    id: "team_capacity",
    name: "Team Capacity",
    intro:
      "How does your team spend their time, and where are the bottlenecks?",
    questions: [
      {
        id: 11,
        text: "What percentage of your team's time is spent on administrative tasks (data entry, filing, chasing, scheduling)?",
        options: [
          "Over 50%. Admin dominates most people's days.",
          "30-50%. A significant chunk of time goes on admin.",
          "15-30%. Admin is manageable but still noticeable.",
          "Under 15%. Admin is minimal. Most time goes on client-facing or skilled work.",
        ],
      },
      {
        id: 12,
        text: "How often do your senior or qualified staff spend time on work that doesn't require their expertise?",
        options: [
          "Daily. Senior people regularly do tasks that junior staff or systems could handle.",
          "Weekly. It happens but it's not constant.",
          "Occasionally. We try to protect senior time but it's not always possible.",
          "Rarely. Senior staff focus on advisory and complex work. Everything else is delegated or automated.",
        ],
      },
      {
        id: 13,
        text: "Could your firm take on 20% more clients without hiring additional staff?",
        options: [
          "Definitely not. We're already at capacity.",
          "Unlikely. We'd need to hire at least one more person.",
          "Possibly, if we could free up some time from existing processes.",
          "Yes. We have capacity or could create it by automating current manual work.",
        ],
      },
      {
        id: 14,
        text: "How do you manage workload and deadlines across the team?",
        options: [
          "Informally. People manage their own workload. We check in verbally.",
          "Spreadsheets or simple lists. Shared but not real-time.",
          "Project management or practice management software. Most work is tracked.",
          "A comprehensive system with clear visibility of all work, deadlines, and capacity across the team.",
        ],
      },
      {
        id: 15,
        text: "How often does your team work late or at weekends to meet deadlines?",
        options: [
          "Regularly. It's normal, especially around busy periods.",
          "Often during peak periods. Quieter at other times.",
          "Occasionally. Usually only for genuinely exceptional circumstances.",
          "Rarely. Our processes and planning mean deadlines are met within normal hours.",
        ],
      },
    ],
  },
  {
    id: "technology_stack",
    name: "Technology Stack",
    intro:
      "What tools does your firm use and how well do they work together?",
    questions: [
      {
        id: 16,
        text: "Are your core business applications cloud-based?",
        options: [
          "No. We primarily use desktop software and local servers.",
          "Some are. We're in the process of moving to cloud but it's partial.",
          "Mostly. Key applications are cloud-based with a few legacy desktop tools remaining.",
          "Yes. Everything is cloud-based and accessible from anywhere.",
        ],
      },
      {
        id: 17,
        text: "Do your software systems share data automatically, or does your team move data between them manually?",
        options: [
          "Almost entirely manual. Copy-paste between systems is normal.",
          "Some systems connect but most data transfer is manual.",
          "Most key systems are connected. Manual transfer is limited to edge cases.",
          "Our systems are well integrated. Data flows automatically between them.",
        ],
      },
      {
        id: 18,
        text: "Has your firm used any AI tools (ChatGPT, Copilot, automation tools)?",
        options: [
          "No. We haven't explored AI at all.",
          "A few individuals have tried tools like ChatGPT informally.",
          "We've adopted some AI tools for specific tasks (drafting, research, data entry).",
          "We actively use AI tools across multiple workflows and are looking to do more.",
        ],
      },
      {
        id: 19,
        text: "How would you rate your team's comfort level with new technology?",
        options: [
          "Low. Most people prefer familiar tools and resist change.",
          "Mixed. Some people are keen, others are resistant.",
          "Generally positive. Most people are open to new tools if they can see the benefit.",
          "High. The team actively looks for better tools and adapts quickly.",
        ],
      },
      {
        id: 20,
        text: "Do you have someone in the firm responsible for technology decisions?",
        options: [
          "No. Technology is nobody's specific responsibility.",
          "Informally. One person tends to handle it but it's not their role.",
          "Yes, but they're stretched. Technology is part of a broader role.",
          "Yes. There's a named person (or external partner) responsible for technology strategy.",
        ],
      },
    ],
  },
  {
    id: "leadership_alignment",
    name: "Leadership Alignment",
    intro:
      "Is your leadership team ready to invest in and support an AI-driven approach?",
    questions: [
      {
        id: 21,
        text: "Does your firm's leadership team see AI/automation as a strategic priority?",
        options: [
          "No. It's not on the agenda.",
          "It's discussed but there's no plan or budget.",
          "It's a priority. We've started exploring options but haven't committed to anything.",
          "It's a top priority with budget allocated and leadership actively driving it.",
        ],
      },
      {
        id: 22,
        text: "If you identified a clear automation opportunity with strong ROI, how quickly could you get budget approval?",
        options: [
          "It would take months. Multiple approval layers and competing priorities.",
          "Weeks. It would need a business case and board discussion.",
          "Days to a week. If the ROI is clear, approval is straightforward.",
          "Immediately. We have pre-approved budget for technology improvements.",
        ],
      },
      {
        id: 23,
        text: "Who would own an AI/automation project in your firm?",
        options: [
          "Nobody specifically. It would be unclear who's responsible.",
          "It would fall to whoever suggested it, regardless of their role.",
          "A senior partner or operations lead would own it, but they're already busy.",
          "We have a named person who would own this, with time allocated.",
        ],
      },
      {
        id: 24,
        text: "How does your firm typically approach change?",
        options: [
          "Slowly. We tend to wait until something is proven elsewhere before adopting.",
          "Cautiously. We'll try things but need a lot of convincing first.",
          "Pragmatically. If the evidence is strong, we'll move.",
          "Proactively. We look for better ways to operate and move quickly when we find them.",
        ],
      },
      {
        id: 25,
        text: "If AI automation freed up 30% of your team's time, what would you do with it?",
        options: [
          "I'm not sure. We haven't thought about it.",
          "We'd probably reduce headcount or costs.",
          "We'd redirect some people to higher-value work like advisory services.",
          "We have a clear plan: more advisory work, new service lines, or capacity for more clients without hiring.",
        ],
      },
    ],
  },
];

// Flatten all questions for easy lookup
export const allQuestions = categories.flatMap((c) => c.questions);
export const totalQuestions = allQuestions.length;
