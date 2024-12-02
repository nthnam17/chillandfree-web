export const formatText = (text, maxLength) => {
    return text && text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
