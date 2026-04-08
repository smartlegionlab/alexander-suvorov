# Alexander Suvorov - Academic Research Portfolio <sup>v2.3.2<sup>

[![Live Site](https://img.shields.io/badge/Academic%20Portfolio-alexander--suvorov.ru-purple?style=for-the-badge&logo=google-scholar)](https://alexander-suvorov.ru)
[![Technical Portfolio](https://img.shields.io/badge/Technical%20Portfolio-smartlegionlab.ru-blue?style=for-the-badge&logo=github)](https://smartlegionlab.ru)
[![GitHub license](https://img.shields.io/github/license/smartlegionlab/alexander-suvorov)](https://github.com/smartlegionlab/alexander-suvorov/blob/master/LICENSE)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-blue?logo=github-actions)](https://github.com/features/actions)
[![Python](https://img.shields.io/badge/Python-3.8+-green?logo=python)](https://python.org)
[![Static Site](https://img.shields.io/badge/Hosting-GitHub%20Pages-orange?logo=github)](https://pages.github.com)
[![Zenodo](https://img.shields.io/badge/Data%20Source-Zenodo-blue?logo=zenodo)](https://zenodo.org)

**Academic research portfolio** showcasing Alexander Suvorov's published paradigms in **security architecture**, **information theory**, and **computational complexity**. This isn't a static site—it's an **automated research dashboard** that fetches live publication statistics from Zenodo daily.

![Academic Portfolio Preview](https://github.com/smartlegionlab/alexander-suvorov/blob/master/data/images/portfolio.png)

---

## ⚠️ Disclaimer

**By using this software, you agree to the full disclaimer terms.**

**Summary:** Software provided "AS IS" without warranty. You assume all risks.

**Full legal disclaimer:** See [DISCLAIMER.md](https://github.com/smartlegionlab/alexander-suvorov/blob/master/DISCLAIMER.md)

---

## Zero-Cost Automated Research Dashboard

**Serverless Static Site with Automated Research Metrics**:

[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-Automated-blue?logo=github-actions)](https://github.com/features/actions)
[![Python](https://img.shields.io/badge/Python-3.8+-green?logo=python)](https://python.org)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-orange?logo=github)](https://pages.github.com)
[![Zenodo API](https://img.shields.io/badge/API-Zenodo-blue?logo=zenodo)](https://developers.zenodo.org)

### How It Works

This site is **fully automated** — it fetches live research metrics daily and updates itself without any manual intervention or hosting costs.

```
GitHub Actions (cron) → Python Script → Zenodo API → JSON Data → Static Site
         ↓                    ↓              ↓            ↓            ↓
     Runs daily        Fetches stats   4 publications    Stores     Updates all
    at midnight        for 4 DOIs       with metrics    locally     HTML pages
```

### Live Research Metrics

The site displays real-time statistics for all four Zenodo publications:

| Paradigm | DOI | Metrics Displayed |
|----------|-----|-------------------|
| **Pointer-Based Security** | `10.5281/zenodo.17204738` | Unique/Total Views & Downloads |
| **Local Data Regeneration** | `10.5281/zenodo.17264327` | Unique/Total Views & Downloads |
| **Deterministic Game Engine** | `10.5281/zenodo.17383447` | Unique/Total Views & Downloads |
| **Position-Candidate-Hypothesis (PCH) Paradigm** | `10.5281/zenodo.17614888` | Unique/Total Views & Downloads |
| **Aggregate Metrics** | — | Total unique downloads (500+), total downloads (1000+), unique views (500+), total views (1000+), 4 publications, 3 paradigms |

### Key Features

| Feature | How It Works | Benefit |
|---------|--------------|---------|
| **Live Research Metrics** | Daily Zenodo API calls via GitHub Actions | Always shows current publication statistics |
| **Automatic Fallback** | Config.js stores hardcoded values | Site works even if Zenodo API is down |
| **Zero Client-Side API** | All data fetched at build time | No CORS issues, no rate limiting, faster load |
| **DOI Integration** | Every publication has permanent DOI links | Proper academic citation support |
| **Research-First Design** | Dark academic theme with paper-like containers | Professional presentation for academic audience |
| **Zero Cost** | Hosted on GitHub Pages | Only pay for domain name |

### File Structure: Atomic Data Flow

```
/
├── .github/workflows/
│   └── update-zenodo.yml        # Daily cron job (runs at midnight UTC)
│
├── scripts/
│   └── fetch_zenodo.py    # Python script that hits Zenodo API for all 4 DOIs
│
├── data/
│   └── zenodo.json               # AUTO-GENERATED: Fresh statistics every day
│
├── js/
│   ├── config.js                  # CONFIG: Hardcoded fallback values + Zenodo record IDs
│   ├── stats-manager.js           # LOGIC: Reads zenodo.json, merges with config, updates DOM
│   ├── main.js                     # INIT: Bootstraps the PortfolioApp
│   ├── particle-background.js      # VISUAL: Animated tech word canvas background
│   └── scroll-manager.js           # UI: Scroll-to-top button and progress bar
│
├── research/                       # Individual research detail pages (8 total)
│   ├── pointer-based-security.html
│   ├── local-data-regeneration.html
│   ├── deterministic-game-engine.html
│   └── position-candidate-hypothesis.html
│
├── index.html                      # Home page with 4 main navigation cards
├── about.html                      # Research profile, impact metrics, contact
├── research.html                   # MAIN: Detailed cards for all 4 paradigms with stats
├── expertise.html                  # Three core research areas with nested expertise items
├── sitemap.xml                     # AUTO-MAINTAINED: Includes all 8 research pages
└── css/
    └── style.css                   # Dark academic theme with CSS variables
```

---

## Technology Stack: Two-Layer Architecture

### Frontend: The Presentation Layer
| Technology                    | Purpose                  | Implementation                                                              |
|-------------------------------|--------------------------|-----------------------------------------------------------------------------|
| **HTML5**                     | Semantic academic markup | Schema.org Person markup, canonical URLs                                    |
| **CSS3**                      | Dark academic theme      | CSS variables (`--accent`, `--secondary`), paper containers, research cards |
| **Bootstrap 5**               | Responsive grid          | Grid system for research cards and metrics                                  |
| **Bootstrap Icons**           | Academic iconography     | Document, shield, arrow-repeat, diagram icons                               |
| **Vanilla JavaScript (ES6+)** | Modular UI logic         | 6 focused classes, no frameworks                                            |

### Backend: The Automation Layer
| Component            | Purpose              | How It Works                                                                 |
|----------------------|----------------------|------------------------------------------------------------------------------|
| **GitHub Actions**   | Scheduled automation | Cron job runs `update-zenodo.yml` daily at 00:00 UTC                         |
| **Python 3.8+**      | Data fetching        | `fetch_zenodo_stats.py` makes 4 API calls with 0.5s delay                    |
| **Requests Library** | HTTP client          | Fetches JSON from `https://zenodo.org/api/records/{record_id}`               |
| **Zenodo API**       | Data source          | Returns `stats.unique_views`, `stats.unique_downloads`, `views`, `downloads` |
| **JSON Storage**     | Local cache          | Writes to `/data/zenodo.json` with proper indentation                        |
| **Atomic Update**    | Deployment           | Workflow commits only if fetch succeeds; otherwise keeps old data            |

### Data Flow Diagram
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   GitHub Action │────▶│  Python Script  │────▶│  Zenodo API     │
│  (update-zenodo)│     │(fetch_zenodo.py)│     │(4 record calls) │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                 │
                                 ▼
┌─────────────────┐     ┌─────────────────┐     ┌───────────────────┐
│   HTML Pages    │◀────│  stats-manager  │◀────│  /data/zenodo.json│
│ (research.html) │     │   (reads file)  │     │  (auto-generated) │
└─────────────────┘     └─────────────────┘     └───────────────────┘
                                 │
                                 ▼
                         ┌─────────────────┐
                         │   config.js     │
                         │  (fallback if   │
                         │   file missing) │
                         └─────────────────┘
```

---

## The Four Research Paradigms

### 1. Pointer-Based Security Paradigm
- **DOI**: `10.5281/zenodo.17204738`
- **Published**: September 26, 2025
- **Concept**: Architectural transition from data protection to **no vulnerable data**
- **Core Transformations**:
  - Data Transmission → Synchronous Discovery
  - Secret Storage → Deterministic Regeneration
  - Attack Surface Protection → Architectural Elimination
- **Stats Display**: Unique/total views and downloads on research card

### 2. Local Data Regeneration Paradigm
- **DOI**: `10.5281/zenodo.17264327`
- **Published**: October 4, 2025
- **Concept**: Ontological shift from data transmission to **synchronous state discovery**
- **Foundational Postulates**:
  - Data as System State
  - Synchronous Local Regeneration (`D = F(S, P)`)
  - Communication as Pointer Synchronization
- **Stats Display**: Unique/total views and downloads on research card

### 3. Deterministic Game Engine (Tech Report)
- **DOI**: `10.5281/zenodo.17383447`
- **Published**: October 18, 2025
- **Concept**: Practical implementation validating both paradigms
- **Experimental Results**:
  - 2.8M elements/sec world generation throughput
  - O(1) constant-time state access
  - Linear O(n) entity simulation
  - Cryptographic verification capabilities
- **Stats Display**: Unique/total views and downloads on research card

### 4. Position-Candidate-Hypothesis (PCH) Paradigm
- **DOI**: `10.5281/zenodo.17614888`
- **Published**: November 15, 2025
- **Concept**: Structural-statistical approach to NP-complete problems
- **Fundamental Components**:
  - **Positions (n)**: Structural elements in solution space
  - **Candidates (n)**: Entities for position assignments
  - **Hypotheses (n)**: Independent research processes
- **Research Proposition**: Position-Candidate-Hypothesis (PCH) Paradigm uses n hypotheses, n positions, and n candidates per position for problems of size n
- **Stats Display**: Unique/total views and downloads on research card

---

## Stats Manager Deep Dive

The `StatsManager` class (in `stats-manager.js`) handles all research metrics:

```javascript
// Core logic:
1. constructor() calls loadFromFile()
2. loadFromFile() fetches /data/zenodo.json
3. If fetch succeeds → uses file data
4. If fetch fails → uses CONFIG.COUNTERS.RESEARCH_STATS (from config.js)
5. updateAllStats() merges file data with config (per-paradigm)
6. updateParadigmStats() updates each research card's view/download numbers
7. updateHeaderStats() updates header stats (total unique downloads/views)
8. updateMetricsStats() updates about page metrics
```

### Data Format
```json
{
  "pointerParadigm": {
    "unique_views": 359,
    "unique_downloads": 308,
    "total_views": 573,
    "total_downloads": 597
  },
  // ... other 3 paradigms
}
```

---

## Local Development & Manual Build

### Prerequisites
- Python 3.8+
- Git
- Local web server (any)

### Setup
```bash
# 1. Clone the repository
git clone https://github.com/smartlegionlab/alexander-suvorov.git
cd alexander-suvorov

# 2. Create virtual environment
python -m venv venv

# 3. Install requirements
pip install -r scripts/requirements.txt

# 4. Manually fetch latest Zenodo stats
python scripts/fetch_zenodo_stats.py

# 5. Start local server
python -m http.server 8000
```

---

## License

This project is licensed under the **BSD 3-Clause License**. See the [LICENSE](LICENSE) file for details.

---

## Connect with Alexander Suvorov

- **Academic Portfolio:** [alexander-suvorov.ru](https://alexander-suvorov.ru)
- **GitHub:** [@smartlegionlab](https://github.com/smartlegionlab)
- **ORCID:** [0009-0006-3427-9611](https://orcid.org/0009-0006-3427-9611)
- **Zenodo:** [Publications](https://zenodo.org/search?q=metadata.creators.name:%22Suvorov,%20Alexander%22)

---

<div align="center">
  <sub>Built with ❤️ </sub>
  <br>
  <sub>© 2026 Alexander Suvorov. All rights reserved.</sub>
</div>
