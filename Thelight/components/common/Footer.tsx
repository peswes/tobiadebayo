"use client"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-zinc-900 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <img src="/images/black-logo.png" alt="logo" className="h-8" />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Thank you for visiting my website. Reach out via the contact page.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-base mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/projects" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Artworks</a></li>
                <li><a href="/commission" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Commission</a></li>
                <li><a href="/afeproject" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">AFEProject</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-base mb-3">Learn More</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">About</a></li>
                <li><a href="/publications" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Publications</a></li>
                <li><a href="/contact" className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 pt-8 border-t">© Tobi Adebayo Studios, {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
