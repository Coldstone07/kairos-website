#!/usr/bin/env node

/**
 * Sample Research Conversion Script
 * Converts 2-3 sample research documents to demonstrate the conversion process
 */

const fs = require('fs').promises;
const path = require('path');
const { processMarkdownFile } = require('./convert-research');

// Sample files to convert (adjust paths as needed)
const SAMPLE_FILES = [
    '/Users/jatinalla/Desktop/Kairos/Research/core/01_loneliness_epidemic.md',
    '/Users/jatinalla/Desktop/Kairos/Research/core/02_ifs_evidence_base.md',
    '/Users/jatinalla/Desktop/Kairos/Research/advanced/17_ai_crisis_detection_safety.md'
];

async function convertSampleDocuments() {
    console.log('=== Sample Research Document Conversion ===\n');
    console.log('Converting 3 sample documents to demonstrate the system...\n');

    // Create output directory
    const outputDir = path.join(__dirname, '../research/articles');
    await fs.mkdir(outputDir, { recursive: true });

    // Process each sample file
    const results = [];
    for (const filePath of SAMPLE_FILES) {
        try {
            // Check if file exists
            await fs.access(filePath);
            console.log(`\nProcessing: ${path.basename(filePath)}`);
            const result = await processMarkdownFile(filePath);
            results.push(result);
        } catch (error) {
            console.log(`✗ File not found: ${filePath}`);
            console.log(`  Attempting alternative path...`);

            // Try alternative path structure
            const altPath = filePath.replace('/Research/', '/docs/Research/');
            try {
                await fs.access(altPath);
                console.log(`  Found at: ${altPath}`);
                const result = await processMarkdownFile(altPath);
                results.push(result);
            } catch (altError) {
                console.log(`  ✗ Alternative path also not found`);
                results.push({
                    success: false,
                    file: path.basename(filePath),
                    error: 'File not found'
                });
            }
        }
    }

    // Summary
    console.log('\n\n=== Conversion Summary ===');
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    if (successful.length > 0) {
        console.log(`\n✓ Successfully converted ${successful.length} documents:`);
        successful.forEach(r => {
            console.log(`  - ${r.file}`);
            console.log(`    Title: ${r.metadata.title || 'Untitled'}`);
            console.log(`    Category: ${r.metadata.category}`);
            console.log(`    Reading time: ${r.metadata.reading_time} min`);
            console.log(`    Citations: ${r.metadata.citations_count}`);
        });
    }

    if (failed.length > 0) {
        console.log(`\n✗ Failed to convert ${failed.length} documents:`);
        failed.forEach(f => console.log(`  - ${f.file}: ${f.error}`));
    }

    if (successful.length > 0) {
        console.log('\n📁 Output files created in: research/articles/');
        console.log('\n✨ Sample conversion complete! You can now view the HTML files in your browser.');
        console.log('\nTo convert all research documents, run: npm run convert');
    }
}

// Run the sample conversion
if (require.main === module) {
    convertSampleDocuments().catch(error => {
        console.error('\n❌ Fatal error:', error);
        process.exit(1);
    });
}

module.exports = { convertSampleDocuments };