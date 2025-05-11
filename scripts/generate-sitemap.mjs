import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const isStaging = process.argv.includes('--staging');

const outputDir = '../../dist/sitemap.xml';
const hostname = 'https://doudoujoli.fr';

async function getCategories() {

    const response = await axios.get('https://api.doudoujoli.fr/api/categories');
    return response.data;
}

async function getItems() {

    const response = await axios.get('https://api.doudoujoli.fr/api/products');
    return response.data;
}

const keyRoutes = [
  '/',
  '/boutique'
];
const lessImportantRoutes = [
  '/a-propos',
  '/contact',
  '/faq',
  '/conditions-generales-vente',
  '/politique-confidentialite',
  '/politique-cookies',
];
const standardRoutes = [
  '/boutique/categories',
];

function createUrlEntry(url, lastmod = new Date().toISOString(), changefreq = 'monthly', priority = '0.7') {
  return `
  <url>
    <loc>${hostname}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
  const items = await getItems(); 
  const categories = await getCategories(); 

  const urls = [
    ...keyRoutes.map(route => createUrlEntry(route, undefined, 'weekly', '1.0')),
    ...items.map(item => createUrlEntry(`/article/${item.normalized}`, undefined, 'weekly', '0.9')),
    ...categories.map(category => createUrlEntry(`/boutique/${category.normalized}`, undefined, 'weekly', '0.8')),
    ...standardRoutes.map(route => createUrlEntry(route)),
    ...lessImportantRoutes.map(route => createUrlEntry(route, "2025-05-08T14:50:14.767Z", 'yearly', '0.3')),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls.join('\n')}
</urlset>`;

  const outputPath = path.resolve(fileURLToPath(import.meta.url), outputDir);
  fs.writeFileSync(outputPath, sitemap);
  console.log('✅ Sitemap generated at:', outputPath);
}

if(!isStaging){
  generateSitemap();
}