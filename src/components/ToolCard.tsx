import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type BadgeType = "updated" | "popular" | "new";

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  badge?: BadgeType;
  images: [string, string, string]; // central, left (rotated), right (rotated)
}

export default function ToolCard({ title, description, href, badge, images }: ToolCardProps) {
  return (
    <li className="h-full list-none">
      <article className="h-full">
        <Link
          href={href}
          aria-label={`Open ${title}`}
          className="cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring/50 bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] border-[3px] border-[var(--color-border)]/60 border-b-[var(--color-border)]/20 group block w-full h-full p-0 hover:scale-[1.03] active:scale-95 transition-all duration-300"
        >
          <div className="text-card-foreground flex flex-col gap-6 rounded-xl py-6 relative h-full bg-transparent border-0 shadow-none">
            {badge === "updated" && (
              <span className="justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 absolute top-2 right-2 flex items-center gap-1 border-blue-400/30 text-blue-400 bg-blue-400/10 rounded">
                <span>🔄</span>
                <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-sky-500 to-blue-500">Updated</span>
              </span>
            )}
            {badge === "popular" && (
              <span className="justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 absolute top-2 right-2 flex items-center gap-1 border-orange-400/30 text-orange-400 bg-orange-400/10 rounded">
                <span>🔥</span>
                <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">Popular</span>
              </span>
            )}
            {badge === "new" && (
              <span className="justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 absolute top-2 right-2 flex items-center gap-1 border-green-400/30 text-green-400 bg-green-400/10 rounded">
                <span>🌱</span>
                <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-emerald-500 to-green-500">New</span>
              </span>
            )}

            <div className="px-6 flex justify-center items-center">
              <div className="grid place-items-center" aria-hidden="true">
                <div className="col-start-1 row-start-1 z-20 transition-transform duration-300 group-hover:-translate-y-2 group-active:-translate-y-2">
                  <img src={images[0]} alt="" loading="lazy" className="h-20 w-20 object-cover" width="80" height="80" />
                </div>
                <div className="col-start-1 row-start-1 z-10 transition-all duration-300 opacity-20 group-hover:opacity-100 group-active:opacity-100 scale-75 group-hover:scale-100 group-active:scale-100 -translate-x-9 group-hover:-translate-x-12 group-active:-translate-x-12 group-hover:-rotate-12 group-active:-rotate-12">
                  {images[1].startsWith('<svg') ? (
                    <div dangerouslySetInnerHTML={{ __html: images[1] }} className="h-16 w-16 text-green-500" />
                  ) : (
                    <img src={images[1]} alt="" loading="lazy" className="h-20 w-20 object-cover" width="80" height="80" />
                  )}
                </div>
                <div className="col-start-1 row-start-1 z-10 transition-all duration-300 opacity-20 group-hover:opacity-100 group-active:opacity-100 scale-75 group-hover:scale-100 group-active:scale-100 translate-x-9 group-hover:translate-x-12 group-active:translate-x-12 group-hover:rotate-12 group-active:rotate-12">
                  {images[2].startsWith('<svg') ? (
                    <div dangerouslySetInnerHTML={{ __html: images[2] }} className="h-16 w-16 text-red-500" />
                  ) : (
                    <img src={images[2]} alt="" loading="lazy" className="h-20 w-20 object-cover" width="80" height="80" />
                  )}
                </div>
              </div>
            </div>

            <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6">
              <div className="font-semibold text-lg text-wrap flex items-center gap-1 group-hover:text-[var(--color-primary)] group-active:text-[var(--color-primary)] transition-colors duration-300">
                {title}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1" />
              </div>
              <div className="text-[var(--color-muted-foreground)] text-sm sr-only sm:not-sr-only text-left text-wrap whitespace-normal">
                {description}
              </div>
            </div>
          </div>
        </Link>
      </article>
    </li>
  );
}
