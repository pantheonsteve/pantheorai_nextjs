import { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavItem from "./NavItem";

export interface ExampleOffcanvasProps {
  className?: string | undefined;
}

const ExampleOffcanvas: React.FC<ExampleOffcanvasProps> = ({ className }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow((s) => !s)} className={className}>
        Select App
      </Button>
      <Offcanvas placement="end" show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="h5">Pantheor AI Apps</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavItem href="/chat" buttonText="Chat with Gong Call Index" />
          <NavItem href="/gong" buttonText="Summarize Gong Calls" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ExampleOffcanvas;
