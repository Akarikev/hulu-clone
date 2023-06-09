import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  TrendingUpIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "../components/HeaderItem";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center justify-between ">
      <div className="flex flex-grow justify-evenly max-w-2xl gap-4 ">
        <HeaderItem title="HOME" Icon={HomeIcon}  />
        <HeaderItem title="TRENDING" Icon={TrendingUpIcon}  />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon}  />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}  />
        <HeaderItem title="SEARCH" Icon={SearchIcon}  />
        <HeaderItem title="ACCOUNT" Icon={UserIcon}  />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="logo"
        className="object-contain"
      />
    </header>
  );
}

export default Header;
