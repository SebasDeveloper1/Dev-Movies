const eventEnterInput = () => {
    const searchFormInput = document.querySelector('#searchFormInput')
    searchFormInput.addEventListener('keypress', e => {
        if (e.keyCode == 13) {
            e.preventDefault();
            const valueSearch = searchFormInput.value;
            location.hash = `#search=${valueSearch.trim()}`;
        }
    });
};

export default eventEnterInput;