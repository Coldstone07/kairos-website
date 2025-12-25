#!/usr/bin/env node

/**
 * Research Markdown to HTML Converter
 * Converts research markdown files to HTML pages for the Kairos website
 */

const fs = require('fs').promises;
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// Configuration
const CONFIG = {
    sourceDir: path.join(__dirname, '../../../Research'),
    outputDir: path.join(__dirname, '../research/articles'),
    templatesDir: path.join(__dirname, '../research/templates'),
    assetsPath: '../assets/research-styles.css'
};

// HTML Template
const createHTMLTemplate = (content, metadata) => {
    const {
        title = 'Research Article',
        category = 'research',
        evidence_level = 'moderate',
        reading_time = 20,
        date_updated = new Date().toISOString().split('T')[0],
        summary = '',
        citations_count = 0
    } = metadata;

    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://unpkg.com https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com https://unpkg.com https://cdnjs.cloudflare.com;">
    <title>${title} | Kairos Research</title>
    <meta name="description" content="${summary}">

    <!-- External Dependencies -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js" crossorigin="anonymous"
        referrerpolicy="no-referrer"></script>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="../../css/styles.css">
    <link rel="stylesheet" href="../assets/research-styles.css">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        moonlight: {
                            primary: '#F7F3E9',
                            secondary: '#EDE7D3',
                            muted: '#D4CDB7',
                            accent: '#A5968A'
                        },
                        cosmic: {
                            base: '#0F0C29',
                            mid: '#302B63',
                            end: '#24243E'
                        },
                        accent: {
                            primary: '#D4AF37',
                            secondary: '#C5A028',
                            interactive: '#F3E5AB'
                        }
                    },
                    fontFamily: {
                        serif: ['"Lora"', 'serif'],
                        sans: ['"Manrope"', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>

<body class="font-sans antialiased overflow-x-hidden selection:bg-accent-primary selection:text-cosmic-base">

    <!-- Ambient Particles Background -->
    <div id="particles"></div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-nav" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0 cursor-pointer group">
                    <a href="../../index.html" class="font-serif text-2xl tracking-[0.2em] text-white">KAIROS<span
                            class="text-accent-primary">.</span>PATH</a>
                </div>
                <div class="hidden lg:block">
                    <div class="ml-10 flex items-center space-x-8">
                        <a href="../../index.html"
                            class="text-xs font-bold tracking-widest text-moonlight-muted hover:text-accent-primary uppercase transition-colors">Framework</a>
                        <a href="../../methodology.html"
                            class="text-xs font-bold tracking-widest text-moonlight-muted hover:text-accent-primary uppercase transition-colors">Methodology</a>
                        <a href="../../technology.html"
                            class="text-xs font-bold tracking-widest text-moonlight-muted hover:text-accent-primary uppercase transition-colors">Technology</a>
                        <a href="../../labs.html"
                            class="text-xs font-bold tracking-widest text-moonlight-muted hover:text-accent-primary uppercase transition-colors">Labs</a>
                        <a href="../../research.html"
                            class="text-xs font-bold tracking-widest text-accent-primary uppercase transition-colors">Research</a>
                        <a href="../../about.html"
                            class="text-xs font-bold tracking-widest text-moonlight-muted hover:text-accent-primary uppercase transition-colors">About</a>
                        <a href="../../begin.html"
                            class="ml-4 px-6 py-2 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-black transition-all rounded-sm text-xs tracking-widest uppercase font-semibold">Begin
                            Application</a>
                    </div>
                </div>
                <div class="lg:hidden">
                    <button data-action="toggle-mobile-menu" class="text-moonlight-muted"><i
                            data-lucide="menu"></i></button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Reading Progress Bar -->
    <div class="reading-progress">
        <div class="reading-progress-bar" id="progress-bar"></div>
    </div>

    <main class="pt-24">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Breadcrumb Navigation -->
            <nav class="breadcrumbs mb-6">
                <a href="../../research.html">Research</a>
                <span>/</span>
                <a href="../${category}.html">${category.charAt(0).toUpperCase() + category.slice(1)} Research</a>
                <span>/</span>
                <span>${title}</span>
            </nav>

            <!-- Article Metadata Bar -->
            <div class="research-meta">
                <span class="evidence-badge evidence-${evidence_level}">
                    ${evidence_level === 'strong' ? 'Strong Evidence' :
                      evidence_level === 'moderate' ? 'Moderate Evidence' :
                      evidence_level === 'emerging' ? 'Emerging Evidence' :
                      'Critical Findings'}
                </span>
                <span>
                    <i data-lucide="clock" class="w-4 h-4"></i>
                    ${reading_time} min read
                </span>
                <span>
                    <i data-lucide="calendar" class="w-4 h-4"></i>
                    Updated ${date_updated}
                </span>
                ${citations_count > 0 ? `<span>
                    <i data-lucide="file-text" class="w-4 h-4"></i>
                    ${citations_count} citations
                </span>` : ''}
            </div>

            <div class="grid lg:grid-cols-12 gap-12">
                <!-- Table of Contents (Desktop) -->
                <aside class="hidden lg:block lg:col-span-3">
                    <div class="toc-sidebar">
                        <h4>Contents</h4>
                        <ul id="toc-list">
                            <!-- Generated TOC goes here -->
                        </ul>
                    </div>
                </aside>

                <!-- Article Content -->
                <article class="lg:col-span-9 research-article">
                    ${content}
                </article>
            </div>
        </div>
    </main>

    <footer class="bg-black/50 border-t border-white/5 py-12 mt-24">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h4 class="font-serif text-2xl text-white mb-6">KAIROS.PATH</h4>
            <p class="text-moonlight-muted text-sm max-w-md mx-auto mb-8">
                Evolution is not a destination. It is a moment-by-moment choice to remain conscious.
            </p>
            <div class="text-xs text-white/20">
                &copy; 2024 Kairos Path. All rights reserved.
            </div>
        </div>
    </footer>

    <script src="../../js/app.js"></script>
    <script src="../../js/mobile-nav.js"></script>
    <script>
        // Reading Progress Bar
        window.addEventListener('scroll', () => {
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / docHeight) * 100;
            document.getElementById('progress-bar').style.width = scrolled + '%';
        });

        // Generate Table of Contents
        document.addEventListener('DOMContentLoaded', () => {
            const article = document.querySelector('.research-article');
            const headings = article.querySelectorAll('h2, h3');
            const tocList = document.getElementById('toc-list');

            headings.forEach((heading, index) => {
                // Add ID to heading for linking
                const id = 'section-' + index;
                heading.id = id;

                // Create TOC entry
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#' + id;
                a.textContent = heading.textContent;
                a.className = heading.tagName === 'H3' ? 'pl-4' : '';
                li.appendChild(a);
                tocList.appendChild(li);

                // Smooth scroll behavior
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    heading.scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Initialize Lucide icons
            lucide.createIcons();
        });

        // Highlight active TOC item on scroll
        window.addEventListener('scroll', () => {
            const headings = document.querySelectorAll('.research-article h2, .research-article h3');
            const tocLinks = document.querySelectorAll('#toc-list a');

            let current = '';
            headings.forEach(heading => {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 100) {
                    current = heading.id;
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>

</html>`;
};

// Markdown configuration
marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    mangle: false
});

// Extract metadata from markdown front matter
function extractMetadata(markdown) {
    const parsed = matter(markdown);
    const content = parsed.content;

    // Calculate reading time (average 200 words per minute)
    const words = content.split(/\s+/).length;
    const readingTime = Math.ceil(words / 200);

    // Count citations (looking for patterns like [1], [Author, Year], etc.)
    const citationMatches = content.match(/\[\d+\]|\[[A-Za-z]+.*?,\s*\d{4}\]/g) || [];
    const citationsCount = citationMatches.length;

    return {
        ...parsed.data,
        reading_time: readingTime,
        citations_count: citationsCount,
        content: content
    };
}

// Get category from file path
function getCategoryFromPath(filePath) {
    const fileName = path.basename(filePath, '.md');
    const number = parseInt(fileName.split('_')[0]);

    if (number >= 1 && number <= 13) return 'core';
    if (number >= 14 && number <= 18) return 'advanced';
    return 'meta';
}

// Process a single markdown file
async function processMarkdownFile(filePath) {
    try {
        console.log(`Processing: ${path.basename(filePath)}`);

        // Read the markdown file
        const markdown = await fs.readFile(filePath, 'utf8');

        // Extract metadata and content
        const { content, ...metadata } = extractMetadata(markdown);

        // Get category from file path
        metadata.category = getCategoryFromPath(filePath);

        // Convert markdown to HTML
        const htmlContent = marked(content);

        // Generate the full HTML page
        const fullHTML = createHTMLTemplate(htmlContent, metadata);

        // Generate output filename
        const baseName = path.basename(filePath, '.md');
        const outputFileName = baseName.replace(/^\d+_/, '').replace(/_/g, '-') + '.html';
        const outputPath = path.join(CONFIG.outputDir, outputFileName);

        // Ensure output directory exists
        await fs.mkdir(CONFIG.outputDir, { recursive: true });

        // Write the HTML file
        await fs.writeFile(outputPath, fullHTML, 'utf8');

        console.log(`✓ Converted: ${outputFileName}`);

        return {
            success: true,
            file: outputFileName,
            metadata
        };
    } catch (error) {
        console.error(`✗ Error processing ${filePath}:`, error.message);
        return {
            success: false,
            file: path.basename(filePath),
            error: error.message
        };
    }
}

// Main conversion function
async function convertResearchDocuments() {
    console.log('Starting Research Document Conversion...\n');

    try {
        // Find all research markdown files
        const coreFiles = await fs.readdir(path.join(CONFIG.sourceDir, 'core')).catch(() => []);
        const advancedFiles = await fs.readdir(path.join(CONFIG.sourceDir, 'advanced')).catch(() => []);
        const metaFiles = await fs.readdir(path.join(CONFIG.sourceDir, 'meta')).catch(() => []);

        const allFiles = [
            ...coreFiles.filter(f => f.endsWith('.md')).map(f => path.join(CONFIG.sourceDir, 'core', f)),
            ...advancedFiles.filter(f => f.endsWith('.md')).map(f => path.join(CONFIG.sourceDir, 'advanced', f)),
            ...metaFiles.filter(f => f.endsWith('.md')).map(f => path.join(CONFIG.sourceDir, 'meta', f))
        ];

        console.log(`Found ${allFiles.length} markdown files to convert.\n`);

        // Process each file
        const results = [];
        for (const file of allFiles) {
            const result = await processMarkdownFile(file);
            results.push(result);
        }

        // Summary
        console.log('\n=== Conversion Summary ===');
        const successful = results.filter(r => r.success);
        const failed = results.filter(r => !r.success);

        console.log(`✓ Successfully converted: ${successful.length} files`);
        if (failed.length > 0) {
            console.log(`✗ Failed: ${failed.length} files`);
            failed.forEach(f => console.log(`  - ${f.file}: ${f.error}`));
        }

        // Generate index data for search functionality
        const indexData = successful.map(r => ({
            file: r.file,
            title: r.metadata.title || 'Untitled',
            category: r.metadata.category,
            summary: r.metadata.summary || '',
            evidence: r.metadata.evidence_level || 'moderate',
            citations: r.metadata.citations_count,
            readingTime: r.metadata.reading_time
        }));

        await fs.writeFile(
            path.join(CONFIG.outputDir, '..', 'search-index.json'),
            JSON.stringify(indexData, null, 2)
        );

        console.log('\n✓ Search index generated');
        console.log('\nConversion complete!');

    } catch (error) {
        console.error('Fatal error:', error);
        process.exit(1);
    }
}

// Run the conversion
if (require.main === module) {
    convertResearchDocuments();
}

module.exports = { processMarkdownFile, convertResearchDocuments };