import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-start">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 flex items-center">
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <div className="grow"></div>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 flex items-center">
        <Link href="/" className="hover:underline">
          Resume
        </Link>
        .
      </h2>
    </div>
  );
};

export default Header;
