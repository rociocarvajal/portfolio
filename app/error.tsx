"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error capturado:", error.message)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-2">Algo salió mal</h1>
        <p className="text-muted-foreground mb-6">
          {error.message ||
            "Ocurrió un error inesperado. Intenta de nuevo más tarde."}
        </p>
        <Button onClick={() => reset()} className="gap-2">
          Intentar de nuevo
        </Button>
      </div>
    </div>
  )
}
