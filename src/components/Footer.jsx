import { Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-4 border-t">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 text-sm mb-2">
          Hecho con ❤️ por{' '}
          <a
            href="https://www.instagram.com/drusus13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            Mauro De Angelis
          </a>
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/drususdark/calculadora-precios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
   )
}
