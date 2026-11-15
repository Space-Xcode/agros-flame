import Image from 'next/image'
import Link from 'next/link'
import Aqros3DBackground from '@/components/aqros-3d-background'

type Page = 'home' | 'studio' | 'projects' | 'pricing' | 'journal'

const nav: { label: string; href: string; id: Page }[] = [
  { label: 'Studio', href: '/studio', id: 'studio' },
  { label: 'Projects', href: '/project', id: 'projects' },
  { label: 'Journal', href: '/journal', id: 'journal' },
  { label: 'Pricing', href: '/pricing', id: 'pricing' },
]

const projects = [
  { slug: 'redshift', name: 'Redshift®', type: 'Automotive / EV', year: '2025', tone: 'redshift', mark: 'R', image: '/arqos/assets/Rxi4zOFUA9BQ9K9SaCkbvons.width_1754_height_1578.png' },
  { slug: 'trendloop', name: 'TrendLoop', type: 'Commerce / Culture', year: '2025', tone: 'trendloop', mark: '↗', image: '/arqos/assets/VgXT9IploSRwV8MAivm5oA1Rq7M.width_890_height_1082.png' },
  { slug: 'luma-skin', name: 'Lüma Skin', type: 'Beauty / Technology', year: '2025', tone: 'luma', mark: 'L', image: '/arqos/assets/K0iLH1vRaZBbdw2xPqrjHhmA50A.width_1344_height_1176.png' },
  { slug: 'fabrica', name: 'Fabrica', type: 'Fashion / Digital', year: '2024', tone: 'fabrica', mark: 'F', image: '/arqos/assets/C6MefHZjn1GFq3zmR884wfY7c.width_1200_height_1500.webp' },
  { slug: 'echomind', name: 'EchoMind', type: 'AI / Digital Product', year: '2025', tone: 'echomind', mark: 'E', image: '/arqos/assets/3CbhhAxpyloBFWG1B0WHGabJic.width_2158_height_2596.webp' },
  { slug: 'aeris', name: 'Aeris', type: 'Digital Product / Technology', year: '2025', tone: 'aeris', mark: 'A', image: '/arqos/assets/pWbxkbBjJOhCtF6PMWMgqb91Ac.width_1080_height_1350.webp' },
]

const articles = [
  { slug: 'the-future-of-branding-in-an-ai-first-world', category: 'Design Futures', title: 'The Future of Branding in an AI-First World', date: '12 June 2025', image: '/arqos/assets/VgXT9IploSRwV8MAivm5oA1Rq7M.width_890_height_1082.png' },
  { slug: 'why-designers-should-think-like-strategists', category: 'Case Studies', title: 'Why Designers Should Think Like Strategists', date: '04 June 2025', image: '/arqos/assets/MZysN06978sESBJJjwELC1RcXw.width_1336_height_1674.png' },
  { slug: 'inside-our-ai-enhanced-design-stack', category: 'Workflow & Process', title: 'Inside Our AI-Enhanced Design Stack', date: '24 May 2025', image: '/arqos/assets/25mcdpj6GMk5TSq8ugRfSf6AkhQ.width_1064_height_1448.png' },
  { slug: 'designing-for-deep-space-how-we-built-a-satellite-command-ui', category: 'Case Studies', title: 'Designing for Deep Space: How We Built a Satellite Command UI', date: '01 May 2025', image: '/arqos/assets/8h3y3uTdE14phTSYeS9ZEQdNoI.width_1088_height_1438.png' },
  { slug: 'framer-vs-webflow-what-we-use-and-why', category: 'Workflow & Process', title: 'Framer vs Webflow: What We Use and Why', date: '', image: '/arqos/assets/Gnwk8plRt9msVko7VBhBtXbyp4.width_1306_height_1182.png' },
  { slug: 'how-we-build-adaptive-brand-systems-with-ai', category: 'Design Futures', title: 'How We Build Adaptive Brand Systems with AI', date: '', image: '/arqos/assets/BOHZzqi3UO6xUpG9tgWcqzOfU.width_736_height_977.jpg' },
]

function Header({ current }: { current: Page }) {
  return <header className="site-header"><Link className="wordmark" href="/" aria-label="Arqos Studio home">arqos<span>®</span></Link><nav aria-label="Main navigation">{nav.map((item) => <Link key={item.id} aria-current={current === item.id ? 'page' : undefined} href={item.href}>{item.label}</Link>)}</nav><a className="header-cta" href="mailto:hello@arqos.studio">Let&apos;s talk <span>↗</span></a></header>
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span className="eyebrow">HAVE A GOOD ONE IN MIND?</span>
        <a className="footer-link" href="mailto:hello@arqos.studio">Let&apos;s make it matter <span>↗</span></a>
      </div>
      <div className="footer-bottom">
        <Link className="wordmark" href="/">arqos<span>®</span></Link>
        <span>Independent by design. Intelligent by nature.</span>
        <span>© 2025 ARQOS STUDIO</span>
        <nav className="footer-legal" aria-label="Legal">
          <a href="/imported-pages/privacy-policy.html">Privacy</a>
          <a href="/imported-pages/term-of-service.html">Terms</a>
        </nav>
      </div>
    </footer>
  )
}

function Home() {
  return <><section className="hero home-hero"><div className="hero-copy"><p className="eyebrow"><i /> INDEPENDENT DIGITAL PRODUCT STUDIO</p><h1>Made for what&apos;s <span>next.</span></h1><p className="hero-desc">We turn ambitious ideas into distinctive digital experiences. Human vision, intelligently amplified.</p><div className="hero-actions"><Link className="button button-dark" href="/project">Explore our work <span>↗</span></Link><Link className="text-link" href="/studio">Meet the studio <span>↗</span></Link></div></div><div className="hero-art" aria-label="Abstract orange and cream studio artwork" role="img"><div className="art-label">FIG. 01 — A NEW KIND OF STUDIO</div><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core">A<span>®</span></div><div className="art-caption">AI-DRIVEN<br/>HUMAN-LED</div><div className="art-index">01 / 04</div></div><div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>DESIGN · TECHNOLOGY · CULTURE</span><span>EST. 2021 — EVERYWHERE</span></div></section><section className="intro section-wrap"><p className="eyebrow">/ ABOUT US</p><div><h2>Not just a studio.<br/><span>A design intelligence lab.</span></h2><p className="body-copy">We build clear, compelling brands and digital products for people moving the world forward. Our process pairs thoughtful craft with emerging technology to make better work, faster.</p><Link className="text-link" href="/studio">A little more about us <span>↗</span></Link></div></section><section className="work-section section-wrap"><div className="section-heading"><div><p className="eyebrow">/ SELECTED PROJECTS</p><h2>Proof, not promises.</h2></div><Link className="text-link" href="/project">All projects <span>↗</span></Link></div><ProjectGrid count={3}/></section><section className="services-band"><p className="eyebrow">/ WHAT WE DO</p><div className="service-head"><h2>Future-ready design,<br/><span>enhanced by AI.</span></h2><p>Strategy through launch, with intelligence at every step.</p></div><div className="service-list">{['Brand identity', 'AI product design', 'Web design & development', 'Creative automation'].map((x,i)=><div className="service-row" key={x}><span>0{i+1}</span><h3>{x}</h3><span>↗</span></div>)}</div></section></>
}

function ProjectGrid({ count = 4 }: { count?: number }) {
  return <div className="project-grid">{projects.slice(0,count).map((p,i)=><a className="project-card" href={`/imported-pages/projects/${p.slug}.html`} key={p.name}><div className={`project-art ${p.tone}`}><Image className="project-image" src={p.image} alt={`${p.name} project artwork`} fill sizes="(max-width: 700px) 88vw, 42vw"/><span className="project-number">0{i+1}</span><span className="project-mark" aria-hidden="true">{p.mark}</span><span className="project-card-label">{p.name.toUpperCase()} / BRAND SYSTEM</span></div><div className="project-meta"><div><h3>{p.name}</h3><span>{p.type}</span></div><span>{p.year} <b>↗</b></span></div></a>)}</div>
}

function Studio() {
  return <><section className="page-hero"><p className="eyebrow"><i/> THE PEOPLE BEHIND THE PIXELS</p><h1>A digital product studio.<br/><span>Powered by AI. Driven by design.</span></h1><p className="page-lede">We craft future-ready digital experiences with high precision, radical speed, and soul.</p></section><section className="studio-art"><div className="studio-art-orb">A<span>®</span></div><span className="studio-art-note">LESS PROCESS. MORE POSSIBILITY.<br/>BUILT TO MOVE YOU FORWARD.</span></section><section className="stats-row section-wrap">{[['17+', 'Digital products shipped'], ['8×', 'Faster go-to-market'], ['75%', 'Client retention'], ['08', 'Countries, 5 time zones']].map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</section><section className="manifesto"><p className="eyebrow">/ OUR POINT OF VIEW</p><h2>Technology can make things faster.<br/><span>People make them mean something.</span></h2><p>We use AI as a creative partner—not a shortcut. It frees our team to focus on the decisions that make a brand feel unmistakably itself.</p></section></>
}

function Projects() {
  return <><section className="page-hero compact page-hero-3d"><Aqros3DBackground variant="projects"/><p className="eyebrow"><i/> SELECTED WORK / 2024—25</p><h1>Good work.<br/><span>Good people.</span></h1><p className="page-lede">A few partnerships that made us think differently.</p></section><section className="work-section section-wrap project-page"><ProjectGrid/></section></>
}

function Pricing() {
  const plans = [['Starter', '$2,999', 'For early-stage founders ready to find their signal.', ['One active request', 'Updates every 48 hours', 'One brand or project']], ['Growth', '$5,999', 'For teams turning momentum into meaningful growth.', ['Two active requests', 'Updates every 48 hours', 'Two brands or projects']], ['Studio', '$9,999', 'For ambitious teams that need a creative partner in motion.', ['Unlimited requests', 'Priority collaboration', 'Multiple brands']]]
  return <><section className="page-hero compact"><p className="eyebrow"><i/> SIMPLE BY DESIGN</p><h1>Room to grow.<br/><span>Built around you.</span></h1><p className="page-lede">Flexible creative partnership for the next chapter of your business.</p></section><section className="pricing-grid section-wrap">{plans.map(([name,price,desc,features],i)=><article className={`price-card ${i===1?'featured':''}`} key={name as string}>{i===1&&<span className="popular">MOST POPULAR</span>}<p className="eyebrow">0{i+1} / MONTHLY PARTNERSHIP</p><h2>{name as string}</h2><p className="price-desc">{desc as string}</p><p className="price">{price as string}<span> / month</span></p><div className="feature-list">{(features as string[]).map(f=><p key={f}><span>+</span>{f}</p>)}<p><span>+</span>Pause or cancel anytime</p></div><a className="button button-dark" href="mailto:hello@arqos.studio">Book a call <span>↗</span></a></article>)}</section><p className="pricing-note">Not sure what you need? <a href="mailto:hello@arqos.studio">Let&apos;s figure it out together ↗</a></p></>
}

function Journal() {
  return <><section className="page-hero compact page-hero-3d"><Aqros3DBackground variant="journal"/><p className="eyebrow"><i/> NOTES FROM THE STUDIO</p><h1>Ideas in<br/><span>good company.</span></h1><p className="page-lede">Thinking out loud about design, technology, and what comes next.</p></section><section className="journal-list section-wrap">{articles.map((article,i)=><a className="journal-item" href={`/imported-pages/journal/${article.slug}.html`} key={article.slug}><div className="journal-visual"><Image className="journal-image" src={article.image} alt={`${article.title} article cover`} fill sizes="(max-width: 700px) 100px, 32vw"/><span>0{i+1}</span><strong aria-hidden="true">{['A—Z','THINK','AI +','∞','F/W','A—B'][i]}</strong></div><div className="journal-copy"><span className="eyebrow">{article.category}</span><h2>{article.title}</h2><span className="journal-date">{article.date ?? 'READ ARTICLE'} <b>↗</b></span></div></a>)}</section></>
}

export default function AqrosSite({ page = 'home' }: { page?: Page }) {
  return <main className="aqros-shell"><Header current={page}/>{page === 'home' && <Home/>}{page === 'studio' && <Studio/>}{page === 'projects' && <Projects/>}{page === 'pricing' && <Pricing/>}{page === 'journal' && <Journal/>}<Footer/></main>
}
