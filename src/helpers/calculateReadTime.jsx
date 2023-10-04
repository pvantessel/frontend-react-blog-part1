function calculateReadTime(message) {
    const countWords = message.split(' ').length;
    return Math.round(countWords / 100 * 0.3);
}

export default calculateReadTime;