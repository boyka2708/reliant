"use client";
import Image from "next/image";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Navigation from "./Navigation";
import { Drawer, List, ListItem, ListItemText, Collapse } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useStore } from "@/store/store";
import { Product } from "@/Product";
import Data from "../data.json";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [openProducts, setOpenProducts] = useState(false);
  const [openTechnology, setOpenTechnology] = useState(false);
  const [openMedia, setOpenaMedia] = useState(false);
  const [openDealer, setOpenDealer] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState<boolean>(false);
  const cart = useStore((state) => state.cart);
  const total = cart.reduce((acc: number, currentProduct: Product) => {
    const priceNumber = parseFloat(currentProduct.price.replace(/,/g, ""));
    return acc + priceNumber;
  }, 0);
  const products: Product[] = Data;

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (search && inputRef.current) {
      inputRef.current.focus();
    }
  }, [search]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filteredSuggestions = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, products]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleProductsClick = () => {
    setOpenProducts(!openProducts);
  };

  const handleTechnologyClick = () => {
    setOpenTechnology(!openTechnology);
  };

  const handleMediaClick = () => {
    setOpenaMedia(!openMedia);
  };

  const handleDealerClick = () => {
    setOpenDealer(!openDealer);
  };

  const handleSupportClick = () => {
    setOpenSupport(!openSupport);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const showSearch = () => {
    setSearch(!search);
  };
  const highlightMatch = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="font-bold text-blue-500">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };
  return (
    <header>
      <div className="flex flex-col md:flex-row justify-between text-sm font-normal text-gray-600 mr-2 p-2">
        <a
          href="tel:+917233999777"
          className="text-center text-sm sm:text-base mb-2"
        >
          Call For Free Demo: +91-7233999777
        </a>
        <div className="justify-around items-center flex space-x-1 sm:space-x-5">
          <Link
            href="/contact"
            className="font-semibold text-sm sm:text-sm text-blue-500"
          >
            Free Demo
          </Link>
          <p className="text-gray-300">|</p>
          <p className="text-sm sm:text-sm">
            <LocalShippingOutlinedIcon
              style={{ fontSize: "1rem" }}
              className="text-gray-500 mr-1"
            />
            Track Your Order
          </p>
          <p className="text-gray-300">|</p>
          <Link href="/account" className="text-sm sm:text-sm">
            <PersonOutlineOutlinedIcon
              style={{ fontSize: "1rem" }}
              className="text-gray-500 mr-1"
            />{" "}
            My Account
          </Link>
        </div>
      </div>
      <hr />
      <div
        className={
          isScrolled
            ? `bg-white z-10 shadow-md duration-500 py-3 w-full fixed hidden xl:flex justify-center space-x-8 top-0 items-center`
            : `mt-7 hidden xl:flex justify-center space-x-8 items-center`
        }
      >
        <Link href="/">
          <Image
            className="ml-6"
            src="/images/Reliant-Logo-1.png"
            alt="Logo"
            width={200}
            height={100}
          />
        </Link>
        <button onClick={() => setIsDrawerOpen(true)}>
          {" "}
          <MenuOutlinedIcon />
        </button>
        <form className="relative z-20 border-blue-500 border-2 bg-blue-500 flex items-center rounded-3xl">
          <input
            placeholder="Search For Products"
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-96 rounded-3xl p-2 text-left text-sm outline-none"
          />
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border rounded-b-3xl shadow-md z-10">
              {suggestions.map((product) => (
                <Link key={product.title} href={`/${product.title}`}>
                  <span className="block p-2 hover:bg-gray-200">
                    {highlightMatch(product.title, searchQuery)}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </form>

        <FavoriteBorderIcon style={{ fontSize: "2rem" }} />
        <Link href="/cart">
          <span className="relative mr-3">
            <ShoppingCartOutlinedIcon style={{ fontSize: "2rem" }} />
            {cart.length > 0 ? (
              <p className="text-xs absolute top-[6px] left-3 bg-black text-white border flex items-center px-[6px] rounded-full">
                {cart.length}
              </p>
            ) : (
              <></>
            )}
          </span>{" "}
        </Link>
        <p className="font-semibold">&#8377; {total}</p>
      </div>

      <div
        className={
          isScrolled
            ? `xl:hidden z-10 py-2 w-full duration-500 shadow-md bg-white fixed top-0 flex justify-between`
            : `xl:hidden py-1 flex justify-between`
        }
      >
        <button className="ml-6" onClick={() => setIsDrawerOpen(true)}>
          {" "}
          <MenuOutlinedIcon />
        </button>
        <div className={search ? `block w-2/4` : `hidden`}>
          <input
            ref={inputRef}
            placeholder="Search For Products"
            type="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full rounded-3xl p-2 text-left text-sm border-blue-500 focus:border-none border"
          />
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border rounded-b-3xl shadow-md z-10">
              {suggestions.map((product) => (
                <Link key={product.title} href={`/${product.title}`}>
                  <span className="block p-2 hover:bg-gray-200">
                    {highlightMatch(product.title, searchQuery)}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex space-x-5 mr-6">
          <span className="cursor-pointer" onClick={showSearch}>
            <SearchOutlinedIcon
              style={{ fontSize: "1.5rem", color: "GrayText" }}
            />
          </span>

          <Link href="/account">
            <PersonOutlineOutlinedIcon
              style={{ fontSize: "1.5rem", color: "GrayText" }}
            />
          </Link>

          <Link href="/cart">
            <span className="relative">
              <ShoppingCartOutlinedIcon
                style={{ fontSize: "1.5rem", color: "GrayText" }}
              />
              {cart.length > 0 ? (
                <p className="text-xs absolute top-[6px] left-3 bg-black text-white border flex items-center px-[6px] rounded-full">
                  {cart.length}
                </p>
              ) : (
                <></>
              )}
            </span>
          </Link>
        </div>
      </div>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <div className="w-64 bg-white min-h-screen text-black">
          <List>
            <ListItem button>
              <Link href="/">
                <span className="text-sm">Home</span>
              </Link>
            </ListItem>
            <ListItem button>
              <Link href="/about">
                <span className="text-sm">About</span>
              </Link>
            </ListItem>
            <ListItem button onClick={handleProductsClick}>
              <ListItemText
                primary="Products"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
              {openProducts ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openProducts} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  className="pl-4 flex flex-col items-start bg-slate-100"
                >
                  {products.map((product) => (
                    <Link key={product.title} href={`/${product.title}`}>
                      <span className="text-sm">{product.title}</span>
                      <hr />
                    </Link>
                  ))}
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <Link href="/shop">
                <span className="text-sm">Shop</span>
              </Link>
            </ListItem>
            <ListItem button onClick={handleTechnologyClick}>
              <ListItemText
                primary="Technology"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
              {openTechnology ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openTechnology} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/reverse-osmosis">
                    <span className="text-sm">Reverse Osmosis</span>
                  </Link>
                </ListItem>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/ultravoilet-uv">
                    <span className="text-sm">Ultravoilet (UV)</span>
                  </Link>
                </ListItem>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/ultrafiltration-uf">
                    <span className="text-sm">Ultrafiltration</span>
                  </Link>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <Link href="/machinery">
                <span className="text-sm">Machinery</span>
              </Link>
            </ListItem>
            <ListItem button onClick={handleMediaClick}>
              <ListItemText
                primary="Media"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
              {openMedia ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openMedia} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/">
                    <span className="text-sm">Press Releases</span>
                  </Link>
                </ListItem>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/video-gallery">
                    <span className="text-sm">Video Gallery</span>
                  </Link>
                </ListItem>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/brand-ambassador">
                    <span className="text-sm">Brand Ambassador</span>
                  </Link>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleDealerClick}>
              <ListItemText
                primary="Dealer/Franchise"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
              {openDealer ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openDealer} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/locate-dealer">
                    <span className="text-sm">Locate Dealer</span>
                  </Link>
                </ListItem>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/dealer-enquiry">
                    <span className="text-sm">Dealer Enquiry</span>
                  </Link>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleSupportClick}>
              <ListItemText
                primary="Support & Services"
                primaryTypographyProps={{ fontSize: "0.9rem" }}
              />
              {openSupport ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSupport} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/contact">
                    <span className="text-sm">Contact</span>
                  </Link>
                </ListItem>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/">
                    <span className="text-sm">Enquiry/Feedback</span>
                  </Link>
                </ListItem>
                <ListItem button className="pl-4 bg-slate-100">
                  <Link href="/service-policy">
                    <span className="text-sm">Service Policy</span>
                  </Link>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <Link href="/careers">
                <span className="text-sm">Careers</span>
              </Link>
            </ListItem>
          </List>
        </div>
      </Drawer>

      <Navigation />
    </header>
  );
}

export default Header;
