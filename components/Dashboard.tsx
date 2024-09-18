import React from "react";

type Props = {
  name: string;
};

export default function Dash({ name }: Props) {
  return (
    <div>
      <h1>
        Hello {name}
      </h1>
      <p>
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>
  );
}
