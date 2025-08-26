import Link from 'next/link'

const navItems = {
  '/': {
    name: 'rstanleyinouye.com',
  }
}

export function Navbar() {
  return (
    <aside className="h-[7vh] flex flex-row bg-[#4F7C4A]">
      <div className="lg:sticky lg:top-20 flex align-middle">
        <nav className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
			<div className="flex space-x-0 pr-10">
				{Object.entries(navItems).map(([path, { name }]) => {
				return (
				<Link
				key={path}
				href={path}
				className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 relative py-1 px-2 m-1 font-bold"
				>
				{name}
				</Link>
				)
				})}
			</div>
        </nav>
      </div>
    </aside>
  )
}
