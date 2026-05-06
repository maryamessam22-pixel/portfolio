/**
 * Remove HTML tags from text
 * @param {string} text - Text containing HTML tags
 * @returns {string} - Clean text without HTML tags
 */
export const stripHTML = (text) => {
  if (!text) return '';
  
  // Remove HTML tags (any content between < and >)
  return text.replace(/<[^>]*>/g, '').trim();
};

/**
 * Clean text from common database artifacts
 * Removes: HTML tags, extra spaces, special characters
 * @param {string} text - Text to clean
 * @returns {string} - Cleaned text
 */
export const cleanText = (text) => {
  if (!text) return '';
  
  // Remove HTML tags
  let cleaned = text.replace(/<[^>]*>/g, '');
  
  // Remove extra spaces
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  return cleaned;
};
