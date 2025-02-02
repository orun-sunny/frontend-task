import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-11 bg-[#002045]">
        <div className="container">
          <div className="flex gap-2 justify-between">
            <Image
              src="/assets/brand.svg"
              alt="Brand Logo"
              width={172}
              height={48}
              className="object-contain"
              priority
              unoptimized
            />
            <div className="text-[#00e9e2] flex gap-4 font-medium">
              <Link className="font-bold" href="/">
                Our Solutions
              </Link>
              <Link className="hidden md:block" href="/">
                AnyCaas
              </Link>
              <Link className="hidden md:block" href="/">
                AnyBaas
              </Link>
              <Link className="hidden md:block" href="/">
                AnyPaas
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00152d] py-6">
        <div className="container">
          <div className="flex justify-between text-[#1f80f0] text-sm font-bold">
            <span className="flex gap-1">
              &copy;
              {new Date().getFullYear()}
              <span className="hidden md:block">All rights reserved.</span>
              <span className="hidden lg:block">Any Technology Pte Ltd.</span>
            </span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
