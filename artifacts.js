document.addEventListener('DOMContentLoaded', () => {
  const artifactsGrid = document.querySelector('.artifacts-grid');
  
  if (artifactsGrid) {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.textContent = 'Summoning artifacts from the datasphere...';
    artifactsGrid.innerHTML = ''; // Clear any hardcoded content
    artifactsGrid.appendChild(loader);

    fetch('/api/cults3d-models')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        artifactsGrid.innerHTML = ''; // Clear loader
        // NOTE: You will need to adjust property names (e.g., model.name, model.images[0].url)
        // based on the actual structure of the Cults3D API response.
        data.forEach(model => {
          const card = document.createElement('div');
          card.className = 'terminal-card';
          // Use a placeholder if no image is available from the API
          const imageUrl = model.images && model.images.length > 0 ? model.images[0].url : 'images/artifact_placeholder_1.png';
          const description = model.short_description || 'A complex artifact from the digital forge.';

          card.innerHTML = `
            <div class="card-thumbnail">
              <img src="${imageUrl}" alt="${model.name} Thumbnail">
              <div class="spiral-watermark"></div>
            </div>
            <div class="card-body">
              <h2 class="artifact-name">${model.name}</h2>
              <p>${description}</p>
              <div class="card-footer">
                <a href="${model.url}" target="_blank" rel="noopener noreferrer" class="lore-link">view.on_cults3d()</a>
              </div>
            </div>
          `;
          artifactsGrid.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Failed to fetch artifacts:', error);
        artifactsGrid.innerHTML = `<p class="error-message">Transmission failed. Could not summon artifacts. Check server logs.</p>`;
      });
  }
});