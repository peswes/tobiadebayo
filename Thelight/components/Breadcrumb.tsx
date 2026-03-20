import Link from "next/link"

type BreadcrumbProps = {
  currentPage: string
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <Link href="/">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="breadcrumb-home-icon" aria-hidden="true">
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5 10.5V20h14v-9.5" />
        </svg>
        <span>Home</span>
      </Link>
      <span className="breadcrumb-separator" aria-hidden="true">/</span>
      <span aria-current="page">{currentPage}</span>
    </nav>
  )
}
