import Link from 'next/link';
import { ArrowRight, GraduationCap, ShieldCheck, BarChart3 } from 'lucide-react';
import { schoolFeatures } from '@/lib/navigation';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #eff6ff 0%, #ecfdf5 100%)' }}>
      <div className="container" style={{ padding: '48px 0 80px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 24 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: '#1d4ed8', display: 'grid', placeItems: 'center', color: 'white' }}>
              <GraduationCap size={20} />
            </div>
            InterSchool OS
          </div>

          <nav style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <Link href="/login">Login</Link>
            <Link href="/dashboard" style={{ background: '#1d4ed8', color: 'white', padding: '12px 18px', borderRadius: 12, fontWeight: 700 }}>Open Dashboard</Link>
          </nav>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#dbeafe', color: '#1d4ed8', padding: '8px 12px', borderRadius: 999, fontWeight: 700, fontSize: 13 }}>
              <ShieldCheck size={14} /> Multi-school control center
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.02, margin: '22px 0 18px', color: '#0f172a' }}>
              Manage every school from one powerful platform.
            </h1>

            <p style={{ fontSize: 20, lineHeight: 1.7, color: '#475569', maxWidth: 640 }}>
              Run enrollment, attendance, fees, exams, staff, library, transport, discipline, notices, and inter-school events across your entire network from a single dashboard.
            </p>

            <div style={{ display: 'flex', gap: 18, marginTop: 28, flexWrap: 'wrap' }}>
              <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#111827', color: 'white', padding: '16px 22px', borderRadius: 14, fontWeight: 700 }}>
                Go to portal <ArrowRight size={18} />
              </Link>
              <Link href="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', color: '#111827', padding: '16px 22px', borderRadius: 14, border: '1px solid #cbd5e1', fontWeight: 700 }}>
                View demo dashboard
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 28, marginTop: 30, flexWrap: 'wrap', color: '#334155', fontWeight: 600 }}>
              <span>18 schools</span>
              <span>8,446 students</span>
              <span>1,080 staff</span>
            </div>
          </div>

          <div className="card" style={{ padding: 24 }}>
            <div style={{ background: '#eff6ff', borderRadius: 18, padding: 18, marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#1d4ed8', fontWeight: 800 }}>
                <BarChart3 size={18} /> Operational overview
              </div>
              <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 14 }}>
                <div className="card" style={{ padding: 16 }}>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Academic</div>
                  <div style={{ fontSize: 26, fontWeight: 800, marginTop: 8 }}>96.4%</div>
                </div>
                <div className="card" style={{ padding: 16 }}>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Fees</div>
                  <div style={{ fontSize: 26, fontWeight: 800, marginTop: 8 }}>₦24.6M</div>
                </div>
                <div className="card" style={{ padding: 16 }}>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Transport</div>
                  <div style={{ fontSize: 26, fontWeight: 800, marginTop: 8 }}>94%</div>
                </div>
                <div className="card" style={{ padding: 16 }}>
                  <div style={{ color: '#64748b', fontSize: 12 }}>Events</div>
                  <div style={{ fontSize: 26, fontWeight: 800, marginTop: 8 }}>9 live</div>
                </div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
              {schoolFeatures.map((feature) => (
                <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#334155', fontWeight: 600 }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
