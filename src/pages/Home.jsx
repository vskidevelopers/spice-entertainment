import FloatingSocialLinks from "@/components/FloatingSocialLinks";
import EventsBanner from "@/sections/EventsBanner";
import HomeBanner from "@/sections/HomeBanner";
import MusicBanner from "@/sections/MusicBanner";
import ShopBanner from "@/sections/ShopBanner";

function Home() {
  return (
    <div>
      {/* Floating Socials */}
      <FloatingSocialLinks />
      {/* HOME BANNER */}
      <HomeBanner />
      {/* Music Banner */}
      <MusicBanner />
      {/* Shop Banner */}
      <ShopBanner />
      {/* Events Banner */}
      <EventsBanner />
    </div>
  );
}

export default Home;
