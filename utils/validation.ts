
export const isValidUrl = (url: string): boolean => {
  if (!url) return true; // Optional fields are valid if empty
  try {
    const newUrl = new URL(url);
    // Ensure the protocol is either http or https
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:' ;
  } catch (_) {
    return false;
  }
};
