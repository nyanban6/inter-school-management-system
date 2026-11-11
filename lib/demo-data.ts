export const dashboardStats = [
  { label: 'Total Schools', value: '18', delta: '+3 this term', icon: 'School' },
  { label: 'Active Students', value: '8,446', delta: '+12.6% vs last term', icon: 'Users' },
  { label: 'Present Today', value: '7,902', delta: '93.6% attendance', icon: 'CheckCircle' },
  { label: 'Fee Collection', value: '₦24.6M', delta: '76% recovered', icon: 'Wallet' },
];

export const schools = [
  { name: 'Northfield Academy', code: 'NFA-001', location: 'Lagos', students: 1400, staff: 118, status: 'Active' },
  { name: 'Green Valley College', code: 'GVC-012', location: 'Abuja', students: 980, staff: 94, status: 'Active' },
  { name: 'City Heights School', code: 'CHS-304', location: 'Kano', students: 760, staff: 72, status: 'Review' },
  { name: 'Sunrise International', code: 'SIS-450', location: 'Port Harcourt', students: 1180, staff: 103, status: 'Active' },
];

export const students = [
  { id: 'ST-1001', name: 'Amara Okafor', className: 'Grade 10-A', parent: 'Mr. N. Okafor', attendance: '96%', status: 'Good' },
  { id: 'ST-1002', name: 'Daniel Mensah', className: 'Grade 9-C', parent: 'Mrs. M. Mensah', attendance: '92%', status: 'Average' },
  { id: 'ST-1003', name: 'Grace Abiola', className: 'Grade 8-B', parent: 'Mr. T. Abiola', attendance: '98%', status: 'Excellent' },
  { id: 'ST-1004', name: 'Samuel Iroko', className: 'Grade 11-B', parent: 'Mrs. I. Iroko', attendance: '94%', status: 'Good' },
];

export const staff = [
  { id: 'EMP-001', name: 'Mrs. Ada Nwachukwu', role: 'Principal', department: 'Administration', status: 'Available' },
  { id: 'EMP-002', name: 'Mr. Peter Ogun', role: 'Teacher', department: 'Mathematics', status: 'Teaching' },
  { id: 'EMP-003', name: 'Mrs. Ruth Danjuma', role: 'Accountant', department: 'Finance', status: 'Processing' },
  { id: 'EMP-004', name: 'Mr. Kelechi Eze', role: 'Transport Officer', department: 'Operations', status: 'On route' },
];

export const attendanceLog = [
  { date: '2026-11-11', present: 289, absent: 12, late: 9 },
  { date: '2026-11-10', present: 286, absent: 14, late: 8 },
  { date: '2026-11-09', present: 294, absent: 9, late: 5 },
  { date: '2026-11-08', present: 288, absent: 16, late: 7 },
];

export const exams = [
  { subject: 'Mathematics', exam: 'Mid-Term', average: '88%', top: 'Grace A.', grade: 'A' },
  { subject: 'Physics', exam: 'Progress Test', average: '81%', top: 'Daniel M.', grade: 'A' },
  { subject: 'English', exam: 'Quiz 3', average: '85%', top: 'Amara O.', grade: 'A' },
  { subject: 'Biology', exam: 'Lab Test', average: '79%', top: 'Samuel I.', grade: 'B' },
];

export const fees = [
  { student: 'Amara Okafor', due: '₦42,000', status: 'Paid', date: '2026-11-02' },
  { student: 'Daniel Mensah', due: '₦42,000', status: 'Pending', date: '2026-11-12' },
  { student: 'Grace Abiola', due: '₦38,500', status: 'Paid', date: '2026-11-04' },
  { student: 'Samuel Iroko', due: '₦44,000', status: 'Partial', date: '2026-11-15' },
];

export const libraryBooks = [
  { title: 'The Algebra Foundation', author: 'N. Benson', isbn: '978-1-2345-6789-0', category: 'Math', available: 18 },
  { title: 'World History in Motion', author: 'A. Cole', isbn: '978-1-2345-6766-1', category: 'History', available: 12 },
  { title: 'Biology Lab Companion', author: 'S. Kuti', isbn: '978-1-2345-6000-9', category: 'Science', available: 9 },
  { title: 'English Grammar Essentials', author: 'M. Green', isbn: '978-1-2345-6123-6', category: 'English', available: 21 },
];

export const transport = [
  { route: 'Lekki Route A', driver: 'Mr. Akin', capacity: 42, occupied: 30, status: 'On schedule' },
  { route: 'Yaba Route B', driver: 'Mr. Tunde', capacity: 36, occupied: 31, status: 'Delayed' },
  { route: 'Surulere Route C', driver: 'Mrs. Ojo', capacity: 40, occupied: 33, status: 'On schedule' },
];

export const events = [
  { title: 'Inter-School Debate Championship', date: '2026-11-20', venue: 'Main Auditorium', status: 'Confirmed' },
  { title: 'STEM Innovation Fair', date: '2026-11-27', venue: 'Science Center', status: 'Planning' },
  { title: 'Sports Week', date: '2026-12-03', venue: 'School Field', status: 'Open' },
];

export const notices = [
  { title: 'School fees deadline extended', priority: 'High', date: '2026-11-10' },
  { title: 'Parent-Teacher meeting scheduled', priority: 'Normal', date: '2026-11-12' },
  { title: 'Academic excellence awards shortlist', priority: 'Medium', date: '2026-11-14' },
];

export const quickActivity = [
  'New student registration approved for 46 learners',
  'Transportation log synced for 6 routes',
  'Exam result publication scheduled for Friday',
  'Security compliance report submitted',
];
