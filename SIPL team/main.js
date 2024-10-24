const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


// Select all side icons
const sideIcons = document.querySelectorAll('.side-icons li');

// Loop through each icon and add event listeners for hover effect
sideIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('show-text');
  });

  icon.addEventListener('mouseleave', () => {
    icon.classList.remove('show-text');
  });
});





  // ------------- slider card  ------------------ 

  $(document).ready(function () {
    // Event listener for card clicks
    $('.card').on('click', function () {
        const imgSrc = $(this).find('img').attr('src'); // Get the source of the clicked image
        const carouselInner = $('#carouselImages');
        carouselInner.empty(); // Clear previous images
  
        // Add images to the carousel
        $('.card img').each(function () {
            const src = $(this).attr('src');
            carouselInner.append(`
                <div class="carousel-item ${src === imgSrc ? 'active' : ''}">
                    <img src="${src}" class="d-block w-100" alt="Slide">
                </div>
            `);
        });
    });
  });

  
  $(document).ready(function () {
    // Event listener for card clicks
    $('.card').on('click', function () {
        const imgSrc = $(this).find('img').attr('src'); // Get the source of the clicked image
        const paragraphText = $(this).find('.card-csr-text').text(); // Get the paragraph text from the card
        const carouselInner = $('#carouselImages');
        carouselInner.empty(); // Clear previous images

        // Add images to the carousel
        $('.card img').each(function () {
            const src = $(this).attr('src');
            carouselInner.append(`
                <div class="carousel-item ${src === imgSrc ? 'active' : ''}">
                    <img src="${src}" class="d-block w-100" alt="Slide">
                </div>
            `);
        });

        // Set the paragraph text in the modal
        $('#modalParagraph').text(paragraphText);
    });
});

  