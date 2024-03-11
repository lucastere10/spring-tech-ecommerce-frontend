import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function RequireLoginToast() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Faz o login irmão", {
          description: Date.now(),
          action: {
            label: "Desfazer",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}
