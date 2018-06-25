document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
});


const handleFormSubmit = function (event) {
    event.preventDefault();
    console.log('form logged');

    const form = event.target;
    const runDate = form.runDate.value;
    const distance = form.distance.value;
    const duration = form.duration.value;
    const difficulty = form.difficulty.value;

    const result = document.querySelector('#running-list')
    result.textContent = `You ran ${distance}km on ${runDate}. It took you ${duration} minutes, which you found to be ${difficulty}.`

    form.reset()
}

const handleDeleteAllClick = function (event) {
    const runningList = document.querySelector('#running-list');
    runningList.innerHTML = '';
};
