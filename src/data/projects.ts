import { Project } from '@/types/portfolio';

export const projects: Project[] = [
    {
        title: 'GitX — AI Git Assistant',
        description:
            'AI-powered command-line Git assistant that generates commit messages, pull request descriptions, and changelogs from staged or unstaged changes. Git stays the source of truth, so it never commits, pushes, or modifies code without approval.',
        stack: ['Go', 'Cobra', 'CLI', 'AI'],
        image: '',
        color: 'bg-violet-900/80',
        github: 'https://github.com/deveasyclick/gitx',
    },
    {
        title: 'Iwifunni Notification Platform',
        description:
            'A multi-tenant, API-driven notification platform that lets you send email, SMS, and push notifications through a single REST API, processed asynchronously via a Redis-backed queue.',
        stack: ['Go', 'Nextjs', 'Postgres', 'Redis', 'Asyncq'],
        image: '/projects/iwifunni.png',
        color: 'bg-azure-900/80',
        link: 'https://iwifunni.cc',
        github: 'https://github.com/deveasyclick/iwifunni',
    },
    {
        title: 'BillPay Platform',
        description:
            'Demo Payment platform for airtime, data, electricity and TV bills.',
        stack: ['NestJS', 'Next.js', 'Postgres', 'Redis', 'BullMQ', 'Jest'],
        image: '/projects/billpay.png',
        color: 'bg-blue-900/80',
        link: 'https://billspay.vercel.app',
        github: 'https://github.com/deveasyclick/billpay',
    },
    {
        title: 'BillPay SDK',
        description:
            'Unified bill payment SDK abstracting multiple providers (Interswitch, VTPass).',
        stack: ['TypeScript', 'Node.js', 'Vitest'],
        image: '',
        color: 'bg-green-900/80',
        link: 'https://github.com/deveasyclick/billpay-sdk',
        github: 'https://github.com/deveasyclick/billpay-sdk',
    },
];
