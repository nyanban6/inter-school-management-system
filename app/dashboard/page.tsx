import Link from 'next/link';
import { BarChart3, Bell, Building2, ChevronRight, Search, UserCircle2 } from 'lucide-react';
import { navItems } from '@/lib/navigation';
import { dashboardStats, quickActivity } from '@/lib/demo-data';

function StatCard({ label, value, delta, icon: Icon }: { label: string; value: string; delta: string; icon: any }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: '#64748b', fontSize: 13 }}>{label}</div>
          <div style={{ fontSize: 30, fontWeight: 800, marginTop: 10 }}>{value}</div>
        </div>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: '#dbeafe', display: 'grid', placeItems: 'center', color: '#1d4ed8' }}>
          <Icon size={20} />
        </div>
      </div>
      <div style={{ marginTop: 12, color: '#22c55e', fontWeight: 700 }}>{delta}</div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 260, background: '#0f172a', color: 'white', padding: '24px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: '#1d4ed8', display: 'grid', placeItems: 'center' }}>
            <Building2 size={20} />
          </div>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1.2, opacity: 0.7, textTransform: 'uppercase' }}>Network</div>
            <div style={{ fontWeight: 800 }}>InterSchool OS</div>
          </div>
        </div>

        <nav style={{ display: 'grid', gap: 8 }}>
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link key={label} href={href} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 12px', borderRadius: 12, opacity: 0.9, background: href === '/dashboard' ? '#1e293b' : 'transparent' }}>
              <Icon size={17} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <main style={{ flex: 1, padding: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
          <div>
            <div style={{ color: '#64748b', fontWeight: 700 }}>Good morning</div>
            <h2 style={{ margin: '6px 0 0', fontSize: 32 }}>Executive Dashboard</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', borderRadius: 12, padding: '10px 14px', minWidth: 220 }}>
              <Search size={16} color="#64748b" />
              <input placeholder="Search students, staff or schools" style={{ border: 'none', outline: 'none', width: '100%' }} />
            </div>
            <button style={{ width: 42, height: 42, borderRadius: 12, border: 'none', background: '#dbeafe', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
              <Bell size={18} color="#1d4ed8" />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', padding: '8px 12px', borderRadius: 12 }}>
              <UserCircle2 size={28} color="#1d4ed8" />
              Admin User
            </div>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} {...stat} icon={require('@/lib/navigation').statIcons[stat.icon as keyof typeof require('@/lib/navigation').statIcons]} />
          ))}
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1.3fr 0.7fr', marginTop: 28 }}>
          <div className="card" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: 22 }}>School network overview</h3>
              <button style={{ border: '1px solid #cbd5e1', background: 'white', borderRadius: 10, padding: '8px 12px', cursor: 'pointer' }}>
                View report
              </button>
            </div>

            <div style={{ marginTop: 18, display: 'grid', gap: 16 }}>
              {[
                { label: 'Academic performance', value: '96.4%', color: '#2563eb' },
                { label: 'Attendance compliance', value: '93.6%', color: '#22c55e' },
                { label: 'Fee recovery', value: '76%', color: '#f59e0b' },
                { label: 'Safety & discipline', value: '97.1%', color: '#a855f7' },
              ].map((row) => (
                <div key={row.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span>{row.label}</span>
                    <strong>{row.value}</strong>
                  </div>
                  <div style={{ height: 10, borderRadius: 999, background: '#e2e8f0', overflow: 'hidden' }}>
                    <div style={{ width: row.value.replace('%', ''), height: '100%', background: row.color, borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ marginTop: 0 }}>Quick activity</h3>
            <div style={{ display: 'grid', gap: 12 }}>
              {quickActivity.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: '#334155' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', marginTop: 7 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, fontWeight: 800 }}>Operational modules</div>
          <Link href="/schools" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#1d4ed8', fontWeight: 700 }}>Open all modules <ChevronRight size={18} /></Link>
        </div>
      </main>
    </div>
  );
}
