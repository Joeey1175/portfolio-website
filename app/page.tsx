import Image from "next/image";
import type { CSSProperties } from "react";

const capabilities = [
  "Marketing Analytics",
  "Performance Analysis",
  "Competitive Benchmarking",
  "Data Storytelling",
];

const serviceCards = [
  {
    number: "01",
    title: "Programming",
    items: ["Python", "SQL"],
    icon: "PG",
  },
  {
    number: "02",
    title: "Creative Tools",
    items: ["Adobe Photoshop", "Canva", "Adobe Premiere Pro"],
    icon: "CT",
  },
  {
    number: "03",
    title: "Analytics",
    items: ["Excel", "Tableau", "SPSS"],
    icon: "AN",
  },
  {
    number: "04",
    title: "Marketing",
    items: [
      "Marketing Analytics",
      "Competitive Analysis",
      "Social Media Analytics",
    ],
    icon: "MK",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#home" aria-label="Zeying Xu home">
          Zeying Xu
        </a>
        <nav>
          <a href="#home">About</a>
          <a href="#marketing-analytics">Marketing Analytics</a>
          <a href="#content-analysis">Content Analysis</a>
          <a href="#case-study">Case Study</a>
          <a href="#professional-highlights">Marketing Communications</a>
        </nav>
        <a className="nav-cta" href="#contact">Contact Me</a>
      </header>

      <section id="home" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Marketing & Business Analytics</p>
            <h1 id="hero-title">
              TURNING DATA INTO STORIES THAT MOVE BUSINESS FORWARD.
            </h1>
            <div className="hero-actions" aria-label="Portfolio highlights">
              <a href="#services">Explore Services</a>
              <span>Available for analytics, research, and storytelling work</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait and experience">
            <div className="portrait-wrap">
              <Image
                src="/zeying-xu.jpeg"
                alt="Portrait of Zeying Xu"
                width={724}
                height={1086}
                priority
              />
            </div>
            <div className="floating-card stat-card">
              <strong>3+</strong>
              <span>Years of marketing analytics experience</span>
            </div>
            <div className="floating-card note-card">
              <span>Performance Analysis</span>
              <span>Data Visualization</span>
              <span>Storytelling</span>
            </div>
          </div>
        </div>

        <div className="capability-strip" aria-label="Core capabilities">
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="services-section"
        aria-labelledby="services-title"
      >
        <div className="services-intro">
          <p className="eyebrow">Skills</p>
          <h2 id="services-title">WHAT CAN I DO FOR YOU?</h2>
        </div>

        <div className="services-grid">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.number}>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="service-icon" aria-hidden="true">
                <span>{service.icon}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="contact-copy">
          <p className="eyebrow">Let&apos;s</p>
          <h2>Build insights together</h2>
          <p>
            Thanks for your time and consideration. I&apos;m always excited to
            discuss analytics, marketing, and data-driven solutions.
          </p>
        </div>

        <div className="contact-panel">
          <p className="eyebrow">Me · About</p>
          <h3 id="contact-title">More details about me!</h3>
          <p>
            I am Zeying Xu, a marketing analytics specialist with 3+ years of
            experience transforming performance data into actionable insights,
            visual reports, and strategic recommendations.
          </p>

          <div className="contact-details">
            <div>
              <span>Email Address</span>
              <a href="mailto:zeyingx1175@gmail.com">zeyingx1175@gmail.com</a>
            </div>
            <div>
              <span>Phone Number</span>
              <a href="tel:+18582677260">+1 (858)2677260</a>
            </div>
          </div>

          <div className="contact-follow">
            <span>Follow Me</span>
            <a
              href="https://www.linkedin.com/in/zeying-joeey-xu-1b3a76356"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
          </div>
        </div>
      </section>

      <section
        id="marketing-analytics"
        className="marketing-section"
        aria-labelledby="marketing-title"
      >
        <div className="marketing-overview">
          <div className="marketing-hero">
            <p className="eyebrow">Marketing</p>
            <h2 id="marketing-title">MARKETING ANALYTICS</h2>
            <p>
              Exploring content performance, campaign effectiveness, and
              competitive benchmarking through data analysis.
            </p>
          </div>

          <article className="scope-card" aria-label="Project scope">
            <h3>Project Scope</h3>
            <ul>
              <li>
                <strong>6</strong> Academic Publishers
              </li>
              <li>
                <strong>Q1 2025</strong> Content Analysis
              </li>
              <li>
                <strong>10</strong> Comparative Visualizations
              </li>
              <li>Benchmarking Report</li>
            </ul>
          </article>
        </div>

        <section
          className="competitive-section"
          aria-labelledby="competitive-title"
        >
          <div className="competitive-heading">
            <p className="eyebrow">Benchmarking</p>
            <h2 id="competitive-title">COMPETITIVE BENCHMARKING</h2>
            <p>
              Benchmarked content performance across six academic publishers to
              identify publishing patterns, competitive positioning, and
              strategic opportunities.
            </p>
          </div>

          <div className="benchmark-accordion" aria-label="Benchmarking details">
            <details className="benchmark-panel" open>
              <summary>
                <span>
                  <b>Workflow</b>
                  <small>From collection to final benchmarking report.</small>
                </span>
                <i aria-hidden="true"></i>
              </summary>
              <ol>
                <li>Content Collection</li>
                <li>Data Cleaning</li>
                <li>Performance Benchmarking</li>
                <li>Benchmarking Report</li>
              </ol>
            </details>

            <details className="benchmark-panel">
              <summary>
                <span>
                  <b>Key Insight</b>
                  <small>Clear competitive differences across publishers.</small>
                </span>
                <i aria-hidden="true"></i>
              </summary>
              <p>
                Publisher A showed the strongest peak performance while several
                publishers maintained relatively stable engagement.
              </p>
            </details>
          </div>
        </section>

        <section
          className="competitive-section metric-page"
          aria-labelledby="monthly-title"
        >
          <div className="competitive-heading">
            <p className="eyebrow">Performance Trends</p>
            <h2 id="monthly-title">MONTHLY PERFORMANCE INDEX</h2>
            <p>
              Benchmarking monthly publisher performance to identify engagement
              patterns and competitive positioning over time.
            </p>
          </div>

          <div className="metric-layout">
            <article className="benchmark-card insight-card">
              <span>Key Insight</span>
              <h3>Publisher A showed the strongest peak performance.</h3>
              <p>
                Several publishers maintained relatively stable engagement.
                Performance spikes suggest different publishing strategies.
              </p>
            </article>

            <article className="benchmark-card chart-card trend-card">
              <div>
                <span>Normalized Performance Index</span>
                <h3>Monthly Performance Index</h3>
              </div>
              <div className="line-chart" aria-label="Monthly performance line chart">
                <svg viewBox="0 0 540 330" role="img">
                  <title>Monthly Performance Index by publisher</title>
                  <g className="grid-lines">
                    <line x1="66" y1="44" x2="500" y2="44" />
                    <line x1="66" y1="99" x2="500" y2="99" />
                    <line x1="66" y1="154" x2="500" y2="154" />
                    <line x1="66" y1="209" x2="500" y2="209" />
                    <line x1="66" y1="264" x2="500" y2="264" />
                  </g>
                  <g className="axis-labels">
                    <text x="44" y="49">1200</text>
                    <text x="44" y="104">900</text>
                    <text x="44" y="159">600</text>
                    <text x="44" y="214">300</text>
                    <text x="52" y="269">0</text>
                    <text x="64" y="304">Jan</text>
                    <text x="186" y="304">Feb</text>
                    <text x="314" y="304">Mar</text>
                    <text x="444" y="304">Apr</text>
                  </g>
                  <path className="series series-a" pathLength="1" d="M66 194 C112 144 145 82 190 80 C236 78 276 134 320 151 C366 168 412 203 450 227" />
                  <path className="series series-b" pathLength="1" d="M66 200 C110 193 148 185 190 188 C238 191 276 203 320 205 C365 207 410 215 450 219" />
                  <path className="series series-c" pathLength="1" d="M66 242 C112 244 145 252 190 248 C236 244 278 235 320 236 C365 237 410 246 450 251" />
                  <path className="series series-d" pathLength="1" d="M66 252 C111 246 146 238 190 237 C235 236 278 234 320 234 C365 234 410 231 450 229" />
                  <path className="series series-e" pathLength="1" d="M66 245 C112 248 146 255 190 254 C236 253 278 252 320 252 C366 252 410 254 450 255" />
                  <path className="series series-f" pathLength="1" d="M66 121 C112 150 148 180 190 191 C236 202 278 170 320 156 C366 142 410 184 450 207" />
                  <g className="chart-dots">
                    <circle className="dot-a" cx="66" cy="194" r="5" />
                    <circle className="dot-a" cx="190" cy="80" r="6" />
                    <circle className="dot-a" cx="320" cy="151" r="5" />
                    <circle className="dot-a" cx="450" cy="227" r="5" />
                    <circle className="dot-b" cx="66" cy="200" r="5" />
                    <circle className="dot-b" cx="190" cy="188" r="5" />
                    <circle className="dot-b" cx="320" cy="205" r="5" />
                    <circle className="dot-b" cx="450" cy="219" r="5" />
                  </g>
                </svg>
                <div className="chart-legend">
                  {["A", "B", "C", "D", "E", "F"].map((publisher) => (
                    <span className={`legend-${publisher.toLowerCase()}`} key={publisher}>
                      Publisher {publisher}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          className="competitive-section metric-page"
          aria-labelledby="average-title"
        >
          <div className="competitive-heading">
            <p className="eyebrow">Average Publisher Performance</p>
            <h2 id="average-title">MEAN PERFORMANCE INDEX</h2>
            <p>
              Comparing average publisher performance using normalized monthly
              content metrics.
            </p>
          </div>

          <div className="metric-layout">
            <article className="benchmark-card insight-card">
              <span>Key Insight</span>
              <h3>Publisher A led overall performance.</h3>
              <p>
                Publisher F followed closely. A clear performance gap emerged.
              </p>
            </article>

            <article className="benchmark-card chart-card average-card">
              <div>
                <span>Average Performance Index</span>
                <h3>Average Publisher Performance</h3>
              </div>
              <div className="bar-chart" aria-label="Animated average publisher performance chart">
                <div className="bar-plot">
                  {[
                    ["A", 445],
                    ["F", 420],
                    ["B", 269],
                    ["D", 115],
                    ["C", 90],
                    ["E", 58],
                  ].map(([publisher, value]) => (
                    <div className="bar-row" key={publisher}>
                      <span>Publisher {publisher}</span>
                      <i
                        style={{ "--w": `${Number(value) / 5}%` } as CSSProperties}
                      />
                    </div>
                  ))}
                  <div className="bar-axis" aria-hidden="true">
                    <span>0</span>
                    <span>100</span>
                    <span>200</span>
                    <span>300</span>
                    <span>400</span>
                    <span>500</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section
        id="content-analysis"
        className="marketing-section content-section"
        aria-labelledby="content-title"
      >
        <div className="marketing-overview">
          <div className="marketing-hero">
            <p className="eyebrow">Content</p>
            <h2 id="content-title">CONTENT ANALYSIS</h2>
            <p>
              Continuous monitoring of content performance to support
              data-driven content optimization.
            </p>
          </div>

          <article className="scope-card" aria-label="Content analysis scope">
            <h3>Project Focus</h3>
            <ul>
              <li>Monthly Performance Monitoring</li>
              <li>Top 100 Content Distribution</li>
              <li>Average Category Performance</li>
            </ul>
          </article>
        </div>

        <section
          className="competitive-section metric-page"
          aria-labelledby="content-monthly-title"
        >
          <div className="competitive-heading">
            <p className="eyebrow">Performance Monitoring</p>
            <h2 id="content-monthly-title">MONTHLY PERFORMANCE TREND</h2>
            <p>
              Based on anonymized monthly content performance metrics normalized
              using views, likes, and shares.
            </p>
          </div>

          <div className="metric-layout">
            <article className="benchmark-card insight-card">
              <span>Key Insight</span>
              <h3>Long-term monthly monitoring identified recurring patterns.</h3>
              <p>
                These patterns support continuous evaluation and data-driven
                publishing decisions.
              </p>
            </article>

            <article className="benchmark-card chart-card trend-card content-trend-card">
              <div>
                <span>Performance Index</span>
                <h3>Performance Trend</h3>
              </div>
              <div className="line-chart content-line-chart" aria-label="Monthly content performance trend chart">
                <svg viewBox="0 0 700 360" role="img">
                  <title>Monthly content performance trend</title>
                  <g className="grid-lines">
                    <line x1="70" y1="44" x2="640" y2="44" />
                    <line x1="70" y1="83" x2="640" y2="83" />
                    <line x1="70" y1="122" x2="640" y2="122" />
                    <line x1="70" y1="162" x2="640" y2="162" />
                    <line x1="70" y1="201" x2="640" y2="201" />
                    <line x1="70" y1="241" x2="640" y2="241" />
                    <line x1="70" y1="280" x2="640" y2="280" />
                  </g>
                  <g className="axis-labels content-axis">
                    <text x="38" y="49">140</text>
                    <text x="38" y="88">120</text>
                    <text x="38" y="127">100</text>
                    <text x="46" y="167">80</text>
                    <text x="46" y="206">60</text>
                    <text x="46" y="246">40</text>
                    <text x="46" y="285">20</text>
                    <text x="56" y="323">0</text>
                    <text x="62" y="326">Jan</text>
                    <text x="114" y="326">Feb</text>
                    <text x="166" y="326">Mar</text>
                    <text x="218" y="326">Apr</text>
                    <text x="270" y="326">May</text>
                    <text x="322" y="326">Jun</text>
                    <text x="374" y="326">Jul</text>
                    <text x="426" y="326">Aug</text>
                    <text x="478" y="326">Sep</text>
                    <text x="530" y="326">Oct</text>
                    <text x="582" y="326">Nov</text>
                    <text x="630" y="326">Dec</text>
                  </g>
                  <path
                    className="series content-series"
                    pathLength="1"
                    d="M70 44 C88 92 104 174 122 213 C139 252 151 109 174 91 C194 75 205 105 226 112 C248 119 257 147 278 164 C300 181 310 107 330 101 C351 95 362 138 382 157 C404 176 414 193 434 198 C456 203 466 162 486 150 C508 138 518 119 538 110 C560 101 570 145 590 155 C612 165 620 136 640 123"
                  />
                  <g className="chart-dots content-dots">
                    {[
                      [70, 44],
                      [122, 213],
                      [174, 91],
                      [226, 112],
                      [278, 164],
                      [330, 101],
                      [382, 157],
                      [434, 198],
                      [486, 150],
                      [538, 110],
                      [590, 155],
                      [640, 123],
                    ].map(([cx, cy]) => (
                      <circle cx={cx} cy={cy} r="5" key={`${cx}-${cy}`} />
                    ))}
                  </g>
                </svg>
              </div>
            </article>
          </div>
        </section>

        <section
          className="competitive-section metric-page"
          aria-labelledby="distribution-title"
        >
          <div className="competitive-heading">
            <p className="eyebrow">Content Distribution</p>
            <h2 id="distribution-title">TOP 100 CONTENT DISTRIBUTION</h2>
            <p>
              Category distribution across the annual Top 100 performing
              articles based on 2025 content results.
            </p>
          </div>

          <div className="metric-layout">
            <article className="benchmark-card insight-card">
              <span>Key Insight</span>
              <h3>Category C represented the largest share.</h3>
              <p>
                Content distribution was uneven, with high-performing articles
                concentrated in a few categories.
              </p>
            </article>

            <article className="benchmark-card chart-card donut-card">
              <div>
                <span>Top 100</span>
                <h3>Content Distribution</h3>
              </div>
              <div className="donut-chart" aria-label="Top 100 content distribution donut chart">
                <div className="donut-figure">
                  <svg viewBox="0 0 420 420" role="img">
                    <title>Top 100 content distribution by category</title>
                    <g className="donut-ring" transform="rotate(-90 210 210)">
                      {[
                        ["segment-a", "12.9 87.1", "0"],
                        ["segment-b", "15.5 84.5", "-12.9"],
                        ["segment-c", "23.3 76.7", "-28.4"],
                        ["segment-d", "7.8 92.2", "-51.7"],
                        ["segment-e", "13.8 86.2", "-59.5"],
                        ["segment-o", "26.7 73.3", "-73.3"],
                      ].map(([segment, dash, offset]) => (
                        <circle
                          className={`donut-segment ${segment}`}
                          pathLength="100"
                          cx="210"
                          cy="210"
                          r="112"
                          style={{ "--dash": dash, "--offset": offset } as CSSProperties}
                          key={segment}
                        />
                      ))}
                    </g>
                  </svg>
                </div>
                <div className="donut-labels" aria-label="Content distribution labels">
                  <div className="donut-label label-a">Category A <b>12.9%</b></div>
                  <div className="donut-label label-b">Category B <b>15.5%</b></div>
                  <div className="donut-label label-c">Category C <b>23.3%</b></div>
                  <div className="donut-label label-d">Category D <b>7.8%</b></div>
                  <div className="donut-label label-e">Category E <b>13.8%</b></div>
                  <div className="donut-label label-o">Others <b>26.7%</b></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          className="competitive-section metric-page"
          aria-labelledby="content-performance-title"
        >
          <div className="competitive-heading">
            <p className="eyebrow">Content Performance</p>
            <h2 id="content-performance-title">AVERAGE CONTENT PERFORMANCE</h2>
            <p>
              Unit: Relative Index (Anonymized), used to support strategic
              content planning.
            </p>
          </div>

          <div className="metric-layout">
            <article className="benchmark-card insight-card">
              <span>Key Insight</span>
              <h3>Some categories showed stronger long-term performance.</h3>
              <p>
                The analysis supports future publishing priorities and strategic
                content planning.
              </p>
            </article>

            <article className="benchmark-card chart-card average-card">
              <div>
                <span>Relative Index</span>
                <h3>Average Content Performance</h3>
              </div>
              <div className="vertical-bar-chart" aria-label="Average content performance bar chart">
                <div className="vertical-scale">
                  <span>120</span>
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>
                <div className="vertical-bars">
                  {[
                    ["Category A", "87.5%", "#3a1409"],
                    ["Category B", "72.5%", "#a7793e"],
                    ["Category C", "28.33%", "#805006"],
                    ["Category D", "40%", "#eadcc8"],
                    ["Category E", "20.83%", "#efc386"],
                  ].map(([label, height, color]) => (
                    <div
                      className="vbar"
                      style={{ "--h": height, "--bar-color": color } as CSSProperties}
                      key={label}
                    >
                      <i />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section
        id="case-study"
        className="case-study-section"
        aria-labelledby="case-study-title"
      >
        <div className="case-study-heading">
          <p className="eyebrow">Portfolio</p>
          <h2 id="case-study-title">CASE STUDY</h2>
        </div>

        <div className="case-study-grid" aria-label="Case study covers">
          <article id="case-study-movie" className="case-card case-card-movie">
            <div className="case-image-wrap">
              <img
                src="/case-study/movie-industry-trend-revenue-analysis.png"
                alt="Movie Industry Trend and Revenue Analysis dashboard"
              />
            </div>
            <div className="case-card-footer">
              <h3>Movie Industry Trend &amp; Revenue Analysis</h3>
              <a href="#case-study-movie-detail">View Case Study</a>
            </div>
          </article>

          <article id="case-study-spotify" className="case-card case-card-spotify">
            <div className="case-image-wrap">
              <img
                src="/case-study/spotify-listening-behavior-analysis.png"
                alt="Spotify Listening Behavior Analysis dashboard"
              />
            </div>
            <div className="case-card-footer">
              <h3>Spotify Listening Behavior Analysis</h3>
              <a href="#case-study-spotify-detail">View Case Study</a>
            </div>
          </article>
        </div>
      </section>

      <section
        id="case-study-movie-detail"
        className="case-detail-section"
        aria-labelledby="movie-detail-title"
      >
        <div className="case-detail-modal">
          <a className="case-detail-close" href="#case-study" aria-label="Back to case studies">×</a>

          <div className="case-detail-hero">
            <h2 id="movie-detail-title">Movie Industry Trend &amp; Revenue Analysis</h2>
            <p>Interactive Tableau Dashboard for Investment Strategy</p>
            <div className="case-detail-labels" aria-label="Project tags">
              <span>Tableau</span>
              <span>Business Intelligence</span>
              <span>Data Visualization</span>
              <span>Investment Analysis</span>
              <span>Interactive Dashboard</span>
            </div>
          </div>

          <div className="case-detail-cover">
            <img
              src="/case-study/movie-industry-trend-revenue-analysis.png"
              alt="Movie Industry Trend and Revenue Analysis dashboard cover"
            />
          </div>

          <div className="case-detail-metrics" aria-label="Movie analysis project metrics">
            <div className="numbers-badge">Numbers</div>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="4800">0</span><span className="metric-suffix">+</span></strong>
              <span>Movies Analyzed</span>
            </article>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="6">0</span></strong>
              <span>Interactive Views</span>
            </article>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="4">0</span></strong>
              <span>Statistical Tests</span>
            </article>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="17">0</span></strong>
              <span>Movie Genres Compared</span>
            </article>
          </div>

          <section className="case-overall" aria-labelledby="movie-overall-title">
            <p className="eyebrow" id="movie-overall-title">Overall</p>
            <p>
              This project explores movie industry trends using Python and Tableau.
              By analyzing revenue, ROI, genre performance, and release patterns,
              I designed an interactive dashboard that transforms complex datasets
              into actionable insights for investment and business decision-making.
            </p>
            <a
              className="case-detail-link"
              href="https://public.tableau.com/views/GenreInvestmentInsights/GenreInvestmentStrategyInsights"
              target="_blank"
              rel="noreferrer"
            >
              View Tableau Dashboard
            </a>
          </section>

          <div className="case-feature-list" aria-label="Movie dashboard feature highlights">
            <article className="case-feature-row movie-feature-wide">
              <figure className="case-feature-image">
                <img
                  src="/case-study/movie-revenue-budget-analysis.png"
                  alt="Revenue and budget scatter chart"
                />
              </figure>
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 01</p>
                <h3>Revenue &amp; Budget Analysis</h3>
                <p>Compared movie revenue and budget across genres to identify high-performing categories and evaluate the relationship between investment size and box-office returns.</p>
              </div>
            </article>

            <article className="case-feature-row">
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 02</p>
                <h3>ROI &amp; Weighted ROI</h3>
                <p>Compared average ROI with weighted ROI to reduce the influence of extreme outliers and provide a more realistic view of genre-level investment efficiency.</p>
              </div>
              <figure className="case-feature-image">
                <img
                  src="/case-study/movie-roi-weighted-roi.png"
                  alt="ROI and weighted ROI comparison chart"
                />
              </figure>
            </article>

            <article className="case-feature-row movie-feature-wide">
              <figure className="case-feature-image movie-feature-grid movie-feature-grid-large">
                <img src="/case-study/movie-genre-performance-summary.png" alt="Movie genre performance summary" />
                <img src="/case-study/movie-top-genres-roi.png" alt="Top genres by ROI chart" />
                <img src="/case-study/movie-top-revenue-movie.png" alt="Top revenue movie ranking chart" />
              </figure>
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 03</p>
                <h3>Genre Performance &amp; Ranking</h3>
                <p>Ranked genres and individual movies by revenue and ROI to highlight differences between commercial success and investment efficiency.</p>
              </div>
            </article>

            <article className="case-feature-row">
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 04</p>
                <h3>Trend &amp; Decision Support</h3>
                <p>Combined historical revenue trends with business recommendations to identify potential opportunities, risks, and more sustainable investment directions.</p>
              </div>
              <figure className="case-feature-image movie-feature-grid stacked">
                <img src="/case-study/movie-revenue-trend.png" alt="Revenue trend by genre line chart" />
                <img src="/case-study/movie-decision-support.png" alt="Movie investment recommendation and risk summary" />
              </figure>
            </article>

            <article className="case-feature-row">
              <figure className="case-feature-image compact movie-filter-image">
                <img
                  src="/case-study/movie-interactive-genre-filter.png"
                  alt="Interactive main genre filter"
                />
              </figure>
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 05</p>
                <h3>Interactive Genre Filter</h3>
                <p>Select any movie genre to dynamically update all charts, rankings, and insights across the dashboard.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="case-study-spotify-detail"
        className="case-detail-section spotify-detail-section"
        aria-labelledby="spotify-detail-title"
      >
        <div className="case-detail-modal">
          <a className="case-detail-close" href="#case-study" aria-label="Back to case studies">×</a>

          <div className="case-detail-hero">
            <h2 id="spotify-detail-title">Spotify Listening Behavior Analysis</h2>
            <p>Interactive Tableau Dashboard for Music Analytics</p>
            <div className="case-detail-labels spotify-labels" aria-label="Project tags">
              <span>Tableau</span>
              <span>Dashboard Design</span>
              <span>Data Visualization</span>
              <span>Music Analytics</span>
              <span>Interactive Dashboard</span>
              <span>Calculated Fields</span>
            </div>
          </div>

          <div className="case-detail-cover spotify-detail-cover">
            <img
              src="/case-study/spotify-song-type-dashboard.png"
              alt="Spotify Song Type dashboard overview"
            />
          </div>

          <div className="case-detail-metrics spotify-detail-metrics" aria-label="Spotify analysis project metrics">
            <div className="numbers-badge">Numbers</div>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="32">0</span><span className="metric-suffix">K+</span></strong>
              <span>Songs</span>
            </article>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="1">0</span></strong>
              <span>Dashboard Module Designed</span>
            </article>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="28">0</span></strong>
              <span>Features</span>
            </article>
            <article className="highlight-metric">
              <strong><span className="metric-value" data-count="6">0</span></strong>
              <span>Interactive Filters</span>
            </article>
          </div>

          <section className="case-overall" aria-labelledby="spotify-overall-title">
            <p className="eyebrow" id="spotify-overall-title">Overall</p>
            <p>
              Designed and developed the <strong>Song Type</strong> section of a Tableau
              dashboard, visualizing listening behavior through song type distribution,
              popularity, musical key, and tempo to uncover user listening patterns.
            </p>
            <a
              className="case-detail-link"
              href="https://public.tableau.com/views/SpotifyAnalysis_17867677926160/Story1"
              target="_blank"
              rel="noreferrer"
            >
              View Tableau Dashboard
            </a>
          </section>

          <div className="case-feature-list" aria-label="Spotify dashboard feature highlights">
            <article className="case-feature-row">
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 01</p>
                <h3>Musical Key Distribution</h3>
                <p>Visualized the most frequently used musical keys across different song types.</p>
              </div>
              <figure className="case-feature-image">
                <img src="/case-study/spotify-musical-key-distribution.png" alt="Musical key distribution treemap" />
              </figure>
            </article>

            <article className="case-feature-row reverse">
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 02</p>
                <h3>Tempo Analysis</h3>
                <p>Compared tempo preferences between vocal and instrumental tracks.</p>
              </div>
              <figure className="case-feature-image">
                <img src="/case-study/spotify-tempo-analysis.png" alt="Tempo analysis treemap" />
              </figure>
            </article>

            <article className="case-feature-row">
              <div className="case-feature-copy">
                <p className="eyebrow">Feature 03</p>
                <h3>Dashboard Interaction</h3>
                <p>Enabled interactive filtering by song type for dynamic exploration of listening behavior.</p>
              </div>
              <figure className="case-feature-image compact">
                <img src="/case-study/spotify-dashboard-interaction.png" alt="Song type dashboard filter interaction" />
              </figure>
            </article>
          </div>
        </div>
      </section>

      <section
        id="professional-highlights"
        className="highlights-section"
        aria-labelledby="highlights-title"
      >
        <div className="highlights-heading">
          <p className="eyebrow">Impact</p>
          <h2 id="highlights-title">Professional Highlights</h2>
          <p>
            Key achievements and impact across marketing, analytics, and content production.
          </p>
        </div>

        <div className="highlights-banner" aria-label="Professional highlights metrics">
          <div className="numbers-badge">Numbers</div>
          <article className="highlight-metric">
            <strong><span className="metric-value" data-count="45">0</span><span className="metric-suffix">+</span></strong>
            <span>Monthly Reports</span>
          </article>
          <article className="highlight-metric">
            <strong><span className="metric-value" data-count="1087">0</span><span className="metric-suffix">+</span></strong>
            <span>Journal Records</span>
          </article>
          <article className="highlight-metric">
            <strong><span className="metric-value" data-count="15">0</span><span className="metric-suffix">+</span></strong>
            <span>Videos Edited</span>
          </article>
          <article className="highlight-metric">
            <strong><span className="metric-value" data-count="19">0</span></strong>
            <span>Event Reports</span>
          </article>
          <article className="highlight-metric">
            <strong><span className="metric-value" data-count="6">0</span></strong>
            <span>Publishers Benchmarked</span>
          </article>
        </div>
      </section>

      <section
        id="creative-works"
        className="creative-section"
        aria-labelledby="creative-title"
      >
        <div className="creative-heading">
          <p className="eyebrow">Creative</p>
          <h2 id="creative-title">MARKETING COMMUNICATIONS</h2>
        </div>

        <div className="creative-accordion" aria-label="Marketing communications categories">
          <details className="creative-panel panel-materials">
            <summary>
              <span>
                <b>Marketing Materials</b>
                <small>Structured materials for campaigns, products, and brand communication.</small>
              </span>
              <i aria-hidden="true" />
            </summary>
            <div className="creative-panel-body marketing-materials-gallery">
              <input type="radio" name="materials-gallery" id="material-1" defaultChecked />
              <input type="radio" name="materials-gallery" id="material-2" />
              <input type="radio" name="materials-gallery" id="material-3" />

              <div className="materials-slides">
                <figure className="material-slide slide-1 material-certificate">
                  <div className="material-meta">
                    <h3>Certificate</h3>
                    <div className="material-tags" aria-label="Certificate project details">
                      <span>Role</span>
                      <b>Graphic Design</b>
                      <span>Tasks</span>
                      <b>Typography</b>
                      <b>Layout</b>
                      <b>Localization</b>
                      <b>Branding</b>
                      <span>Output</span>
                      <b>Certificate</b>
                    </div>
                  </div>
                  <div className="material-showcase">
                    <label className="material-arrow material-prev" htmlFor="material-3" aria-label="Previous material">‹</label>
                    <img src="/marketing-material-certificate.jpg" alt="Sage certificate of experience" />
                    <label className="material-arrow material-next" htmlFor="material-2" aria-label="Next material">›</label>
                  </div>
                </figure>
                <figure className="material-slide slide-2 material-journal">
                  <div className="material-meta">
                    <h3>Journal Promotion</h3>
                    <div className="material-tags" aria-label="Journal promotion project details">
                      <span>Role</span>
                      <b>Marketing Design</b>
                      <span>Tasks</span>
                      <b>Campaign Graphic</b>
                      <b>Layout</b>
                      <b>Journal Promotion</b>
                      <span>Output</span>
                      <b>Banner</b>
                      <b>Social Media Graphic</b>
                    </div>
                  </div>
                  <div className="material-showcase">
                    <label className="material-arrow material-prev" htmlFor="material-1" aria-label="Previous material">‹</label>
                    <img src="/marketing-material-journal.png" alt="Journal promotional marketing material" />
                    <label className="material-arrow material-next" htmlFor="material-3" aria-label="Next material">›</label>
                  </div>
                </figure>
                <figure className="material-slide slide-3 material-poster">
                  <div className="material-meta">
                    <h3>Poster Update</h3>
                    <div className="material-tags" aria-label="Poster update project details">
                      <span>Role</span>
                      <b>Production Design</b>
                      <span>Tasks</span>
                      <b>Content Update</b>
                      <b>QR Code</b>
                      <b>Schedule</b>
                      <b>Speaker Info</b>
                      <span>Output</span>
                      <b>Final Poster</b>
                    </div>
                  </div>
                  <div className="material-showcase">
                    <label className="material-arrow material-prev" htmlFor="material-2" aria-label="Previous material">‹</label>
                    <img src="/marketing-material-webinar.jpg" alt="Sage webinar poster marketing material" />
                    <label className="material-arrow material-next" htmlFor="material-1" aria-label="Next material">›</label>
                  </div>
                </figure>
              </div>

              <div className="materials-controls" aria-label="Marketing materials controls">
                <div className="gallery-bullets" aria-label="Marketing materials thumbnails">
                  <label htmlFor="material-1">
                    <span>1</span>
                  </label>
                  <label htmlFor="material-2">
                    <span>2</span>
                  </label>
                  <label htmlFor="material-3">
                    <span>3</span>
                  </label>
                </div>
              </div>
            </div>
          </details>

          <details className="creative-panel panel-email">
            <summary>
              <span>
                <b>Email Communications</b>
                <small>Campaign communication, messaging structure, and audience follow-up.</small>
              </span>
              <i aria-hidden="true" />
            </summary>
            <div className="creative-panel-body email-communications-gallery">
              <input type="radio" name="email-gallery" id="email-1" defaultChecked />
              <input type="radio" name="email-gallery" id="email-2" />
              <input type="radio" name="email-gallery" id="email-3" />

              <div className="email-slides">
                <figure className="email-slide email-slide-1">
                  <figcaption className="email-meta">
                    <span>01</span>
                    <h3>Composite Materials Webinar</h3>
                    <p>
                      Created a webinar invitation email with a clear visual hierarchy
                      to improve event communication and registration.
                    </p>
                  </figcaption>
                  <div className="email-showcase">
                    <img src="/email-composite-webinar.png" alt="Composite materials webinar email campaign" />
                    <label className="material-arrow material-prev" htmlFor="email-3" aria-label="Previous email communication">‹</label>
                    <label className="material-arrow material-next" htmlFor="email-2" aria-label="Next email communication">›</label>
                  </div>
                </figure>

                <figure className="email-slide email-slide-2">
                  <figcaption className="email-meta">
                    <span>02</span>
                    <h3>Biomedical Engineering Conference</h3>
                    <p>
                      Designed a branded promotional email to support conference
                      marketing and communicate event information effectively.
                    </p>
                  </figcaption>
                  <div className="email-showcase">
                    <img src="/email-biomedical-conference.jpg" alt="Biomedical engineering conference promotional email" />
                    <label className="material-arrow material-prev" htmlFor="email-1" aria-label="Previous email communication">‹</label>
                    <label className="material-arrow material-next" htmlFor="email-3" aria-label="Next email communication">›</label>
                  </div>
                </figure>

                <figure className="email-slide email-slide-3">
                  <figcaption className="email-meta">
                    <span>03</span>
                    <h3>World Book Day Campaign</h3>
                    <p>
                      Designed an engagement-focused email campaign to promote
                      webinars, platform interaction, and reader participation.
                    </p>
                  </figcaption>
                  <div className="email-showcase">
                    <div className="email-image-stack">
                      <img src="/email-world-book-details.png" alt="World Book Day campaign details email" />
                      <img src="/email-world-book-gifts.png" alt="World Book Day campaign gift email" />
                    </div>
                    <label className="material-arrow material-prev" htmlFor="email-2" aria-label="Previous email communication">‹</label>
                    <label className="material-arrow material-next" htmlFor="email-1" aria-label="Next email communication">›</label>
                  </div>
                </figure>
              </div>

              <div className="email-controls">
                <div className="email-bullets" aria-label="Email communications thumbnails">
                  <label htmlFor="email-1"><span>1</span></label>
                  <label htmlFor="email-2"><span>2</span></label>
                  <label htmlFor="email-3"><span>3</span></label>
                </div>
              </div>
            </div>
          </details>

          <details className="creative-panel panel-editorial">
            <summary>
              <span>
                <b>Editorial Design</b>
                <small>Publication-facing layouts, visual hierarchy, and readable design systems.</small>
              </span>
              <i aria-hidden="true" />
            </summary>
            <div className="creative-panel-body email-communications-gallery editorial-design-gallery">
              <input type="radio" name="editorial-gallery" id="editorial-1" defaultChecked />
              <input type="radio" name="editorial-gallery" id="editorial-2" />
              <input type="radio" name="editorial-gallery" id="editorial-3" />
              <input type="radio" name="editorial-gallery" id="editorial-4" />
              <input type="radio" name="editorial-gallery" id="editorial-5" />

              <div className="email-slides editorial-slides">
                <figure className="email-slide editorial-slide editorial-slide-1">
                  <figcaption className="email-meta editorial-meta">
                    <span>01</span>
                    <h3>Handbook Layouts</h3>
                    <p>
                      Structured editorial layouts for academic handbooks, featuring
                      bilingual content organization, book presentation, and
                      publication-ready formatting.
                    </p>
                  </figcaption>
                  <div className="email-showcase editorial-showcase">
                    <img src="/editorial-design/ED3.png" alt="Handbook layout editorial design" />
                    <label className="material-arrow material-prev" htmlFor="editorial-5" aria-label="Previous editorial design">‹</label>
                    <label className="material-arrow material-next" htmlFor="editorial-2" aria-label="Next editorial design">›</label>
                  </div>
                </figure>

                <figure className="email-slide editorial-slide editorial-slide-2">
                  <figcaption className="email-meta editorial-meta">
                    <span>02</span>
                    <h3>Journal Recommendation</h3>
                    <p>
                      Curated journal recommendation pages presenting research
                      highlights, publication details, and featured journal content.
                    </p>
                  </figcaption>
                  <div className="email-showcase editorial-showcase">
                    <div className="email-image-stack editorial-image-stack editorial-image-grid-quad">
                      <img src="/editorial-design/ed1.png" alt="Journal recommendation editorial page one" />
                      <img src="/editorial-design/ed2.png" alt="Journal recommendation editorial page two" />
                      <img src="/editorial-design/ED6.png" alt="Journal recommendation editorial page three" />
                      <img src="/editorial-design/ED7.png" alt="Journal recommendation editorial page four" />
                    </div>
                    <label className="material-arrow material-prev" htmlFor="editorial-1" aria-label="Previous editorial design">‹</label>
                    <label className="material-arrow material-next" htmlFor="editorial-3" aria-label="Next editorial design">›</label>
                  </div>
                </figure>

                <figure className="email-slide editorial-slide editorial-slide-3">
                  <figcaption className="email-meta editorial-meta">
                    <span>03</span>
                    <h3>Special Issue Call for Papers</h3>
                    <p>
                      Editorial pages promoting special issues, guest editors,
                      submission themes, and publication opportunities.
                    </p>
                  </figcaption>
                  <div className="email-showcase editorial-showcase">
                    <div className="email-image-stack editorial-image-stack">
                      <img src="/editorial-design/ED8.png" alt="Special issue call for papers page one" />
                      <img src="/editorial-design/ED9.png" alt="Special issue call for papers page two" />
                    </div>
                    <label className="material-arrow material-prev" htmlFor="editorial-2" aria-label="Previous editorial design">‹</label>
                    <label className="material-arrow material-next" htmlFor="editorial-4" aria-label="Next editorial design">›</label>
                  </div>
                </figure>

                <figure className="email-slide editorial-slide editorial-slide-4">
                  <figcaption className="email-meta editorial-meta">
                    <span>04</span>
                    <h3>Journal Ranking Series (JCR)</h3>
                    <p>
                      Promotional layouts showcasing journal rankings, impact
                      factors, subject categories, and publication visibility.
                    </p>
                  </figcaption>
                  <div className="email-showcase editorial-showcase">
                    <div className="email-image-stack editorial-image-stack">
                      <img src="/editorial-design/ED10.png" alt="Journal ranking series page one" />
                      <img src="/editorial-design/ED11.png" alt="Journal ranking series page two" />
                    </div>
                    <label className="material-arrow material-prev" htmlFor="editorial-3" aria-label="Previous editorial design">‹</label>
                    <label className="material-arrow material-next" htmlFor="editorial-5" aria-label="Next editorial design">›</label>
                  </div>
                </figure>

                <figure className="email-slide editorial-slide editorial-slide-5">
                  <figcaption className="email-meta editorial-meta">
                    <span>05</span>
                    <h3>WeChat Editorial Articles</h3>
                    <p>
                      Long-form WeChat article layouts designed for digital reading,
                      bilingual publishing, and audience engagement.
                    </p>
                  </figcaption>
                  <div className="email-showcase editorial-showcase">
                    <div className="email-image-stack editorial-image-stack">
                      <img src="/editorial-design/ED4.png" alt="WeChat editorial article layout one" />
                      <img src="/editorial-design/ED5.png" alt="WeChat editorial article layout two" />
                    </div>
                    <label className="material-arrow material-prev" htmlFor="editorial-4" aria-label="Previous editorial design">‹</label>
                    <label className="material-arrow material-next" htmlFor="editorial-1" aria-label="Next editorial design">›</label>
                  </div>
                </figure>
              </div>

              <div className="email-controls editorial-controls">
                <div className="email-bullets editorial-bullets" aria-label="Editorial design thumbnails">
                  <label htmlFor="editorial-1"><span>1</span></label>
                  <label htmlFor="editorial-2"><span>2</span></label>
                  <label htmlFor="editorial-3"><span>3</span></label>
                  <label htmlFor="editorial-4"><span>4</span></label>
                  <label htmlFor="editorial-5"><span>5</span></label>
                </div>
              </div>
            </div>
          </details>


          <details className="creative-panel panel-video">
            <summary>
              <span>
                <b>Video Production</b>
                <small>Selected webinar, training, and scientific video edits.</small>
              </span>
              <i aria-hidden="true" />
            </summary>
            <div className="creative-panel-body email-communications-gallery video-production-gallery">
              <input type="radio" name="video-gallery" id="video-1" defaultChecked />
              <input type="radio" name="video-gallery" id="video-2" />
              <input type="radio" name="video-gallery" id="video-3" />

              <div className="email-slides video-slides">
                <figure className="email-slide video-slide video-slide-1">
                  <figcaption className="email-meta video-meta">
                    <span>01</span>
                    <h3>Research Webinar</h3>
                    <p>
                      Edited webinar recordings and enhanced presentation visuals.
                    </p>
                  </figcaption>
                  <div className="email-showcase video-showcase">
                    <img src="/video-production/video-1.png" alt="Research webinar video cover" />
                    <label className="material-arrow material-prev" htmlFor="video-3" aria-label="Previous video production work">‹</label>
                    <label className="material-arrow material-next" htmlFor="video-2" aria-label="Next video production work">›</label>
                  </div>
                </figure>

                <figure className="email-slide video-slide video-slide-2">
                  <figcaption className="email-meta video-meta">
                    <span>02</span>
                    <h3>Academic Training</h3>
                    <p>
                      Produced educational videos with synchronized graphics and
                      subtitles.
                    </p>
                  </figcaption>
                  <div className="email-showcase video-showcase">
                    <img src="/video-production/video-2.png" alt="Academic training video cover" />
                    <label className="material-arrow material-prev" htmlFor="video-1" aria-label="Previous video production work">‹</label>
                    <label className="material-arrow material-next" htmlFor="video-3" aria-label="Next video production work">›</label>
                  </div>
                </figure>

                <figure className="email-slide video-slide video-slide-3">
                  <figcaption className="email-meta video-meta">
                    <span>03</span>
                    <h3>Academic Video Production</h3>
                    <p>
                      Edited bilingual editor introduction videos with synchronized
                      subtitles.
                    </p>
                  </figcaption>
                  <div className="email-showcase video-showcase">
                    <img src="/video-production/video-3.jpg" alt="Academic editor introduction video cover" />
                    <label className="material-arrow material-prev" htmlFor="video-2" aria-label="Previous video production work">‹</label>
                    <label className="material-arrow material-next" htmlFor="video-1" aria-label="Next video production work">›</label>
                  </div>
                </figure>
              </div>

              <div className="email-controls video-controls">
                <div className="email-bullets video-bullets" aria-label="Video production thumbnails">
                  <label htmlFor="video-1"><span>1</span></label>
                  <label htmlFor="video-2"><span>2</span></label>
                  <label htmlFor="video-3"><span>3</span></label>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const reveal = (el) => el.classList.add('is-visible');
              const reset = (el) => el.classList.remove('is-visible');
              const cards = document.querySelectorAll('.chart-card');
              if (!('IntersectionObserver' in window)) {
                cards.forEach(reveal);
                return;
              }
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    reveal(entry.target);
                  } else {
                    reset(entry.target);
                  }
                });
              }, { threshold: 0.32 });
              cards.forEach((card) => observer.observe(card));
            })();


            (() => {
              const counters = document.querySelectorAll('.metric-value');
              const format = (value) => new Intl.NumberFormat('en-US').format(value);
              const setValue = (el, value) => {
                el.textContent = format(value);
              };
              const animate = (el) => {
                const target = Number(el.dataset.count || 0);
                const duration = 1100;
                const start = performance.now();
                el.dataset.running = 'true';
                const tick = (now) => {
                  const progress = Math.min((now - start) / duration, 1);
                  const eased = 1 - Math.pow(1 - progress, 3);
                  setValue(el, Math.round(target * eased));
                  if (progress < 1 && el.dataset.running === 'true') {
                    requestAnimationFrame(tick);
                  } else {
                    setValue(el, target);
                    el.dataset.running = 'false';
                  }
                };
                requestAnimationFrame(tick);
              };
              if (!('IntersectionObserver' in window)) {
                counters.forEach(animate);
                return;
              }
              const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  const counter = entry.target;
                  if (entry.isIntersecting) {
                    animate(counter);
                  } else {
                    counter.dataset.running = 'false';
                    setValue(counter, 0);
                  }
                });
              }, { threshold: 0.55 });
              counters.forEach((counter) => counterObserver.observe(counter));
            })();
          `,
        }}
      />
    </main>
  );
}
