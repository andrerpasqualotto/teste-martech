import { Button } from "@/components/ui/button"
 
interface LinkProps {
    href: string,
    text: string
}
export function Link({href, text}: LinkProps) {
  return (
    <Button variant={'link'} asChild>
      <a href={href}>{text}</a>
    </Button>
  )
}