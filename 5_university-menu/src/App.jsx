import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Page({ text }) {
  return <h2>{text}</h2>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");

  function toggleDropdown(name) {
    setDropdown(dropdown === name ? "" : name);
  }

  return (
    <BrowserRouter>
      <header>
        <h1>Shiv Nadar University Chennai</h1>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={menuOpen ? "show" : ""}>
          <Link to="/">Home</Link>

          <Link to="/about">About Us</Link>

          <div className="dropdown">
            <button onClick={() => toggleDropdown("academics")}>
              Academics ▼
            </button>

            {dropdown === "academics" && (
              <div className="dropdown-menu">
                <Link to="/undergraduate">Undergraduate</Link>
                <Link to="/postgraduate">Postgraduate</Link>
                <Link to="/phd">PhD</Link>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown("admissions")}>
              Admissions ▼
            </button>

            {dropdown === "admissions" && (
              <div className="dropdown-menu">
                <Link to="/eligibility">Eligibility</Link>
                <Link to="/application">Application Process</Link>
                <Link to="/dates">Important Dates</Link>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown("research")}>
              Research ▼
            </button>

            {dropdown === "research" && (
              <div className="dropdown-menu">
                <Link to="/research-areas">Research Areas</Link>
                <Link to="/publications">Publications</Link>
              </div>
            )}
          </div>

          <Link to="/campus-life">Campus Life</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Page text="Welcome to Shiv Nadar University Chennai." />} />
          <Route path="/about" element={<Page text="Learn about Shiv Nadar University Chennai." />} />
          <Route path="/undergraduate" element={<Page text="Undergraduate programmes are offered at the university." />} />
          <Route path="/postgraduate" element={<Page text="Postgraduate programmes are offered at the university." />} />
          <Route path="/phd" element={<Page text="PhD programmes are available for research scholars." />} />
          <Route path="/eligibility" element={<Page text="Check the eligibility requirements for admission." />} />
          <Route path="/application" element={<Page text="Follow the application process to apply." />} />
          <Route path="/dates" element={<Page text="Check the important dates for admissions." />} />
          <Route path="/research-areas" element={<Page text="Explore the research areas at the university." />} />
          <Route path="/publications" element={<Page text="Explore research publications from the university." />} />
          <Route path="/campus-life" element={<Page text="Discover campus life at Shiv Nadar University Chennai." />} />
          <Route path="/placements" element={<Page text="Learn about placement opportunities at the university." />} />
          <Route path="/contact" element={<Page text="Contact Shiv Nadar University Chennai for more information." />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;