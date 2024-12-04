import { Metadata } from 'next';
import WorkPage from './WorkPage';

export const metadata: Metadata = {
  title: 'Our Work | Ocupop',
  description: 'Explore our projects',
  openGraph: {
    title: 'Our Work | Ocupop',
    description: 'Explore our projects',
    images: ['/assets/work/og-image.jpg'],
  },
};

export default function Page() {
  return <WorkPage />;
}