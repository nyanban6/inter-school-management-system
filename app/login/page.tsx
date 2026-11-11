'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { KeyRound, Mail, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@northfield.edu');
  const [password, setPassword] = useState('demo-password');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg, #eff6ff 0%, #ecfdf5 100%)' }}>
      <div className="card" style={{ width: 'min(520px, calc(100vw - 32px))', padding: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <div style={{ width: 42, height: 42, borderRadius: 12, background: '#dbeafe', color: '#1d4ed8', display: 'grid', placeItems: 'center' }}>
            <ShieldCheck size={20} />
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#64748b', letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 700 }}>Access portal</div>
            <h1 style={{ margin: 0, fontSize: 32 }}>School Network Login</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18, marginTop: 18 }}>
          <label style={{ display: 'grid', gap: 8 }}>
            <span style={{ fontWeight: 700, color: '#334155' }}>Email</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', border: '1px solid #dbe2ea', borderRadius: 12, background: 'white' }}>
              <Mail size={17} color="#64748b" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ border: 'none', outline: 'none', width: '100%' }} />
            </div>
          </label>

          <label style={{ display: 'grid', gap: 8 }}>
            <span style={{ fontWeight: 700, color: '#334155' }}>Password</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', border: '1px solid #dbe2ea', borderRadius: 12, background: 'white' }}>
              <KeyRound size={17} color="#64748b" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ border: 'none', outline: 'none', width: '100%' }} />
            </div>
          </label>

          <button type="submit" style={{ border: 'none', background: '#111827', color: 'white', padding: '15px 18px', borderRadius: 12, fontWeight: 800, cursor: 'pointer' }}>
            Sign in to dashboard
          </button>
        </form>

        <div style={{ marginTop: 20, fontSize: 14, color: '#64748b' }}>
          Demo credentials: admin@northfield.edu / demo-password
        </div>
      </div>
    </main>
  );
}
