document.addEventListener("DOMContentLoaded", function(){
  // יצירת כפתור "חזור למעלה"
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = "חזור למעלה";
  backToTopBtn.id = "backToTop";
  document.body.appendChild(backToTopBtn);
  
  backToTopBtn.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // הצגת הכפתור כאשר גולשים מטה יותר מ-300 פיקסלים
  window.addEventListener("scroll", function(){
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const adDiv = document.querySelector('div[style*="tiiny.host"]');
    if (adDiv) {
      adDiv.remove(); 
    }
  });
