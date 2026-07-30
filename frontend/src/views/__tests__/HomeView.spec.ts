import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'

import HomeView from '../HomeView.vue'

const { appState, authState, checkAuth, fetchPublicSettings, routerPush } = vi.hoisted(() => ({
  appState: {
    cachedPublicSettings: null as Record<string, unknown> | null,
    siteName: 'Sub2API',
    siteLogo: '',
    apiBaseUrl: '',
    publicSettingsLoaded: true
  },
  authState: {
    isAuthenticated: false,
    isAdmin: false,
    user: null as Record<string, unknown> | null
  },
  checkAuth: vi.fn(),
  fetchPublicSettings: vi.fn(),
  routerPush: vi.fn()
}))

const messages: Record<string, string> = {
  'home.nav.badge': 'Smew.ai',
  'home.nav.home': 'Home',
  'home.nav.docs': 'Docs',
  'home.nav.models': 'Models',
  'home.nav.pricing': 'Pricing',
  'home.nav.faq': 'FAQ',
  'home.docs': 'Docs',
  'home.switchToLight': 'Switch to light',
  'home.switchToDark': 'Switch to dark',
  'home.dashboard': 'Dashboard',
  'home.login': 'Login',
  'home.getStarted': 'Get started',
  'home.goToDashboard': 'Go to dashboard',
  'home.hero.eyebrow': 'API fuel for OpenClaw and Codex',
  'home.hero.titleLead': 'SmewAI gateway',
  'home.hero.titleAccent': 'Built for OpenClaw / Codex',
  'home.hero.description': 'Stable, affordable access for coding workflows.',
  'home.hero.secondaryCta': 'Read the docs',
  'home.preview.badge': 'Fuel Console',
  'home.preview.title': 'Subscription API plans',
  'home.preview.configDescription': 'Run advanced models with confidence.',
  'home.preview.panelStatus': 'Stable',
  'home.positioning.badge': 'Why choose us',
  'home.positioning.title': 'Advanced models for digital workers',
  'home.positioning.description': 'High-value plans for heavy workflows.',
  'home.comparisonV2.badge': 'Value comparison',
  'home.comparisonV2.title': 'Built for heavy coding workflows',
  'home.comparisonV2.description': 'Stability, quota, and pricing matter.',
  'home.comparison.headers.feature': 'Comparison',
  'home.comparison.headers.official': 'Official',
  'home.comparison.headers.us': 'SmewAI',
  'home.testimonials.badge': 'Testimonials',
  'home.testimonials.title': 'What developers say',
  'home.faq.badge': 'FAQ',
  'home.faq.title': 'Common questions',
  'home.faq.description': 'Quick answers.',
  'home.codexInstall.badge': 'Codex setup',
  'home.codexInstall.title': 'Install Smew as a provider',
  'home.codexInstall.description': 'One-command setup.',
  'home.codexInstall.getKey': 'Create API key',
  'home.codexInstall.viewScript': 'View script',
  'home.codexInstall.macLabel': 'macOS / Linux',
  'home.codexInstall.macDescription': 'Run in a terminal.',
  'home.codexInstall.manualLabel': 'Manual config',
  'home.contact.title': 'Contact',
  'home.contact.subtitle': 'Talk to us.',
  'home.contact.wechatLabel': 'WeChat',
  'home.contact.emailLabel': 'Email',
  'home.contact.xLabel': 'X',
  'home.cta.badge': 'Start integrating',
  'home.cta.title': 'A longer-lasting API fuel line',
  'home.cta.description': 'Stable and affordable access.',
  'home.cta.button': 'Sign up free',
  'home.footer.allRightsReserved': 'All rights reserved.'
}

vi.mock('vue-i18n', async () => {
  const actual = await vi.importActual<typeof import('vue-i18n')>('vue-i18n')
  return {
    ...actual,
    useI18n: () => ({
      t: (key: string) => messages[key] ?? key
    })
  }
})

vi.mock('vue-router', async () => {
  const actual = await vi.importActual<typeof import('vue-router')>('vue-router')
  return {
    ...actual,
    useRoute: () => ({ path: '/home' }),
    useRouter: () => ({ push: routerPush })
  }
})

vi.mock('@/stores', () => ({
  useAppStore: () => ({
    ...appState,
    fetchPublicSettings,
    showSuccess: vi.fn(),
    showError: vi.fn()
  }),
  useAuthStore: () => ({
    ...authState,
    checkAuth,
    refreshUser: vi.fn()
  })
}))

function mountHome() {
  return mount(HomeView, {
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
        LocaleSwitcher: { template: '<div data-testid="locale-switcher" />' },
        Icon: { template: '<span data-testid="icon" />' },
        PayGoPanel: true,
        SubscriptionPurchaseDialog: true
      }
    }
  })
}

function findRouterLink(wrapper: ReturnType<typeof mountHome>, to: string, text?: string) {
  return wrapper.findAllComponents(RouterLinkStub).find((link) => {
    return link.props('to') === to && (!text || link.text().includes(text))
  })
}

describe('HomeView', () => {
  beforeEach(() => {
    appState.cachedPublicSettings = null
    appState.siteName = 'Sub2API'
    appState.siteLogo = ''
    appState.apiBaseUrl = ''
    appState.publicSettingsLoaded = true
    authState.isAuthenticated = false
    authState.isAdmin = false
    authState.user = null
    checkAuth.mockReset()
    fetchPublicSettings.mockReset()
    routerPush.mockReset()
    localStorage.clear()
    document.documentElement.classList.remove('dark')

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: false })
    })
  })

  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders the SmewAI homepage for anonymous users', () => {
    const wrapper = mountHome()

    expect(wrapper.text()).toContain('SmewAI gateway')
    expect(wrapper.text()).toContain('Built for OpenClaw / Codex')
    expect(wrapper.text()).toContain('Fuel Console')
    expect(wrapper.text()).toContain('Value comparison')
    expect(wrapper.text()).toContain('What developers say')
    expect(wrapper.text()).toContain('Common questions')
    expect(findRouterLink(wrapper, '/login', 'Get started')).toBeTruthy()
    expect(findRouterLink(wrapper, '/login', 'Login')).toBeTruthy()
    expect(checkAuth).toHaveBeenCalledOnce()

    wrapper.unmount()
  })

  it('routes authenticated users and administrators to the correct dashboard', () => {
    authState.isAuthenticated = true
    const userWrapper = mountHome()
    expect(findRouterLink(userWrapper, '/dashboard', 'Go to dashboard')).toBeTruthy()
    userWrapper.unmount()

    authState.isAdmin = true
    const adminWrapper = mountHome()
    expect(findRouterLink(adminWrapper, '/admin/dashboard', 'Go to dashboard')).toBeTruthy()
    expect(findRouterLink(adminWrapper, '/admin/dashboard', 'Dashboard')).toBeTruthy()
    adminWrapper.unmount()
  })

  it('shows configured branding and the Smew documentation links', () => {
    appState.cachedPublicSettings = {
      site_name: 'Acme Gateway',
      site_logo: '/brand.svg',
      site_subtitle: 'Unified intelligence platform',
      home_content: ''
    }

    const wrapper = mountHome()

    expect(wrapper.text()).toContain('Acme Gateway')
    expect(wrapper.text()).toContain('Unified intelligence platform')
    expect(wrapper.get('img').attributes('src')).toBe('/brand.svg')
    expect(wrapper.findAll('a[href="https://docs.smew.ai"]')).toHaveLength(3)
    wrapper.unmount()
  })

  it('keeps URL-based custom home content as a full-page iframe override', () => {
    appState.cachedPublicSettings = { home_content: 'https://example.com/custom-home' }
    const wrapper = mountHome()

    expect(wrapper.get('iframe').attributes('src')).toBe('https://example.com/custom-home')
    expect(wrapper.find('header').exists()).toBe(false)
    wrapper.unmount()
  })

  it('keeps HTML custom home content as a full-page override', () => {
    appState.cachedPublicSettings = {
      home_content: '<section id="custom-home">Custom landing page</section>'
    }
    const wrapper = mountHome()

    expect(wrapper.get('#custom-home').text()).toBe('Custom landing page')
    expect(wrapper.find('header').exists()).toBe(false)
    wrapper.unmount()
  })

  it('persists theme changes and updates the document theme class', async () => {
    const wrapper = mountHome()
    const toggle = wrapper.get('header button')

    await toggle.trigger('click')

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
    wrapper.unmount()
  })

  it('loads public settings when they are not already available', () => {
    appState.publicSettingsLoaded = false
    const wrapper = mountHome()

    expect(fetchPublicSettings).toHaveBeenCalledOnce()
    wrapper.unmount()
  })
})

