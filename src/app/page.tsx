// @/app/page.tsc
// views components
import FundHero from '@/views/Home/FundHero';
import FundFeatures from '@/views/Home/FundFeatures';
import FundCampaigns from '@/views/Home/FundCampaigns';
import FundTeam from '@/views/Home/FundTeam';
import FundBlog from '@/views/Home/FundBlog';
import FundPartners from '@/views/Home/FundPartners';

export default function Home() {
  return (
    <div>
      {/* welcome content block */}
      <FundHero />
      {/* Angel Image block */}
      <FundFeatures />
	    {/* actual cash fees */}
	    <FundCampaigns />
      {/* members of our fund */}
	    <FundTeam />
	    {/* some more information */}
	    <FundBlog />
      <FundPartners />
    </div>
  );
};