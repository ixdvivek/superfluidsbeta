// ============================================================
// Superfluids — Contact
// Form is visually complete but does not submit, per brief.
// ============================================================

function ContactScreen({ onNavigate }) {
  const {
    Section, Grid, Reveal, Eyebrow, Button,
    PageHero, Icon, useMobile,
  } = window.SFKit;
  const D = window.SFData;
  const c = D.company;
  const isMobile = useMobile();
  const [sent, setSent] = React.useState(false);

  const field = "w-full rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[15px] text-ink " +
                "transition-colors duration-200 placeholder:text-gray-400 hover:border-gray-400 focus:border-blue-600";
  const label = "flex flex-col gap-1.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-gray-400";

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's Engineer Your Next Project"
        body="Get a quote, ask a technical question, or request a site visit — our team responds within 1 business day."
        crumbs={[{ label: "Home", to: "Home" }, { label: "Contact" }]}
        onNavigate={onNavigate}
      />

      <Section tone="light">
        <Grid cols={2} mob={1} gap={64} style={{ alignItems: "start" }}>
          {/* ── FORM ───────────────────────────────────── */}
          <Reveal>
            <div className="rounded-xl border border-line bg-gray-50 p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center gap-5 py-14 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua-50 text-aqua-700">
                    <Icon name="check" size={30} strokeWidth={2.6} />
                  </span>
                  <h2 className="text-h3 font-semibold text-ink">Enquiry received</h2>
                  <p className="max-w-[360px] text-[15px] leading-relaxed text-gray-500">
                    Thank you — our engineering team will respond within one business day.
                  </p>
                  <Button variant="outline" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="flex flex-col gap-5"
                >
                  <div className="flex flex-col gap-1.5">
                    <h2 className="text-h3 font-semibold text-ink">Send an enquiry</h2>
                    <p className="text-[14.5px] text-gray-500">
                      Tell us the application and duty, and we'll come back with a sized recommendation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className={label}>
                      Name
                      <input required type="text" name="name" autoComplete="name" placeholder="Jane Engineer" className={field} />
                    </label>
                    <label className={label}>
                      Company
                      <input type="text" name="company" autoComplete="organization" placeholder="Acme Contracting" className={field} />
                    </label>
                    <label className={label}>
                      Email
                      <input required type="email" name="email" autoComplete="email" placeholder="you@company.com" className={field} />
                    </label>
                    <label className={label}>
                      Phone
                      <input type="tel" name="phone" autoComplete="tel" placeholder="+971 50 000 0000" className={field} />
                    </label>
                  </div>

                  <label className={label}>
                    Product / service of interest
                    <div className="relative">
                      <select name="subject" defaultValue="" className={field + " appearance-none pr-9"}>
                        <option value="" disabled>Select one…</option>
                        {D.contactSubjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Icon name="chevron-down" size={16} />
                      </span>
                    </div>
                  </label>

                  <label className={label}>
                    Message
                    <textarea
                      required name="message" rows={5}
                      placeholder="Describe the application, flow rate, head, timelines…"
                      className={field + " resize-y"}
                    />
                  </label>

                  <Button type="submit" variant="primary" size="lg" icon="arrow-right" fullWidth>
                    Submit
                  </Button>
                  <p className="text-center text-xs text-gray-400">
                    Demonstration form — not yet connected to a mail handler.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* ── DETAILS + MAP ──────────────────────────── */}
          <Reveal delay={90} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div className="flex flex-col gap-5">
              <Eyebrow>Contact Details</Eyebrow>
              <h2 className="text-balance text-h2 font-medium text-ink">Reach us directly</h2>

              <div className="flex flex-col gap-4">
                {[
                  { icon: "map-pin", title: "Office", lines: [c.address] },
                  { icon: "phone", title: "Phone", lines: [c.phone], href: "tel:" + c.phone.replace(/\s/g, "") },
                  { icon: "mail", title: "Email", lines: [c.email], href: "mailto:" + c.email },
                  { icon: "clock", title: "Hours", lines: ["Sunday – Thursday", "08:00 – 18:00 GST"] },
                ].map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-sm bg-aqua-50 text-aqua-700">
                      <Icon name={b.icon} size={20} strokeWidth={1.9} />
                    </span>
                    <div className="flex flex-col gap-1 pt-0.5">
                      <span className="text-[15px] font-semibold tracking-snug text-ink">{b.title}</span>
                      {b.lines.map((l) => (
                        b.href
                          ? <a key={l} href={b.href} className="text-[14.5px] leading-relaxed text-gray-500 transition-colors hover:text-brand-navy">{l}</a>
                          : <span key={l} className="text-[14.5px] leading-relaxed text-gray-500">{l}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* map slot — swap the placeholder for an embed when ready */}
            <div className="relative overflow-hidden rounded-lg border border-line" style={{ aspectRatio: "16 / 10" }}>
              <span aria-hidden="true" className="absolute inset-0 bg-gray-100" />
              <span aria-hidden="true" className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(14,35,65,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,35,65,0.05) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <Icon name="map-pin" size={26} color="var(--aqua-600)" />
                <span className="text-[13px] font-medium text-gray-500">Dubai Investment Park</span>
                <span className="text-xs text-gray-400">Google Map embed</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" iconLeft="phone" href={"tel:" + c.phone.replace(/\s/g, "")}>
                Call Sales
              </Button>
              <Button variant="outline" iconLeft="mail" href={"mailto:" + c.email}>
                Email Us
              </Button>
            </div>
          </Reveal>
        </Grid>
      </Section>
    </div>
  );
}

window.SF_ContactScreen = ContactScreen;
