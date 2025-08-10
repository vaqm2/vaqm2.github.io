import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">

            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/resume" className="text-gray-600 hover:text-gray-900">
              Resume
            </Link>
            <Link href="/publications" className="text-gray-600 hover:text-gray-900">
              Publications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
