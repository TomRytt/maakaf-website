import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'הפרויקטים',
  description:
    'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
  openGraph: {
    title: 'הפרויקטים | מעקף',
    description:
      'הכירו את פרויקטי הקוד הפתוח של חברי הקהילה, ובחרו לאילו פרויקטים תרצו להצטרף',
    url: 'https://maakaf-website.vercel.app/projects',
    siteName: 'Maakaf',
    type: 'website',
    images: [
      {
        url: 'https://maakaf-website.vercel.app/favicon.ico',
        width: 600,
        height: 600,
      },
    ],
  },
};

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="self-center w-full h-[90vh] px-20 pb-6 flex flex-col justify-center gap-4">
      {children}
    </section>
  );
};

export default ProjectsLayout;
