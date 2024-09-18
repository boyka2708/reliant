"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../../store/store"; // Adjust the path to your Zustand store
import {
  AccountBoxOutlined,
  Dashboard,
  House,
  Logout,
  ShoppingBag,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Dash from "@/components/Dashboard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import OrdersMenu from "@/components/Orders";
import AddressMenu from "@/components/AddressMenu";
import AccountDetailsMenu from "@/components/AccountDetailsMenu";

const AccountPage = () => {
  const { user, signOutUser } = useStore();
  const router = useRouter();
  const [state, setState] = useState("");
  const handleLogout = () => {
    router.push("/sign-in");
    signOutUser();
  };
  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  if (!user) return null;

  const render = () => {
    switch (state) {
      case "Dashboard":
        return <Dash name={user.displayName!} />;
      case "Orders":
        return <OrdersMenu/>;
      case "Address":
        return <AddressMenu/>;
      case "Account":
        return <AccountDetailsMenu/>;
      default:
        return <Dash name={user.displayName!} />;
    }
  };

  const handleSelectChange = (value:string) => {
    if(value == "Logout"){
      handleLogout();
    }
   setState(value);
  };
  return (
    <div>
      <h1 className="text-3xl text-blue-500 text-center my-10">My Account</h1>
      <div className="my-6 flex flex-col md:flex-row space-x-10 mx-6">
        <section className="md:hidden mx-auto">
          <Select onValueChange={(value) => handleSelectChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Menu" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dashboard">Dashboard</SelectItem>
              <SelectItem value="Orders">Orders</SelectItem>
              <SelectItem value="Address">Address</SelectItem>
              <SelectItem value="Account">Account Details</SelectItem>
              <SelectItem value="Logout">Logout</SelectItem>
            </SelectContent>
          </Select>
        </section>
        <section className="w-2/5 hidden md:block space-y-3">
          <span
            onClick={() => setState("Dashboard")}
            className="flex cursor-pointer items-center justify-between"
          >
            <p>Dashboard</p>
            <Dashboard
              fontSize="small"
              color="disabled"
              className="hover:text-black"
            />
          </span>
          <hr />
          <span onClick={() => setState("Orders")} className="flex items-center justify-between">
            <p>Orders</p>
            <ShoppingBag
              fontSize="small"
              className="hover:text-black"
              color="disabled"
            />
          </span>
          <hr />
          <span onClick={() => setState("Address")} className="flex items-center justify-between">
            <p>Address</p>
            <House
              fontSize="small"
              className="hover:text-black"
              color="disabled"
            />
          </span>
          <hr />
          <span
            onClick={() => setState("Account")}
            className="flex items-center justify-between"
          >
            <p>Account Details</p>
            <AccountBoxOutlined
              fontSize="small"
              className="hover:text-black"
              color="disabled"
            />
          </span>
          <hr />
          <span
            onClick={handleLogout}
            className="flex items-center justify-between"
          >
            <p>Logout</p>
            <Logout
              fontSize="small"
              className="hover:text-black"
              color="disabled"
            />
          </span>
          <hr />
        </section>

        <section>{render()}</section>
      </div>
    </div>
  );
};

export default AccountPage;
