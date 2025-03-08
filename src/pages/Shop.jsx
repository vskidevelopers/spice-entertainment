import { ShoppingBasketIcon } from "lucide-react";

export default function Shop() {
  return (
    <div className="w-full flex flex-wrap justify-between pt-20 px-20">
      {/* ShopMiniNav */}
      <div className="w-full flex">
        <div className="w-3/5 flex justify-end"><h2 className="font-bold text-5xl">SPICE <br /> SHOP</h2></div>
        <div className="w-2/5 flex justify-end items-center"><ShoppingBasketIcon className="w-10 h-10 text-gray-500" /></div>

      </div>

      {/* Shop Items */}


    </div>
  );
}
