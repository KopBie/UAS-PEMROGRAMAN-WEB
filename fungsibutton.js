document.addEventListener('DOMContentLoaded', function () {
 document.querySelectorAll('[data-section]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
             document.querySelectorAll('.list-group-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');

            const sectionId = this.dataset.section;
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId + 'Section').classList.add('active');
        });
    });

    function updateDateTime() {
        const now = new Date();
        const element = document.getElementById('currentDateTime');
        if(element) {
            element.textContent = `Waktu: ${now.toLocaleDateString('id-ID')} ${now.toLocaleTimeString('id-ID')}`;
        }
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
