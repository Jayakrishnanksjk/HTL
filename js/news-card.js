class NewsCard extends HTMLElement {
  connectedCallback() {
    this.classList.add('news-card');

    const image = this.getAttribute('image') || '';
    const date = this.getAttribute('date') || '';
    const headline = this.getAttribute('headline') || '';
    const excerpt = this.getAttribute('excerpt') || '';
    const link = this.getAttribute('link') || '#';
    const index = this.getAttribute('index');

    this.innerHTML = `
      <div class="news-image">
        <img src="${image}" alt="${headline}" />
      </div>
      <div class="news-content">
        <div class="news-date">
          <i class="far fa-calendar"></i> ${date}
        </div>
        <h3 class="news-title">${headline}</h3>
        <p class="news-excerpt">${excerpt}</p>
        <div class="news-meta">
          <a href="${link}" class="read-more" target="_blank" rel="noopener noreferrer">
            Read more <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;

    // Make entire card look clickable
    this.style.cursor = 'pointer';

    // Click handler for whole card
    this.addEventListener('click', (e) => {
      // If user clicked the link or an element inside the link, allow default action
      if (e.target.closest('.read-more')) {
        return;
      }

      e.preventDefault();

      if (index !== null && index !== '') {
        if (typeof openNewsPopup === 'function') {
          openNewsPopup(parseInt(index, 10));
        }
      } else if (link && link !== '#') {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    });
  }
}

customElements.define('news-card', NewsCard);
