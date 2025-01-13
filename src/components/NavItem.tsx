import Link from "next/link";
import React from "react";
import { Button } from "react-bootstrap";

const NavItem = ({ href, buttonText }: { href: string; buttonText: string }) => {
  return (
    <div className="d-flex flex-column align-items-center p-3 border rounded mb-3 bg-white">
      <Link href={href}>
        <Button variant="secondary">{buttonText}</Button>
      </Link>
    </div>
  );
};

export default NavItem;
