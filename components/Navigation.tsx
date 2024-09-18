import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Product } from "@/Product";
import Link from "next/link";
import * as React from "react";
import Data from "../data.json";
function Navigation() {
  const products: Product[] = Data;

  const media: { title: string; href: string }[] = [
    {
      title: "Press Releases",
      href: "/",
    },
    {
      title: "Video Gallery",
      href: "/video-gallery",
    },
    {
      title: "Brand Ambassador",
      href: "/brand-ambassador",
    },
  ];

  const dealer: { title: string; href: string }[] = [
    {
      title: "Locate Dealer",
      href: "/locate-dealer",
    },
    {
      title: "Dealer Enquiry",
      href: "/dealer-enquiry",
    },
  ];

  const services: { title: string; href: string }[] = [
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Enquiry/Feedback",
      href: "/",
    },
    {
      title: "Service Policy",
      href: "/service-policy",
    },
  ];

  const technology: { title: string; href: string }[] = [
    {
      title: "Reverse Osmosis (RO)",
      href: "/reverse-osmosis",
    },
    {
      title: "Ultravoilet (UV)",
      href: "/ultravoilet-uv",
    },
    {
      title: "Ultrafiltration",
      href: "/ultrafiltration-uf",
    },
  ];

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";
  return (
    <nav className="mt-7 mb-2 hidden xl:flex mx-auto w-11/12 rounded-2xl text-sm font-medium bg-blue-500 justify-evenly items-center space-x-2">
      <Link
        href="/"
        className="hover:bg-blue-400 text-white rounded-xl py-[10px] px-3"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="hover:bg-blue-400 text-white rounded-xl py-[10px] px-3"
      >
        About
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xl text-white bg-blue-500">
              Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[350px]">
                {products.map((product) => (
                  <Link key={product.title} href={`/${product.title}`}>
                    <ListItem>{product.title}</ListItem>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/shop"
        className="hover:bg-blue-400 font-medium text-white text-sm rounded-xl py-[10px] px-3"
      >
        Shop
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="p-1">
            <NavigationMenuTrigger className="bg-blue-500 text-white hover:bg-blue-400 px-3 rounded-xl py-[10px]">
              Technology
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-44">
                {technology.map((tech) => (
                  <Link key={tech.title} href={tech.href}>
                    <ListItem>{tech.title}</ListItem>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/machinery"
        className="bg-blue-500 text-sm text-white hover:bg-blue-400 px-3 rounded-xl py-[10px]"
      >
        Machinery
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xl text-white hover:bg-blue-400 px-3 py-[10px] bg-blue-500">
              Media
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-44">
                {media.map((media) => (
                  <Link key={media.title} href={media.href}>
                    <ListItem>{media.title}</ListItem>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xl text-white px-3 py-[10px] bg-blue-500">
              Dealer/Franchise
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-44">
                {dealer.map((dealer) => (
                  <Link key={dealer.title} href={dealer.href}>
                    <ListItem>{dealer.title}</ListItem>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xl px-3 text-white py-[10px] bg-blue-500 hover:bg-blue-400">
              Support & Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-44">
                {services.map((services) => (
                  <Link key={services.title} href={services.href}>
                    <ListItem>{services.title}</ListItem>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/careers"
        className="hover:bg-blue-400 text-white bg-blue-500 rounded-xl py-[10px] px-3"
      >
        Careers
      </Link>
    </nav>
  );
}

export default Navigation;
