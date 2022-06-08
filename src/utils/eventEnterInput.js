const eventEnterInput = () => {
    const searchFormInput = document.querySelector('#searchFormInput')
    searchFormInput.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
            const valueSearch = searchFormInput.value.trim();
            if (valueSearch.length > 0) {
                location.hash = `#search=${valueSearch}`;
            }
        }
    });
};

export default eventEnterInput;