import ToolCard, { BadgeType } from "@/components/ToolCard";

export default function Home() {
  const tools = [
    {
      title: "Pet Ability Calculator",
      description: "Calculate your pet's abilities and mutations as it ages.",
      href: "/pet-ability-calculator",
      badge: "updated" as BadgeType,
      images: [
        "https://tr.rbxcdn.com/180DAY-685db07d6eda29bc46a489418f812221/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-f2db33597a379b1d9d35973327e37601/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-4bc3df97456e0cd5a8d18c309fe73c93/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Pet Weight Calculator",
      description: "Calculate pet weights by age and hatch. Instantly see classifications like Huge, Titanic, or Godly.",
      href: "/pet-weight-calculator",
      badge: "popular" as BadgeType,
      images: [
        "https://tr.rbxcdn.com/180DAY-c4332e7f99f6f0256583a56567fa3510/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-86219acee574e55079c562866ea83480/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-16c729aa563e853c2771f3050400010b/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Live Stock",
      description: "Track event shop items in real-time with alerts for your favorite items.",
      href: "/stock",
      badge: "new" as BadgeType,
      images: [
        "https://tr.rbxcdn.com/180DAY-e69410449f3c44562eec51c5497e959c/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-a0817e3161f47a6acfa52e9b15fc0f6d/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-da7b3b797aea5330044c1720be1776ce/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Dupe List",
      description: "Complete list of all known duplicated pets along with an automatic checking calculator.",
      href: "/pet-dupe-check",
      images: [
        "https://tr.rbxcdn.com/180DAY-983088fe0db2ad43488838c9289e1398/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-62baf3e08c077db7c2166350f1f6fdb1/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-b3c49655371fe2a773c1ca1203814235/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Pet Ability Search",
      description: "Search pets by their abilities and see what each pet does.",
      href: "/pet-ability-search",
      images: [
        "https://tr.rbxcdn.com/180DAY-5edbcdc6c1aafc1c58ab477b6ef28643/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-3acf2b3717566d2a87192b651107101a/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-bb4780c1ebc22a21a66cac20cd1a5238/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Weather Events",
      description: "Browse all weather events to find effects and boosts.",
      href: "/weather",
      images: [
        "https://tr.rbxcdn.com/180DAY-878d2c2ebc3ef8c7a46b131b44d34463/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-52ee22a4debd9c671dedde82d2634a16/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-c87b42fc4a1e08855200e01c58acfba6/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Pet XP Calculator",
      description: "Find how long it takes to level up pets using helper pets like Capybara and Dilophosaurus.",
      href: "/pet-xp-time-calculator",
      images: [
        "https://tr.rbxcdn.com/180DAY-f99783a5bc26fc1e4ee440d07b0f951f/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-83b2b86ce053ca6f0b25a25492077b43/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-62dbc4eb73e0a7ed710ba92bda2d210a/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Egg Hatch Calculator",
      description: "Calculate egg hatch time with helper pets like Blood Kiwi and Bald Eagle.",
      href: "/egg-hatch-calculator",
      images: [
        "https://tr.rbxcdn.com/180DAY-d527ec2b2f3aff03dc1620fbe0bb14d8/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-226a380e9ac7dfd2bd4a7e1380bc7f0a/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-66e7af94955521690b118adfcd4c601c/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Crop Value Calculator",
      description: "Calculate crop values with every mutation included.",
      href: "/crop-value-calculator",
      images: [
        "https://tr.rbxcdn.com/180DAY-325c2ddf7ab6c4ad2f38d0bdf8b4137a/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-ca8410ab32af7f95fc5ad748e04c19b8/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-55452ca5e15d56f38ead46fd414fb97d/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Pet Tier List",
      description: "Ranked list of all pets from best to worst based on their abilities, demand and overall usefulness.",
      href: "/pet-tier-list",
      images: [
        "https://tr.rbxcdn.com/180DAY-a6701db9d15f8c2e4a3169417116b45e/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-9ef3c91155d392ebf0cfff949dd503c2/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-616cfc1eea374ee4457cfa4c07f14d38/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Codes",
      description: "Here are the codes you can redeem now for free in-game rewards.",
      href: "/codes",
      images: [
        "https://tr.rbxcdn.com/180DAY-88490b833220a4bf9d178a168cc06cb0/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-5afa2a617a574bfac9119cf5f8976315/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-49d4e97e8aec95b7b72037f71094c394/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Guides",
      description: "Quick guides for updates, pets, crops, weather, mutations, trading, and progression.",
      href: "/guides",
      images: [
        "https://tr.rbxcdn.com/180DAY-a15eb03513568d7669111f2c6d312cc7/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-1ce23a14e34e9a831042ab06658a71db/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-9fa17e24cd437d41ae8b9af91237c8d9/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
  ];

  return (
    <div className="flex flex-col items-center animate-fade-in">
      <div className="flex flex-col items-center justify-center flex-wrap mb-5">
        <h1 className="font-bold mb-2 text-3xl md:text-4xl tracking-tight text-[var(--color-logo)] text-center">
          Grow a Garden Tools
        </h1>
        <p className="max-w-xl text-left md:text-center text-sm md:text-base tracking-wide mt-2 text-[var(--color-muted-foreground)]">
          Select a tool below to embed it or use it. All calculators are designed exactly like the original.
        </p>
      </div>

      <section aria-labelledby="tools-heading" className="mt-8 md:mt-12 w-full">
        <h2 id="tools-heading" className="sr-only">Calculators and tools</h2>
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 w-full">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </ul>
      </section>
    </div>
  );
}
