import Link from "next/link";

const ProductsNavbar = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <nav className="md:w-[85%] flex flex-col gap-8 sm:flex-row items-center justify-between w-full px-4 py-7">
      {/* Right: Navigation Links */}
      <div className="flex items-center space-x-6 text-black">
        {/* Home Link */}
        <Link href="/" className="flex items-center space-x-2 font-bold hover:underline text-black">
          <span>Home</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

        {/* Shop Link */}
        <Link href="/shop" className="hover:underline text-gray-700">
          <span>Shop</span>
        </Link>
      </div>
    </nav>
    </div>

  );
};

export default ProductsNavbar;
