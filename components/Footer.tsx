"use client";
import {
  ExpandLess,
  ExpandMore,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
type Props = {};

function Footer({}: Props) {
  const [Find, setFind] = useState(false);
  const [Categories, setCategories] = useState(false);
  const [Customer, setCustomer] = useState(false);

  const handleFind = () => {
    setFind(!Find);
  };

  const handleCategories = () => {
    setCategories(!Categories);
  };

  const handleCustomer = () => {
    setCustomer(!Customer);
  };
  return (
    <footer>
      <div className="lg:flex hidden justify-between mb-2">
        <div className="mt-16 ml-11">
          <h1 className="font-light">
            <LocalPhoneOutlinedIcon
              style={{ color: "#3B82F6", fontSize: "2rem" }}
            />
            Got Questions? Call Us!{" "}
          </h1>
          <a className="ml-10 text-xl" href="tel:+917233999777">
            +91-7233999777
          </a>

          <h1 className="mt-20 ml-7 font-bold">Contact Info</h1>
          <p className="w-60 ml-7">
            K-70, Site 5, UPSIDC Kasna, Greater Noida, G.B. Nagar-201308, Uttar
            Pradesh, India
          </p>

          <span className="flex ml-7 mt-4 space-x-5">
            <Link href="https://www.facebook.com/reliantaqua">
              <Facebook style={{ color: "GrayText" }} />
            </Link>
            <Link href="https://x.com/reliantaqua">
              <Twitter style={{ color: "GrayText" }} />
            </Link>
            <Link href="https://www.instagram.com/reliantaquaro">
              <Instagram style={{ color: "GrayText" }} />
            </Link>
            <WhatsApp style={{ color: "GrayText" }} />
            <Link href="https://www.youtube.com/channel/UCuyusKjPO6_123LhjrdW1Rw">
              <YouTube style={{ color: "GrayText" }} />
            </Link>
          </span>
        </div>

        <div className="mt-10">
          <h1 className="font-bold mb-2 text-blue-500">Find It Fast</h1>
          <ul className="font-light text-sm space-y-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h1 className="font-bold mb-2 text-blue-500">Categories</h1>
          <ul className="font-light text-sm space-y-3">
            <li>
              <Link href="/">ABS Tank</Link>
            </li>
            <li>
              <Link href="/">Copper Tank</Link>
            </li>
            <li>
              <Link href="/">Reliant</Link>
            </li>
            <li>
              <Link href="/">Stainless Steel Tank</Link>
            </li>
            <li>
              <Link href="/">Wate Purifier</Link>
            </li>
            <li>
              <Link href="/">Commercial RO</Link>
            </li>
            <li>
              <Link href="/">Domestic RO</Link>
            </li>
          </ul>
        </div>
        <div className="mt-10 mr-7">
          <h1 className="font-bold mb-2 text-blue-500">Customer Care</h1>
          <ul className="font-light text-sm space-y-3">
            <li>
              <Link href="/">My Account</Link>
            </li>
            <li>
              <Link href="/">Track Your Order</Link>
            </li>
            <li>
              <Link href="/">Customer Service</Link>
            </li>
            <li>
              <Link href="/">Product Support</Link>
            </li>
            <li>
              <Link href="/">Dealer Enquiry</Link>
            </li>
            <li>
              <Link href="/">Enquiry/Feedback</Link>
            </li>
            <li>
              <Link href="/">Locate Dealer</Link>
            </li>
            <li>
              <Link href="/">Service Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-200 lg:hidden p-3">
        <ListItem
          button
          onClick={handleFind}
          className="bg-white text-blue-500 rounded-t-xl"
        >
          <ListItemText
            primary="Find It Fast"
            primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "700" }}
          />
          {Find ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={Find}
          className="bg-white rounded-b-xl rounded-bl-xl"
          timeout="auto"
          unmountOnExit
        >
          <List className="text-blue-500" component="div" disablePadding>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Home</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Shop</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Blog</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">About</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Contact</span>
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          onClick={handleCategories}
          className="bg-white text-blue-500 mt-1 rounded-t-xl"
        >
          <ListItemText
            primary="Categories"
            primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "700" }}
          />
          {Categories ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={Categories}
          className="bg-white rounded-b-xl rounded-bl-xl"
          timeout="auto"
          unmountOnExit
        >
          <List className="text-blue-500" component="div" disablePadding>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">ABS Tank</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Copper Tank</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Reliant</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Stainless Steel Tank</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Water Purifier</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Commercial RO</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Domestic RO</span>
              </Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          button
          onClick={handleCustomer}
          className="bg-white text-blue-500 mt-1 mb-2 rounded-t-xl"
        >
          <ListItemText
            primary="Customer Care"
            primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: "700" }}
          />
          {Customer ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={Customer}
          className="bg-white rounded-b-xl rounded-bl-xl"
          timeout="auto"
          unmountOnExit
        >
          <List className="text-blue-500" component="div" disablePadding>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">My Account</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Track Your Order</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Customer Service</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Product Support</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Dealer Enquiry</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Enquiry/Feedback</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Locate Dealer</span>
              </Link>
            </ListItem>
            <ListItem button className="pl-4">
              <Link href="/">
                <span className="text-sm">Service Policy</span>
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <div className="flex justify-center space-x-5 my-9">
          <Link href="https://www.facebook.com/reliantaqua">
            <Facebook style={{ color: "1877F2", fontSize: '1.8rem' }} />
          </Link>
          <Link href="https://x.com/reliantaqua">
            <Twitter style={{ color: "3B82F6", fontSize: '1.8rem' }} />
          </Link>
          <Link href="https://www.instagram.com/reliantaquaro">
            <Instagram style={{ color: "orange", fontSize: '1.8rem' }} />
          </Link>
          <WhatsApp style={{ color: "green", fontSize: '1.8rem' }} />
          <Link href="https://www.youtube.com/channel/UCuyusKjPO6_123LhjrdW1Rw">
            <YouTube style={{ color: "red", fontSize: '1.8rem' }} />
          </Link>
        </div>

        <div className="flex flex-col p-10 bg-white justify-center items-center">
          <h1 className="text-sm">Got Questions? Call Us!</h1>
          <a className="text-2xl" href="tel:+917233999777">+91-7233999777</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
