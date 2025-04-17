export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For development
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`;
  }
  
  // For production (GitHub Pages)
  return `/WealthFlow/${cleanPath}`;
}
