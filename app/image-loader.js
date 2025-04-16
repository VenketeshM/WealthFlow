export default function customImageLoader({ src }) {
  if (src.startsWith('http')) {
    return src;
  }
  return `/WealthFlow${src}`;
}
