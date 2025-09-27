function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 text-gray-300 py-12 px-8 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        
        <div>
          <h3 className="font-semibold mb-4">Shop and Learn</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Mac</a></li>
            <li><a href="#" className="hover:underline">iPad</a></li>
            <li><a href="#" className="hover:underline">iPhone</a></li>
            <li><a href="#" className="hover:underline">Watch</a></li>
            <li><a href="#" className="hover:underline">TV & Home</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Apple Store</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Find a Store</a></li>
            <li><a href="#" className="hover:underline">Genius Bar</a></li>
            <li><a href="#" className="hover:underline">Today at Apple</a></li>
            <li><a href="#" className="hover:underline">Apple Camp</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">For Education</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Apple and Education</a></li>
            <li><a href="#" className="hover:underline">Shop for College</a></li>
          </ul>
          <h3 className="font-semibold mt-6 mb-4">For Business</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">iPhone in Business</a></li>
            <li><a href="#" className="hover:underline">Mac in Business</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">About Apple</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact Apple</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Privacy & Terms</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Sales and Refunds</a></li>
            <li><a href="#" className="hover:underline">Site Map</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-xs">
        <p>More ways to shop: Visit an <a href="#" className="underline">Apple Store</a>, call 1-800-MY-APPLE, or find a <a href="#" className="underline">reseller</a>.</p>
        <p className="mt-2">Copyright &copy; 2025 Apple Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
