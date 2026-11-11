import { Building2, CheckCircle2, UserRound, Wallet, Bus, BookOpen, CalendarDays, FileText, ShieldCheck, TicketPercent, Percent, BellRing, BarChart3, Settings, Users } from 'lucide-react';

export const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { label: 'Schools', href: '/schools', icon: Building2 },
  { label: 'Students', href: '/students', icon: Users },
  { label: 'Staff', href: '/staff', icon: UserRound },
  { label: 'Attendance', href: '/attendance', icon: CheckCircle2 },
  { label: 'Exams', href: '/exams', icon: FileText },
  { label: 'Fees', href: '/fees', icon: Wallet },
  { label: 'Library', href: '/library', icon: BookOpen },
  { label: 'Transport', href: '/transport', icon: Bus },
  { label: 'Events', href: '/events', icon: CalendarDays },
  { label: 'Notices', href: '/notices', icon: BellRing },
  { label: 'Security', href: '/security', icon: ShieldCheck },
  { label: 'Settings', href: '/settings', icon: Settings },
];

export const statIcons = {
  School: Building2,
  Users: Users,
  CheckCircle: CheckCircle2,
  Wallet: Wallet,
};

export const schoolFeatures = [
  'Unified school registry',
  'Student lifecycle management',
  'Fee, payroll and procurement',
  'Academic analytics and exams',
  'Transport, library and events',
  'Multi-school reporting',
  'Staff attendance and approval workflow',
  'Role-based access control',
];
