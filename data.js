/*
  This file defines the data model for the integration planner prototype.
  Each tool entry includes high‑level metadata about the product along with
  integration capabilities. Citations (like cit1, cit2, …) refer back to
  evidence collected from official documentation and integration pages. These
  citations are surfaced to users as footnotes in the prototype.
*/

// Mapping of citation identifiers to footnote details.  The order of
// definitions determines the numeric ordering of footnotes as they appear
// in the application.  When you add a new citation to a tool or connector,
// define it here once so it can be reused elsewhere.
const citations = {
  cit1: {
    text: 'Deel’s Xero integration requires an active Xero account and Org Admin permission in Deel to install and manage the integration',
    ref: '【751877178785894†L60-L66】'
  },
  cit2: {
    text: 'Connecting Deel to Xero involves authenticating with your Xero account, choosing the right Xero entity, mapping your accounts, configuring multi‑currency support and enabling automatic sync of invoices',
    ref: '【751877178785894†L90-L118】'
  },
  cit3: {
    text: 'Apps that connect Xero to Google Sheets enable two‑way data exchange, automatic backups and refreshes, and make it easy to build custom dashboards in tools like Google Data Studio and Power BI',
    ref: '【759648031295799†L32-L66】'
  },
  cit4: {
    text: 'Fivetran’s Xero connector is a fully managed ELT integration that extracts detailed data from Xero and loads it into your central data warehouse or data lake',
    ref: '【345747099213790†L115-L119】'
  },
  cit5: {
    text: 'SyncHub allows you to connect Xero, Xero Projects, Xero Payroll or Xero Practice Manager to reporting tools like Power BI, Tableau, Google Sheets and Microsoft Excel — eliminating manual CSV exports',
    ref: '【545254651364210†L46-L48】'
  },
  cit6: {
    text: 'Notion makes it easy to connect and move content to and from other tools; it supports native integrations and allows you to build your own integrations via its API',
    ref: '【429546090539517†L55-L59】'
  },
  cit7: {
    text: 'Notion’s connected properties let you link files from Google Drive, designs from Figma, tickets from Zendesk and pull requests from GitHub directly into your Notion databases',
    ref: '【429546090539517†L94-L99】'
  },
  cit8: {
    text: 'ClickUp provides a public API for tailored automation and integrates with Slack so you can create and update ClickUp tasks from Slack messages and receive real‑time updates',
    ref: '【557396063443348†L411-L417】'
  },
  cit9: {
    text: 'ClickUp’s Google Drive integration lets you attach, search and preview Drive files directly within ClickUp tasks, docs and chat',
    ref: '【557396063443348†L442-L444】'
  },
  cit10: {
    text: 'ClickUp can sync its data with Tableau using the Tableau Web Connector, allowing teams to build real‑time dashboards',
    ref: '【557396063443348†L547-L548】'
  },
  cit11: {
    text: 'Salt Edge’s open banking gateway provides a single API for accessing data from thousands of banks and supports payment initiation and data enrichment',
    ref: '【223469806095982†L23-L28】'
  },
  cit12: {
    text: 'Open banking APIs like Salt Edge have expanded integrations to more than 8,000 banks worldwide',
    ref: '【115895180070843†L75-L78】'
  },
  cit13: {
    text: 'Coupler.io exports Xero data into spreadsheets and data warehouses and connects that data to tools like Looker Studio, Power BI and Tableau',
    ref: '【759648031295799†L140-L143】'
  },
  cit14: {
    text: 'G‑Accon securely connects Xero with Google Sheets, automates report generation and dashboards, supports multi‑entity consolidation and enables two‑way sync back to Xero',
    ref: '【759648031295799†L107-L110】'
  },

  // Qonto operates in eight European countries – France, Germany, Spain, Italy, Austria, Belgium, the Netherlands and Portugal【938800176834442†L101-L133】【247076042105221†L22-L52】.
  // This citation summarises official listings and expansion announcements from Qonto’s site and news coverage.
  cit15: {
    text: 'Qonto operates in eight European countries — France, Germany, Spain, Italy, Austria, Belgium, the Netherlands and Portugal',
    ref: '【938800176834442†L101-L133】【247076042105221†L22-L52】'
  },

  // Pleo’s global page lists offices in Denmark, United Kingdom, Germany, Sweden, Spain and Ireland and notes that more than 40,000 companies across 16 European countries use the platform【981596464512577†L39-L66】【244413094314132†L82-L85】.
  cit16: {
    text: 'Pleo has offices in Denmark, the United Kingdom, Germany, Sweden, Spain and Ireland and is used by more than 40,000 companies across 16 European countries',
    ref: '【981596464512577†L39-L66】【244413094314132†L82-L85】'
  },

  // Wise’s business page explains that companies can operate in over 80 countries, hold balances in more than 40 currencies and get local account details for multiple currencies【728283427370216†L38-L49】.
  cit17: {
    text: 'Wise enables businesses to operate in more than 80 countries, provides local account details for multiple currencies and lets users hold and convert over 40 currencies',
    ref: '【728283427370216†L38-L49】'
  },

  // A technical blog notes that integrating PayPal allows businesses to reach customers in more than 200 countries and accept payments in 25 different currencies【522801569817708†L83-L100】.
  cit18: {
    text: 'PayPal enables businesses to accept payments from customers in over 200 countries and 25 different currencies',
    ref: '【522801569817708†L83-L100】'
  },

  // Lexoffice is described as a cloud‑based accounting software for freelancers, self‑employed and small businesses, offering invoicing, quotation creation, document entry, online banking, payroll and a clear dashboard【38901515615973†L69-L86】.
  cit19: {
    text: 'Lexoffice is a cloud‑based accounting software for freelancers, the self‑employed and small businesses that supports invoice and quotation creation, document entry, online banking, payroll and a clear dashboard',
    ref: '【38901515615973†L69-L86】'
  },

  // An article on Settle‑in‑Berlin explains that Lexoffice also supports tax and VAT declarations, automatic invoice sending, a cash‑flow tracker, integrated online banking and PayPal integration【475699420130736†L570-L597】.
  cit20: {
    text: 'Lexoffice supports tax and VAT declarations, automatic invoice sending, cash flow tracking, integrated online banking and PayPal integration',
    ref: '【475699420130736†L570-L597】'
  },

  // Agicap’s “Why us” page notes that the company operates in five major European countries — France, Germany, Spain, Italy and the UK【320563365699788†L145-L149】.
  cit21: {
    text: 'Agicap operates in five major European countries — France, Germany, Spain, Italy and the UK',
    ref: '【320563365699788†L145-L149】'
  },

  // Agicap’s product page highlights that it has over 8,000 clients across 12 countries and is recognised as Europe’s leading cash flow management provider for SMBs【978584541238561†L196-L199】.
  cit22: {
    text: 'Agicap has over 8,000 clients across 12 countries and is recognised as Europe’s leading cash flow management provider for SMBs',
    ref: '【978584541238561†L196-L199】'
  },

  // DATEV is one of Europe’s largest software houses with more than 200 software products and services.  Its accounting and payroll solutions serve over two million German companies and process around 14 million payrolls each month【991868570875071†L29-L33】【991868570875071†L52-L72】.
  cit23: {
    text: 'DATEV is one of Europe’s largest software houses with over 200 software products and services; its accounting and payroll solutions serve more than two million German companies and process around 14 million payrolls each month',
    ref: '【991868570875071†L29-L33】【991868570875071†L52-L72】'
  },

  // Integrating with DATEV’s Rechnungswesen usually involves sending data via DATEV Unternehmen online or the DATEV‑Datenservice in XML/CSV formats; API access is limited and workflows differ between the DUO and ReWe systems.  Unified API providers like Maesn build a layer on top of DATEV’s APIs using JSON to bridge both DUO and ReWe and simplify integration【537543574791911†L327-L349】【537543574791911†L353-L373】.
  cit24: {
    text: 'Integrating with DATEV’s Rechnungswesen typically requires sending data through DATEV Unternehmen online or the DATEV‑Datenservice as XML/CSV files, and API access is limited with differing workflows between DUO and ReWe. Unified API providers such as Maesn simplify this by wrapping DATEV’s XML/CSV APIs into a JSON‑based layer that bridges both DUO and ReWe and streamlines integration',
    ref: '【537543574791911†L327-L349】【537543574791911†L353-L373】'
  },

  // FinAPI is a leading open banking provider trusted by over 400 companies including DATEV.  It provides access to a wide range of account types—bank accounts, loans, credit cards, investment portfolios and PayPal—by combining PSD2/XS2A, FinTS and fallback web‑scraping, ensuring broad coverage【664513209605348†L62-L80】.  FinAPI is licensed and supervised by BaFin and TÜV‑certified for privacy and data protection, with encrypted data transfers and explicit user consent【664513209605348†L90-L96】.
  cit27: {
    text: 'FinAPI is a leading open banking provider trusted by over 400 companies (including DATEV).  It grants access to bank accounts, loans, credit cards, investment portfolios and PayPal via PSD2/XS2A, FinTS and fallback web‑scraping, ensuring broad coverage【664513209605348†L62-L80】.  FinAPI is licensed and supervised by BaFin and TÜV‑certified for privacy and data protection, with encrypted data transfers and explicit user consent【664513209605348†L90-L96】',
    ref: '【664513209605348†L62-L80】【664513209605348†L90-L96】'
  },

  // The OpenScope REST API allows real‑time data queries and reporting, provides secure document and data exchange via the API, and offers flexible, independent connections to third‑party systems【354906271814191†L239-L249】.
  cit28: {
    text: 'The OpenScope REST API allows real‑time data queries and reporting, provides secure document and data exchange via the API, and offers flexible, independent connections to third‑party systems',
    ref: '【354906271814191†L239-L249】'
  },

  // Scopevisio’s OpenScope API provides web services for programmatic access so that batch processes and external software can integrate with the Scopevisio platform【354906271814191†L253-L259】.
  cit29: {
    text: 'Scopevisio’s OpenScope API provides web services for programmatic access so that batch processes and external software can integrate with the Scopevisio platform',
    ref: '【354906271814191†L253-L259】'
  },

  // GetMyInvoices automatically transfers Scopevisio invoices to DATEV and other systems, sending all relevant invoice data — including date, amount, payment details and item lines — to save time and eliminate manual entry【470392404383412†L303-L311】.
  cit30: {
    text: 'GetMyInvoices automatically transfers Scopevisio invoices to DATEV and other systems, sending all relevant invoice data — including date, amount, payment details and item lines — to save time and eliminate manual entry',
    ref: '【470392404383412†L303-L311】'
  },

  // SchuWa (Schuster & Walther IT‑Business) is an adaptive IT services provider.  In August 2024, ADD IT & Consulting GmbH, Köhler und Rapp GmbH and Schuster & Walther IT‑Business GmbH joined forces under the teccle group, promising that all familiar contacts and processes will remain unchanged【343533873351939†L12-L18】.  The company emphasises that IT should adapt to users rather than the other way around, offering adaptive solutions for companies and law firms【343533873351939†L33-L35】.
  cit31: {
    text: 'In August 2024, ADD IT & Consulting GmbH, Köhler und Rapp GmbH and Schuster & Walther IT‑Business GmbH merged under the teccle group, retaining existing contacts and processes【343533873351939†L12-L18】.  SchuWa describes itself as an adaptive IT solutions provider, asserting that IT should adapt to users, not vice versa【343533873351939†L33-L35】',
    ref: '【343533873351939†L12-L18】【343533873351939†L33-L35】'
  }

  // New citations for database integration
  ,
  /**
   * Azure and Power BI connectivity:  Azure services have built‑in connections
   * with Power BI, allowing users to transform data into real‑time insights.  You
   * can connect one or multiple Azure data sources, shape and refine the data,
   * and build customised reports.  A straightforward starting point is to
   * connect to an Azure SQL Database and create reports that track business
   * performance【639883013839314†L115-L129】【639883013839314†L130-L135】.
   */
  cit32: {
    text: 'Azure services have built‑in connectivity with Power BI. You can connect one or multiple Azure data sources, shape and refine your data and build customised reports; a straightforward starting point is connecting to an Azure SQL Database to create reports that identify trends and key performance indicators',
    ref: '【639883013839314†L115-L129】【639883013839314†L130-L135】'
  },
  /**
   * Amazon Redshift connector:  When using Power Query or Power BI, you can
   * connect to Amazon Redshift by selecting the Redshift option, entering the
   * server and database details, and then choosing either Import or DirectQuery
   * modes.  After providing credentials, you can load or transform the data in
   * the Power Query editor【568190040137650†L255-L296】.
   */
  cit33: {
    text: 'Power BI’s built‑in Amazon Redshift connector lets you select the Redshift option, specify the server and database, and choose Import or DirectQuery modes; after authenticating, you can load or transform the data in Power Query',
    ref: '【568190040137650†L255-L296】'
  },
  /**
   * MongoDB Atlas connector:  The certified MongoDB Atlas Power BI Connector
   * enables real‑time insights on live Atlas data.  It bridges developers and
   * analysts, allowing them to model document data using Power Query and
   * build up‑to‑date dashboards that combine multiple data sources【923305047249281†L163-L171】【923305047249281†L189-L195】.
   */
  cit34: {
    text: 'The certified MongoDB Atlas Power BI Connector provides real‑time insights on live Atlas data.  It lets analysts model document data using Power Query and build up‑to‑date dashboards that combine multiple data sources',
    ref: '【923305047249281†L163-L171】【923305047249281†L189-L195】'
  }
  ,
  /**
   * Amazon EC2 overview:  Amazon Elastic Compute Cloud (EC2) is a web service that
   * provides resizable compute capacity in the cloud.  It is designed to make
   * web‑scale computing easier for developers.  With EC2, users can quickly
   * deploy scalable virtual servers (instances) and pay only for what they use,
   * rather than investing in expensive hardware【865693744674690†L184-L190】.
   */
  cit35: {
    text: 'Amazon Elastic Compute Cloud (EC2) is a web service that provides resizable compute capacity in the cloud.  It lets users quickly deploy scalable virtual servers and pay only for what they use, simplifying web‑scale computing',
    ref: '【865693744674690†L184-L190】'
  },
  /**
   * Azure Virtual Machines overview:  Azure virtual machines are on‑demand,
   * scalable computing resources offered by Azure.  They give you the flexibility
   * of virtualization without buying or maintaining physical hardware; you pay
   * for extra VMs when you need them and shut them down when you don’t【663688110202865†L65-L84】.
   */
  cit36: {
    text: 'Azure Virtual Machines are on‑demand, scalable computing resources that provide the flexibility of virtualization without the need to buy or maintain physical hardware; you can scale up for development, testing or cloud applications and pay for extra VMs only when needed',
    ref: '【663688110202865†L65-L84】'
  },
  /**
   * Google Compute Engine overview:  Google Compute Engine (GCE) is an
   * infrastructure‑as‑a‑service offering that allows clients to run workloads on
   * Google’s physical hardware.  GCE provides a scalable number of virtual
   * machines to serve as large compute clusters and is managed via a RESTful API,
   * CLI or web console.  Pricing is pay‑per‑usage with no upfront fees【913644883743072†L64-L74】.
   */
  cit37: {
    text: 'Google Compute Engine (GCE) is an infrastructure‑as‑a‑service product that lets clients run workloads on Google’s physical hardware.  It provides scalable virtual machines managed via API, CLI or web console, with pay‑per‑usage billing and no upfront fees',
    ref: '【913644883743072†L64-L74】'
  }
};

// List of core business tools with their categories, integration options and
// recommended analytics platforms.  The id property is used to uniquely
// identify each tool; directIntegrations lists tools that have native or
// official integrations; connectors lists intermediary services that can be
// used to move data between systems; recommendedBI enumerates reporting and
// dashboard platforms suitable for the tool’s data.
const tools = [
  {
    id: 'xero',
    name: 'Xero',
    category: 'Accounting & Bookkeeping',
    description: 'Cloud‑based accounting software for small and medium businesses.',
    apiAvailable: true,
    directIntegrations: ['deel'],
    connectors: ['Fivetran', 'SyncHub', 'Coupler.io', 'G‑Accon'],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    // Xero is used worldwide, so mark its availability as global
    countries: ['Global'],
    citationIds: ['cit3', 'cit4', 'cit5', 'cit13', 'cit14'],
    // Stage and logo for roadmap grouping and UI
    stage: 'Foundations',
    logo: 'xero.png'
  },
  {
    id: 'deel',
    name: 'Deel',
    category: 'Payroll & HR',
    description: 'Global payroll and compliance platform that helps hire and pay talent worldwide.',
    apiAvailable: true,
    directIntegrations: ['xero'],
    connectors: ['Zapier', 'Make.com'],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    // Deel supports hiring and payments in many countries
    countries: ['Global'],
    citationIds: ['cit1', 'cit2'],
    stage: 'Foundations',
    logo: 'deel.png'
  },
  {
    id: 'google‑workspace',
    name: 'Google Workspace',
    category: 'Productivity & Workspace',
    description: 'Suite of productivity tools including Gmail, Docs, Sheets, Drive and Calendar.',
    apiAvailable: true,
    directIntegrations: ['clickup', 'notion'],
    connectors: ['Fivetran', 'Coupler.io'],
    recommendedBI: ['Looker Studio', 'Power BI'],
    // Google Workspace is available worldwide
    countries: ['Global'],
    citationIds: [],
    stage: 'Foundations',
    logo: 'google-workspace.png'
  },
  {
    id: 'metabase',
    name: 'Metabase',
    category: 'Reporting & BI',
    description: 'Open‑source business intelligence tool that connects to databases and provides dashboards.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: [],
    stage: 'Strategic Finance & Reporting',
    logo: null
  },
  {
    id: 'power‑bi',
    name: 'Power BI',
    category: 'Reporting & BI',
    description: 'Microsoft’s business analytics service that provides interactive visualisations.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: ['SyncHub', 'Coupler.io'],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: [],
    stage: 'Strategic Finance & Reporting',
    logo: 'power-bi.png'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'Reporting & BI',
    description: 'Visual analytics platform for creating interactive dashboards.',
    apiAvailable: true,
    directIntegrations: ['clickup'],
    connectors: ['SyncHub', 'Coupler.io'],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: ['cit10'],
    stage: 'Strategic Finance & Reporting',
    logo: 'tableau.png'
  },
  {
    id: 'looker‑studio',
    name: 'Looker Studio',
    category: 'Reporting & BI',
    description: 'Google’s free dashboard tool (formerly Data Studio) for building shareable reports.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: ['Coupler.io'],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: [],
    stage: 'Strategic Finance & Reporting',
    logo: 'looker.png'
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'Project & Documentation',
    description: 'All‑in‑one workspace for documents, wikis, tasks and databases.',
    apiAvailable: true,
    directIntegrations: ['google‑workspace'],
    connectors: ['Apipheny', 'Coupler.io'],
    recommendedBI: ['Metabase', 'Looker Studio'],
    countries: ['Global'],
    citationIds: ['cit6', 'cit7'],
    stage: 'Foundations',
    logo: 'notion.png'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    category: 'Project & Task Management',
    description: 'Productivity platform for tasks, docs, goals and collaboration.',
    apiAvailable: true,
    directIntegrations: ['slack', 'google‑workspace', 'tableau'],
    connectors: ['Zapier', 'Make.com'],
    recommendedBI: ['Tableau', 'Power BI'],
    countries: ['Global'],
    citationIds: ['cit8', 'cit9', 'cit10'],
    stage: 'Foundations',
    logo: null
  },
  {
    id: 'slack',
    name: 'Slack',
    category: 'Communications',
    description: 'Team collaboration and messaging platform.',
    apiAvailable: true,
    directIntegrations: ['clickup', 'notion'],
    connectors: ['Zapier', 'Make.com'],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: ['cit8'],
    stage: 'Foundations',
    logo: 'slack.png'
  },
  {
    id: 'salt‑edge',
    name: 'Salt Edge',
    category: 'Banking & Payments',
    description: 'Open banking gateway that aggregates data from thousands of banks and offers payment initiation.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: ['cit11', 'cit12'],
    stage: 'Foundations',
    logo: 'salt-edge.png'
  },
  {
    id: 'fivetran',
    name: 'Fivetran',
    category: 'Data Integration & ETL',
    description: 'Managed ELT platform that replicates data from SaaS applications and databases to cloud warehouses.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: ['cit4'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'sync‑hub',
    name: 'SyncHub',
    category: 'Data Integration & ETL',
    description: 'No‑code platform to sync data from cloud apps like Xero into data warehouses and BI tools.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Google Sheets'],
    countries: ['Global'],
    citationIds: ['cit5'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'coupler',
    name: 'Coupler.io',
    category: 'Data Integration & ETL',
    description: 'Tool to export data from apps like Xero into spreadsheets and databases, with support for multiple BI destinations.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['Global'],
    citationIds: ['cit13'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'g‑accon',
    name: 'G‑Accon',
    category: 'Data Integration & ETL',
    description: 'Google Sheets add‑on that provides two‑way sync between Xero and Google Sheets, enabling report automation and multi‑entity consolidation.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Google Sheets'],
    countries: ['Global'],
    citationIds: ['cit14'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'zapier',
    name: 'Zapier',
    category: 'iPaaS & Automation',
    description: 'Automation platform that connects thousands of apps through triggers and actions without coding.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: [],
    stage: 'Integration & Automation',
    logo: 'zapier.png'
  },
  {
    id: 'make.com',
    name: 'Make.com',
    category: 'iPaaS & Automation',
    description: 'Visual automation platform (formerly Integromat) to connect apps and automate workflows.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: [],
    countries: ['Global'],
    citationIds: [],
    stage: 'Integration & Automation',
    logo: null
  }
  ,
  // New tools added for banking, expense management, multi‑currency payments, accounting and cash flow management.
  {
    id: 'qonto',
    name: 'Qonto',
    category: 'Banking & Payments',
    description: 'Online business banking platform offering accounts, payment cards and expense management for SMEs.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: ['Salt Edge'],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['France', 'Germany', 'Spain', 'Italy', 'Austria', 'Belgium', 'Netherlands', 'Portugal'],
    citationIds: ['cit15'],
    stage: 'Foundations',
    logo: 'qonto.png'
  },
  {
    id: 'pleo',
    name: 'Pleo',
    category: 'Expense Management',
    description: 'Expense management and company card platform that automates spending and reimbursements for businesses.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: ['Zapier', 'Make.com'],
    recommendedBI: ['Power BI', 'Tableau'],
    countries: ['Denmark', 'United Kingdom', 'Germany', 'Sweden', 'Spain', 'Ireland'],
    citationIds: ['cit16'],
    stage: 'Foundations',
    logo: 'pleo.png'
  },
  {
    id: 'wise',
    name: 'Wise',
    category: 'Banking & Payments',
    description: 'Multi‑currency business account and international payments platform.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: ['Salt Edge'],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['Global'],
    citationIds: ['cit17'],
    stage: 'Foundations',
    logo: 'wise.png'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    category: 'Payments & Ecommerce',
    description: 'Widely used online payments platform enabling businesses to accept payments from customers around the world.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: ['Zapier', 'Make.com'],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['Global'],
    citationIds: ['cit18'],
    stage: 'Foundations',
    logo: 'paypal.png'
  },
  {
    id: 'lexoffice',
    name: 'Lexoffice',
    category: 'Accounting & Bookkeeping',
    description: 'Cloud‑based accounting software for freelancers and small businesses in Germany, offering invoicing, online banking and payroll.',
    apiAvailable: true,
    directIntegrations: ['paypal'],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['Germany'],
    citationIds: ['cit19', 'cit20'],
    stage: 'Foundations',
    logo: null
  },
  {
    id: 'agicap',
    name: 'Agicap',
    category: 'Cash Flow Management',
    description: 'Cash flow management and forecasting software for SMBs, providing real‑time visibility, scenario planning and integrations with banks and ERPs.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['France', 'Germany', 'Spain', 'Italy', 'United Kingdom'],
    citationIds: ['cit21', 'cit22'],
    stage: 'Integration & Automation',
    logo: null
  },

  // DATEV: German cooperative software provider offering accounting, payroll and tax solutions.
  {
    id: 'datev',
    name: 'DATEV',
    category: 'Accounting & Payroll',
    description: 'German cooperative software provider offering comprehensive accounting, payroll and tax solutions used by millions of businesses.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: ['Fivetran', 'SyncHub', 'Coupler.io', 'FinAPI'],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    countries: ['Germany'],
    citationIds: ['cit23', 'cit24'],
    stage: 'Control & Compliance',
    logo: 'datev.png'
  },

  // FinAPI: Open banking API platform (subsidiary of SCHUFA) providing secure access to multiple account types.
  {
    id: 'finapi',
    name: 'FinAPI',
    category: 'Open Banking & Data',
    description: 'Open banking API platform that provides secure access to a wide range of account types—including bank accounts, loans, credit cards, investment portfolios and PayPal—via PSD2/XS2A, FinTS and fallback web‑scraping.',
    apiAvailable: true,
    directIntegrations: ['datev'],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['Germany', 'Europe'],
    citationIds: ['cit27'],
    stage: 'Integration & Automation',
    logo: null
  },

  // Scopevisio: Cloud ERP with OpenScope API for integrating external systems
  {
    id: 'scopevisio',
    name: 'Scopevisio',
    category: 'ERP & Business Management',
    description: 'Cloud‑based enterprise software that integrates finance, accounting, CRM, HR and project management.  It offers an OpenScope REST API for real‑time data queries and reporting, secure document exchange and flexible integration of third‑party systems.',
    apiAvailable: true,
    directIntegrations: ['datev'],
    connectors: ['GetMyInvoices', 'FinAPI'],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['Germany'],
    citationIds: ['cit28', 'cit29', 'cit30'],
    stage: 'Control & Compliance',
    logo: null
  },

  // SchuWa (teccle group): Adaptive IT solutions provider
  {
    id: 'schuwa',
    name: 'SchuWa',
    category: 'IT Services & Solutions',
    description: 'German IT services provider (part of the teccle group) formed by the merger of ADD IT & Consulting, Köhler und Rapp and Schuster & Walther IT‑Business.  It offers adaptive IT solutions that adapt to the needs of users and supports companies and law firms.',
    apiAvailable: false,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio'],
    countries: ['Germany'],
    citationIds: ['cit31'],
    stage: 'Control & Compliance',
    logo: null
  }
  ,
  // Database & storage suggestions for the Integration & Automation stage
  {
    id: 'azure-sql',
    name: 'Azure SQL Database',
    category: 'Database & Storage',
    description: 'Managed relational database service from Microsoft Azure that scales automatically and integrates seamlessly with Power BI.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    countries: ['Global'],
    citationIds: ['cit32'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'amazon-redshift',
    name: 'Amazon Redshift',
    category: 'Database & Storage',
    description: 'Fully managed data warehouse service from AWS that supports massive parallel queries and integrates with Power BI via a built‑in connector.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    countries: ['Global'],
    citationIds: ['cit33'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'mongodb-atlas',
    name: 'MongoDB Atlas',
    category: 'Database & Storage',
    description: 'Fully managed document database service; the certified Power BI connector enables real‑time dashboards from live MongoDB data.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    countries: ['Global'],
    citationIds: ['cit34'],
    stage: 'Integration & Automation',
    logo: null
  }
  ,
  // Server and compute suggestions for hosting applications and services
  {
    id: 'aws-ec2',
    name: 'Amazon EC2',
    category: 'Compute & Hosting',
    description: 'Elastic compute service from AWS that provides resizable virtual servers.  Deploy applications quickly and scale resources up or down while paying only for what you use.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    countries: ['Global'],
    citationIds: ['cit35'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'azure-vm',
    name: 'Azure Virtual Machines',
    category: 'Compute & Hosting',
    description: 'On‑demand, scalable virtual machines from Microsoft Azure.  Provides the flexibility of virtualization without buying hardware; scale VMs up or down for development, testing or running applications in the cloud.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    countries: ['Global'],
    citationIds: ['cit36'],
    stage: 'Integration & Automation',
    logo: null
  },
  {
    id: 'google-compute-engine',
    name: 'Google Compute Engine',
    category: 'Compute & Hosting',
    description: 'Infrastructure‑as‑a‑service offering from Google Cloud providing scalable virtual machines with pay‑per‑usage billing and no upfront fees.  Manage via API, CLI or console and choose from many CPU/RAM configurations.',
    apiAvailable: true,
    directIntegrations: [],
    connectors: [],
    recommendedBI: ['Power BI', 'Tableau', 'Looker Studio', 'Metabase'],
    countries: ['Global'],
    citationIds: ['cit37'],
    stage: 'Integration & Automation',
    logo: null
  }
];

// Expose the datasets globally so the browser can access them after the
// script is loaded.  The site script will use window.tools and
// window.citations to build the UI and generate recommendations.
window.tools = tools;
window.citations = citations;