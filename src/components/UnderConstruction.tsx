import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function UnderConstruction({ title }: { title: string }) {
  return (
    <div className="w-full max-w-4xl mx-auto text-[var(--color-foreground)] animate-fade-in pb-10">
      <Link href="/" className="inline-flex items-center text-sm text-[var(--color-muted-foreground)] hover:text-white mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Tools
      </Link>

      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      
      <div className="flex flex-col items-center justify-center py-20 bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-xl">
        <Construction className="w-16 h-16 text-[var(--color-primary)] mb-4" />
        <h2 className="text-xl font-bold mb-2">Under Construction</h2>
        <p className="text-[var(--color-muted-foreground)] max-w-md text-center text-sm">
          This tool is currently being rebuilt. Check back later for updates.
        </p>
      </div>
    </div>
  );
}
