"use client";

import { useState } from "react";
import { X } from "lucide-react";

const tiers = [
  {
    rank: "S",
    color: "bg-[#ff7f7f] text-black",
    pets: [
      "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a7791183bdf0a6cee503d5b0f3150ff8/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-5eaeaa70ac3869c13a4ab066453f2d69/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a2f01410112cb8a673583cba29d3af7c/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-bfe56ed90eb31c9dbeb65f1df1a5b43b/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-299d70df8229cd37cc74b50bed595a65/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-67b8f1d1ce5cc81d61a43d6ca9e2ac06/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-eac6e7b0d099ec2dbaaa440d633fd685/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-3b5bc6b09aec74364c0ca39eae452598/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-7b5be30c2eb7d25f28a6de6677f96677/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-cf56daa6f0b75471c53a89680a86bc6e/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-384375296e975af207b25d4727352f93/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-44f4ddaf5660fc6b8ef619c87b71b286/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e0cf316e9dcc7fe8363ff7150fce43ff/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2662e3af62d14324dc9efcfe379abc13/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-6e841f27156032c4c6669108e0abed07/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-f49eaf91ec767e80fa1330173462ab78/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-b97d7eb7bf01f21a2c8d975ff6c7434d/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-cef6590c69734bb4af28b8b0adc6d239/150/150/Image/Png/noFilter"
    ]
  },
  {
    rank: "A",
    color: "bg-[#ffbf7f] text-black",
    pets: [
      "https://tr.rbxcdn.com/180DAY-a620195a34a92ba5e3737986241b01af/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-0eb9cbb850a7b9bf60256b301eec5045/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-8e9b11c93ef408f28b7fcf6785590b77/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-b14ae02d1315ea735871b854e017cd30/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-ebc01955b9e699c7f6c4c9dd4464ea0b/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-71ffbabe8c6f12fb2ee26ef020e26aa9/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-cb3277c8abceeb7efa67ff9cfb2aeb1a/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-af083678e1450f104e6ba74ea5cb794b/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-6c2dd4a78a4e7b7f7edd8ec4d468bd14/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-4e31d168067cc50c61de6f77933b95aa/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e0700e1f6116fde493bf466f14f641ff/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-02eda6f73f531bab5e04b022615e704c/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-ade076ea5e5fab2dc5290cafcf0a8ee2/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-6dc328fedb24908c952eed209cb30467/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-d392ce33f668d9b8ef98036411baed4e/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-8c6e7fa9e1ca627fa3e9e595017f4620/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-d3b61541c0a4c4b4ffd4ffe7a0f7e8e4/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-53d1932bc56cf00c0fadd65fec9592d3/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e1285a1915d5f866545fced492cbfe8f/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2ff2df7f6558a3075bd0582271c76b7f/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a70a1ae8c2c3a2face6cff5add4e7887/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-24a55e86d32d0d0041e5466f8449e546/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-be0489a0a4dbb28bfdb79d174e4a6ea1/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-40110b2c97a24c14386daf4e11e41c09/150/150/Image/Png/noFilter"
    ]
  },
  {
    rank: "B",
    color: "bg-[#ffff7f] text-black",
    pets: [
      "https://tr.rbxcdn.com/180DAY-1c7bc6ae725ce338d203501d589e611f/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-6065c6dd9191cc4a52f97f4ee21e6747/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-aee7c91e4fe683f014267e486a329410/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-8dedce85cfbf7ed225744ba8df38f502/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a2f73d24e4d375f58db529d903995095/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-cb82b4c335497860986ba3594cece3b9/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-93bc61e1ee7f691ae79d679fbd8fbed4/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-caeffb057aa45a1d5b7b1a1f68834600/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-b45db4c1b2d95ca28ea6fa8e31186211/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e6807f3fadcfa15c2ade6b6db38fd5f7/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2d0895399b99c10fd2fc3e3deb6673ab/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-90cc4a1da6bde23f114b28a412dc5e30/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-6bc8a14110a4514fee8cf8bf7cd4de48/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-41c19bc3c61f50d0faa19de7f8191bf1/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-61330770432168b96a5516b113a70b78/150/150/Image/Png/noFilter"
    ]
  },
  {
    rank: "C",
    color: "bg-[#bfff7f] text-black",
    pets: [
      "https://tr.rbxcdn.com/180DAY-55ec03689283b3de863ed3c7a3cf8d4d/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-4ea73f5757aaf94aa31b58b721cbf841/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-c8f67c40d4ad0c0a56816b07d8dc2706/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e8924d77e8a03c9445aa73e8e76eb6f7/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-209ef235fd6e266e62e4e3bf12d423d0/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-01f15074f27e2b508fdfa32eca5bc801/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-1d8b84ee243d291d046560e821e508fe/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a79084ddab337d3129b7235a72ad4c83/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-512e763ec59a5c3c7d83a2534c7dbdae/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-40ae5b48458024a4ff736a5aaa8e91a0/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-5b64b6a8699e56b9e15b72dc5fbd35fd/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-5458a6ebe85f8a5e3fdae69870e31ed8/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-d1545caf6f8b27d36b0d5999aa547165/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a27891df50f2b1919184ca55fe0116b4/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-5996e1d3ba983b37354867c87eade6e3/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-419a38c51111b853fbc0d47cfa2329a2/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a9664b5a7abbe3772bc32df57ed5c339/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2bc02e7e05b50ce5d1305f54cc742900/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-41f4bcd2f12e2d8586e6f546852df16a/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e623aedaefa1b26f0c4f6f2a414b1821/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-6e47faa81929a722dbf0734db69e5688/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-bfbd07c282eb68c33c0251ffa9763a15/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-d4f19c5f37f426647bf54976f6cb9ec3/150/150/Image/Png/noFilter"
    ]
  },
  {
    rank: "D",
    color: "bg-[#7fff7f] text-black",
    pets: [
      "https://tr.rbxcdn.com/180DAY-62dbc4eb73e0a7ed710ba92bda2d210a/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-b3c49655371fe2a773c1ca1203814235/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-beb7327c2b7f8c54cc29f6de0b7e4116/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-b2de5d0776c8c3151037b2ff6d2b61be/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-420c5dbfda96998f07ea3ea233801ed5/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-f8ab20308fb2ecb12c09dd43199783af/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-1c79e6e56902b2bc848c22e8aab1108a/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-5d5b0f7de5b309e69edd1bc9550ee504/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-83b2b86ce053ca6f0b25a25492077b43/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e4a4883cab53307ceb0ea5c5732862b6/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-9f0cb8224af981b32cce026a11041079/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2bc0b503f3b64389c0eef0beb6cc963b/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-25611f19e72adcc29e92cbd7b3838265/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-7fe002877336254712758f760dd6fc26/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e69410449f3c44562eec51c5497e959c/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-16c729aa563e853c2771f3050400010b/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e74af9d8b2f8722fb823ad008f9ef1b2/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e3a39151629251f2b1ca814d9ed98a32/150/150/Image/Png/noFilter"
    ]
  },
  {
    rank: "E",
    color: "bg-[#7fffbf] text-black",
    pets: [
      "https://tr.rbxcdn.com/180DAY-acee5ca803101f03bece6ceffcdd303d/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-a15eb03513568d7669111f2c6d312cc7/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-5edbcdc6c1aafc1c58ab477b6ef28643/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-07ea0ce753cc3e4c60d6a40734ac4205/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-ed8fbb9bb1a5a3e3adf464a41b00c4b7/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-226a380e9ac7dfd2bd4a7e1380bc7f0a/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-f648601e6ceb37ed33b0716468c3a4e4/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-3acf2b3717566d2a87192b651107101a/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-685db07d6eda29bc46a489418f812221/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-9ef3c91155d392ebf0cfff949dd503c2/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-cac0292dc43506bfa9149e99357b301a/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-4bc3df97456e0cd5a8d18c309fe73c93/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-5afa2a617a574bfac9119cf5f8976315/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-c4332e7f99f6f0256583a56567fa3510/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-900e5378ebe06b0b64ec42281e8d1671/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-e7b2d31d2520dedfc7064ee411f768ab/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-64861298fa2096ceb3bfdf40f222e231/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-da7b3b797aea5330044c1720be1776ce/150/150/Image/Png/noFilter"
    ]
  },
  {
    rank: "F",
    color: "bg-[#7fffff] text-black",
    pets: [
      "https://tr.rbxcdn.com/180DAY-087e8454f6e6e14d995d1fb906c90425/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-83b2b86ce053ca6f0b25a25492077b43/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-64e0caffe58a688ac09186f8b8c7b229/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-2f79efe0e8b79f3ff3d164adc5596b09/150/150/Image/Png/noFilter",
      "https://tr.rbxcdn.com/180DAY-66e7af94955521690b118adfcd4c601c/150/150/Image/Png/noFilter"
    ]
  }
];

export default function PetTierList() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="w-full text-white animate-fade-in font-sans min-h-screen pb-20">
      
      {/* Green Banner */}
      {showBanner && (
        <div className="bg-[#00b050] text-white w-full px-4 py-2.5 flex justify-between items-center text-sm shadow-sm z-50">
          <div className="flex-1 text-left">
            I'm hosting a giveaway in the Discord right now! <a href="#" className="underline font-semibold ml-1">Join Discord</a>
          </div>
          <button 
            onClick={() => setShowBanner(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mt-12">
        <h1 className="text-[32px] font-bold mb-2 tracking-tight">Pet Tier List</h1>
        <p className="text-gray-400 text-[15px] mb-1">
          Ranked tier list of all the pets in Grow a Garden.
        </p>
        <p className="text-[#888888] text-xs mb-8">
          Last updated: December 4, 2025
        </p>
        
        <p className="text-[#a0a0a0] mb-12 max-w-[1000px] text-[15px] leading-relaxed">
          Pets play a major role in Grow a Garden. Each one has a unique ability that can boost crops, trigger mutations, increase yield, or help you progress faster. With so many pets available from eggs, crates, shops, and events, it can be hard to know which ones are worth using. This tier list gives a clear overview of the strongest pets, how their abilities compare, and which ones offer the most value for your garden at each stage of the game.
        </p>

        {/* Tier List Grid */}
        <div className="border border-[#1a1a1a] flex flex-col w-full shadow-2xl">
          {tiers.map((tier, index) => (
            <div key={tier.rank} className={`flex min-h-[100px] border-[#1a1a1a] ${index !== tiers.length - 1 ? 'border-b' : ''}`}>
              {/* Tier Rank Label */}
              <div className={`w-[100px] md:w-[120px] flex-shrink-0 flex items-center justify-center text-2xl font-bold border-r border-[#1a1a1a] ${tier.color}`}>
                {tier.rank}
              </div>
              
              {/* Tier Pets Container */}
              <div className="flex-1 flex flex-wrap content-start gap-3 p-4 bg-[#111111]">
                {tier.pets.map((pet, i) => (
                  <div key={i} className="relative w-12 h-12 md:w-16 md:h-16 group flex items-center justify-center cursor-pointer">
                    <img 
                      src={pet} 
                      alt={`Pet in Tier ${tier.rank}`} 
                      className="max-w-full max-h-full object-contain filter drop-shadow-md hover:-translate-y-1 transition-transform duration-200" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
