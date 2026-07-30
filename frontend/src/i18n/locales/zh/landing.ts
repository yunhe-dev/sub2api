export default {
  batchImageGuide: {
    title: '图片批量生成',
    description: '一次提交多条提示词，任务完成后可统一下载图片结果'
  },
  // Home Page
  home: {
    viewOnGithub: '在 GitHub 上查看',
    viewDocs: '查看文档',
    docs: '文档',
    switchToLight: '切换到浅色模式',
    switchToDark: '切换到深色模式',
    dashboard: '控制台',
    login: '登录',
    getStarted: '立即开始',
    goToDashboard: '进入控制台',
    nav: {
      badge: 'Smew.ai',
      home: '首页',
      docs: '文档',
      models: '模型列表',
      howItWorks: '方案',
      features: '特性',
      compatibility: '兼容性',
      pricing: '价格',
      faq: '常见问题'
    },
    hero: {
      eyebrow: '给 OpenClaw 与 Codex 用户准备的 API 燃料站',
      titleLead: 'SmewAI：高性价比的大模型统一接入平台',
      titleAccent: '专为 OpenClaw / Codex 打造',
      description: '保留官方接口习惯，针对 OpenClaw 与 Codex 重度工作流做兼容、稳定性和成本优化，让长时间编码与自动化调用更顺。',
      secondaryCta: '查看接入文档'
    },
    stats: {
      subscriptionValue: '订阅套餐',
      modelsValue: 'GPT-5.4+',
      noBillShockValue: '账单可控',
      unifiedAccess: '订阅套餐更省心',
      routingLatency: '先进模型可直接用',
      opsVisibility: '放心跑 API，不怕账单失控'
    },
    heroSubtitle: '给编码工作流补充稳定燃料',
    heroDescription: '面向普通用户和小团队提供订阅型 API 服务，稳定、便宜、低延迟，可放心使用 GPT-5.4 等先进模型。',
    tags: {
      subscriptionToApi: '订阅套餐，放心调用',
      stickySession: '多账号池切换',
      realtimeBilling: '账单透明可控',
      alwaysOn: '永不熄火，24/7 帮你工作'
    },
    preview: {
      badge: 'Fuel Console',
      title: '给普通用户和小团队的订阅型 API 套餐',
      live: 'Live',
      panelTitle: '订阅安心感',
      panelStatus: '稳定',
      configTitle: '策略配置',
      configDescription: '订阅后即可安心跑 API，支持 GPT-5.4 等先进模型。',
      pills: {
        subscription: '订阅型套餐',
        billing: '账单透明可控',
        models: 'GPT-5.4 等先进模型'
      },
      cards: {
        failover: {
          title: '放心用，不怕中断',
          description: '多账号池与智能切换显著降低限流和中断概率，长期使用更稳。',
          caption: '稳定性更强'
        },
        billing: {
          title: '放心开，不怕账单失控',
          description: '实时查看请求量、耗时、配额和费用走势，普通用户和小团队都更容易控预算。',
          caption: '订阅更安心'
        }
      },
      footerTitle: '重点不是更复杂，而是更省心',
      footerDescription: '你买的是一套适合日常开发与小团队协作的订阅型 API 方案，不是一个需要天天盯着成本和可用性的实验入口。'
    },
    positioning: {
      badge: '为什么选择我们',
      title: '龙虾需要最先进的模型，才能发挥它的最大优势',
      description: '面向 OpenClaw 与 Codex 重度用户的高价值、可负担订阅平台。OpenClaw（龙虾）🦞 不只是编码——更是数字员工，解放生产力，24/7 帮你工作。让你无需 token 焦虑，大额度订阅套餐满足重度调用需求。我们稳定接入先进模型，让你专注创造、少盯账单。',
      highlights: [
        { icon: 'bolt', text: '数字员工 24/7' },
        { icon: 'database', text: '大额度免焦虑' },
        { icon: 'chart', text: '专注创造' }
      ]
    },
    docsSection: {
      badge: '文档中心',
      docCenterTitle: 'Smew 使用指南',
      docCenterSubtitle: '学习如何使用 Smew AI 编程助手，提高开发效率。',
      title: '常用接入文档独立成页',
      description: '把 Codex、OpenClaw、Claude Code、OpenCode 和 GPT Image 2 的常用配置整理成单独文档页，第一次接入也能快速照着配。',
      openFullDocs: '打开完整文档',
      directoryTitle: '页面目录',
      directoryQuickStart: '快速开始',
      directoryConfig: '配置说明',
      directoryUsage: '使用示例',
      directoryResources: '相关资源',
      readyBadge: '可直接照抄',
      copy: '复制',
      copied: '已复制',
      copiedToast: '代码片段已复制',
      readMore: '查看更多说明',
      resources: {
        createKey: '先在控制台创建或复制你的 API Key。',
        gateway: '将网关地址设置为 {baseUrl}，保持现有工作流尽量少改。',
        compatibility: 'Codex 推荐保持 OpenAI provider + responses wire API 配置。',
        openaiCompatible: 'OpenClaw 场景优先使用 OpenAI 兼容模式接入。',
        pickModel: '默认可先用 gpt-5.4，后续再按场景切换模型。',
        fullWalkthrough: '如果需要完整安装、升级和排错流程，可继续查看完整文档。',
        workspaceSettings: '你可以把变量写进全局环境变量，或写进工作区级 settings.json。',
        usageView: '接入后可以回到控制台查看请求量、额度和成本走势。',
        schema: '建议保留官方 schema，方便编辑器提示和配置校验。',
        disableStorage: '对自动化工作流建议关闭 store，避免不必要的响应存储。',
        openclawWebsite: 'openclaw 官网：查看 OpenClaw 的服务与详细说明。'
      },
      guides: {
        codex: {
          eyebrow: 'Codex CLI',
          title: 'Codex',
          description: '面向 Codex CLI 的标准接入文档与命令示例。',
          sections: {
            oneClickInstall: {
              title: '手动安装',
              description: '通过 npm 或 brew 安装 OpenAI Codex CLI 工具。'
            },
            configEdit: {
              title: '配置说明',
              description: 'Codex 需要在系统目录创建 `.codex` 文件夹并放置配置文件，路径为 `~/.codex/config.toml`。'
            },
            auth: {
              title: '鉴权配置',
              description: '将 API Key 写入 `~/.codex/auth.json`。配置文件位置：macOS/Linux: `~/.codex/`，Windows: `%USERPROFILE%\\.codex\\`。'
            },
            apiKey: {
              title: '快捷获取 API Key',
              description: '可直接前往 Smew 后台的「配置/keys」页面进行密钥创建与管理。',
              button: '立即获取 Smew 的使用密钥'
            },
            usageHelp: {
              title: '查看帮助信息',
              description: '查看命令帮助信息。'
            },
            usageEdit: {
              title: '编辑文件',
              description: '编辑指定文件。'
            },
            usageAnalyze: {
              title: '分析代码',
              description: '分析项目代码目录。'
            },
            usageCommit: {
              title: '生成提交信息',
              description: '自动分析代码变更并生成提交信息。'
            },
            usageRefactor: {
              title: '代码重构',
              description: '按指定设计模式进行重构。'
            },
            resources: {
              title: '相关资源',
              description: '第一次接入时，先把网关和 Key 配好，再开始跑真实任务。'
            }
          }
        },
        openclaw: {
          eyebrow: 'OpenClaw',
          title: 'OpenClaw',
          description: '面向 OpenClaw 的接入文档与命令示例。',
          sections: {
            oneClickInstall: {
              title: '一键安装',
              description: '通过 npm 或 shell 命令安装 OpenClaw。'
            },
            runWizard: {
              title: '运行向导',
              description: '运行 OpenClaw 引导向导。'
            },
            configEdit: {
              title: '编辑 openclaw.json 配置文件',
              description: 'OpenClaw 通过 json 文件完成配置。'
            },
            configModels: {
              title: '修改 OpenClaw 配置文件 agent 以下的 models 部分',
              description: '在配置文件中配置鉴权与模型。'
            },
            gatewayInstall: {
              title: '安装 OpenClaw 网关',
              description: '安装 OpenClaw Gateway 服务。'
            },
            gatewayStart: {
              title: '完成配置后，启动 OpenClaw 服务',
              description: '配置完成后启动 OpenClaw 服务。'
            },
            apiKey: {
              title: '快捷获取 API Key',
              description: '可直接前往 Smew 后台的「配置/keys」页面进行密钥创建与管理。',
              button: '立即获取 Smew 的使用密钥'
            },
            usageStart: {
              title: '启动 OpenClaw 网关',
              description: '启动 OpenClaw Gateway 服务。'
            },
            usageStop: {
              title: '停止 OpenClaw 网关',
              description: '停止 OpenClaw Gateway 服务。'
            },
            usageInstall: {
              title: '安装 OpenClaw 网关',
              description: '安装 OpenClaw Gateway 服务。'
            },
            resources: {
              title: '相关资源',
              description: '查看 OpenClaw 的服务与详细说明。'
            }
          }
        },
        claudeCode: {
          eyebrow: 'Claude Code',
          title: 'Claude Code',
          description: '面向 Claude Code 的配置说明与基础使用示例。',
          sections: {
            quickstart: {
              title: '快速开始',
              description: '先安装 Claude Code，再按下方方式写入配置文件。'
            },
            install: {
              title: '安装 Claude Code',
              description: '通过 npm 安装 Claude Code CLI。'
            },
            launch: {
              title: '启动 Claude Code',
              description: '在项目目录或终端中直接启动 Claude Code。'
            },
            configEdit: {
              title: '配置说明',
              description: 'Claude Code 可通过 settings.json 指向 Smew 网关，并将默认模型映射到 OpenAI 模型。'
            },
            configJson: {
              title: '编辑 Claude Code 配置文件',
              description: '配置文件路径：~/.claude/settings.json。修改后重新打开 Claude Code 以确保配置生效。'
            },
            configWrite: {
              title: '写入 settings.json 配置',
              description: '将以下内容写入 ~/.claude/settings.json。'
            },
            apiKey: {
              title: '快捷获取 API Key',
              description: '可直接前往 Smew 后台的「配置/keys」页面进行密钥创建与管理。',
              button: '立即获取 Smew 的使用密钥'
            },
            usageExample: {
              title: '启动交互会话',
              description: '按当前配置直接启动 Claude Code。'
            },
            resources: {
              title: '相关资源',
              description: '完成基础配置后，再按团队习惯决定放在全局还是项目级。'
            }
          }
        },
        opencode: {
          eyebrow: 'OpenCode',
          title: 'OpenCode',
          description: '面向 OpenCode 的安装、配置与连接示例。',
          sections: {
            quickstart: {
              title: '快速开始',
              description: '先安装 OpenCode，再准备配置文件。'
            },
            install: {
              title: '安装 OpenCode',
              description: '通过官方安装脚本或 npm 安装 OpenCode。'
            },
            launch: {
              title: '启动 OpenCode',
              description: '在终端中启动 OpenCode 客户端。'
            },
            configEdit: {
              title: '配置说明',
              description: 'OpenCode 使用 JSON 配置文件声明 provider、模型与 agent 选项。'
            },
            configJson: {
              title: '编辑 OpenCode 配置文件',
              description: '配置文件路径：~/.config/opencode/opencode.json（或 opencode.jsonc）。如果文件不存在，请先手动创建。'
            },
            configWrite: {
              title: '写入 opencode.json 配置',
              description: '将以下内容写入配置文件。'
            },
            apiKey: {
              title: '快捷获取 API Key',
              description: '可直接前往 Smew 后台的「配置/keys」页面进行密钥创建与管理。',
              button: '立即获取 Smew 的使用密钥'
            },
            usageStart: {
              title: '启动客户端',
              description: '直接进入 OpenCode 交互界面。'
            },
            usageConnect: {
              title: '连接配置向导',
              description: '在 OpenCode 内使用 /connect 绑定或调整 provider 配置。'
            },
            resources: {
              title: '相关资源',
              description: '保留 schema 并关闭不必要的存储配置，后续维护会更轻松。'
            }
          }
        },
        gptImage2: {
          eyebrow: 'OpenAI Images',
          title: 'GPT Image 2',
          description: '通过 OpenAI 兼容图片端点调用 gpt-image-2，覆盖异步生成、任务查询、编辑、参数和常见错误。',
          sections: {
            quickstart: {
              title: '接入前确认',
              description: 'GPT Image 2 是图片模型，应走标准图片端点；当前生成接口为异步提交，不走聊天自动改写。',
              bullets: {
                openaiGroup: 'API Key 所属分组必须是 OpenAI 分组。',
                permission: '分组需要开启图片生成权限，否则会返回 403 permission_error。',
                standardPath: '主要使用 /v1/images/generations、/v1/tasks/:task_id 和 /v1/images/edits 这几个端点。',
                asyncFlow: '提交生图后会先拿到 task_id，再轮询 /v1/tasks/:task_id 获取最终图片地址。'
              }
            },
            generationEndpoint: {
              title: '生成图片：POST /v1/images/generations',
              description: '用 JSON body 提交生成任务。建议显式传 model: gpt-image-2；成功后会异步返回 task_id，而不是直接返回图片内容。'
            },
            taskStatus: {
              title: '查询任务：GET /v1/tasks/:task_id',
              description: '拿到 task_id 后轮询任务状态。completed 时从 data.result.images[0].url[0] 读取最终图片地址。'
            },
            editMultipart: {
              title: '编辑图片：multipart/form-data',
              description: '主端点为 POST /v1/images/edits。上传文件时使用 image 字段，mask 为可选字段。'
            },
            editJson: {
              title: '编辑图片：JSON 图片 URL',
              description: '如果图片已经有可访问 URL，也可以用 JSON body 的 images 数组传入 image_url。'
            },
            parameters: {
              title: '参数说明',
              description: '当前网关会解析并转发以下图片参数，用于请求、计费和用量展示。',
              bullets: {
                common: '通用参数：model、prompt、size、n、stream、response_format。',
                output: '输出控制：quality、background、output_format、output_compression。',
                edit: '编辑相关：images、image、mask、input_fidelity。',
                other: '其他参数：moderation、style、partial_images。',
                size: '尺寸档位：1024x1024 归为 1K；1536x1024、1024x1536、2048x2048 等归为 2K；3840x2160、2160x3840 归为 4K。'
              }
            },
            errors: {
              title: '错误说明',
              description: '图片端点会返回稳定的 OpenAI 风格错误，便于客户端明确判断。',
              bullets: {
                notFound: '非 OpenAI 分组访问图片端点：404 not_found_error。',
                permission: '分组未开启图片生成：403 permission_error。',
                invalidModel: '非图片模型走图片端点：400 invalid_request_error。',
                invalidBody: '空 body 或非法 JSON：400 invalid_request_error。'
              }
            },
            resources: {
              title: '注意事项',
              description: '这条链路按图片业务独立处理，和普通文本请求保持分离，同时沿用现有账号路由与转发逻辑。',
              bullets: {
                imagesPath: 'gpt-image-2 应走 /v1/images/*，不要把它当作普通聊天模型调用。',
                noChatBridge: '不会把 /v1/chat/completions 自动兼容为生图接口，走错路径会返回明确错误。',
                aliases: '/images/generations 和 /images/edits 只是兼容别名，文档和新接入请优先使用带 /v1 的标准路径。',
                tasks: 'task_id 本地只用于识别该任务走的是哪条上游路由；真正的任务状态和结果由上游任务接口返回。'
              }
            }
          }
        }
      }
    },
    problemCards: {
      cost: {
        title: '官方订阅越跑越贵',
        description: 'Codex / OpenClaw 一旦进入高频调用，长期成本会迅速堆高，而且缺少更灵活的价格方案。'
      },
      ops: {
        title: '单账号不够稳',
        description: '账号被限、上游波动或偶发中断，会直接卡住重度编码工作流。'
      },
      control: {
        title: '额度和花费看不清',
        description: '没有统一的请求量、耗时、配额和成本趋势视图，团队很难做预算与限额。'
      }
    },
    // 用户痛点区块
    painPoints: {
      title: '你是否也遇到这些问题？',
      items: {
        expensive: {
          title: '订阅费用高',
          desc: '每个 AI 服务都要单独订阅，每月支出越来越多'
        },
        complex: {
          title: '多账号难管理',
          desc: '不同平台的账号、密钥分散各处，管理起来很麻烦'
        },
        unstable: {
          title: '服务不稳定',
          desc: '单一账号容易触发限制，影响正常使用'
        },
        noControl: {
          title: '用量无法控制',
          desc: '不知道钱花在哪了，也无法限制团队成员的使用'
        }
      }
    },
    // 解决方案区块
    solutions: {
      title: '我们帮你解决',
      subtitle: '简单三步，开始省心使用 AI'
    },
    workflow: {
      badge: '工作流改造',
      title: '保留官方接口习惯，把稳定性和性价比加进来',
      pill: 'OpenAI / Codex Compatible',
      steps: {
        connect: {
          title: '尽量少改现有调用方式',
          description: '针对 OpenClaw 与 Codex 重度工作流优化，保持官方接口习惯和开发体验，减少迁移成本。'
        },
        route: {
          title: '用账号池和智能切换换稳定性',
          description: '多账号池、智能切换与请求链路优化一起工作，降低限流和中断概率，并保持开发场景低延迟。'
        },
        observe: {
          title: '把额度、请求和花费都纳入面板',
          description: '提供大额度套餐和实时可视化视图，持续重度调用时也能看清配额、耗时与成本。'
        }
      },
      highlights: {
        compat: {
          title: '开发体验不走样',
          description: '保持官方接口形状和开发习惯，适合已经围绕 Codex / OpenClaw 建好的工作流。'
        },
        billing: {
          title: '重度使用更划算',
          description: '通过精细化路由与资源调度，把长期高强度调用的单次成本压得更合理。'
        }
      }
    },
    features: {
      unifiedGateway: '一键接入',
      unifiedGatewayDesc: '获取一个 API 密钥，即可调用所有已接入的 AI 模型，无需分别申请。',
      multiAccount: '稳定可靠',
      multiAccountDesc: '智能调度多个上游账号，自动切换和负载均衡，告别频繁报错。',
      balanceQuota: '用多少付多少',
      balanceQuotaDesc: '按实际使用量计费，支持设置配额上限，团队用量一目了然。'
    },
    featuresV2: {
      badge: '平台特点',
      title: '围绕 OpenClaw 与 Codex 用户最在意的六件事来做',
      description: '兼容、稳定、额度、价格、延迟和可视化，决定了一个 API 平台能不能真正承接重度开发工作流。',
      items: {
        compatible: {
          title: '深度 Codex 兼容',
          description: '针对 OpenClaw 与 Codex 工作流优化，保留官方接口习惯与开发体验。'
        },
        stable: {
          title: '稳定高可用',
          description: '通过多账号池与智能切换，显著降低限流与中断概率。'
        },
        quota: {
          title: '大额度订阅套餐',
          description: '提供面向高并发与长时开发场景的高配额 Codex 套餐，满足持续重度调用需求。'
        },
        affordable: {
          title: '比官方更划算',
          description: '通过精细化路由与资源调度，提供更具性价比的 Codex 价格方案，降低长期成本。'
        },
        latency: {
          title: '开发场景低延迟',
          description: '连接池与请求链路优化降低平均响应时间，保持编码、调试、迭代过程流畅。'
        },
        visibility: {
          title: '订阅与成本可视化',
          description: '实时查看请求量、耗时、配额与成本趋势，便于团队预算控制。'
        }
      }
    },
    // 优势对比
    comparison: {
      title: '为什么更适合重度工作流？',
      headers: {
        feature: '对比项',
        official: '官方直连',
        us: '本平台'
      },
      items: {
        pricing: {
          feature: '订阅方式',
          official: '成本更高，长期用更肉疼',
          us: '套餐更省心，长期更划算'
        },
        models: {
          feature: '先进模型',
          official: '可用但成本与体验波动更大',
          us: '可稳定使用 GPT-5.4 等先进模型'
        },
        management: {
          feature: '订阅额度',
          official: '高强度开发时更容易受限',
          us: '提供适合持续调用的大额度套餐'
        },
        stability: {
          feature: '服务稳定性',
          official: '单账号更容易触发限制',
          us: '多账号池 + 智能切换'
        },
        control: {
          feature: '账单安心感',
          official: '预算波动更大，数据分散',
          us: '请求、配额、耗时和成本统一可视化'
        }
      }
    },
    comparisonV2: {
      badge: '价值对比',
      title: '官方直连适合偶尔使用，重度编码工作流更需要稳定、额度和价格优势',
      description: '一旦进入长时间开发、自动化执行或团队共享阶段，更稳的账号池、更大的套餐额度和更清晰的成本视图会比“能不能调用”更重要。'
    },
    compatibility: {
      badge: '接入方式',
      title: '尽量不改变 OpenClaw / Codex 的现有习惯',
      description: '保留 OpenAI 兼容接口形状，让用户一眼判断能不能快速接进自己已有的编码工作流。',
      codeStatus: '可直接试',
      items: {
        api: {
          title: '保持官方接口习惯',
          description: '很多场景只需要替换网关地址和 Key，而不是重写一套调用逻辑。'
        },
        models: {
          title: '面向 Codex / OpenClaw 工作流优化',
          description: '围绕高频编码、调试和自动化任务做路由与稳定性设计。'
        },
        observability: {
          title: '请求级耗时与成本可追踪',
          description: '失败、延迟、用量与成本趋势都能统一查看，方便团队长期管理。'
        }
      }
    },
    providers: {
      title: '已支持的 AI 模型',
      description: '一个 API，多种选择',
      supported: '已支持',
      soon: '即将推出',
      claude: 'Claude',
      gemini: 'Gemini',
      antigravity: 'Antigravity',
      more: '更多'
    },
    testimonials: {
      badge: '用户评价',
      title: '开发者怎么说',
      items: [
        {
          quote: '订阅后不用天天盯着账单，编码时更专注。大额套餐配合多账号池，长时间调用也不怕。',
          name: '独立开发者',
          role: 'OpenClaw 重度用户'
        },
        {
          quote: '接上就能用，接口习惯和官方一致。GPT-5.4 等先进模型稳定可用，成本比直连更可控。',
          name: '小团队负责人',
          role: 'Codex 工作流'
        }
      ]
    },
    faq: {
      badge: 'FAQ',
      title: '常见问题与快速解答',
      description: '把接入、计费、兼容性和售后这些最常被问到的问题，集中放在这里。',
      items: [
        {
          question: '支持哪些模型？',
          answer: '目前支持 OpenAI Codex gpt-5.4、gpt-5.3-codex、gpt-5.2-codex、gpt-5.2、gpt-5.1-codex-max、gpt-5.1-codex、gpt-5.1-codex-mini，后续将持续增加更多模型的支持。'
        },
        {
          question: '如何开始接入？',
          answer: '注册并登录后，在控制台创建 API Key，然后按文档中的示例请求即可完成接入。'
        },
        {
          question: '支持在哪些工具中使用？',
          answer: '支持在主流 AI 编码与开发工具中使用，包括 Codex CLI、Codex App、Codex 插件、Claude Code、OpenCode 和 OpenClaw。只要工具支持兼容的 API Key 或兼容 OpenAI/Codex 的接入方式，通常都可以直接配置使用。'
        },
        {
          question: '是否支持订阅计费与实时扣费？',
          answer: '支持包月订阅计费。系统按请求与模型实际消耗在账单页面实时展示使用明细。'
        },
        {
          question: '套餐可以升级或切换吗？',
          answer: '可以。你可以在订阅页面随时升级、降级或更换套餐，系统会按剩余周期结算。'
        },
        {
          question: '与官方 Codex 有什么不同？',
          answer: '体验完全一致，但优势明显：零封号风险、智能调度无限速困扰、更多的使用额度、稳定的质量以及享受官方特有折扣价格，专属技术支持，Business 级别模型支持，API 格式完全兼容。为独立开发者及企业量身打造的专业解决方案。'
        },
        {
          question: '服务性能与官方相比如何？',
          answer: '我们的服务提供与官方 Codex 相同的性能、模型质量以及数据格式。通过动态资源池和负载均衡策略，我们提供更好的稳定性和零速率限制。当一个账户达到限制时，立即切换到另一个，确保连续使用无需等待。'
        },
        {
          question: '售后如何保障？',
          answer: '我们提供 7x24 小时技术支持，确保在任何时间都能快速响应你的问题。无论是接入问题、使用疑问还是账单咨询，我们都为您提供专业的解决方案。我们的目标是让你无后顾之忧地使用 Codex 服务，专注 Vibe Coding。'
        }
      ]
    },
    codexInstall: {
      badge: 'Codex 接入',
      title: '一条命令把 Smew 配成 Codex Provider',
      description: '这一版先面向 macOS 和 Linux。请先到 /keys 创建 API Key，再运行一键命令，把 Smew provider 写入本地 Codex 配置并验证网关。',
      macLabel: 'macOS / Linux',
      macDescription: '请在已经安装 Codex 的终端里运行。如果当前环境没有 OPENAI_API_KEY，脚本会提示你交互输入。',
      manualLabel: '手动配置',
      viewScript: '查看脚本',
      getKey: '创建 API Key',
      highlights: [
        '沿用 OPENAI_API_KEY 这套现成约定',
        '修改前自动备份 ~/.codex/config.toml',
        '安装后自动拉模型列表并验证网关'
      ]
    },
    // CTA 区块
    cta: {
      badge: '开始接入',
      title: '给 OpenClaw 与 Codex 接上更耐跑的 API 燃料',
      description: '如果你已经在重度使用 Codex 或 OpenClaw，现在缺的通常不是更多入口，而是一个更稳、更便宜、更容易控成本的入口。',
      button: '免费注册'
    },
    contact: {
      title: '联系方式与下一步',
      subtitle: '如果你想评估接入方案，可以直接联系我们。',
      wechatLabel: '微信联系',
      emailLabel: '邮件联系',
      xLabel: 'X(Twitter)'
    },
    footer: {
      allRightsReserved: '保留所有权利。'
    }
  },

  // Key Usage Query Page
  keyUsage: {
    title: 'API Key 用量查询',
    subtitle: '输入您的 API Key 以查看实时消费金额与使用状态',
    placeholder: 'sk-ant-mirror-xxxxxxxxxxxx',
    query: '查询',
    querying: '查询中...',
    privacyNote: '您的 Key 仅在浏览器本地处理，不会被存储',
    dateRange: '统计范围:',
    dateRangeToday: '今日',
    dateRange7d: '7 天',
    dateRange30d: '30 天',
    dateRange90d: '90 天',
    dateRangeCustom: '自定义',
    apply: '应用',
    used: '已使用',
    detailInfo: '详细信息',
    tokenStats: 'Token 统计',
    dailyDetail: '按日明细',
    modelStats: '模型用量统计',
    // Table headers
    date: '日期',
    model: '模型',
    requests: '请求数',
    inputTokens: '输入 Tokens',
    outputTokens: '输出 Tokens',
    cacheCreationTokens: '缓存创建',
    cacheReadTokens: '缓存读取',
    cacheWriteTokens: '缓存写入',
    totalTokens: '总 Tokens',
    cost: '费用',
    // Status
    quotaMode: 'Key 限额模式',
    walletBalance: '钱包余额',
    // Ring card titles
    totalQuota: '总额度',
    limit5h: '5 小时限额',
    limitDaily: '日限额',
    limit7d: '7 天限额',
    limitWeekly: '周限额',
    limitMonthly: '月限额',
    // Detail rows
    remainingQuota: '剩余额度',
    expiresAt: '过期时间',
    todayExpires: '(今日到期)',
    daysLeft: '({days} 天)',
    usedQuota: '已用额度',
    resetNow: '即将重置',
    subscriptionType: '订阅类型',
    subscriptionExpires: '订阅到期',
    // Usage stat cells
    todayRequests: '今日请求',
    todayInputTokens: '今日输入',
    todayOutputTokens: '今日输出',
    todayTokens: '今日 Tokens',
    todayCacheCreation: '今日缓存创建',
    todayCacheRead: '今日缓存读取',
    todayCost: '今日费用',
    rpmTpm: 'RPM / TPM',
    totalRequests: '累计请求',
    totalInputTokens: '累计输入',
    totalOutputTokens: '累计输出',
    totalTokensLabel: '累计 Tokens',
    totalCacheCreation: '累计缓存创建',
    totalCacheRead: '累计缓存读取',
    totalCost: '累计费用',
    avgDuration: '平均耗时',
    // Messages
    enterApiKey: '请输入 API Key',
    querySuccess: '查询成功',
    queryFailed: '查询失败',
    queryFailedRetry: '查询失败，请稍后重试',
    noDailyUsage: '暂无按日用量数据',
  },

  // Setup Wizard
  setup: {
    title: 'Sub2API 安装向导',
    description: '配置您的 Sub2API 实例',
    database: {
      title: '数据库配置',
      description: '连接到您的 PostgreSQL 数据库',
      host: '主机',
      port: '端口',
      username: '用户名',
      password: '密码',
      databaseName: '数据库名称',
      sslMode: 'SSL 模式',
      passwordPlaceholder: '密码',
      ssl: {
        disable: '禁用',
        require: '要求',
        verifyCa: '验证 CA',
        verifyFull: '完全验证'
      }
    },
    redis: {
      title: 'Redis 配置',
      description: '连接到您的 Redis 服务器',
      host: '主机',
      port: '端口',
      username: '用户名（可选）',
      password: '密码（可选）',
      database: '数据库',
      usernamePlaceholder: '默认用户留空',
      passwordPlaceholder: '密码',
      enableTls: '启用 TLS',
      enableTlsHint: '连接 Redis 时使用 TLS（公共 CA 证书）'
    },
    admin: {
      title: '管理员账户',
      description: '创建您的管理员账户',
      email: '邮箱',
      password: '密码',
      confirmPassword: '确认密码',
      passwordPlaceholder: '至少 8 个字符',
      confirmPasswordPlaceholder: '确认密码',
      passwordMismatch: '密码不匹配'
    },
    ready: {
      title: '准备安装',
      description: '检查您的配置并完成安装',
      database: '数据库',
      redis: 'Redis',
      adminEmail: '管理员邮箱'
    },
    status: {
      testing: '测试中...',
      success: '连接成功',
      testConnection: '测试连接',
      installing: '安装中...',
      completeInstallation: '完成安装',
      completed: '安装完成！',
      redirecting: '正在跳转到登录页面...',
      restarting: '服务正在重启，请稍候...',
      timeout: '服务重启时间超出预期，请手动刷新页面。'
    }
  },

  // Common
}

