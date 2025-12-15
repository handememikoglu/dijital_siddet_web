export default function Footer() {
    return (
        <footer>
        <div className="w-full py-6 bg-accent border-t border-gray-500/20 mt-20">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dijital Güvenli Alan. Tüm hakları saklıdır.
          </div>
        </div>
        </footer>
    )
}