export const substringContent = (content: string, number: number) => {
  return content.length > number
    ? `${content.substring(0, number)}...`
    : content;
};
