/* =====================================================
   StudyHub — Student Profile System
   localStorage-only. No backend. No expiry.
   Key: studiyhub_student_profile
   ===================================================== */

(function () {
  'use strict';

  /* ── constants ───────────────────────────────────── */
  const PROFILE_KEY = 'studiyhub_student_profile';
  const LEVELS      = ['100','200','300','400','500'];

  /* ── storage helpers ─────────────────────────────── */
  function loadProfile() {
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (!raw) return null;
      const p = JSON.parse(raw);
      if (!p || typeof p.name !== 'string' || !p.name.trim()) return null;
      if (!LEVELS.includes(String(p.level))) return null;
      if (!p.programme || typeof p.programme !== 'string') return null;
      return p;
    } catch (_) { return null; }
  }

  function saveProfile(data) {
    const existing = loadProfile();
    const now      = new Date().toISOString();
    const profile  = {
      name:      data.name.trim(),
      level:     String(data.level),
      programme: data.programme.trim(),
      createdAt: existing?.createdAt || now,
      updatedAt: now
    };
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    return profile;
  }

  function deleteProfile() {
    localStorage.removeItem(PROFILE_KEY);
  }

  /* ── expose globally ─────────────────────────────── */
  window.StudentProfile = { load: loadProfile, save: saveProfile, delete: deleteProfile };

  /* ── build programme <options> grouped by college ── */
  function buildProgrammeOptions(selectEl, selectedValue) {
    selectEl.innerHTML = '<option value="">Select your programme</option>';
    if (typeof StudyHubCatalog === 'undefined') return;
    StudyHubCatalog.getCollegeOptions().forEach(col => {
      const progs = StudyHubCatalog.getProgrammeOptions(col.value);
      if (!progs.length) return;
      const og = document.createElement('optgroup');
      og.label = col.label;
      progs.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.value;
        opt.textContent = p.label;
        if (p.value === selectedValue) opt.selected = true;
        og.appendChild(opt);
      });
      selectEl.appendChild(og);
    });
  }

  /* ═══════════════════════════════════════════════════
     PROFILE NAV DROPDOWN
  ═══════════════════════════════════════════════════ */
  let dropdownOpen = false;

  function openProfileDropdown(profile) {
    const wrap     = document.getElementById('profileNavWrap');
    const dropdown = document.getElementById('profileDropdown');
    const btn      = document.getElementById('profileNavBtn');
    if (!wrap || !dropdown) return;

    // populate content
    populateDropdown(profile);

    wrap.classList.add('open');
    dropdown.removeAttribute('aria-hidden');
    btn?.setAttribute('aria-expanded', 'true');
    dropdownOpen = true;
  }

  function closeProfileDropdown() {
    const wrap     = document.getElementById('profileNavWrap');
    const dropdown = document.getElementById('profileDropdown');
    const btn      = document.getElementById('profileNavBtn');
    if (!wrap || !dropdown) return;
    wrap.classList.remove('open');
    dropdown.setAttribute('aria-hidden', 'true');
    btn?.setAttribute('aria-expanded', 'false');
    dropdownOpen = false;
  }

  function toggleProfileDropdown() {
    if (dropdownOpen) {
      closeProfileDropdown();
    } else {
      openProfileDropdown(loadProfile());
    }
  }

  function populateDropdown(profile) {
    const pdAvatar = document.getElementById('pdAvatar');
    const pdName   = document.getElementById('pdName');
    const pdMeta   = document.getElementById('pdMeta');
    if (!profile) {
      if (pdAvatar) pdAvatar.textContent = '?';
      if (pdName)   pdName.textContent   = 'No profile set';
      if (pdMeta)   pdMeta.textContent   = 'Set up your profile';
      return;
    }
    const firstName = profile.name.split(' ')[0];
    if (pdAvatar) pdAvatar.textContent = firstName.charAt(0).toUpperCase();
    if (pdName)   pdName.textContent   = profile.name;
    if (pdMeta)   pdMeta.textContent   = `${profile.programme} · ${profile.level} Level`;
  }

  /* ═══════════════════════════════════════════════════
     ONBOARDING MODAL  (first-time visitor)
  ═══════════════════════════════════════════════════ */
  function showOnboardingModal() {
    const overlay = document.getElementById('onboardingOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';

    const progSel = document.getElementById('ob-programme');
    if (progSel) buildProgrammeOptions(progSel, '');

    const form    = document.getElementById('onboardingForm');
    const nameEl  = document.getElementById('ob-name');
    const levelEl = document.getElementById('ob-level');
    const errEl   = document.getElementById('ob-error');
    if (!form) return;

    form.addEventListener('submit', function onSubmit(e) {
      e.preventDefault();
      const name      = nameEl?.value.trim() || '';
      const level     = levelEl?.value        || '';
      const programme = progSel?.value        || '';

      if (!name) {
        showFieldError(errEl, 'Please enter your name.');
        nameEl?.focus(); return;
      }
      if (!level) {
        showFieldError(errEl, 'Please select your academic level.');
        levelEl?.focus(); return;
      }
      if (!programme) {
        showFieldError(errEl, 'Please select your programme.');
        progSel?.focus(); return;
      }

      const profile = saveProfile({ name, level, programme });
      closeOnboarding();
      applyPersonalisation(profile, true);
      form.removeEventListener('submit', onSubmit);
    });
  }

  function closeOnboarding() {
    const overlay = document.getElementById('onboardingOverlay');
    if (!overlay) return;
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  /* ═══════════════════════════════════════════════════
     PROFILE EDITOR MODAL
  ═══════════════════════════════════════════════════ */
  function showProfileModal() {
    // close dropdown first
    closeProfileDropdown();

    const overlay = document.getElementById('profileModalOverlay');
    if (!overlay) return;

    const profile  = loadProfile();
    const nameEl   = document.getElementById('pm-name');
    const levelEl  = document.getElementById('pm-level');
    const progSel  = document.getElementById('pm-programme');
    const errEl    = document.getElementById('pm-error');
    const resetBtn = document.getElementById('pm-reset');
    const form     = document.getElementById('profileModalForm');

    if (nameEl)   nameEl.value  = profile?.name      || '';
    if (levelEl)  levelEl.value = profile?.level     || '';
    if (progSel)  buildProgrammeOptions(progSel, profile?.programme || '');
    if (errEl)    errEl.textContent = '';

    overlay.classList.add('active');
    overlay.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    nameEl?.focus();

    function cleanup() {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      form?.removeEventListener('submit', onSave);
      resetBtn?.removeEventListener('click', onReset);
    }

    function onSave(e) {
      e.preventDefault();
      const name      = nameEl?.value.trim() || '';
      const level     = levelEl?.value        || '';
      const programme = progSel?.value        || '';

      if (!name) {
        showFieldError(errEl, 'Please enter your name.');
        nameEl?.focus(); return;
      }
      if (!level) {
        showFieldError(errEl, 'Please select your academic level.');
        levelEl?.focus(); return;
      }
      if (!programme) {
        showFieldError(errEl, 'Please select your programme.');
        progSel?.focus(); return;
      }

      const updated = saveProfile({ name, level, programme });
      cleanup();
      applyPersonalisation(updated, false);
      if (typeof showToast === 'function') showToast('Profile updated.', 'success');
    }

    function onReset() {
      if (!confirm('Reset your profile? You will see the welcome setup again on the next visit to the homepage.')) return;
      deleteProfile();
      cleanup();
      location.reload();
    }

    form?.addEventListener('submit', onSave);
    resetBtn?.addEventListener('click', onReset);

    overlay.addEventListener('click', function oc(e) {
      if (e.target === overlay) { cleanup(); overlay.removeEventListener('click', oc); }
    });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { cleanup(); document.removeEventListener('keydown', esc); }
    });
  }
  window.showProfileModal = showProfileModal;

  /* ═══════════════════════════════════════════════════
     PERSONALISED HOMEPAGE
  ═══════════════════════════════════════════════════ */

  /* update the floating hero panel cards */
  function updateHeroPanel(profile) {
    const panelBody = document.getElementById('heroPanelBody');
    if (!panelBody) return;

    const catalogCollege = findCollegeForProgramme(profile.programme);
    if (!catalogCollege) { panelBody.innerHTML = buildHeroPanelFallback(profile); return; }

    const sem1 = StudyHubCatalog.getCourseOptions({
      college: catalogCollege, programme: profile.programme,
      level: profile.level, semester: 'First',
      sourceCodes: Object.keys(NotesDatabase)
    });
    const sem2 = StudyHubCatalog.getCourseOptions({
      college: catalogCollege, programme: profile.programme,
      level: profile.level, semester: 'Second',
      sourceCodes: Object.keys(NotesDatabase)
    });

    const combined = [...sem1, ...sem2].slice(0, 4);
    if (!combined.length) { panelBody.innerHTML = buildHeroPanelFallback(profile); return; }

    panelBody.innerHTML = combined.map(c => {
      const prefix = c.code.replace(/^BUT_/, '').match(/^[A-Z]+/)?.[0] || 'GST';
      const COLOR_MAP = { MTH:'blue', PHY:'orange', COS:'blue', STA:'cyan', GST:'green',
        ENT:'green', IFT:'purple', SEN:'purple', CYB:'rose', DTS:'cyan',
        INS:'orange', CSC:'blue', ICT:'blue', BIO:'green', NS:'purple' };
      const color = COLOR_MAP[prefix] || 'blue';
      const abbr  = prefix.substring(0, 3);
      const title = NotesDatabase[c.code]?.title || c.code;
      return `
        <div class="hero-course-card" style="cursor:pointer;"
             onclick="location.href='notes.html?course=${encodeURIComponent(c.code)}'">
          <div class="hero-cc-badge ${color}">${abbr}</div>
          <div class="hero-cc-code">${c.code}</div>
          <div class="hero-cc-title">${title}</div>
          <div class="hero-cc-tags">
            <span class="hero-cc-tag">Level ${profile.level}</span>
            <span class="hero-cc-tag">Sem ${c.semester === 'First' ? '1' : '2'}</span>
          </div>
        </div>`;
    }).join('');
  }

  function buildHeroPanelFallback(profile) {
    return `<div style="grid-column:1/-1;text-align:center;padding:1.5rem 1rem;color:#64748B;font-size:.875rem;">
      No courses found for ${escHtml(profile.programme)} Level ${escHtml(profile.level)}.<br>
      <a href="course.html" style="color:#2563EB;font-weight:600;">Explore all courses →</a>
    </div>`;
  }

  /* ── render "Your Courses" section ── */
  function renderPersonalisedCourses(profile) {
    const section  = document.getElementById('yourCoursesSection');
    const grid     = document.getElementById('yourCoursesGrid');
    const heading  = document.getElementById('yourCoursesHeading');
    if (!section || !grid) return;

    if (heading) {
      heading.textContent = `Your Courses — ${profile.programme}, Level ${profile.level}`;
    }

    const catalogCollege = findCollegeForProgramme(profile.programme);
    if (!catalogCollege) {
      grid.innerHTML = `<div class="no-results"><h3>No courses found</h3>
        <p>No courses in the catalog for ${escHtml(profile.programme)}.
        <a href="course.html">Browse all courses</a>.</p></div>`;
      section.style.display = 'block';
      return;
    }

    const sem1 = StudyHubCatalog.getCourseOptions({
      college: catalogCollege, programme: profile.programme,
      level: profile.level, semester: 'First',
      sourceCodes: Object.keys(NotesDatabase)
    });
    const sem2 = StudyHubCatalog.getCourseOptions({
      college: catalogCollege, programme: profile.programme,
      level: profile.level, semester: 'Second',
      sourceCodes: Object.keys(NotesDatabase)
    });
    const courses = [...sem1, ...sem2];

    if (!courses.length) {
      grid.innerHTML = `<div class="no-results"><h3>No courses found</h3>
        <p>No resources available for ${escHtml(profile.programme)} Level ${escHtml(profile.level)}.
        <a href="course.html">Explore all courses</a>.</p></div>`;
      section.style.display = 'block';
      return;
    }

    grid.innerHTML = '';
    courses.forEach(c => {
      const noteEntry = NotesDatabase[c.code];
      if (!noteEntry) return;
      const { color, icon } = getCourseIcon(c.code);
      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = `
        <div class="cc-header">
          <div class="cc-icon ${color}">${icon}</div>
          <div>
            <div class="cc-code">${escHtml(c.code)}</div>
            <div class="cc-level">Level ${escHtml(profile.level)} · ${c.semester === 'First' ? 'Sem 1' : 'Sem 2'}</div>
          </div>
        </div>
        <div class="cc-title">${escHtml(noteEntry.title)}</div>
        <div class="cc-meta"><span class="cc-tag">${escHtml(c.semester)}</span></div>
        <div class="cc-actions">
          <button class="btn btn-primary btn-sm"
            onclick="event.stopPropagation();location.href='notes.html?course=${encodeURIComponent(c.code)}'">Notes</button>
          <button class="btn btn-secondary btn-sm"
            onclick="event.stopPropagation();location.href='past-questions.html?course=${encodeURIComponent(c.code)}'">Past Qs</button>
          <button class="btn btn-outline btn-sm"
            onclick="event.stopPropagation();location.href='quiz.html?course=${encodeURIComponent(c.code)}'">Quiz</button>
        </div>`;
      card.addEventListener('click', () => {
        location.href = `course.html?course=${encodeURIComponent(c.code)}`;
      });
      grid.appendChild(card);
    });

    section.style.display = 'block';
  }

  /* ── update hero text ── */
  function personaliseHeroText(profile) {
    const h1 = document.querySelector('.hero-content h1');
    const p  = document.querySelector('.hero-content p');
    if (!h1 || !p) return;
    const firstName = profile.name.split(' ')[0];
    h1.textContent = `Welcome back, ${firstName}!`;
    p.textContent  = `Here are your courses for ${profile.programme}, ${profile.level} Level. Access your notes, past questions and quizzes below.`;
  }

  /* ── orchestrate all personalisation ── */
  function applyPersonalisation(profile, isNewProfile) {
    if (!profile) return;
    personaliseHeroText(profile);
    updateHeroPanel(profile);
    renderPersonalisedCourses(profile);   // fills #yourCoursesGrid and shows #yourCoursesSection
    setupPersonalisedSearch(profile);     // wires search after grid is filled
    hideGenericCourseSectionLabel();
    updateNavDropdown(profile);
  }

  function hideGenericCourseSectionLabel() {
    /* The "Discover Our Courses" section has been removed from the homepage.
       This function is kept as a no-op to avoid any stale references. */
  }

  /* ── update nav button + dropdown header ── */
  function updateNavDropdown(profile) {
    // button label
    const label  = document.getElementById('profileNavLabel');
    const avatar = document.getElementById('profileNavAvatar');
    const btn    = document.getElementById('profileNavBtn');
    if (!profile) return;
    const firstName = profile.name.split(' ')[0];
    if (label)  label.textContent  = firstName;
    if (avatar) avatar.textContent = firstName.charAt(0).toUpperCase();
    if (btn)    btn.setAttribute('aria-label', `My Profile — ${profile.name}`);

    // dropdown header (populated on open, but set now so it's ready)
    populateDropdown(profile);
  }

  /* ═══════════════════════════════════════════════════
     PERSONALISED COURSE SEARCH + FILTERS
     Lives inside #yourCoursesSection.
     All filters empty → show student's personalised cards.
     Any filter or query → search full catalog.
  ═══════════════════════════════════════════════════ */
  function setupPersonalisedSearch(profile) {
    const input      = document.getElementById('yourCoursesSearch');
    const grid       = document.getElementById('yourCoursesGrid');
    const metaBar    = document.getElementById('yourCoursesResultMeta');
    const countEl    = document.getElementById('yourCoursesResultCount');
    const clearBtn   = document.getElementById('yourCoursesClearSearch');
    const collegeSel = document.getElementById('ycCollegeFilter');
    const deptSel    = document.getElementById('ycDeptFilter');
    const levelSel   = document.getElementById('ycLevelFilter');
    const semSel     = document.getElementById('ycSemFilter');
    if (!input || !grid) return;

    /* snapshot of personalised cards rendered by renderPersonalisedCourses() */
    const personalisedHTML = grid.innerHTML;

    /* ── populate College from real catalog ── */
    if (collegeSel && typeof StudyHubCatalog !== 'undefined') {
      collegeSel.innerHTML = '<option value="">College ▾</option>';
      StudyHubCatalog.getCollegeOptions().forEach(col => {
        const opt = document.createElement('option');
        opt.value = col.value; opt.textContent = col.label;
        collegeSel.appendChild(opt);
      });
      // pre-select the student's own college
      const studentCollege = findCollegeForProgramme(profile?.programme || '');
      if (studentCollege) collegeSel.value = studentCollege;
    }

    /* ── populate Department — initially scoped to student's college ── */
    function populateDept(college) {
      if (!deptSel || typeof StudyHubCatalog === 'undefined') return;
      const prevValue = deptSel.value;
      deptSel.innerHTML = '<option value="">Department ▾</option>';
      const progs = college
        ? StudyHubCatalog.getProgrammeOptions(college)
        : (() => {
            const all = new Set();
            StudyHubCatalog.getCollegeOptions().forEach(c =>
              StudyHubCatalog.getProgrammeOptions(c.value).forEach(p => all.add(p.value))
            );
            return Array.from(all).sort().map(v => ({ value: v, label: v }));
          })();
      progs.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.value; opt.textContent = p.label;
        deptSel.appendChild(opt);
      });
      // restore previous value if still available, otherwise pre-select student's programme
      if (prevValue && Array.from(deptSel.options).some(o => o.value === prevValue)) {
        deptSel.value = prevValue;
      } else if (profile?.programme &&
                 Array.from(deptSel.options).some(o => o.value === profile.programme)) {
        deptSel.value = profile.programme;
      }
    }
    populateDept(collegeSel?.value || '');

    /* ── populate Level from NotesDatabase ── */
    if (levelSel) {
      levelSel.innerHTML = '<option value="">Level ▾</option>';
      const lvls = [...new Set(Object.values(NotesDatabase).map(c => c.level))].sort();
      lvls.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l; opt.textContent = `${l} Level`;
        levelSel.appendChild(opt);
      });
      if (profile?.level &&
          Array.from(levelSel.options).some(o => o.value === profile.level)) {
        levelSel.value = profile.level;
      }
    }

    /* ── populate Semester ── */
    if (semSel) {
      semSel.innerHTML = `
        <option value="">Semester ▾</option>
        <option value="First">First Semester</option>
        <option value="Second">Second Semester</option>`;
    }

    /* ── flat searchable list from entire NotesDatabase ── */
    const searchableCourses = Object.keys(NotesDatabase).map(code => {
      const catalogEntry = (typeof StudyHubCatalog !== 'undefined')
        ? StudyHubCatalog.getCourseEntry(code) : null;
      return {
        code,
        title:      NotesDatabase[code].title    || '',
        level:      NotesDatabase[code].level    || '',
        semester:   NotesDatabase[code].semester || '',
        colleges:   catalogEntry?.colleges       || [],
        programmes: catalogEntry?.programmes     || []
      };
    });

    let searchTimer = null;

    function isFiltering() {
      return !!(
        (input?.value || '').trim() ||
        collegeSel?.value ||
        deptSel?.value ||
        levelSel?.value ||
        semSel?.value
      );
    }

    function runFilter() {
      const q       = (input?.value  || '').toLowerCase().trim();
      const college = collegeSel?.value || '';
      const dept    = deptSel?.value    || '';
      const lvl     = levelSel?.value   || '';
      const sem     = semSel?.value     || '';

      if (!q && !college && !dept && !lvl && !sem) {
        showPersonalisedCards();
        return;
      }

      const matches = searchableCourses.filter(c => {
        if (college && !c.colleges.includes(college))                   return false;
        if (dept    && !c.programmes.includes(dept))                    return false;
        if (lvl     && c.level    !== lvl)                              return false;
        if (sem     && c.semester !== sem)                              return false;
        if (q && !c.code.toLowerCase().includes(q) &&
                 !c.title.toLowerCase().includes(q) &&
                 !c.programmes.some(p => p.toLowerCase().includes(q))) return false;
        return true;
      }).slice(0, 24);

      if (metaBar) metaBar.style.display = 'flex';
      if (countEl) countEl.innerHTML =
        matches.length
          ? `<strong>${matches.length}</strong> course${matches.length !== 1 ? 's' : ''} found`
          : 'No courses found';

      if (!matches.length) {
        grid.innerHTML = `<div class="no-results">
          <h3>No courses found</h3>
          <p>Try different filters or a broader search term.
             <a href="course.html">Browse all courses →</a></p>
        </div>`;
        return;
      }

      grid.innerHTML = '';
      matches.forEach(c => {
        const { color, icon } = getCourseIcon(c.code);
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
          <div class="cc-header">
            <div class="cc-icon ${color}">${icon}</div>
            <div>
              <div class="cc-code">${escHtml(c.code)}</div>
              <div class="cc-level">Level ${escHtml(c.level)} · ${c.semester === 'First' ? 'Sem 1' : 'Sem 2'}</div>
            </div>
          </div>
          <div class="cc-title">${escHtml(c.title)}</div>
          <div class="cc-meta">
            <span class="cc-tag">${escHtml(c.semester)}</span>
            ${c.programmes[0] ? `<span class="cc-tag">${escHtml(c.programmes[0])}</span>` : ''}
          </div>
          <div class="cc-actions">
            <button class="btn btn-primary btn-sm"
              onclick="event.stopPropagation();location.href='notes.html?course=${encodeURIComponent(c.code)}'">Notes</button>
            <button class="btn btn-secondary btn-sm"
              onclick="event.stopPropagation();location.href='past-questions.html?course=${encodeURIComponent(c.code)}'">Past Qs</button>
            <button class="btn btn-outline btn-sm"
              onclick="event.stopPropagation();location.href='quiz.html?course=${encodeURIComponent(c.code)}'">Quiz</button>
          </div>`;
        card.addEventListener('click', () => {
          location.href = `course.html?course=${encodeURIComponent(c.code)}`;
        });
        grid.appendChild(card);
      });
    }

    function showPersonalisedCards() {
      grid.innerHTML = personalisedHTML;
      if (metaBar)    metaBar.style.display = 'none';
      if (input)      input.value = '';
      /* restore to student's own context */
      const studentCollege = findCollegeForProgramme(profile?.programme || '');
      if (collegeSel) collegeSel.value = studentCollege || '';
      populateDept(studentCollege || '');
      if (levelSel) levelSel.value = profile?.level || '';
      if (semSel)   semSel.value   = '';
    }

    /* ── event listeners ── */
    collegeSel?.addEventListener('change', () => {
      populateDept(collegeSel.value);
      runFilter();
    });

    input.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(runFilter, 200);
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') showPersonalisedCards();
    });

    deptSel?.addEventListener('change',  runFilter);
    levelSel?.addEventListener('change', runFilter);
    semSel?.addEventListener('change',   runFilter);
    clearBtn?.addEventListener('click',  showPersonalisedCards);

    /* initial render — pre-selected student context = personalised view */
    if (!isFiltering()) showPersonalisedCards();
    else runFilter();
  }

  /* ═══════════════════════════════════════════════════
     NOTES & PAST QUESTIONS — FILTER PRE-SEEDING
  ═══════════════════════════════════════════════════ */
  function preseedNotesFilters(profile) {
    if (!profile) return;
    const colEl  = document.getElementById('notesCollege');
    const progEl = document.getElementById('notesProgramme');
    const lvlEl  = document.getElementById('notesLevel');
    if (!colEl || !progEl || !lvlEl) return;
    const college = findCollegeForProgramme(profile.programme);
    if (!college) return;
    if (Array.from(colEl.options).some(o => o.value === college)) {
      colEl.value = college;
      colEl.dispatchEvent(new Event('change'));
      setTimeout(() => {
        if (Array.from(progEl.options).some(o => o.value === profile.programme)) {
          progEl.value = profile.programme;
          progEl.dispatchEvent(new Event('change'));
        }
        setTimeout(() => {
          if (Array.from(lvlEl.options).some(o => o.value === profile.level)) {
            lvlEl.value = profile.level;
            lvlEl.dispatchEvent(new Event('change'));
          }
        }, 50);
      }, 50);
    }
  }

  function preseedPQFilters(profile) {
    if (!profile) return;
    const colEl  = document.getElementById('pqCollege');
    const progEl = document.getElementById('pqProgramme');
    const lvlEl  = document.getElementById('pqLevel');
    if (!colEl || !progEl || !lvlEl) return;
    const college = findCollegeForProgramme(profile.programme);
    if (!college) return;
    if (Array.from(colEl.options).some(o => o.value === college)) {
      colEl.value = college;
      colEl.dispatchEvent(new Event('change'));
      setTimeout(() => {
        if (Array.from(progEl.options).some(o => o.value === profile.programme)) {
          progEl.value = profile.programme;
          progEl.dispatchEvent(new Event('change'));
        }
        setTimeout(() => {
          if (Array.from(lvlEl.options).some(o => o.value === profile.level)) {
            lvlEl.value = profile.level;
            lvlEl.dispatchEvent(new Event('change'));
          }
        }, 50);
      }, 50);
    }
  }

  window.preseedNotesFilters = preseedNotesFilters;
  window.preseedPQFilters    = preseedPQFilters;

  /* ═══════════════════════════════════════════════════
     HELPERS
  ═══════════════════════════════════════════════════ */
  function findCollegeForProgramme(programme) {
    if (typeof StudyHubCatalog === 'undefined') return null;
    for (const col of StudyHubCatalog.getCollegeOptions()) {
      if (StudyHubCatalog.getProgrammeOptions(col.value).some(p => p.value === programme))
        return col.value;
    }
    return null;
  }

  function getCourseIcon(code) {
    const CC   = { MTH:'blue', PHY:'orange', COS:'blue', STA:'cyan', GST:'green',
      ENT:'green', IFT:'purple', SEN:'purple', CYB:'rose', DTS:'cyan',
      INS:'orange', CSC:'blue', ICT:'blue', BUT:'green', NS:'purple', BIO:'green' };
    const ICON = {
      math:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
      science:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2v17.5c0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
      computer: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      book:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
      security: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      bio:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9z"/></svg>`,
    };
    const prefix = code.replace(/^BUT_/, '').match(/^[A-Z]+/)?.[0] || 'GST';
    const color  = CC[prefix] || 'blue';
    let icon = ICON.computer;
    if (['MTH','STA'].includes(prefix))      icon = ICON.math;
    else if (['PHY','CHE'].includes(prefix)) icon = ICON.science;
    else if (prefix === 'CYB')               icon = ICON.security;
    else if (['BIO'].includes(prefix))       icon = ICON.bio;
    else if (['GST','ENT'].includes(prefix)) icon = ICON.book;
    return { color, icon };
  }

  function showFieldError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.style.display = 'block';
    setTimeout(() => { if (el) el.style.display = 'none'; }, 4000);
  }

  function escHtml(str) {
    return String(str ?? '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ═══════════════════════════════════════════════════
     BOOT — runs on every page
  ═══════════════════════════════════════════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    const page    = document.body.dataset.page || '';
    const profile = loadProfile();

    /* ── wire profile nav button (dropdown toggle) ── */
    const profileNavBtn = document.getElementById('profileNavBtn');
    if (profileNavBtn) {
      profileNavBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleProfileDropdown();
      });
      if (profile) updateNavDropdown(profile);
    }

    /* ── wire dropdown Edit/Reset items ── */
    document.getElementById('pdEditBtn')?.addEventListener('click', () => {
      closeProfileDropdown();
      showProfileModal();
    });
    document.getElementById('pdResetBtn')?.addEventListener('click', () => {
      closeProfileDropdown();
      if (confirm('Reset your profile? You will see the welcome setup on your next homepage visit.')) {
        deleteProfile();
        location.reload();
      }
    });

    /* ── close dropdown on outside click ── */
    document.addEventListener('click', function (e) {
      if (!dropdownOpen) return;
      const wrap = document.getElementById('profileNavWrap');
      if (wrap && !wrap.contains(e.target)) closeProfileDropdown();
    });

    /* ── close dropdown on Escape ── */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdownOpen) closeProfileDropdown();
    });

    /* ── wire profile modal close button ── */
    document.getElementById('pmCloseBtn')?.addEventListener('click', () => {
      document.getElementById('profileModalOverlay')?.classList.remove('active');
      document.getElementById('profileModalOverlay')?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });

    /* ── homepage specific ── */
    if (page === 'home') {
      if (!profile) {
        showOnboardingModal();
      } else {
        applyPersonalisation(profile, false);
      }
    }

    /* ── notes page: pre-seed filters from profile ── */
    if (page === 'notes' && profile) {
      setTimeout(() => preseedNotesFilters(profile), 120);
    }

    /* ── past questions page: pre-seed filters ── */
    if (page === 'past-questions' && profile) {
      setTimeout(() => preseedPQFilters(profile), 120);
    }
  });

})();
