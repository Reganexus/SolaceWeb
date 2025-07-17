// app/download/page.tsx
import DownloadBanner from '@/components/DownloadBanner';
import DownloadGallery from '@/components/DownloadGallery';
import DownloadFooter from '@/components/DownloadFooter';

export const metadata = {
  title: 'Download SOLACE',
  description: 'Download the SOLACE mobile app for Android.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: 'url(/background.png)' }}>
      <DownloadBanner />
      <DownloadGallery />
      <DownloadFooter />
    </main>
  );
}
