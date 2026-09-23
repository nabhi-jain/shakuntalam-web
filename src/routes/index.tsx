import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Building2, GraduationCap, HeartPulse, LineChart, Mail, ShieldCheck, Store } from "lucide-react";
import { type ReactNode } from "react";
import educationImage from "@/assets/education-family.jpg";
import educationHero from "@/assets/education-journey-hero.jpg";
import familyImage from "@/assets/indian-family.jpg";
import healthcareImage from "@/assets/healthcare-care.jpg";
import healthcareHero from "@/assets/healthcare-journey-hero.jpg";
import merchantImage from "@/assets/merchant-shop.jpg";
import merchantHero from "@/assets/merchant-journey-hero.jpg";
import logo from "@/assets/shakuntalam-logo-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shankuntalam Securities — Lending for Everyday India" },
      { name: "description", content: "Cashflow-visible education, healthcare and merchant lending designed around the real journeys of everyday India." },
      { property: "og:title", content: "Shankuntalam Securities — Lending for Everyday India" },
      { property: "og:description", content: "Short-term lending for education, healthcare and neighborhood businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="relative z-20 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="block w-[13.5rem] sm:w-[19rem]" aria-label="Shankuntalam Securities Private Limited home">
            <img src={logo} alt="Shankuntalam Securities Private Limited" width={1528} height={255} className="h-auto w-full" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Primary navigation">
            <a className="transition-colors hover:text-primary" href="#portfolio">Who we support</a>
            <a className="transition-colors hover:text-primary" href="#platform">How it works</a>
            <a className="transition-colors hover:text-primary" href="#risk">Our approach</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground">
            Connect <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 lg:min-h-[720px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-16">
          <div className="enter-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span className="size-2 rounded-full bg-accent" /> Built around everyday India
            </div>
            <h1 className="max-w-2xl text-balance font-display text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Lending for the <em className="font-normal text-primary">real journeys</em> of India.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              From education and healthcare to neighborhood businesses, we build short-term credit around visible, everyday cashflows.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#portfolio" className="inline-flex items-center gap-3 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground">
                See who we support <ArrowDownRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="enter-up-late grid h-[31rem] grid-cols-[1.08fr_0.92fr] grid-rows-2 gap-3 sm:h-[38rem] sm:gap-4 lg:h-[39rem]">
            <div className="row-span-2 overflow-hidden rounded-xl">
              <img src={educationHero} alt="A student leaving a coaching institution with her mother" width={1408} height={1200} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={healthcareHero} alt="A daughter accompanying her father after a healthcare consultation" width={1408} height={1200} className="h-full w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img src={merchantHero} alt="A shopkeeper opening his neighborhood store with a family member" width={1408} height={1200} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Who we support</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">Credit that starts with people, not paperwork.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Our selected portfolios connect lending to identifiable fee, billing and point-of-sale cashflows.</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <Portfolio image={educationImage} imageAlt="A student and her mother studying together" icon={<GraduationCap />} title="Education" text="No Cost EMI in collaboration with schools and coaching institutions, with cashflow visibility through fee-collection mechanisms." tag="Fee-linked collections" />
          <Portfolio image={healthcareImage} imageAlt="A family consulting a doctor" icon={<HeartPulse />} title="Healthcare" text="No Cost EMI loans in healthcare, structured in collaboration with institutions around identifiable billing flows." tag="Institution-led credit" />
          <Portfolio image={merchantImage} imageAlt="A merchant serving a customer in his shop" icon={<Store />} title="Merchant" text="Merchant loans with daily EMI collection and visibility on cashflow through point-of-sale systems." tag="Daily POS collections" />
        </div>
      </section>

      <section id="platform" className="bg-surface-dark text-surface-dark-foreground">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[30rem] overflow-hidden lg:min-h-[42rem]">
            <img src={familyImage} alt="An Indian family spending time together at home" loading="lazy" width={1200} height={1504} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-surface-dark/20" />
          </div>
          <div className="flex flex-col justify-center px-5 py-20 lg:px-16 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal">How it works</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight sm:text-6xl">A clearer view of how repayment happens.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-surface-dark-foreground/70">Technology supports the process quietly in the background, connecting credit to the cashflows already moving through institutions and local businesses.</p>
            <div className="mt-10 divide-y divide-surface-dark-foreground/15 border-y border-surface-dark-foreground/15">
              <FlowRow icon={<Building2 />} label="Partner institutions" detail="Schools, coaching and healthcare" />
              <FlowRow icon={<LineChart />} label="Visible cashflows" detail="Fee collection and POS data" />
              <FlowRow icon={<ShieldCheck />} label="Disciplined collections" detail="Structured, short-term repayment" />
            </div>
          </div>
        </div>
      </section>

      <section id="risk" className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Our approach</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight sm:text-6xl">Select portfolios. Short tenures. Visible collections.</h2>
          </div>
          <div className="border-l-4 border-accent bg-secondary p-8 sm:p-10">
            <p className="font-display text-3xl leading-snug">Historically low delinquency in the select portfolios.</p>
            <p className="mt-7 text-sm leading-7 text-muted-foreground">*Historical portfolio experience is not a guarantee of future performance. Lending terms are subject to underwriting and applicable conditions.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Institutional partnerships</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">Let’s build credit around cashflows you can see.</h2>
          </div>
          <a href="mailto:support@shakuntalamsecurities.com" className="inline-flex flex-col items-start gap-1 rounded-md bg-accent px-7 py-4 font-semibold text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
            <span className="inline-flex items-center gap-3"><Mail className="size-5" aria-hidden="true" /> Partnership enquiries</span>
            <span className="text-sm font-medium">support@shakuntalamsecurities.com</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between lg:px-8">
          <div><img src={logo} alt="Shankuntalam Securities Private Limited" loading="lazy" width={1528} height={255} className="w-64" /><p className="mt-3">Lending built around everyday cashflows.</p></div>
          <div className="sm:text-right"><a className="font-medium text-primary hover:underline" href="mailto:support@shakuntalamsecurities.com">support@shakuntalamsecurities.com</a><p className="mt-2">© 2026 Shankuntalam Securities Private Limited.</p></div>
        </div>
      </footer>
    </main>
  );
}

function Portfolio({ image, imageAlt, icon, title, text, tag }: { image: string; imageAlt: string; icon: ReactNode; title: string; text: string; tag: string }) {
  return <article><div className="overflow-hidden rounded-xl"><img src={image} alt={imageAlt} loading="lazy" width={1200} height={1008} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]" /></div><div className="px-1 pt-6"><div className="flex items-center gap-3 text-primary"><span className="[&>svg]:size-5">{icon}</span><h3 className="font-display text-3xl">{title}</h3></div><p className="mt-4 leading-7 text-muted-foreground">{text}</p><div className="mt-6 flex items-center gap-2 border-t border-border pt-4 text-xs font-semibold uppercase tracking-[0.12em]"><span className="size-1.5 rounded-full bg-accent" />{tag}</div></div></article>;
}

function FlowRow({ icon, label, detail }: { icon: ReactNode; label: string; detail: string }) {
  return <div className="grid grid-cols-[2.75rem_1fr] gap-4 py-5 sm:grid-cols-[2.75rem_1fr_auto] sm:items-center"><span className="grid size-10 place-items-center rounded-full bg-surface-dark-foreground/10 text-signal [&>svg]:size-5">{icon}</span><span className="font-semibold">{label}</span><span className="col-start-2 text-sm text-surface-dark-foreground/60 sm:col-start-auto">{detail}</span></div>;
}