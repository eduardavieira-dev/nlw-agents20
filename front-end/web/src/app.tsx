import { Button } from "./components/ui/button";
import { Wand } from 'lucide-react'

export function App() {
  return (
    <div>
      <Button>Hello world</Button>
      <Button variant="destructive">Hello world</Button>
      <Button variant="outline">Hello world</Button>
      <Button variant="secondary">Hello world</Button>
      <Button variant="ghost">Hello world</Button>
      <Button variant="link">Hello world</Button>
      <Button size="sm">Hello world</Button>
      <Button size="lg">Hello world</Button>
      <Button size="icon">
        <Wand className="h-4 w-4" /></Button>
    </div>
  )
}
