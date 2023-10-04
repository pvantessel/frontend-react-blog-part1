function formatDateTime(dateTimeString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateTimeString).toLocaleDateString('nl-NL', options);
}

export default formatDateTime;

