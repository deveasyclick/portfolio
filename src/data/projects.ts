import { Project } from '@/types/portfolio';

export const projects: Project[] = [
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
        image: '/projects/sdk.png',
        color: 'bg-green-900/80',
        link: 'https://github.com/deveasyclick/billpay-sdk',
        github: 'https://github.com/deveasyclick/billpay-sdk',
    },
];
