document.addEventListener('DOMContentLoaded', () => {
    const filterInput = document.getElementById('filterInput');
    const featureList = document.querySelectorAll('#featureList .link-card');

    // 实时监听输入框的变化
    filterInput.addEventListener('input', () => {
        const inputValue = filterInput.value.toLowerCase();
        console.log(featureList)
        featureList.forEach((feature) => {
            const title = feature.querySelector('h2').textContent.toLowerCase();
            const description = feature.querySelector('p').textContent.toLowerCase();
            if (title.includes(inputValue) || description.includes(inputValue)) {
                feature.style.display = '';
            } else {
                feature.style.display = 'none';
            }
        });
    });
});
