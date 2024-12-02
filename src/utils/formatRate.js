import StarIcon from '../components/common/icons/star-icon';

export const formatRate = (rating, size = 20) => {
    const stars = [];

    // Generate yellow stars
    for (let i = 0; i < rating; i++) {
        stars.push(<StarIcon size={size} fill="#FBFB08" key={`y-${i}`} />);
    }

    // Generate gray stars to complete 5 stars
    for (let i = rating; i < 5; i++) {
        stars.push(<StarIcon size={size} fill="#6b7280" key={`r-${i}`} />);
    }

    return stars;
};
