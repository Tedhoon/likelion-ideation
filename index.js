document.addEventListener("DOMContentLoaded", () => {

    const printer = document.querySelector('.printer'),
          printBtn = document.querySelector('.print-btn'),
          hashTag = document.querySelector('.hash-tag'),
          lightbox = document.querySelector('.lightbox'),
          lightboxImage = document.querySelector('.lightbox-image'),
          resetBtn = document.querySelector('.reset_btn');

    let printing = false;

    printBtn.addEventListener('click', () => {
        if (!printing) printer.classList.add('printing');
    });

    hashTag.addEventListener('click', () => lightbox.classList.add('show'));

    lightbox.addEventListener('click', () => lightbox.classList.remove('show'));

    resetBtn.addEventListener('click',(e) => {
        // lightbox.classList.remove('show');
        e.stopPropagation()
        location.reload()
    })
});