import TwoSection from '@/components/common/TwoSection';
import News from '@/components/home/News';
import Welcome from '@/components/home/Welcome';

export default function DashboardHome() {
  return <TwoSection main={<Welcome />} sidebar={<News />} />;
}
