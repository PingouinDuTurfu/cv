document.getElementById('moon').addEventListener('click', () => {
    document.getElementById('page').classList.toggle('light');
    document.getElementById('moon').hidden = true;
    document.getElementById('sun').hidden = false;
});

document.getElementById('sun').addEventListener('click', () => {
    document.getElementById('page').classList.toggle('light');
    document.getElementById('moon').hidden = false;
    document.getElementById('sun').hidden = true;
});

document.getElementById('print').addEventListener('click', () => {
    window.print();
});