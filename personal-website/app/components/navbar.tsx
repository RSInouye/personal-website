import Link from 'next/link'

const navItems = {
  '/': {
    name: 'rstanleyinouye.com',
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px]] bg-[#4F7C4A] h-16 align-middle">
      <div>
        <nav>
 	  <div className="align-middle">
	    {Object.entries(navItems).map(([path, { name }]) => {
	      return (
		<Link
		  key={path}
		  href={path}
		  className=""
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
