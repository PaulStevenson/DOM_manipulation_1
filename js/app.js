document.addEventListener('DOMContentLoaded', () => {
    console.log("JS loaded");

    const form = document.querySelector('#new-item-form');

    const handleFormSubmit = function (event) {
        event.preventDefault();
        console.log('form logged');

        const form = event.target;
        const runDate = form.runDate.value;
        const distance = form.distance.value;
        const duration = form.duration.value;
        const difficulty = form.difficulty.value;

        const result = document.querySelector('#running-list')
        result.textContent = `${runDate} / ${distance}KM / ${duration} minutes / ${}`

        form.reset()
    }

form.addEventListener('submit', handleFormSubmit);
});
