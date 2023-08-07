import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">Abdullah's Portfolio</Link>
      </div>
      <a href="https://flowcv.com/resume/r6cf39cin0" className="cta-btn">
        Resume
      </a>
    </div>
  );
};

export default Navbar;
