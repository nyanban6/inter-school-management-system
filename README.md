# Inter School Management System

A modern multi-school management platform built with Next.js and Prisma.

## Features
- School management dashboard
- Student and staff registry
- Attendance tracking
- Exam analytics
- Finance and fee tracking
- Library catalog
- Transport coordination
- Events and notices
- Security and settings modules

## Run locally

```bash
npm install
cp .env.example .env
npm run db:push
npm run db:seed
npm run dev
```

## Vercel deployment

1. Push this repository to GitHub.
2. Import it in Vercel.
3. Set `DATABASE_URL` to your PostgreSQL or SQLite connection string.
4. Deploy.

## Demo login
- Email: admin@northfield.edu
- Password: demo-password

## Main app URL
After deployment, your Vercel URL will appear in the project dashboard.
