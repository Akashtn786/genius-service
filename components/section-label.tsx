import { cn } from "@/lib/utils"

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-bold uppercase tracking-[0.25em] text-gold",
        className,
      )}
    >
      {children}
    </span>
  )
}
