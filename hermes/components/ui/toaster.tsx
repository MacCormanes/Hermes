"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="bg-orange-200 border-red-600">
            <div className="grid gap-1 text-red-600 font-montserrat">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-base font-medium">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose/>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
