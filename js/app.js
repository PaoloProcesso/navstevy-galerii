/**
 * Obrazy mistrů / Deník z galerií – Hlavní aplikační skript (app.js)
 * Zajišťuje: Tmavý/Světlý režim, Fullscreen Lightbox s lupou, živé vyhledávání, filtry a přepínání pohledů.
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeManager();
    initReadingProgress();
    initLightbox();
    initScrollToTop();
    initPageFeatures();
});

/* ==========================================================================
   1. SPRÁVA TÉMATU (DARK / LIGHT THEME MANAGER)
   ========================================================================== */
function initThemeManager() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const storedTheme = localStorage.getItem('gallery_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Nastavení výchozího tématu
    const currentTheme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'light');
    setTheme(currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('gallery_theme', newTheme);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý galerijní režim');
        themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý galerijní režim');
    }
}

/* ==========================================================================
   2. UKAZATEL ČTENÍ (READING PROGRESS BAR)
   ========================================================================== */
function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        }
    }, { passive: true });
}

/* ==========================================================================
   3. TLAČÍTKO ZPĚT NAHORU (SCROLL TO TOP)
   ========================================================================== */
function initScrollToTop() {
    const backToTopBtn = document.getElementById('back-to-top-btn');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   4. FULLSCREEN LIGHTBOX & ZOOM PROHLÍŽEČ
   ========================================================================== */
let lightboxState = {
    activeArtworkIndex: -1,
    currentArtworks: [],
    zoomLevel: 1,
    panX: 0,
    panY: 0,
    isDragging: false,
    startX: 0,
    startY: 0
};

function initLightbox() {
    // Vytvoření Lightbox HTML elementu, pokud neexistuje
    if (!document.getElementById('lightbox-modal')) {
        const lightboxHtml = `
            <div id="lightbox-modal" class="lightbox-modal" role="dialog" aria-hidden="true">
                <div class="lightbox-header">
                    <div class="lightbox-title-wrap">
                        <h3 id="lightbox-title">Název díla</h3>
                        <p id="lightbox-artist">Autor</p>
                    </div>
                    <div class="lightbox-controls">
                        <button class="lightbox-btn" id="lb-zoom-in" title="Zvětšit (+)">🔍+</button>
                        <button class="lightbox-btn" id="lb-zoom-out" title="Zmenšit (-)">🔍−</button>
                        <button class="lightbox-btn" id="lb-zoom-reset" title="Původní velikost (0)">↺</button>
                        <a class="lightbox-btn" id="lb-open-raw" href="#" target="_blank" title="Otevřít originální soubor">↗</a>
                        <button class="lightbox-btn" id="lb-close" title="Zavřít (Esc)">✕</button>
                    </div>
                </div>
                <div class="lightbox-body" id="lightbox-body">
                    <button class="lightbox-nav-btn lightbox-prev" id="lb-prev" title="Předchozí obraz (←)">‹</button>
                    <div class="lightbox-stage" id="lightbox-stage">
                        <img id="lightbox-img" class="lightbox-image" src="" alt="">
                    </div>
                    <button class="lightbox-nav-btn lightbox-next" id="lb-next" title="Další obraz (→)">›</button>
                </div>
                <div class="lightbox-footer">
                    <div id="lightbox-meta">Metadata díla</div>
                    <div id="lightbox-counter">1 / 10</div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHtml);
    }

    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.getElementById('lb-close');
    const prevBtn = document.getElementById('lb-prev');
    const nextBtn = document.getElementById('lb-next');
    const zoomInBtn = document.getElementById('lb-zoom-in');
    const zoomOutBtn = document.getElementById('lb-zoom-out');
    const zoomResetBtn = document.getElementById('lb-zoom-reset');
    const stage = document.getElementById('lightbox-stage');

    // Zavření
    closeBtn.addEventListener('click', closeLightbox);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.id === 'lightbox-body') {
            closeLightbox();
        }
    });

    // Navigace
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });

    // Zoom
    zoomInBtn.addEventListener('click', () => adjustZoom(0.25));
    zoomOutBtn.addEventListener('click', () => adjustZoom(-0.25));
    zoomResetBtn.addEventListener('click', resetZoom);

    // Kolečko myši pro zoom
    stage.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.2 : -0.2;
        adjustZoom(delta);
    }, { passive: false });

    // Drag & Pan při přiblížení
    stage.addEventListener('mousedown', (e) => {
        if (lightboxState.zoomLevel > 1) {
            lightboxState.isDragging = true;
            lightboxState.startX = e.clientX - lightboxState.panX;
            lightboxState.startY = e.clientY - lightboxState.panY;
            stage.classList.add('dragging');
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (lightboxState.isDragging) {
            lightboxState.panX = e.clientX - lightboxState.startX;
            lightboxState.panY = e.clientY - lightboxState.startY;
            applyTransform();
        }
    });

    window.addEventListener('mouseup', () => {
        if (lightboxState.isDragging) {
            lightboxState.isDragging = false;
            stage.classList.remove('dragging');
        }
    });

    // Klávesové zkratky
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === '+' || e.key === '=') adjustZoom(0.25);
        if (e.key === '-' || e.key === '_') adjustZoom(-0.25);
        if (e.key === '0') resetZoom();
    });
}

function openLightbox(artworkId, artworkList) {
    const modal = document.getElementById('lightbox-modal');
    lightboxState.currentArtworks = artworkList && artworkList.length > 0 ? artworkList : ARTWORKS_DATA;
    
    const index = lightboxState.currentArtworks.findIndex(a => a.id === artworkId);
    if (index === -1) return;

    lightboxState.activeArtworkIndex = index;
    renderLightboxContent();
    resetZoom();

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    const list = lightboxState.currentArtworks;
    let newIndex = lightboxState.activeArtworkIndex + direction;
    if (newIndex < 0) newIndex = list.length - 1;
    if (newIndex >= list.length) newIndex = 0;

    lightboxState.activeArtworkIndex = newIndex;
    renderLightboxContent();
    resetZoom();
}

function renderLightboxContent() {
    const artwork = lightboxState.currentArtworks[lightboxState.activeArtworkIndex];
    if (!artwork) return;

    document.getElementById('lightbox-title').textContent = artwork.title;
    document.getElementById('lightbox-artist').textContent = `${artwork.artist} (${artwork.artistDates})`;
    
    const img = document.getElementById('lightbox-img');
    img.src = artwork.highResUrl || artwork.image;
    img.alt = `${artwork.artist} - ${artwork.title}`;

    document.getElementById('lb-open-raw').href = artwork.highResUrl || artwork.image;
    document.getElementById('lightbox-meta').textContent = `${artwork.date} • ${artwork.medium} • ${artwork.location || 'Sbírka'}`;
    document.getElementById('lightbox-counter').textContent = `${lightboxState.activeArtworkIndex + 1} / ${lightboxState.currentArtworks.length}`;
}

function adjustZoom(amount) {
    lightboxState.zoomLevel = Math.max(0.8, Math.min(4, lightboxState.zoomLevel + amount));
    if (lightboxState.zoomLevel === 1) {
        lightboxState.panX = 0;
        lightboxState.panY = 0;
    }
    applyTransform();
}

function resetZoom() {
    lightboxState.zoomLevel = 1;
    lightboxState.panX = 0;
    lightboxState.panY = 0;
    applyTransform();
}

function applyTransform() {
    const stage = document.getElementById('lightbox-stage');
    if (stage) {
        stage.style.transform = `translate(${lightboxState.panX}px, ${lightboxState.panY}px) scale(${lightboxState.zoomLevel})`;
    }
}

/* ==========================================================================
   5. INICIALIZACE STRÁNEK A INTERAKTIVNÍCH FUNKCÍ (PAGE FEATURES)
   ========================================================================== */
function initPageFeatures() {
    // Zjištění aktuální stránky
    const isExhibitionPage = document.querySelector('[data-exhibition-id]');
    const isIndexPage = document.querySelector('.hub-portal');

    if (isExhibitionPage) {
        const exhibitionId = isExhibitionPage.getAttribute('data-exhibition-id');
        setupExhibitionPage(exhibitionId);
    } else if (isIndexPage) {
        setupIndexPage();
    }
}

/* ==========================================================================
   6. SPRÁVA VÝSTAVNÍ PODSTRÁNKY (EXHIBITION PAGE LOGIC)
   ========================================================================== */
function setupExhibitionPage(exhibitionId) {
    const exhibitionArtworks = typeof ARTWORKS_DATA !== 'undefined' 
        ? ARTWORKS_DATA.filter(a => a.exhibitionId === exhibitionId)
        : [];

    let currentFilteredArtworks = [...exhibitionArtworks];
    let currentPeriodFilter = 'all';
    let currentSearchTerm = '';
    let currentViewMode = 'detail'; // 'detail' | 'grid' | 'reading'

    const container = document.getElementById('artworks-container');
    const searchInput = document.getElementById('search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const resultsCountEl = document.getElementById('results-count');
    const filterChips = document.querySelectorAll('.filter-chip');
    const viewButtons = document.querySelectorAll('.view-btn');

    // 1. Přepínání pohledů (View Modes)
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentViewMode = btn.getAttribute('data-view');
            renderArtworks();
        });
    });

    // 2. Filtrování podle štítků (Period Chips)
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentPeriodFilter = chip.getAttribute('data-filter');
            applyFilters();
        });
    });

    // 3. Živé vyhledávání
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value.trim().toLowerCase();
            applyFilters();
        });
    }

    if (searchClearBtn) {
        searchClearBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                currentSearchTerm = '';
                searchInput.focus();
                applyFilters();
            }
        });
    }

    function applyFilters() {
        currentFilteredArtworks = exhibitionArtworks.filter(art => {
            // Filtr období
            const matchesPeriod = currentPeriodFilter === 'all' || 
                (art.periodCategory && art.periodCategory.toLowerCase().includes(currentPeriodFilter.toLowerCase())) ||
                (art.tags && art.tags.some(t => t.toLowerCase() === currentPeriodFilter.toLowerCase()));

            // Vyhledávací dotaz
            const matchesSearch = !currentSearchTerm || 
                art.title.toLowerCase().includes(currentSearchTerm) ||
                art.artist.toLowerCase().includes(currentSearchTerm) ||
                art.period.toLowerCase().includes(currentSearchTerm) ||
                art.medium.toLowerCase().includes(currentSearchTerm) ||
                (art.location && art.location.toLowerCase().includes(currentSearchTerm)) ||
                (art.tags && art.tags.some(t => t.toLowerCase().includes(currentSearchTerm))) ||
                (art.sections && art.sections.some(s => s.content.toLowerCase().includes(currentSearchTerm)));

            return matchesPeriod && matchesSearch;
        });

        renderArtworks();
    }

    function renderArtworks() {
        if (!container) return;

        if (resultsCountEl) {
            resultsCountEl.textContent = `Zobrazeno ${currentFilteredArtworks.length} z ${exhibitionArtworks.length} děl`;
        }

        if (currentFilteredArtworks.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                    <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
                    <h3 style="font-family: 'Cinzel', serif; margin-bottom: 8px;">Žádná díla neodpovídají zadanému filtru</h3>
                    <p style="color: var(--text-muted); max-width: 460px; margin: 0 auto 20px;">Zkuste změnit klíčové slovo ve vyhledávači nebo zvolit jiné umělecké období.</p>
                    <button class="nav-link-btn" id="reset-filter-btn" style="margin: 0 auto;">Obnovit všechny filtry</button>
                </div>
            `;
            const resetBtn = document.getElementById('reset-filter-btn');
            if (resetBtn) {
                resetBtn.addEventListener('click', () => {
                    if (searchInput) searchInput.value = '';
                    currentSearchTerm = '';
                    currentPeriodFilter = 'all';
                    filterChips.forEach(c => c.classList.remove('active'));
                    const allChip = document.querySelector('.filter-chip[data-filter="all"]');
                    if (allChip) allChip.classList.add('active');
                    applyFilters();
                });
            }
            return;
        }

        if (currentViewMode === 'grid') {
            container.className = 'artworks-grid';
            container.innerHTML = currentFilteredArtworks.map(art => `
                <div class="grid-card" data-artwork-id="${art.id}">
                    <div class="grid-card-media">
                        <span class="grid-card-badge">${art.romanNumeral}</span>
                        <img class="grid-card-img" src="${art.image}" alt="${art.artist} - ${art.title}" loading="lazy">
                    </div>
                    <div class="grid-card-body">
                        <div class="grid-card-date">${art.date}</div>
                        <h3 class="grid-card-title">${art.title}</h3>
                        <div class="grid-card-author">${art.artist} (${art.artistDates})</div>
                        <div class="grid-card-snippet">${art.sections && art.sections[0] ? art.sections[0].content : ''}</div>
                        <div class="grid-card-footer">
                            <span style="color: var(--text-muted); font-size: 0.78rem;">${art.medium}</span>
                            <span class="grid-card-btn">Detail & Zoom ↗</span>
                        </div>
                    </div>
                </div>
            `).join('');

            // Přidání kliknutí pro otevření Lightboxu
            container.querySelectorAll('.grid-card').forEach(card => {
                card.addEventListener('click', () => {
                    const id = card.getAttribute('data-artwork-id');
                    openLightbox(id, currentFilteredArtworks);
                });
            });

        } else {
            // Detailní pohled nebo Čtecí mód
            container.className = currentViewMode === 'reading' ? 'artworks-list reading-view' : 'artworks-list';
            
            let lastSubSection = '';
            let html = '';

            currentFilteredArtworks.forEach(art => {
                // Oddělovač pro inspirativní sekce (např. Matoušek, Bolf)
                if (art.isSubSection && art.subSectionName !== lastSubSection) {
                    lastSubSection = art.subSectionName;
                    html += `
                        <div style="margin: 30px 0 10px; border-bottom: 2px solid var(--accent-gold); padding-bottom: 8px;">
                            <h2 style="font-family: 'Cinzel', serif; color: var(--accent-gold); font-size: 1.4rem;">${art.subSectionName}</h2>
                        </div>
                    `;
                }

                html += `
                    <article class="artwork-card" id="${art.id}">
                        <div class="artwork-header">
                            <div class="artwork-title-group">
                                <h2>${art.title}</h2>
                                <div class="author">${art.artist} (${art.artistDates})</div>
                            </div>
                            <div class="number-badge">${art.romanNumeral}</div>
                        </div>
                        <div class="artwork-content">
                            <div class="image-pane">
                                <div class="frame-wrapper" data-lightbox-trigger="${art.id}" title="Klikněte pro otevření plného rozlišení s lupou">
                                    <img class="artwork-img" src="${art.image}" alt="${art.artist} - ${art.title}" loading="lazy">
                                    <div class="zoom-hint-badge">🔍 Prozkoumat v plném okně</div>
                                </div>
                                <div class="image-caption">
                                    <strong>${art.caption}</strong><br>
                                    <a href="${art.highResUrl || art.image}" target="_blank" onclick="event.preventDefault(); openLightbox('${art.id}', currentFilteredArtworks);">Otevřít reprodukci v plném okně ↗</a>
                                </div>
                                <div class="meta-grid">
                                    <div class="meta-pill">
                                        <span class="meta-pill-label">Datace</span>
                                        <span class="meta-pill-value">${art.date}</span>
                                    </div>
                                    <div class="meta-pill">
                                        <span class="meta-pill-label">Technika</span>
                                        <span class="meta-pill-value">${art.medium}</span>
                                    </div>
                                    <div class="meta-pill">
                                        <span class="meta-pill-label">Rozměry / Styl</span>
                                        <span class="meta-pill-value">${art.dimensions !== 'Nestanoveno' ? art.dimensions : art.period}</span>
                                    </div>
                                    <div class="meta-pill">
                                        <span class="meta-pill-label">Sbírka</span>
                                        <span class="meta-pill-value">${art.location}</span>
                                    </div>
                                </div>
                                <div class="card-tags">
                                    ${art.tags ? art.tags.map(tag => `<span class="card-tag">#${tag}</span>`).join('') : ''}
                                </div>
                            </div>
                            <div class="details-pane">
                                ${art.sections ? art.sections.map(sec => `
                                    <section class="info-block">
                                        <h3 class="info-block-title">
                                            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                            ${sec.title}
                                        </h3>
                                        <p>${sec.content}</p>
                                    </section>
                                `).join('') : ''}
                            </div>
                        </div>
                    </article>
                `;
            });

            container.innerHTML = html;

            // Navázání Lightboxu na rámy obrazů
            container.querySelectorAll('[data-lightbox-trigger]').forEach(frame => {
                frame.addEventListener('click', () => {
                    const id = frame.getAttribute('data-lightbox-trigger');
                    openLightbox(id, currentFilteredArtworks);
                });
            });
        }
    }

    // Výchozí vyrenderování
    renderArtworks();
}

/* ==========================================================================
   7. SPRÁVA ÚVODNÍ STRÁNKY (INDEX HUB PORTAL LOGIC)
   ========================================================================== */
function setupIndexPage() {
    const searchInput = document.getElementById('hub-search-input');
    const searchResultsContainer = document.getElementById('hub-search-results');
    const exhibitionsSection = document.getElementById('exhibitions-section');

    if (!searchInput || !searchResultsContainer) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query) {
            searchResultsContainer.style.display = 'none';
            if (exhibitionsSection) exhibitionsSection.style.display = 'block';
            return;
        }

        const matchedArtworks = ARTWORKS_DATA.filter(art => {
            return art.title.toLowerCase().includes(query) ||
                art.artist.toLowerCase().includes(query) ||
                art.period.toLowerCase().includes(query) ||
                art.medium.toLowerCase().includes(query) ||
                (art.tags && art.tags.some(t => t.toLowerCase().includes(query))) ||
                (art.sections && art.sections.some(s => s.content.toLowerCase().includes(query)));
        });

        if (exhibitionsSection) exhibitionsSection.style.display = 'none';
        searchResultsContainer.style.display = 'block';

        if (matchedArtworks.length === 0) {
            searchResultsContainer.innerHTML = `
                <div style="text-align: center; padding: 40px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                    <p style="color: var(--text-muted); font-size: 1.1rem;">Nebylo nalezeno žádné dílo pro dotaz: <strong>"${query}"</strong></p>
                </div>
            `;
            return;
        }

        searchResultsContainer.innerHTML = `
            <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                <h3 style="font-family: 'Cinzel', serif; font-size: 1.3rem;">Výsledky vyhledávání napříč všemi sbírkami (${matchedArtworks.length})</h3>
                <button class="nav-link-btn" id="close-hub-search">Zobrazit výstavy ✕</button>
            </div>
            <div class="artworks-grid">
                ${matchedArtworks.map(art => `
                    <div class="grid-card" data-hub-artwork-id="${art.id}" data-target-page="${art.exhibitionId === 'stari-mistri' ? 'galerie_stari_mistri.html' : 'galerie_19stoleti_mistri.html'}">
                        <div class="grid-card-media">
                            <span class="grid-card-badge">${art.romanNumeral}</span>
                            <img class="grid-card-img" src="${art.image}" alt="${art.artist} - ${art.title}" loading="lazy">
                        </div>
                        <div class="grid-card-body">
                            <div class="grid-card-date">${art.date} • ${art.exhibitionId === 'stari-mistri' ? 'Staří mistři' : '19. století'}</div>
                            <h3 class="grid-card-title">${art.title}</h3>
                            <div class="grid-card-author">${art.artist} (${art.artistDates})</div>
                            <div class="grid-card-snippet">${art.sections && art.sections[0] ? art.sections[0].content : ''}</div>
                            <div class="grid-card-footer">
                                <span style="color: var(--accent-gold); font-weight: 600;">Otevřít rozbor ↗</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Kliknutí na kartu ve výsledcích
        searchResultsContainer.querySelectorAll('[data-hub-artwork-id]').forEach(card => {
            card.addEventListener('click', () => {
                const targetPage = card.getAttribute('data-target-page');
                const id = card.getAttribute('data-hub-artwork-id');
                window.location.href = `${targetPage}#${id}`;
            });
        });

        const closeBtn = document.getElementById('close-hub-search');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                searchInput.value = '';
                searchResultsContainer.style.display = 'none';
                if (exhibitionsSection) exhibitionsSection.style.display = 'block';
            });
        }
    });
}
