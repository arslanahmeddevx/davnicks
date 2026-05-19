import ToolCard, { BadgeType } from "@/components/ToolCard";

export default function Home() {
  const tools = [
    {
      title: "Pet Ability Calculator",
      description: "Calculate your pet's abilities and mutations as it ages.",
      href: "/pet-ability-calculator",
      badge: "updated" as BadgeType,
      images: [
        "https://tr.rbxcdn.com/180DAY-e8f5f57f5ae24d0c9aa254123389a218/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-f9695a43b6d9efd7db18e8c7d2812fed/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-2db67656a75bd70bdab7052f0cddbe9c/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Pet Weight Calculator",
      description: "Calculate pet weights by age and hatch. Instantly see classifications like Huge, Titanic, or Godly.",
      href: "/pet-weight-calculator",
      badge: "popular" as BadgeType,
      images: [
        "https://tr.rbxcdn.com/180DAY-e6ed9bd1f68c5327d73e7a40d3d4da1f/150/150/Image/Png/noFilter",
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>`,
      ] as [string, string, string],
    },
    {
      title: "Live Stock",
      description: "Track event shop items in real-time with alerts for your favorite items.",
      href: "/stock",
      badge: "new" as BadgeType,
      images: [
        "https://tr.rbxcdn.com/180DAY-81fda93ebd4d1088f29ad1a4383937ed/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-4e7d5552ec0e7f6561db9d5625cb46cd/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-3b51aa6169aa429ef0a6fe05c1391c1b/420/420/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Dupe List",
      description: "Complete list of all known duplicated pets along with an automatic checking calculator.",
      href: "/pet-dupe-check",
      images: [
        "https://tr.rbxcdn.com/180DAY-06d0de9e9ef4113326536705ec0f6052/150/150/Image/Png/noFilter",
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`,
      ] as [string, string, string],
    },
    {
      title: "Pet Ability Search",
      description: "Search pets by their abilities and see what each pet does.",
      href: "/pet-ability-search",
      images: [
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>`,
        "https://tr.rbxcdn.com/180DAY-f1c089147321f5b6747c803d926db01d/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-887eaf9a062cc699637323a2b2019f65/420/420/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Weather Events",
      description: "Browse all weather events to find effects and boosts.",
      href: "/weather",
      images: [
        "https://tr.rbxcdn.com/180DAY-1cbb55c1fadd6f5fde6140aeaaf61eb1/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-b434bad5b4ed75e3e40555971652ae50/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-7030b65c039b00d9d7a083ed681cf5d2/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Pet XP Calculator",
      description: "Find how long it takes to level up pets using helper pets like Capybara and Dilophosaurus.",
      href: "/pet-xp-time-calculator",
      images: [
        "https://tr.rbxcdn.com/180DAY-3b5bc6b09aec74364c0ca39eae452598/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-f49eaf91ec767e80fa1330173462ab78/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-e934aaadc94c3851ad2b9b5b3bbee382/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Egg Hatch Calculator",
      description: "Calculate egg hatch time with helper pets like Blood Kiwi and Bald Eagle.",
      href: "/egg-hatch-calculator",
      images: [
        "https://tr.rbxcdn.com/180DAY-f63b3d2717b04989a0e10b4a8d997493/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-fbaec6ff8dd560d1fbe3606355107be2/150/150/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-7239e6d39a9865c73abfe4e213d14341/150/150/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Crop Value Calculator",
      description: "Calculate crop values with every mutation included.",
      href: "/crop-value-calculator",
      images: [
        "https://tr.rbxcdn.com/180DAY-44a7a346d24abeaccbe4ef470871f965/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-921a9dd51eecd0a8d5eac7e82d06c659/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-a6519ca59a0efc4e487ba5d90429d640/420/420/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Pet Tier List",
      description: "Ranked list of all pets from best to worst based on their abilities, demand and overall usefulness.",
      href: "/pet-tier-list",
      images: [
        "https://tr.rbxcdn.com/180DAY-bfe56ed90eb31c9dbeb65f1df1a5b43b/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-299d70df8229cd37cc74b50bed595a65/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-38772c025d3f71b90348969655c7f0f3/420/420/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Codes",
      description: "Here are the codes you can redeem now for free in-game rewards.",
      href: "/codes",
      images: [
        "https://tr.rbxcdn.com/180DAY-9071f177a4d6b1d834ed8774fbebcc36/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-826d3157f73c09135ab474e59319b05a/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-82619b9b67c3fd006c96f92e5688e350/420/420/Image/Png/noFilter",
      ] as [string, string, string],
    },
    {
      title: "Guides",
      description: "Quick guides for updates, pets, crops, weather, mutations, trading, and progression.",
      href: "/guides",
      images: [
        "https://tr.rbxcdn.com/180DAY-1e1f637e0f067d230e67c5e1e98bd1a1/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-b9cfbb82fe8cbacd97e679c6a951482a/420/420/Image/Png/noFilter",
        "https://tr.rbxcdn.com/180DAY-42f86ad0deb1038e8b0e64006bde943e/420/420/Image/Png/noFilter",
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
