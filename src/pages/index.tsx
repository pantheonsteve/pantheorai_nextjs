import Head from "next/head";
import Container from "react-bootstrap/Container";
import AppGuides from "@/components/AppGuides";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExampleComponents from "@/components/ExampleComponents";
import StickySidebar from "@/components/StickySidebar";

export default function Home() {
  return (
    <div className="d-flex">
                {/* Sidebar */}
            <StickySidebar />

            {/* Main Content */}
            <div
                className="flex-grow-1 p-4"
                style={{ marginLeft: '280px', overflowY: 'scroll' }}
            >
<h1>Pantheorai</h1>
            </div>
          </div>
  );
}
