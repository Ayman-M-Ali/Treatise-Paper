export const observerElements = (sectionElements) => {
  const options = { threshold: .4 }

  const callback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    })
  }

  const observer = new IntersectionObserver(callback, options);
  sectionElements.forEach(element => observer.observe(element));
}