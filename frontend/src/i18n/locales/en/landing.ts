export default {
  batchImageGuide: {
    title: 'Batch Image Generation',
    description: 'Submit multiple prompts in one job and download the generated images when complete'
  },
  // Home Page
  home: {
    viewOnGithub: 'View on GitHub',
    viewDocs: 'View Documentation',
    docs: 'Docs',
    switchToLight: 'Switch to Light Mode',
    switchToDark: 'Switch to Dark Mode',
    dashboard: 'Dashboard',
    login: 'Login',
    getStarted: 'Get Started',
    goToDashboard: 'Go to Dashboard',
    nav: {
      badge: 'Smew.ai',
      home: 'Home',
      docs: 'Docs',
      models: 'Models',
      howItWorks: 'Approach',
      features: 'Capabilities',
      compatibility: 'Compatibility',
      pricing: 'Pricing',
      faq: 'FAQ'
    },
    hero: {
      eyebrow: 'API fuel built for OpenClaw and Codex users',
      titleLead: 'SmewAI: Cost-effective unified LLM gateway',
      titleAccent: 'Built for OpenClaw / Codex',
      description: 'Keep the official interface shape while optimizing compatibility, stability, and cost for heavy OpenClaw and Codex workflows.',
      secondaryCta: 'Read the docs'
    },
    stats: {
      subscriptionValue: 'Subscription',
      modelsValue: 'GPT-5.4+',
      noBillShockValue: 'No Bill Shock',
      unifiedAccess: 'Subscription plans built for peace of mind',
      routingLatency: 'Access advanced models directly',
      opsVisibility: 'Run APIs without bill anxiety'
    },
    heroSubtitle: 'Stable fuel for coding-heavy workflows',
    heroDescription: 'Subscription-style API access for individuals and small teams: stable, affordable, low-latency, and ready for advanced models like GPT-5.4.',
    tags: {
      subscriptionToApi: 'Subscription plans for API usage',
      stickySession: 'Multi-account pools',
      realtimeBilling: 'Transparent billing control',
      alwaysOn: 'Never stall, 24/7 at your service'
    },
    preview: {
      badge: 'Fuel Console',
      title: 'Subscription-style API plans for individuals and small teams',
      live: 'Live',
      panelTitle: 'Subscription peace of mind',
      panelStatus: 'Stable',
      configTitle: 'Policy config',
      configDescription: 'Subscribe and run the API with confidence. Supports advanced models like GPT-5.4.',
      pills: {
        subscription: 'Subscription plans',
        billing: 'Transparent billing',
        models: 'Advanced models like GPT-5.4'
      },
      cards: {
        failover: {
          title: 'Use it without interruption anxiety',
          description: 'Multi-account pools and smart switching reduce throttling and interruption risk during sustained usage.',
          caption: 'Stronger stability'
        },
        billing: {
          title: 'Use it without billing anxiety',
          description: 'Track request volume, latency, quota, and spend trends so individuals and small teams can stay within budget.',
          caption: 'Calmer subscriptions'
        }
      },
      footerTitle: 'The point is not more complexity. It is more peace of mind',
      footerDescription: 'This is a subscription-style API service for daily development and small-team collaboration, not an experimental endpoint that forces you to babysit cost and availability.'
    },
    positioning: {
      badge: 'Why choose us',
      title: 'OpenClaw needs the most advanced models to reach its full potential',
      description: 'A high-value, affordable subscription platform for heavy OpenClaw and Codex users. OpenClaw 🦞 is not just for coding—it is your digital worker, freeing productivity and working for you 24/7. No token anxiety, high-quota plans for heavy usage. Stable access to advanced models so you focus on creating, not bills.',
      highlights: [
        { icon: 'bolt', text: 'Digital worker 24/7' },
        { icon: 'database', text: 'High quota, no anxiety' },
        { icon: 'chart', text: 'Focus on creating' }
      ]
    },
    docsSection: {
      badge: 'Docs Hub',
      docCenterTitle: 'Smew User Guide',
      docCenterSubtitle: 'Learn how to use Smew AI programming assistant to improve development efficiency.',
      title: 'Move common integration docs onto a dedicated page',
      description: 'Codex, OpenClaw, Claude Code, OpenCode, and GPT Image 2 setup patterns now live on a dedicated docs page so first-time setup feels much faster.',
      openFullDocs: 'Open full docs',
      directoryTitle: 'On this page',
      directoryQuickStart: 'Quick Start',
      directoryConfig: 'Configuration',
      directoryUsage: 'Usage Example',
      directoryResources: 'Related Resources',
      readyBadge: 'Ready to copy',
      copy: 'Copy',
      copied: 'Copied',
      copiedToast: 'Snippet copied',
      readMore: 'Read the full guide',
      resources: {
        createKey: 'Create or copy your API key from the dashboard first.',
        gateway: 'Set the gateway URL to {baseUrl} so your existing workflow changes as little as possible.',
        compatibility: 'For Codex, keep the OpenAI provider with the responses wire API configuration.',
        openaiCompatible: 'For OpenClaw, prefer the OpenAI-compatible path whenever it is available.',
        pickModel: 'Start with gpt-5.4 as the default model, then adjust per workflow.',
        fullWalkthrough: 'For full install, upgrade, and troubleshooting steps, continue into the full documentation.',
        workspaceSettings: 'You can store these values globally or in a workspace-level settings.json file.',
        usageView: 'After setup, return to the dashboard to review usage, quota, and spend trends.',
        schema: 'Keep the official schema so editors can validate and autocomplete your config.',
        disableStorage: 'For automation-heavy workflows, disable store to avoid unnecessary response storage.',
        openclawWebsite: 'OpenClaw official site: view services and detailed documentation.'
      },
      guides: {
        codex: {
          eyebrow: 'Codex CLI',
          title: 'Codex',
          description: 'Standard Codex CLI access documentation and command examples.',
          sections: {
            oneClickInstall: {
              title: 'Manual installation',
              description: 'Install OpenAI Codex CLI via npm or brew.'
            },
            configEdit: {
              title: 'Configuration',
              description: 'Codex requires a `.codex` folder in your home directory with a config file at `~/.codex/config.toml`.'
            },
            auth: {
              title: 'Auth config',
              description: 'Put your API key in `~/.codex/auth.json`. Config location: macOS/Linux: `~/.codex/`, Windows: `%USERPROFILE%\\.codex\\`.'
            },
            apiKey: {
              title: 'Quickly obtain API Key',
              description: 'Go to the Smew backend «Configuration/keys» page to create and manage keys.',
              button: 'Get Smew usage key now'
            },
            usageHelp: {
              title: 'View help',
              description: 'View command help information.'
            },
            usageEdit: {
              title: 'Edit file',
              description: 'Edit the specified file.'
            },
            usageAnalyze: {
              title: 'Analyze code',
              description: 'Analyze project code directory.'
            },
            usageCommit: {
              title: 'Generate commit message',
              description: 'Analyze code changes and generate a commit message.'
            },
            usageRefactor: {
              title: 'Code refactoring',
              description: 'Refactor according to the specified design pattern.'
            },
            resources: {
              title: 'Related resources',
              description: 'Wire the gateway and key first, then start real tasks.'
            }
          }
        },
        openclaw: {
          eyebrow: 'OpenClaw',
          title: 'OpenClaw',
          description: 'OpenClaw access documentation and command examples.',
          sections: {
            oneClickInstall: {
              title: 'One-click installation',
              description: 'Install OpenClaw via npm or shell command.'
            },
            runWizard: {
              title: 'Run wizard',
              description: 'Run the OpenClaw guided wizard.'
            },
            configEdit: {
              title: 'Edit openclaw.json configuration file',
              description: 'OpenClaw is configured via a JSON file.'
            },
            configModels: {
              title: 'Modify the models section under agent in OpenClaw config',
              description: 'Configure auth and models in the config file.'
            },
            gatewayInstall: {
              title: 'Install OpenClaw gateway',
              description: 'Install the OpenClaw Gateway service.'
            },
            gatewayStart: {
              title: 'Start OpenClaw service after configuration',
              description: 'Start the OpenClaw service once configuration is complete.'
            },
            apiKey: {
              title: 'Quickly obtain API Key',
              description: 'Go to the Smew backend «Configuration/keys» page to create and manage keys.',
              button: 'Get Smew usage key now'
            },
            usageStart: {
              title: 'Start OpenClaw gateway',
              description: 'Start the OpenClaw Gateway service.'
            },
            usageStop: {
              title: 'Stop OpenClaw gateway',
              description: 'Stop the OpenClaw Gateway service.'
            },
            usageInstall: {
              title: 'Install OpenClaw gateway',
              description: 'Install the OpenClaw Gateway service.'
            },
            resources: {
              title: 'Related resources',
              description: 'View OpenClaw services and detailed documentation.'
            }
          }
        },
        claudeCode: {
          eyebrow: 'Claude Code',
          title: 'Claude Code',
          description: 'Configuration and basic usage examples for Claude Code.',
          sections: {
            quickstart: {
              title: 'Quick start',
              description: 'Install Claude Code first, then write the config file as shown below.'
            },
            install: {
              title: 'Install Claude Code',
              description: 'Install Claude Code CLI via npm.'
            },
            launch: {
              title: 'Launch Claude Code',
              description: 'Launch Claude Code directly in the project directory or terminal.'
            },
            configEdit: {
              title: 'Configuration',
              description: 'Claude Code can point to the Smew gateway via settings.json and map the default model to OpenAI models.'
            },
            configJson: {
              title: 'Edit Claude Code config file',
              description: 'Config path: ~/.claude/settings.json. Reopen Claude Code after changes for them to take effect.'
            },
            configWrite: {
              title: 'Write settings.json config',
              description: 'Write the following to ~/.claude/settings.json.'
            },
            apiKey: {
              title: 'Quickly obtain API Key',
              description: 'Go to the Smew backend «Configuration/keys» page to create and manage keys.',
              button: 'Get Smew usage key now'
            },
            usageExample: {
              title: 'Start interactive session',
              description: 'Start Claude Code with the current configuration.'
            },
            resources: {
              title: 'Related resources',
              description: 'After the base setup works, choose whether these settings belong globally or per workspace.'
            }
          }
        },
        opencode: {
          eyebrow: 'OpenCode',
          title: 'OpenCode',
          description: 'OpenCode installation, configuration, and connection examples.',
          sections: {
            quickstart: {
              title: 'Quick start',
              description: 'Install OpenCode first, then prepare the configuration file.'
            },
            install: {
              title: 'Install OpenCode',
              description: 'Install OpenCode via the official install script or npm.'
            },
            launch: {
              title: 'Start OpenCode',
              description: 'Start the OpenCode client in the terminal.'
            },
            configEdit: {
              title: 'Configuration',
              description: 'OpenCode uses JSON config files to declare provider, model, and agent options.'
            },
            configJson: {
              title: 'Edit OpenCode config file',
              description: 'Config path: ~/.config/opencode/opencode.json (or opencode.jsonc). Create the file manually if it does not exist.'
            },
            configWrite: {
              title: 'Write opencode.json config',
              description: 'Write the following to your config file.'
            },
            apiKey: {
              title: 'Quickly obtain API Key',
              description: 'Go to the Smew backend «Configuration/keys» page to create and manage keys.',
              button: 'Get Smew usage key now'
            },
            usageStart: {
              title: 'Start client',
              description: 'Enter the OpenCode interactive interface directly.'
            },
            usageConnect: {
              title: 'Connection config wizard',
              description: 'Use /connect within OpenCode to bind or adjust provider configuration.'
            },
            resources: {
              title: 'Related resources',
              description: 'Keep the schema and disable unnecessary storage for easier maintenance.'
            }
          }
        },
        gptImage2: {
          eyebrow: 'OpenAI Images',
          title: 'GPT Image 2',
          description: 'Call gpt-image-2 through OpenAI-compatible image endpoints, covering async generation, task lookup, edits, parameters, and common errors.',
          sections: {
            quickstart: {
              title: 'Before you call it',
              description: 'GPT Image 2 is an image model. Use the standard image endpoints, and treat generation as an async submit-plus-poll workflow instead of chat auto-rewrites.',
              bullets: {
                openaiGroup: 'The API key must belong to an OpenAI group.',
                permission: 'Image generation must be enabled on the group, otherwise the gateway returns 403 permission_error.',
                standardPath: 'Use /v1/images/generations, /v1/tasks/:task_id, and /v1/images/edits as the primary endpoints.',
                asyncFlow: 'Generation first returns a task_id, then the client polls /v1/tasks/:task_id for the final image URL.'
              }
            },
            generationEndpoint: {
              title: 'Generate images: POST /v1/images/generations',
              description: 'Send a JSON body to submit a generation task. Pass model: gpt-image-2 explicitly; success returns a task_id instead of immediate image bytes.'
            },
            taskStatus: {
              title: 'Check task status: GET /v1/tasks/:task_id',
              description: 'Poll the task after submission. When status becomes completed, read the final image URL from data.result.images[0].url[0].'
            },
            editMultipart: {
              title: 'Edit images: multipart/form-data',
              description: 'The primary endpoint is POST /v1/images/edits. Use the image field for uploads and the optional mask field for masks.'
            },
            editJson: {
              title: 'Edit images: JSON image URL',
              description: 'If the image is already reachable by URL, pass image_url entries in the JSON images array.'
            },
            parameters: {
              title: 'Parameters',
              description: 'The gateway parses and forwards these image parameters for requests, billing, and usage display.',
              bullets: {
                common: 'Common: model, prompt, size, n, stream, response_format.',
                output: 'Output controls: quality, background, output_format, output_compression.',
                edit: 'Edit-related: images, image, mask, input_fidelity.',
                other: 'Other: moderation, style, partial_images.',
                size: 'Size tiers: 1024x1024 is 1K; 1536x1024, 1024x1536, 2048x2048 and similar sizes are 2K; 3840x2160 and 2160x3840 are 4K.'
              }
            },
            errors: {
              title: 'Errors',
              description: 'Image endpoints return stable OpenAI-style errors so clients can branch clearly.',
              bullets: {
                notFound: 'Non-OpenAI groups calling image endpoints: 404 not_found_error.',
                permission: 'Image generation disabled on the group: 403 permission_error.',
                invalidModel: 'Non-image models on image endpoints: 400 invalid_request_error.',
                invalidBody: 'Empty body or invalid JSON: 400 invalid_request_error.'
              }
            },
            resources: {
              title: 'Notes',
              description: 'This path is handled as a separate image workflow while staying inside the existing account routing and forwarding model.',
              bullets: {
                imagesPath: 'gpt-image-2 should use /v1/images/* instead of being called as a normal chat model.',
                noChatBridge: '/v1/chat/completions is not auto-converted into image generation; wrong paths return explicit errors.',
                aliases: '/images/generations and /images/edits are compatibility aliases only. New integrations should prefer the standard /v1 paths.',
                tasks: 'The local task_id mapping is only used to remember which upstream route handled the submit; task status and results still come from the upstream task endpoint.'
              }
            }
          }
        }
      }
    },
    problemCards: {
      cost: {
        title: 'Official subscriptions get expensive fast',
        description: 'Once Codex / OpenClaw usage becomes frequent, long-term spend rises quickly and pricing becomes harder to optimize.'
      },
      ops: {
        title: 'Single accounts are fragile',
        description: 'Throttling, upstream volatility, or short interruptions can block coding-heavy workflows at the worst time.'
      },
      control: {
        title: 'Quota and spend stay opaque',
        description: 'Without one view of request count, latency, quota, and cost trends, teams cannot manage budgets or guardrails well.'
      }
    },
    // Pain points section
    painPoints: {
      title: 'Sound Familiar?',
      items: {
        expensive: {
          title: 'High Subscription Costs',
          desc: 'Paying for multiple AI subscriptions that add up every month'
        },
        complex: {
          title: 'Account Chaos',
          desc: 'Managing scattered accounts and API keys across different platforms'
        },
        unstable: {
          title: 'Service Interruptions',
          desc: 'Single accounts hitting rate limits and disrupting your workflow'
        },
        noControl: {
          title: 'No Usage Control',
          desc: "Can't track where your money goes or limit team member usage"
        }
      }
    },
    // Solutions section
    solutions: {
      title: 'We Solve These Problems',
      subtitle: 'Three simple steps to stress-free AI access'
    },
    workflow: {
      badge: 'Workflow fit',
      title: 'Keep the official interface habits, add reliability and better economics',
      pill: 'OpenAI / Codex Compatible',
      steps: {
        connect: {
          title: 'Change as little as possible',
          description: 'Optimize for OpenClaw and Codex workflows while preserving the familiar official API shape and developer experience.'
        },
        route: {
          title: 'Trade account pools for better uptime',
          description: 'Multi-account pools, intelligent switching, and request-path tuning lower throttling risk and keep latency down.'
        },
        observe: {
          title: 'Make quota, latency, and spend visible',
          description: 'Offer higher-tier plans plus real-time visibility into quota, latency, and cost for sustained heavy usage.'
        }
      },
      highlights: {
        compat: {
          title: 'Developer habits stay intact',
          description: 'Keep the official interface patterns your Codex / OpenClaw workflow already expects.'
        },
        billing: {
          title: 'Heavy usage is more economical',
          description: 'Fine-grained routing and resource scheduling make long-term high-volume usage more cost-effective.'
        }
      }
    },
    features: {
      unifiedGateway: 'One-Click Access',
      unifiedGatewayDesc: 'Get a single API key to call all connected AI models. No separate applications needed.',
      multiAccount: 'Always Reliable',
      multiAccountDesc: 'Smart routing across multiple upstream accounts with automatic failover. Say goodbye to errors.',
      balanceQuota: 'Pay What You Use',
      balanceQuotaDesc: 'Usage-based billing with quota limits. Full visibility into team consumption.'
    },
    featuresV2: {
      badge: 'Platform strengths',
      title: 'Built around the six things OpenClaw and Codex users actually care about',
      description: 'Compatibility, stability, quota, pricing, latency, and visibility determine whether an API platform can support serious development workflows.',
      items: {
        compatible: {
          title: 'Deep Codex compatibility',
          description: 'Optimized for OpenClaw and Codex workflows while preserving the official interface habits and dev experience.'
        },
        stable: {
          title: 'Stable and highly available',
          description: 'Multi-account pools plus intelligent switching sharply reduce throttling and interruption risk.'
        },
        quota: {
          title: 'High-quota subscription plans',
          description: 'High-quota Codex plans for high-concurrency and long-running dev scenarios, meeting sustained heavy usage.'
        },
        affordable: {
          title: 'More cost-effective than official',
          description: 'Refined routing and resource scheduling deliver better value for Codex, reducing long-term costs.'
        },
        latency: {
          title: 'Low latency for dev scenarios',
          description: 'Connection pools and request-path tuning reduce average latency, keeping coding, debugging, and iteration smooth.'
        },
        visibility: {
          title: 'Subscription and cost visibility',
          description: 'Track request volume, latency, quota, and spend trends in real time for tighter team budget control.'
        }
      }
    },
    // Comparison section
    comparison: {
      title: 'Why it fits heavy workflows better',
      headers: {
        feature: 'Comparison',
        official: 'Official Direct Access',
        us: 'Our Platform'
      },
      items: {
        pricing: {
          feature: 'Subscription model',
          official: 'Higher long-term cost under heavy usage',
          us: 'More reassuring plans and better long-term value'
        },
        models: {
          feature: 'Advanced models',
          official: 'Available but with less predictable economics',
          us: 'Stable access to advanced models like GPT-5.4'
        },
        management: {
          feature: 'Quota headroom',
          official: 'Heavy dev usage hits limits sooner',
          us: 'Higher-tier plans for sustained workloads'
        },
        stability: {
          feature: 'Stability',
          official: 'Single accounts hit throttling more easily',
          us: 'Multi-account pools plus smart switching'
        },
        control: {
          feature: 'Billing peace of mind',
          official: 'Fragmented data and weaker budget control',
          us: 'Unified request, quota, latency, and cost visibility'
        }
      }
    },
    comparisonV2: {
      badge: 'Value comparison',
      title: 'Official direct access is fine for occasional use. Heavy coding workflows need stability, quota, and pricing advantages',
      description: 'As soon as usage becomes long-running, automated, or team-shared, better account stability, larger plans, and clearer cost visibility matter more than basic reachability.'
    },
    compatibility: {
      badge: 'Integration path',
      title: 'Change as little as possible in existing OpenClaw / Codex setups',
      description: 'Keep the OpenAI-compatible shape so users can quickly judge whether the platform drops into their existing coding workflow.',
      codeStatus: 'Ready to test',
      items: {
        api: {
          title: 'Keep the official interface habits',
          description: 'In many cases you only swap the gateway URL and key instead of rebuilding your integration.'
        },
        models: {
          title: 'Optimized for Codex / OpenClaw workflows',
          description: 'Routing and stability choices are tuned for frequent coding, debugging, and automation tasks.'
        },
        observability: {
          title: 'Trace latency and cost per request',
          description: 'Failures, latency, usage, and cost trends stay visible in one place for long-term team management.'
        }
      }
    },
    providers: {
      title: 'Supported AI Models',
      description: 'One API, Multiple Choices',
      supported: 'Supported',
      soon: 'Soon',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: 'More'
    },
    testimonials: {
      badge: 'Testimonials',
      title: 'What developers say',
      items: [
        {
          quote: 'No more watching bills daily. I can focus on coding. Large quota plus multi-account pools means long-running calls just work.',
          name: 'Independent Developer',
          role: 'Heavy OpenClaw user'
        },
        {
          quote: 'Drop-in replacement. Same API habits as official. GPT-5.4 and advanced models run reliably with better cost control.',
          name: 'Small Team Lead',
          role: 'Codex workflow'
        }
      ]
    },
    faq: {
      badge: 'FAQ',
      title: 'Common Questions, Quick Answers',
      description: 'The most common questions about integration, billing, compatibility, and support all in one place.',
      items: [
        {
          question: 'Which models are supported?',
          answer: 'We currently support OpenAI Codex gpt-5.4, gpt-5.3-codex, gpt-5.2-codex, gpt-5.2, gpt-5.1-codex-max, gpt-5.1-codex, and gpt-5.1-codex-mini, with more models being added over time.'
        },
        {
          question: 'How do I get started?',
          answer: 'After signing up and logging in, create an API key in the dashboard and follow the sample requests in the documentation to complete integration.'
        },
        {
          question: 'Which tools can I use it with?',
          answer: 'It works with mainstream AI coding and development tools, including Codex CLI, Codex App, Codex extensions, Claude Code, OpenCode, and OpenClaw. If a tool supports a compatible API key or an OpenAI/Codex-compatible integration path, it can usually be configured directly.'
        },
        {
          question: 'Do you support subscriptions and real-time usage billing?',
          answer: 'Yes. Monthly subscription billing is supported, and the billing page shows real-time usage details based on actual request and model consumption.'
        },
        {
          question: 'Can I upgrade or switch plans?',
          answer: 'Yes. You can upgrade, downgrade, or switch plans at any time from the subscription page, and the system will settle based on the remaining billing cycle.'
        },
        {
          question: 'How is this different from official Codex?',
          answer: 'The experience stays fully compatible, while adding meaningful advantages: lower account risk, intelligent routing that avoids rate-limit friction, more available quota, consistent quality, access to official-style discounted pricing, dedicated support, Business-grade model support, and API format compatibility tailored for independent developers and teams.'
        },
        {
          question: 'How does service performance compare with official?',
          answer: 'Our service is designed to deliver the same Codex-level model quality, response format, and performance profile. With dynamic resource pools and load-balancing strategies, we improve stability and reduce rate-limit disruption by switching accounts immediately when one reaches its limit.'
        },
        {
          question: 'What support is available after purchase?',
          answer: 'We provide 24/7 technical support so your questions can be handled quickly at any time. Whether it is integration help, usage guidance, or billing questions, the goal is to let you use Codex services without distraction and stay focused on Vibe Coding.'
        }
      ]
    },
    codexInstall: {
      badge: 'Codex Setup',
      title: 'Install Smew as a Codex provider in one command',
      description: 'This installer targets macOS and Linux. Create an API key at /keys first, then run the one-liner to write a Smew provider into your local Codex config and verify the gateway.',
      macLabel: 'macOS / Linux',
      macDescription: 'Run this in a terminal where Codex is already installed. The script prompts for your API key if OPENAI_API_KEY is not already set.',
      manualLabel: 'Manual config',
      viewScript: 'View script',
      getKey: 'Create API key',
      highlights: [
        'Uses your existing OPENAI_API_KEY workflow',
        'Backs up ~/.codex/config.toml before editing',
        'Fetches models and verifies the gateway after setup'
      ]
    },
    // CTA section
    cta: {
      badge: 'Start integrating',
      title: 'Give OpenClaw and Codex a fuel line that lasts longer',
      description: 'If you already rely on Codex or OpenClaw heavily, the missing piece is usually not another endpoint. It is a more stable, lower-cost, easier-to-control one.',
      button: 'Sign Up Free'
    },
    contact: {
      title: 'Contact & Next Steps',
      subtitle: 'If you want to evaluate the integration plan, you can contact us directly.',
      wechatLabel: 'WeChat',
      emailLabel: 'Email',
      xLabel: 'X (Twitter)'
    },
    footer: {
      allRightsReserved: 'All rights reserved.'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'API Key Usage',
    subtitle: 'Enter your API Key to view real-time spending and usage status',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: 'Query',
    querying: 'Querying...',
    privacyNote: 'Your Key is processed locally in the browser and will not be stored',
    dateRange: 'Date Range:',
    dateRangeToday: 'Today',
    dateRange7d: '7 Days',
    dateRange30d: '30 Days',
    dateRange90d: '90 Days',
    dateRangeCustom: 'Custom',
    apply: 'Apply',
    used: 'Used',
    detailInfo: 'Detail Information',
    tokenStats: 'Token Statistics',
    dailyDetail: 'Daily Detail',
    modelStats: 'Model Usage Statistics',
    // Table headers
    date: 'Date',
    model: 'Model',
    requests: 'Requests',
    inputTokens: 'Input Tokens',
    outputTokens: 'Output Tokens',
    cacheCreationTokens: 'Cache Creation',
    cacheReadTokens: 'Cache Read',
    cacheWriteTokens: 'Cache Write',
    totalTokens: 'Total Tokens',
    cost: 'Cost',
    // Status
    quotaMode: 'Key Quota Mode',
    walletBalance: 'Wallet Balance',
    // Ring card titles
    totalQuota: 'Total Quota',
    limit5h: '5-Hour Limit',
    limitDaily: 'Daily Limit',
    limit7d: '7-Day Limit',
    limitWeekly: 'Weekly Limit',
    limitMonthly: 'Monthly Limit',
    // Detail rows
    remainingQuota: 'Remaining Quota',
    expiresAt: 'Expires At',
    todayExpires: '(expires today)',
    daysLeft: '({days} days)',
    usedQuota: 'Used Quota',
    resetNow: 'Resetting soon',
    subscriptionType: 'Subscription Type',
    subscriptionExpires: 'Subscription Expires',
    // Usage stat cells
    todayRequests: 'Today Requests',
    todayInputTokens: 'Today Input',
    todayOutputTokens: 'Today Output',
    todayTokens: 'Today Tokens',
    todayCacheCreation: 'Today Cache Creation',
    todayCacheRead: 'Today Cache Read',
    todayCost: 'Today Cost',
    rpmTpm: 'RPM / TPM',
    totalRequests: 'Total Requests',
    totalInputTokens: 'Total Input',
    totalOutputTokens: 'Total Output',
    totalTokensLabel: 'Total Tokens',
    totalCacheCreation: 'Total Cache Creation',
    totalCacheRead: 'Total Cache Read',
    totalCost: 'Total Cost',
    avgDuration: 'Avg Duration',
    // Messages
    enterApiKey: 'Please enter an API Key',
    querySuccess: 'Query successful',
    queryFailed: 'Query failed',
    queryFailedRetry: 'Query failed, please try again later',
    noDailyUsage: 'No daily usage data',
  },

  // Setup Wizard
  setup: {
    title: 'Sub2API Setup',
    description: 'Configure your Sub2API instance',
    database: {
      title: 'Database Configuration',
      description: 'Connect to your PostgreSQL database',
      host: 'Host',
      port: 'Port',
      username: 'Username',
      password: 'Password',
      databaseName: 'Database Name',
      sslMode: 'SSL Mode',
      passwordPlaceholder: 'Password',
      ssl: {
        disable: 'Disable',
        require: 'Require',
        verifyCa: 'Verify CA',
        verifyFull: 'Verify Full'
      }
    },
    redis: {
      title: 'Redis Configuration',
      description: 'Connect to your Redis server',
      host: 'Host',
      port: 'Port',
      username: 'Username (optional)',
      password: 'Password (optional)',
      database: 'Database',
      usernamePlaceholder: 'Leave empty for default user',
      passwordPlaceholder: 'Password',
      enableTls: 'Enable TLS',
      enableTlsHint: 'Use TLS when connecting to Redis (public CA certs)'
    },
    admin: {
      title: 'Admin Account',
      description: 'Create your administrator account',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      passwordPlaceholder: 'Min 8 characters',
      confirmPasswordPlaceholder: 'Confirm password',
      passwordMismatch: 'Passwords do not match'
    },
    ready: {
      title: 'Ready to Install',
      description: 'Review your configuration and complete setup',
      database: 'Database',
      redis: 'Redis',
      adminEmail: 'Admin Email'
    },
    status: {
      testing: 'Testing...',
      success: 'Connection Successful',
      testConnection: 'Test Connection',
      installing: 'Installing...',
      completeInstallation: 'Complete Installation',
      completed: 'Installation completed!',
      redirecting: 'Redirecting to login page...',
      restarting: 'Service is restarting, please wait...',
      timeout: 'Service restart is taking longer than expected. Please refresh the page manually.'
    }
  },

  // Common
}

