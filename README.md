# 🔬 Alexander Suvorov - Academic Research Portfolio

**Academic Portfolio**: [alexander-suvorov.ru](https://alexander-suvorov.ru)  
**Technical Portfolio**: [smartlegionlab.ru](https://smartlegionlab.ru)

## 🎯 About the Project

Academic research portfolio showcasing Alexander Suvorov's groundbreaking work in security paradigms and information theory. The site presents published research with automated statistics updates via GitHub Actions.

## ✨ Key Features

### 🎨 Academic Design
- **Dark academic theme** with professional typography
- **Research-focused layout** emphasizing publications
- **DOI integration** for all publications
- **Academic metrics** with automated statistics

### 🔬 Research Content
- **Pointer-Based Security Paradigm** - Architectural security transformation
- **Local Data Regeneration Paradigm** - Information theory innovation
- **Deterministic Game Engine Report** - Practical implementation
- **Position-Candidate-Hypothesis (PCH)** - Novel approach to NP-complete problems
- **Zenodo integration** for publication statistics via GitHub Actions

### 📊 Automated Statistics
- **GitHub Actions** fetches Zenodo stats daily
- **Local JSON files** store all metrics
- **Fallback values** in config when API unavailable
- **Real-time display** of:
  - Unique paper downloads/views
  - Total paper downloads/views
  - Publication counts
  - Paradigm statistics

### 📈 Current Metrics
- **500+ unique paper downloads**
- **1000+ total paper downloads**
- **500+ unique paper views**
- **1000+ total paper views**
- **4 research publications**
- **3 published paradigms**

## 🛠 Technology Stack

### Frontend
- **HTML5** with semantic academic markup
- **CSS3** with research-focused design
- **Bootstrap 5** + Bootstrap Icons
- **Vanilla JavaScript** (ES6+)
- **Academic schema** markup (JSON-LD)

### Automation
- **GitHub Actions** for daily Zenodo API calls
- **Python scripts** for data fetching
- **Automatic JSON updates** in `/data/` directory
- **Zero client-side API requests**

## 🎯 Main Sections

1. **Research Profile** - Academic biography and expertise
2. **Research Paradigms** - Detailed presentation of published work
3. **Paradigms Evolution** - Theoretical development timelines
4. **Research Expertise** - Specialized knowledge areas
5. **Academic Contact** - Research collaboration channels

## 🔬 Key Publications

### Pointer-Based Security Paradigm
- **DOI**: `10.5281/zenodo.17204738`
- **Concept**: Architectural shift from data protection to data non-existence
- **Stats**: Live from Zenodo (unique/total views and downloads)

### Local Data Regeneration Paradigm
- **DOI**: `10.5281/zenodo.17264327`
- **Concept**: Ontological shift from data transmission to synchronous state discovery
- **Stats**: Live from Zenodo (unique/total views and downloads)

### Deterministic Game Engine Report
- **DOI**: `10.5281/zenodo.17383447`
- **Concept**: Practical implementation validating both paradigms
- **Stats**: Live from Zenodo (unique/total views and downloads)

### Position-Candidate-Hypothesis (PCH)
- **DOI**: `10.5281/zenodo.17614888`
- **Concept**: A Structural-Statistical Approach to NP-Complete Problems
- **Stats**: Live from Zenodo (unique/total views and downloads)

## 🤖 How It Works

1. **GitHub Actions** runs daily (or on demand)
2. **Python script** fetches statistics from Zenodo API for all publications
3. **Data saved** to `/data/zenodo.json`
4. **StatsManager** reads the JSON file and updates the page
5. **Fallback values** from `config.js` used if file missing or API fails

### File Structure
```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── config.js (fallback values)
│   ├── utils.js
│   ├── stats-manager.js
│   ├── scroll-manager.js
│   ├── animation-manager.js
│   └── particle-background.js
├── data/
│   └── zenodo.json (auto-generated)
└── .github/workflows/
    └── update-zenodo.yml
```

## 🚀 Local Development

1. Clone the repository
2. Start a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000`

## 🔄 Manual Data Update

To force update Zenodo statistics:
1. Go to GitHub repository → Actions tab
2. Select "Update Zenodo Stats" workflow
3. Click "Run workflow"

## 🎨 Unique Elements

- **Paradigm Evolution Timelines** with interactive animation
- **Academic Metrics Dashboard** with live statistics
- **Research Validation Framework** showing practical implementation
- **Professional Academic Design** tailored for research audience
- **Smooth scroll navigation** with progress indicator

## 📱 Performance

- **Optimized** for all devices
- **Fast loading** with local JSON files
- **No external API calls** from browser
- **Smooth animations** with CSS transitions
- **Particle background** (desktop only)

## 🔗 Academic Integrations

- **Zenodo**: Research publications with DOI
- **ORCID**: Academic researcher profile
- **GitHub**: Research code and prototypes
- **Live Metrics**: Automated daily updates

## 📊 Research Focus Areas

- Digital Security Architecture
- Information Theory
- Theoretical Computer Science
- Structural Decomposition
- Paradigm Development
- Academic Publishing
- Research Validation

---

## 📸 Performance Metrics

![Academic Portfolio](https://github.com/smartlegionlab/alexander-suvorov/blob/master/data/images/portfolio.png)
![Mobile Page Speed Insights](https://github.com/smartlegionlab/alexander-suvorov/blob/master/data/images/mobile.png)
![PC Page Speed Insights](https://github.com/smartlegionlab/alexander-suvorov/blob/master/images/data/pc.png)

---

The website represents a professional academic portfolio combining rigorous research presentation with modern web technologies and automated data updates, specifically designed for the academic and research community.