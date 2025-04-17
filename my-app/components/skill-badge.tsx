import { Card, CardContent } from "@/components/ui/card"
interface SkillBadgeProps {
  name: string
}
export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Card className="overflow-hidden border-2 hover:border-primary transition-colors">
      <CardContent className="p-4 flex items-center justify-center">
        <span className="font-medium">{name}</span>
      </CardContent>
    </Card>
  )
}