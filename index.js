document.addEventListener("DOMContentLoaded", () => {

    const printer = document.querySelector('.printer'),
          printBtn = document.querySelector('.print-btn'),
          hashTag = document.querySelector('.hash-tag'),
          advertise = document.querySelector('.advertise'),
          printTray = document.querySelector('.printer-tray');

    let printing = false;

    printBtn.addEventListener('click', () => {
        if (!printing) printer.classList.add('printing');
    });

    hashTag.addEventListener('click', () => {
        if(printTray.className === 'printer-tray'){
            printTray.classList.add('show-up')
            advertise.classList.add('adshow')
        }
        else{
            printTray.classList.remove('show-up')
            advertise.classList.remove('adshow')
        }
        
    });
});