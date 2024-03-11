import { toast } from "sonner"

export function UserLoginSucessToast() {
  toast("Bem vindo de volta!", {
    position: "top-center",
    action: {
      label: "fechar",
      onClick: () => console.log("Undo"),
    },
  })

}
