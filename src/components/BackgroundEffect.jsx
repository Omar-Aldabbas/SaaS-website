import { cn } from "../lib/utils"

export const BackgroundEffect = () => {

  return (
    <div className={cn(
            "inset-0 bg-gradient-to-br from-primary/95 via-background to-primary/5 ",
            "bg-[length:150%_150%] animate-gradient-shift fixed -z-10"
          )}></div>
  )
}