export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Portfolio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
