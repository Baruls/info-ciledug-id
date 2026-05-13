async function run() {
  const r = await fetch('https://www.instagram.com/reel/DXOnYr6Exkc/');
  const t = await r.text();
  const title = t.match(/<meta property="og:title" content="(.*?)"/);
  const desc = t.match(/<meta property="og:description" content="(.*?)"/);
  const img = t.match(/<meta property="og:image" content="(.*?)"/);
  console.log('Title:', title ? title[1] : 'not found');
  console.log('Desc:', desc ? desc[1] : 'not found');
  console.log('Img:', img ? img[1] : 'not found');
}
run();
