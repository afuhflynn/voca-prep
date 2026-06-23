import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav className="w-full h-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 w-[8rem]">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">VocaPrep</h2>
        </Link>
        <Image
          src={"/user-avatar.jpeg"}
          alt="cover-image"
          width={90}
          height={90}
          className="rounded-full object-fit size-[50px]"
        />
      </nav>

      {children}
    </div>
  );
};

export default Layout;
