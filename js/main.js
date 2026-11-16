/**
 * Sara Amr - Portfolio Main JavaScript
 * Handles interactivity, project rendering, modals, filtering, and form submission.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initNavbar();
  initMobileMenu();
  initProjects();
  initProjectModal();
  initContactForm();
  initCopyToClipboard();
  initBackToTop();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. NAVBAR SCROLL & ACTIVE STATE
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Navbar background blur toggle
    if (scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }

    // Active link highlighting
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeMobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* --------------------------------------------------------------------------
   3. PROJECT RENDERING & CATEGORY FILTERING
   -------------------------------------------------------------------------- */
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterButtons = document.querySelectorAll('[data-filter]');

  if (!grid || typeof projectsData === 'undefined') return;

  function renderProjects(filter = 'all') {
    grid.innerHTML = '';

    const filtered = filter === 'all'
      ? projectsData
      : projectsData.filter(p => p.category === filter);

    filtered.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card pharaoh-card group';
      card.setAttribute('data-id', project.id);

      card.innerHTML = `
        <div class="project-card-img-wrapper">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="project-card-overlay"></div>
          <span class="project-tag-pill">${project.categoryLabel}</span>
        </div>
        
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2 text-xs font-semibold text-amber-300 tracking-wider uppercase font-serif">
              <span>${project.role}</span>
              <span>•</span>
              <span class="text-slate-400">${project.teamSize}</span>
            </div>
            
            <h3 class="text-xl font-bold mb-2 text-amber-100 group-hover:text-amber-300 transition-colors">
              ${project.title}
            </h3>
            
            <p class="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed font-sans">
              ${project.tagline}
            </p>
          </div>

          <div class="pt-4 border-t border-amber-900/40 flex items-center justify-between">
            <span class="text-xs text-amber-200/80 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore Case Study 
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
            <div class="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </div>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openProjectModal(project.id);
      });

      grid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Filter Buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderProjects(filterValue);
    });
  });

  // Initial render
  renderProjects('all');
}

/* --------------------------------------------------------------------------
   4. PROJECT MODAL DEEP-DIVE
   -------------------------------------------------------------------------- */
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const modal = document.getElementById('projectModal');
  const container = document.getElementById('modalContentBody');
  const project = typeof getProjectById === 'function' ? getProjectById(projectId) : null;

  if (!modal || !container || !project) return;

  const keyContributionsHtml = project.keyContributions.map(c => `
    <li class="flex items-start gap-3">
      <span class="inline-block mt-1 text-amber-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </span>
      <span class="text-slate-200 text-sm leading-relaxed">${c}</span>
    </li>
  `).join('');

  const techStackHtml = project.techStack.map(t => `
    <span class="px-3 py-1 text-xs rounded-full bg-slate-800/80 border border-amber-500/30 text-amber-200 font-medium">
      ${t}
    </span>
  `).join('');

  container.innerHTML = `
    <!-- Modal Banner Image -->
    <div class="relative w-full h-56 sm:h-72 overflow-hidden bg-slate-900 border-b border-amber-500/30">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
      
      <div class="absolute bottom-6 left-6 right-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-1 text-xs rounded-full bg-amber-500 text-slate-950 font-bold uppercase tracking-wider">
            ${project.categoryLabel}
          </span>
          <span class="px-2.5 py-1 text-xs rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-200 font-medium">
            ${project.teamSize}
          </span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold text-amber-100 font-serif">${project.title}</h2>
        <p class="text-amber-200/90 text-sm font-sans">${project.subtitle}</p>
      </div>
    </div>

    <!-- Modal Content Grid -->
    <div class="p-6 sm:p-8 space-y-6">
      <!-- Role and Scope Bar -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/70 border border-amber-500/20">
        <div>
          <span class="text-xs uppercase tracking-wider text-slate-400 block font-serif">Sara's Role</span>
          <span class="text-amber-300 font-semibold text-sm">${project.role}</span>
        </div>
        <div>
          <span class="text-xs uppercase tracking-wider text-slate-400 block font-serif">Project Timeline</span>
          <span class="text-slate-200 text-sm font-medium">${project.duration}</span>
        </div>
      </div>

      <!-- Overview -->
      <div>
        <h4 class="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif mb-2">Executive Summary</h4>
        <p class="text-slate-200 text-sm leading-relaxed">${project.overview}</p>
      </div>

      <!-- Problem & Solution Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30">
          <h5 class="text-xs font-bold text-rose-300 uppercase tracking-wider font-serif mb-2 flex items-center gap-2">
            <span>Challenge Addressed</span>
          </h5>
          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">${project.problemStatement}</p>
        </div>

        <div class="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <h5 class="text-xs font-bold text-emerald-300 uppercase tracking-wider font-serif mb-2 flex items-center gap-2">
            <span>Solution & Architecture</span>
          </h5>
          <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">${project.solution}</p>
        </div>
      </div>

      <!-- Key Contributions -->
      <div>
        <h4 class="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif mb-3">Key Contributions & Methodology</h4>
        <ul class="space-y-2.5">
          ${keyContributionsHtml}
        </ul>
      </div>

      <!-- Tech Stack & Methodologies -->
      <div>
        <h4 class="text-xs font-bold text-amber-400 uppercase tracking-widest font-serif mb-2">Tools, Frameworks & Strategy</h4>
        <div class="flex flex-wrap gap-2">
          ${techStackHtml}
        </div>
      </div>

      <!-- Outcomes -->
      <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
        <h4 class="text-xs font-bold text-amber-300 uppercase tracking-widest font-serif mb-1">Impact & Academic Assessment</h4>
        <p class="text-slate-200 text-sm italic">"${project.outcomes}"</p>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim() || 'Portfolio Inquiry';
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'warning');
      return;
    }

    // Construct mailto link
    const mailtoUrl = `mailto:saraamrmahmoud@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

    // Show celebratory toast
    showToast('Message ready! Opening your email client...', 'success');

    // Trigger mailto after brief delay
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });
}

/* --------------------------------------------------------------------------
   6. COPY TO CLIPBOARD
   -------------------------------------------------------------------------- */
function initCopyToClipboard() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'saraamrmahmoud@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied to clipboard: ' + email, 'success');
    }).catch(() => {
      showToast('Copied: saraamrmahmoud@gmail.com', 'info');
    });
  });
}

/* --------------------------------------------------------------------------
   7. TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  } else if (type === 'warning') {
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  } else {
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span class="text-sm font-medium font-sans">${message}</span>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* --------------------------------------------------------------------------
   8. BACK TO TOP
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   9. SMOOTH SCROLL FOR IN-PAGE ANCHORS
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

