// Superfluids website — Contact screen with working inquiry form.
const DSc = window.SuperfluidsDesignSystem_e3893d;

function ContactScreen({ onNavigate }) {
  const { Button, Eyebrow, SectionHeader, Input, Select, Textarea, Checkbox, Accordion, Card, Badge, Icon, Breadcrumb } = DSc;
  const Section = window.SF_Section;
  const [submitted, setSubmitted] = React.useState(false);
  const isMobile = window.SF_useMedia('(max-width: 768px)');

  const contactBlocks = [
    { icon: "map-pin", title: "Office Location", lines: ["Dubai Industrial City", "Dubai, United Arab Emirates"] },
    { icon: "phone", title: "Phone", lines: ["Sales · +971 4 XXX XXXX", "Support · +971 4 XXX XXXX", "Emergency · +971 50 XXX XXXX"] },
    { icon: "mail", title: "Email", lines: ["info@superfluids.com", "sales@superfluids.com", "support@superfluids.com"] },
    { icon: "clock", title: "Business Hours", lines: ["Monday – Friday", "08:00 – 18:00 GST"] },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", background: "var(--gradient-navy)", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,183,199,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px", maskImage: "radial-gradient(100% 100% at 30% 0%, #000, transparent 75%)" }} />
        <div style={{ position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: isMobile ? "36px 20px 48px" : "56px 32px 72px" }}>
          <Breadcrumb invert items={[{ label: "Home", href: "#" }, { label: "Contact" }]} />
          <div style={{ marginTop: 24, maxWidth: 680, display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow tone="aqua">Get in touch</Eyebrow>
            <h1 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 32 : 52, lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)" }}>Let's discuss your project</h1>
            <p style={{ margin: 0, fontSize: isMobile ? 15 : 18, lineHeight: 1.6, color: "var(--text-on-dark-secondary)" }}>Our engineering team is ready to assist with your project requirements — from sizing to supply and commissioning.</p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.85fr 1.15fr", gap: isMobile ? 36 : 56, alignItems: "start" }}>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>
            {contactBlocks.map((b) => (
              <div key={b.title} style={{ display: "flex", gap: 16 }}>
                <span style={{ display: "inline-flex", width: 46, height: 46, flexShrink: 0, borderRadius: "var(--radius-md)", background: "var(--aqua-50)", color: "var(--aqua-600)", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={b.icon} size={22} strokeWidth={1.75} />
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>{b.title}</span>
                  {b.lines.map((l) => <span key={l} style={{ fontSize: 14.5, color: "var(--text-secondary)", lineHeight: 1.5 }}>{l}</span>)}
                </div>
              </div>
            ))}
            {/* Map placeholder */}
            <div style={{ position: "relative", height: 180, borderRadius: "var(--radius-lg)", overflow: "hidden", background: "linear-gradient(135deg, #16335c, #0E2341)", border: "1px solid var(--border-subtle)" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(0,183,199,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,199,0.14) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, color: "rgba(255,255,255,0.85)" }}>
                <Icon name="map-pin" size={28} color="var(--aqua-400)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>GOOGLE MAPS EMBED</span>
              </div>
            </div>
          </div>

          {/* Inquiry form */}
          <Card padding={isMobile ? "md" : "xl"}>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, padding: "40px 16px", textAlign: "center" }}>
                <span style={{ display: "inline-flex", width: 64, height: 64, borderRadius: "50%", background: "var(--green-50)", color: "var(--green-600)", alignItems: "center", justifyContent: "center" }}><Icon name="check" size={32} strokeWidth={3} /></span>
                <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 24, color: "var(--text-primary)" }}>Inquiry received</h3>
                <p style={{ margin: 0, fontSize: 15.5, color: "var(--text-secondary)", maxWidth: 360, lineHeight: 1.6 }}>Thank you — our engineering team will respond within one business day.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Submit another inquiry</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 22, color: "var(--text-primary)" }}>Submit an inquiry</h3>
                  <p style={{ margin: 0, fontSize: 14, color: "var(--text-secondary)" }}>Tell us about your project and we'll get back to you.</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 14 }}>
                  <Input label="Full Name" placeholder="Jane Engineer" required />
                  <Input label="Company Name" placeholder="Acme Contracting" />
                  <Input label="Email Address" type="email" iconLeft="mail" placeholder="you@company.com" required />
                  <Input label="Phone Number" iconLeft="phone" placeholder="+971 50 000 0000" />
                  <Input label="Project Location" iconLeft="map-pin" placeholder="Dubai, UAE" />
                  <Select label="Industry" placeholder="Select industry" options={["Residential", "Commercial", "Healthcare", "Hospitality", "Industrial", "Government", "Infrastructure", "Oil & Gas", "District Cooling"]} />
                </div>
                <Input label="Subject" placeholder="e.g. Booster pump system for a 20-storey tower" />
                <Textarea label="Message" rows={4} placeholder="Describe your requirements, flow rates, timelines…" required />
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", border: "1px dashed var(--border-default)", borderRadius: "var(--radius-md)", color: "var(--text-secondary)", fontSize: 14 }}>
                  <Icon name="paperclip" size={18} /> Attach drawings or specs (optional)
                </div>
                <Checkbox label="I agree to be contacted regarding my inquiry." required />
                <Button type="submit" variant="accent" size="lg" iconRight="arrow-right">Submit Inquiry</Button>
              </form>
            )}
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="var(--surface)">
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "0.8fr 1.2fr", gap: isMobile ? 28 : 56, alignItems: "start" }}>
          <SectionHeader eyebrow="FAQ" title="Common questions"
            description="Quick answers on availability, support, quotations and maintenance. Need more? Speak with our engineering team." />
          <Accordion items={[
            { question: "Which manufacturers do you supply?", answer: "We are an authorised distributor for Grundfos, Ebara, CRI, Ariston, Pegler, Crane and other leading brands across pumps, valves and water systems." },
            { question: "Do you provide technical support and sizing?", answer: "Yes — our factory-trained engineers handle hydraulic calculations, system design and equipment selection as part of every project." },
            { question: "How quickly can I get a quotation?", answer: "Most quotations are returned within one to two business days. Complex engineered systems may require a short site survey first." },
            { question: "Can you arrange project consultations on site?", answer: "Absolutely. We carry out site consultations across the UAE to assess requirements and recommend the right solution." },
            { question: "Do you offer maintenance contracts?", answer: "We provide preventive Annual Maintenance Contracts (AMC), emergency support and retrofit services to keep systems running efficiently." },
          ]} />
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section bg="var(--gradient-navy)" py={isMobile ? 56 : 80}>
        <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 620 }}>
            <Eyebrow tone="aqua">Technical Assistance</Eyebrow>
            <h2 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: isMobile ? 26 : 38, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)", textWrap: "balance" }}>Speak with our engineering team</h2>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Button variant="accent" size={isMobile ? "md" : "lg"} iconRight="arrow-right">Request Consultation</Button>
            <Button size={isMobile ? "md" : "lg"} iconLeft="message-circle" style={{ background: "var(--green-600)", color: "var(--white)", border: "none" }}>WhatsApp</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

window.SF_ContactScreen = ContactScreen;
