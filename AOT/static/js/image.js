<script>
  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");

  function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });
  }

  function changeSlide(step) {
    showSlide(currentSlide + step);
  }

  function goToSlide(index) {
    showSlide(index);
  }

  showSlide(0);
</script>