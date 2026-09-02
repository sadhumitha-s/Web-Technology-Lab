import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Page({ title, children }) {
  return (
    <section className="page">
      <h2>{title}</h2>
      <div className="page-content">{children}</div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState("");

  function toggleDropdown(name) {
    setDropdown(dropdown === name ? "" : name);
  }

  function closeMenu() {
    setMenuOpen(false);
    setDropdown("");
  }

  return (
    <BrowserRouter>
      <header>
        <div className="header-content">
          <h1>Shiv Nadar University Chennai</h1>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav className={menuOpen ? "show" : ""}>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>

            <div className="dropdown">
              <button onClick={() => toggleDropdown("academics")}>
                Academics ▼
              </button>

              {dropdown === "academics" && (
                <div className="dropdown-menu">
                  <Link to="/undergraduate" onClick={closeMenu}>
                    Undergraduate
                  </Link>
                  <Link to="/postgraduate" onClick={closeMenu}>
                    Postgraduate
                  </Link>
                  <Link to="/phd" onClick={closeMenu}>
                    PhD
                  </Link>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button onClick={() => toggleDropdown("admissions")}>
                Admissions ▼
              </button>

              {dropdown === "admissions" && (
                <div className="dropdown-menu">
                  <Link to="/eligibility" onClick={closeMenu}>
                    Eligibility
                  </Link>
                  <Link to="/application" onClick={closeMenu}>
                    Application Process
                  </Link>
                  <Link to="/dates" onClick={closeMenu}>
                    Important Dates
                  </Link>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button onClick={() => toggleDropdown("research")}>
                Research ▼
              </button>

              {dropdown === "research" && (
                <div className="dropdown-menu">
                  <Link to="/research-areas" onClick={closeMenu}>
                    Research Areas
                  </Link>
                  <Link to="/publications" onClick={closeMenu}>
                    Publications
                  </Link>
                </div>
              )}
            </div>

            <Link to="/campus-life" onClick={closeMenu}>
              Campus Life
            </Link>

            <Link to="/placements" onClick={closeMenu}>
              Placements
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Page title="Welcome to Shiv Nadar University Chennai">
                <p>
                  Shiv Nadar University Chennai is a state-private university
                  established under the Shiv Nadar University Act, 2018, by the
                  Tamil Nadu Legislative Assembly. The university focuses on
                  innovation, research, academic excellence and creativity, with
                  the aim of developing socially conscious leaders who can
                  address future challenges.
                </p>

                <p>
                  The university provides a multidisciplinary learning
                  environment where students can develop their academic,
                  professional and personal abilities. Along with classroom
                  learning, students have opportunities to participate in
                  research, entrepreneurship, sports, clubs and other
                  activities that contribute to an all-round university
                  experience.
                </p>
              </Page>
            }
          />

          <Route
            path="/about"
            element={
              <Page title="About Shiv Nadar University Chennai">
                <p>
                  Shiv Nadar University Chennai is part of the Shiv Nadar
                  Foundation and was established with the goal of creating a
                  centre of excellence in higher education. The university
                  seeks to combine academic rigour with research, innovation
                  and interdisciplinary learning.
                </p>

                <p>
                  Its campus provides modern academic infrastructure along
                  with libraries, laboratories, sports facilities, clubs,
                  hostels and other student services. The university also
                  encourages students to interact with people from different
                  backgrounds and develop a broad perspective on society and
                  the world.
                </p>

                <p>
                  The university's academic community includes experienced
                  faculty, researchers and distinguished mentors. Its stated
                  objectives include supporting research and scholarly work
                  that creates new knowledge and addressing important problems
                  facing India and the global community.
                </p>
              </Page>
            }
          />

          <Route
            path="/undergraduate"
            element={
              <Page title="Undergraduate Programmes">
                <p>
                  Shiv Nadar University Chennai offers undergraduate
                  programmes across engineering, commerce, science and
                  humanities, as well as law. These programmes are designed to
                  provide students with strong foundations in their chosen
                  disciplines while developing analytical thinking, practical
                  skills and an understanding of real-world applications.
                </p>

                <p>
                  Current undergraduate offerings include programmes such as
                  B.Tech degrees, B.Com, B.Sc. Economics (Data Science), and
                  the five-year B.A., LL.B. programme. Students can explore
                  their interests through interdisciplinary learning,
                  practical projects, research opportunities and other
                  academic activities.
                </p>
              </Page>
            }
          />

          <Route
            path="/postgraduate"
            element={
              <Page title="Postgraduate Programmes">
                <p>
                  Postgraduate education at Shiv Nadar University Chennai is
                  intended for students who want to deepen their knowledge and
                  develop advanced professional or research skills. The
                  university offers postgraduate opportunities in areas
                  including technology and management.
                </p>

                <p>
                  Programmes combine academic study with practical exposure
                  and are intended to help graduates develop the specialised
                  knowledge required for further study, professional careers
                  and changing industry requirements.
                </p>
              </Page>
            }
          />

          <Route
            path="/phd"
            element={
              <Page title="PhD Programmes">
                <p>
                  Shiv Nadar University Chennai places strong emphasis on
                  interdisciplinary research and provides opportunities for
                  scholars interested in pursuing doctoral studies. PhD
                  programmes are intended for candidates who want to contribute
                  to new knowledge through sustained and original research.
                </p>

                <p>
                  The university offers full-time residential PhD opportunities
                  for eligible candidates. Applicants may come directly into
                  doctoral study or, where applicable, may enter through
                  sponsored or other recognised routes subject to the
                  university's eligibility requirements and research
                  regulations.
                </p>
              </Page>
            }
          />

          <Route
            path="/eligibility"
            element={
              <Page title="Eligibility">
                <p>
                  Eligibility requirements vary according to the programme
                  being applied for. Undergraduate, postgraduate, MBA and PhD
                  programmes each have their own academic qualifications,
                  entrance requirements and selection procedures.
                </p>

                <p>
                  Students should check the official admissions information
                  for the programme they are interested in before applying,
                  because required qualifications, entrance examinations,
                  interviews and other conditions can differ between
                  programmes.
                </p>
              </Page>
            }
          />

          <Route
            path="/application"
            element={
              <Page title="Application Process">
                <p>
                  The application process depends on the programme. Applicants
                  should first select the programme they wish to pursue and
                  review its eligibility requirements and admission procedure.
                  They can then complete the relevant online application and
                  provide the required academic and supporting information.
                </p>

                <p>
                  Depending on the programme, admission may involve an
                  entrance examination, interview or other selection stages.
                  Applicants should follow the instructions published by the
                  university for the relevant admission cycle and keep track of
                  announcements regarding applications and selection.
                </p>
              </Page>
            }
          />

          <Route
            path="/dates"
            element={
              <Page title="Important Dates">
                <p>
                  Admission dates are announced separately for different
                  programmes and admission cycles. Application deadlines,
                  entrance examinations, interviews and other stages may
                  therefore have different dates.
                </p>

                <p>
                  Applicants should check the university's official admissions
                  pages regularly for the latest dates and announcements
                  before submitting an application.
                </p>
              </Page>
            }
          />

          <Route
            path="/research-areas"
            element={
              <Page title="Research at SNU Chennai">
                <p>
                  Research is an important part of the academic environment at
                  Shiv Nadar University Chennai. The university encourages
                  faculty members and students to participate in
                  research-oriented activities and provides access to research
                  infrastructure and resources.
                </p>

                <p>
                  The university also encourages collaboration with funding
                  agencies, academic institutions and industry. Its Student
                  Initiative for Research Skills programme, or SIRS, is
                  designed to introduce undergraduate students to research
                  aptitude and research-oriented thinking from an early stage
                  of their university education.
                </p>

                <p>
                  Research activities span different disciplines and encourage
                  students and scholars to explore problems through
                  interdisciplinary approaches.
                </p>
              </Page>
            }
          />

          <Route
            path="/publications"
            element={
              <Page title="Research Publications">
                <p>
                  Research publications represent an important part of the
                  university's academic and research activities. Faculty
                  members and research scholars contribute to scholarly work
                  across their respective disciplines.
                </p>

                <p>
                  The university encourages research that contributes to new
                  knowledge and addresses significant problems in India and
                  around the world. Students may also gain exposure to
                  research through projects, research programmes and
                  interactions with faculty.
                </p>
              </Page>
            }
          />

          <Route
            path="/campus-life"
            element={
              <Page title="Campus Life">
                <p>
                  Campus life at Shiv Nadar University Chennai extends beyond
                  the classroom. Students can participate in clubs, societies,
                  events, sports and other activities while developing
                  friendships and engaging with people from different
                  backgrounds.
                </p>

                <p>
                  The university aims to create an environment that encourages
                  open-mindedness, intellectual discussion and personal
                  expression. Students are also encouraged to explore
                  entrepreneurial ideas and participate in projects and
                  activities that complement their academic learning.
                </p>
              </Page>
            }
          />

          <Route
            path="/placements"
            element={
              <Page title="Placements">
                <p>
                  The placement and career development team at Shiv Nadar
                  University Chennai supports students as they prepare for
                  employment and higher education. Career preparation includes
                  training, industry exposure, lectures by experienced
                  practitioners and internship opportunities.
                </p>

                <p>
                  Students receive support with areas such as resume
                  development, interview preparation and interaction with
                  potential employers. The university also conducts activities
                  such as industry talks and hackathons to help students gain
                  practical exposure and understand professional environments.
                </p>
              </Page>
            }
          />

          <Route
            path="/contact"
            element={
              <Page title="Contact Us">
                <p>
                  If you have questions about admissions, academics, programmes,
                  campus facilities or other university services, you can contact
                  Shiv Nadar University Chennai using the details below.
                </p>

                <div className="contact-box">
                  <h3>Shiv Nadar University Chennai</h3>

                <p>
                    <strong>Address:</strong><br />
                    Rajiv Gandhi Salai (OMR), Kalavakkam – 603110,
                    Chengalpattu District, Tamil Nadu, India.
                </p>

                <p>
                  <strong>Phone:</strong><br />
                  044 3511 9300<br />
                  044 2746 1700<br />
                  +91 9043567057
                </p>

                <p>
                  <strong>Admissions Enquiry:</strong><br />
                  1800 208 1199
                </p>

                <p>
                  <strong>Email:</strong><br />
                  admissions@snuchennai.edu.in
                </p>

                <p>
                  <strong>Working Hours:</strong><br />
                  8:00 AM to 4:00 PM
                </p>
                </div>
              </Page>
            }
          />

        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
