const navItems = [
  "Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"
]

function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black bg-opacity-80 fixed top-0 left-0 w-full z-10">
      <div>
        <span className="text-2xl font-bold"></span>
      </div>
      <ul className="flex space-x-6">
        {navItems.map((item, i) => (
          <li key={i} className="hover:text-gray-400 cursor-pointer">{item}</li>
        ))}
      </ul>
      <div className="space-x-4 flex items-center ">
        <span className="material-icons text-lg hover:cursor-pointer">search</span>
        <span className="material-icons text-lg hover:cursor-pointer">Bag</span>
      </div>
    </nav>
  )
}

export default Nav
