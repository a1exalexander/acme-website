import content from '../../index.json';

document.title = content.seo.title;

document.getElementById('home-root').innerHTML = `
<h1>${content.title}</h1>
<nav>
    <a href="/contact/">Contact</a>
    <a href="/about/">About Us</a>
</nav>
`