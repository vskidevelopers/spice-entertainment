import EventsBanner from "@/sections/EventsBanner";
import HomeBanner from "@/sections/HomeBanner";
import MusicBanner from "@/sections/MusicBanner";
import ShopBanner from "@/sections/ShopBanner";
import React from "react";

function Home() {
  return (
    <div>
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
