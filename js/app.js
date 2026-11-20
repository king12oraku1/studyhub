/* =====================================================
   StudyHub — Main Application
   Wires: Theme · Nav · Courses · Notes · Past Qs · Quiz
   ===================================================== */

/* ── helpers ─────────────────────────────────────── */
function getQueryParam(n) { return new URLSearchParams(location.search).get(n); }

const pageType   = document.body.dataset.page || 'home';
const courseParam = getQueryParam('course');
const FKEY = 'studyhubFilters';

/* ── theme ───────────────────────────────────────── */
const themeBtn = document.getElementById('themeToggle');
const html     = document.documentElement;
const saved    = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', saved);
if (themeBtn) {
  themeBtn.textContent = saved === 'light' ? '🌙' : '☀️';
  themeBtn.addEventListener('click', () => {
    const t = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    themeBtn.textContent = t === 'light' ? '🌙' : '☀️';
  });
}

/* ── mobile nav ──────────────────────────────────── */
const mobToggle = document.getElementById('mobileToggle');
const navMenu   = document.getElementById('navMenu');
if (mobToggle && navMenu) {
  mobToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('active');
    mobToggle.classList.toggle('active', open);
    mobToggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => {
      navMenu.classList.remove('active');
      mobToggle.classList.remove('active');
      mobToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

/* ── toast ───────────────────────────────────────── */
function showToast(msg, type) {
  let wrap = document.querySelector('.toast-container');
  if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-container'; document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = 'toast' + (type ? ' toast-' + type : '');
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}
window.showToast = showToast;

/* ── pdf helpers ─────────────────────────────────── */
window.viewPdf     = url => window.open(encodeURI(url), '_blank');
window.downloadPdf = (url, fname) => {
  const a = document.createElement('a');
  a.href = encodeURI(url); a.download = fname || url.split('/').pop();
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
};

/* ── select utilities ────────────────────────────── */
function populateSel(el, opts, placeholder, selected) {
  if (!el) return;
  el.innerHTML = `<option value="">${placeholder}</option>`;
  opts.forEach(o => {
    const opt = document.createElement('option');
    opt.value = o.value; opt.textContent = o.label;
    el.appendChild(opt);
  });
  if (selected) el.value = selected;
}
function resetSel(el, placeholder) {
  if (!el) return;
  el.innerHTML = `<option value="">${placeholder}</option>`;
  el.disabled = true;
}
function setVal(el, v) {
  if (!el || !v) return false;
  const ok = Array.from(el.options).some(o => o.value === v);
  if (ok) el.value = v;
  return ok;
}

/* ── filter persistence ──────────────────────────── */
function loadFilters()       { try { return JSON.parse(localStorage.getItem(FKEY) || '{}'); } catch { return {}; } }
function saveFilters(patch)  { const s = loadFilters(); Object.assign(s, patch); localStorage.setItem(FKEY, JSON.stringify(s)); }
function clearFilters()      { localStorage.removeItem(FKEY); }

/* ── course icon assignment ──────────────────────── */
const CODE_COLORS = {
  MTH:'blue', PHY:'orange', COS:'blue', STA:'cyan', GST:'green',
  ENT:'green', IFT:'purple', SEN:'purple', CYB:'rose', DTS:'cyan',
  INS:'orange', CSC:'blue', ICT:'blue', BUT:'green', NS:'purple',
  BIO:'green'
};
const ICONS = {
  math: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
  science:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2v17.5c0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/></svg>`,
  computer:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  book:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  security:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  bio:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11a9 9 0 0 0-9-9z"/></svg>`,
};

function courseIcon(code) {
  const prefix = code.replace(/^BUT_/, '').match(/^[A-Z]+/)?.[0] || 'GST';
  const color   = CODE_COLORS[prefix] || 'blue';
  let   icon    = ICONS.computer;
  if (['MTH','STA'].includes(prefix))             icon = ICONS.math;
  else if (['PHY','CHE'].includes(prefix))        icon = ICONS.science;
  else if (prefix === 'CYB')                      icon = ICONS.security;
  else if (['BIO','BUT_BIO'].includes(prefix))    icon = ICONS.bio;
  else if (['GST','ENT'].includes(prefix))        icon = ICONS.book;
  return { color, icon };
}

/* ── course navigation ───────────────────────────── */
const allCourses = Object.keys(NotesDatabase).map(code => ({
  code,
  title:    NotesDatabase[code].title,
  level:    NotesDatabase[code].level,
  semester: NotesDatabase[code].semester,
  pdf:      NotesDatabase[code].pdf,
  catalog:  StudyHubCatalog.getCourseEntry(code)
}));

window.openNotes          = code => location.href = `notes.html?course=${encodeURIComponent(code)}`;
window.openPastQuestions  = code => location.href = `past-questions.html?course=${encodeURIComponent(code)}`;
window.openQuiz           = code => location.href = `quiz.html?course=${encodeURIComponent(code)}`;
window.openCourseDashboard= code => location.href = `course.html?course=${encodeURIComponent(code)}`;

/* ── course card HTML ────────────────────────────── */
function buildCourseCard(c) {
  const { color, icon } = courseIcon(c.code);
  return `
    <div class="cc-header">
      <div class="cc-icon ${color}">${icon}</div>
      <div>
        <div class="cc-code">${c.code}</div>
        <div class="cc-level">Level ${c.level} · Sem ${c.semester === 'First' ? '1' : '2'}</div>
      </div>
    </div>
    <div class="cc-title">${c.title}</div>
    <div class="cc-meta">
      <span class="cc-tag">${c.level} Level</span>
      <span class="cc-tag">${c.semester}</span>
    </div>
    <div class="cc-actions">
      <button class="btn btn-primary btn-sm"
        onclick="event.stopPropagation(); openNotes('${c.code}')">View Details</button>
      <button class="btn btn-secondary btn-sm"
        onclick="event.stopPropagation(); openQuiz('${c.code}')">View Quizzes</button>
    </div>`;
}

/* ── render course grid ──────────────────────────── */
function renderCourses() {
  const grid      = document.getElementById('courseGrid');
  const countEl   = document.getElementById('courseResultCount');
  const viewAll   = document.getElementById('viewAllCoursesWrap');
  const college   = document.getElementById('collegeFilter')?.value   || '';
  const programme = document.getElementById('programmeFilter')?.value || '';
  const level     = document.getElementById('levelFilter')?.value     || '';
  const semester  = document.getElementById('semesterFilter')?.value  || '';
  const search    = (document.getElementById('courseSearch')?.value || '').toLowerCase().trim();
  if (!grid) return;

  /* On the homepage, show only 8 featured courses when no filter is active */
  const isHomepage      = pageType === 'home';
  const hasActiveFilter = college || programme || level || semester || search;

  const filtered = allCourses.filter(c => {
    if (college   && c.catalog && !c.catalog.colleges.includes(college))     return false;
    if (programme && c.catalog && !c.catalog.programmes.includes(programme)) return false;
    if (level     && c.level    !== level)                                    return false;
    if (semester  && c.semester !== semester)                                 return false;
    if (search && !c.code.toLowerCase().includes(search) && !c.title.toLowerCase().includes(search)) return false;
    return true;
  });

  /* homepage without filters: show a curated featured slice */
  const FEATURED_CODES = ['MTH102','COS102','PHY102','GST112','MTH101','COS101','BUT_BIO102','BUT_CSC104'];
  const displayList = (isHomepage && !hasActiveFilter)
    ? allCourses.filter(c => FEATURED_CODES.includes(c.code))
    : filtered;

  /* Show/hide "View all" button on homepage */
  if (viewAll) viewAll.style.display = (isHomepage && !hasActiveFilter) ? 'block' : 'none';

  if (countEl) {
    if (isHomepage && !hasActiveFilter) {
      countEl.innerHTML = `Showing <strong>${displayList.length}</strong> featured courses`;
    } else {
      countEl.innerHTML = `Showing <strong>${filtered.length}</strong> course${filtered.length !== 1 ? 's' : ''}`;
    }
  }

  grid.innerHTML = '';
  if (!displayList.length) {
    grid.innerHTML = '<div class="no-results"><h3>No courses found</h3><p>Try adjusting your filters or search term.</p></div>';
    return;
  }
  displayList.forEach(c => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = buildCourseCard(c);
    card.addEventListener('click', () => openCourseDashboard(c.code));
    grid.appendChild(card);
  });
}

/* ── render stats banner from real data ──────────── */
function renderStats() {
  const banner = document.getElementById('statsBanner');
  if (!banner) return;

  const courseCount = Object.keys(NotesDatabase).length;
  const notesCount  = Object.keys(NotesDatabase).filter(k => NotesDatabase[k].pdf).length;
  const pqCount     = Object.values(PastQuestionsDatabase)
    .reduce((sum, years) => sum + Object.keys(years).length, 0);

  const STAT_ICON_COURSE = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
  const STAT_ICON_NOTES  = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
  const STAT_ICON_PQ     = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;

  banner.innerHTML = `
    <div class="stat-item">
      <div class="stat-icon-wrap">${STAT_ICON_COURSE}</div>
      <div class="stat-number">${courseCount}</div>
      <div class="stat-label">Courses Available</div>
    </div>
    <div class="stat-item">
      <div class="stat-icon-wrap">${STAT_ICON_NOTES}</div>
      <div class="stat-number">${notesCount}</div>
      <div class="stat-label">Lecture Note Sets</div>
    </div>
    <div class="stat-item">
      <div class="stat-icon-wrap">${STAT_ICON_PQ}</div>
      <div class="stat-number">${pqCount}</div>
      <div class="stat-label">Past Question Papers</div>
    </div>`;
}

/* ── course discovery setup (home + courses pages) ── */
function setupCourseDiscovery() {
  const colEl  = document.getElementById('collegeFilter');
  const progEl = document.getElementById('programmeFilter');
  const lvlEl  = document.getElementById('levelFilter');
  const semEl  = document.getElementById('semesterFilter');
  const srchEl = document.getElementById('courseSearch');
  const rstBtn = document.getElementById('resetFiltersBtn');
  if (!colEl) return;

  /* populate college */
  populateSel(colEl, StudyHubCatalog.getCollegeOptions(), 'College ▾');

  /* level & semester are always enabled */
  const levels = [...new Set(allCourses.map(c => c.level))].sort();
  populateSel(lvlEl, levels.map(l => ({ value:l, label:`${l} Level` })), 'Level ▾');
  if (lvlEl) lvlEl.disabled = false;

  populateSel(semEl, [
    { value:'First',  label:'First Semester'  },
    { value:'Second', label:'Second Semester' }
  ], 'Semester ▾');
  if (semEl) semEl.disabled = false;

  /* college → programme cascade */
  colEl.addEventListener('change', () => {
    const col = colEl.value;
    if (col) {
      populateSel(progEl, StudyHubCatalog.getProgrammeOptions(col), 'Programme ▾');
      progEl.disabled = false;
    } else resetSel(progEl, 'Programme ▾');
    saveFilters({ college:col, programme:'' }); renderCourses();
  });
  progEl?.addEventListener('change', () => { saveFilters({ programme: progEl.value }); renderCourses(); });
  lvlEl?.addEventListener('change',  () => { saveFilters({ level:    lvlEl.value  }); renderCourses(); });
  semEl?.addEventListener('change',  () => { saveFilters({ semester: semEl.value  }); renderCourses(); });
  srchEl?.addEventListener('input',  renderCourses);

  rstBtn?.addEventListener('click', () => {
    clearFilters();
    populateSel(colEl, StudyHubCatalog.getCollegeOptions(), 'College ▾');
    resetSel(progEl, 'Programme ▾');
    populateSel(lvlEl, levels.map(l => ({ value:l, label:`${l} Level` })), 'Level ▾');
    if (lvlEl) lvlEl.disabled = false;
    populateSel(semEl, [
      { value:'First',  label:'First Semester'  },
      { value:'Second', label:'Second Semester' }
    ], 'Semester ▾');
    if (semEl) semEl.disabled = false;
    if (srchEl) srchEl.value = '';
    renderCourses();
  });

  /* restore saved state */
  const s = loadFilters();
  if (s.college) {
    setVal(colEl, s.college);
    populateSel(progEl, StudyHubCatalog.getProgrammeOptions(s.college), 'Programme ▾');
    progEl.disabled = false;
    if (s.programme) setVal(progEl, s.programme);
  }
  if (s.level)    setVal(lvlEl, s.level);
  if (s.semester) setVal(semEl, s.semester);

  renderCourses();
}

/* ── resource list HTML helpers ──────────────────── */
const PDF_ICON = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>`;

function buildResourceItem({ title, sub, url, filename }) {
  return `
    <div class="resource-item">
      <div class="resource-pdf-icon">${PDF_ICON}</div>
      <div class="resource-body">
        <div class="resource-title">${title}</div>
        <div class="resource-sub">${sub}</div>
      </div>
      <div class="resource-actions">
        <button class="btn btn-primary btn-sm"  onclick="viewPdf('${url}')">View</button>
        <button class="btn btn-secondary btn-sm" onclick="downloadPdf('${url}','${filename}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download
        </button>
      </div>
    </div>`;
}

/* ── NOTES PAGE ──────────────────────────────────── */
function setupNotesPage() {
  const colEl  = document.getElementById('notesCollege');
  const progEl = document.getElementById('notesProgramme');
  const lvlEl  = document.getElementById('notesLevel');
  const semEl  = document.getElementById('notesSemester');
  const crsEl  = document.getElementById('notesCourse');
  const srchEl = document.getElementById('notesSearch');
  const viewer = document.getElementById('notesViewer');
  const cntEl  = document.getElementById('notesResultCount');
  const rstBtn = document.getElementById('resetFiltersBtn');
  if (!colEl || !viewer) return;

  /* build full notes list with catalog info */
  const allNotes = Object.keys(NotesDatabase).map(code => ({
    code, pdf: NotesDatabase[code].pdf,
    title: NotesDatabase[code].title,
    level: NotesDatabase[code].level,
    semester: NotesDatabase[code].semester,
    catalog: StudyHubCatalog.getCourseEntry(code)
  }));

  const levels = [...new Set(allNotes.map(c => c.level))].sort();

  populateSel(colEl, StudyHubCatalog.getCollegeOptions(), 'College ▾');
  populateSel(lvlEl, levels.map(l => ({ value:l, label:`${l} Level` })), 'Level ▾');
  if (lvlEl) lvlEl.disabled = false;
  populateSel(semEl, [
    { value:'First',  label:'First Semester'  },
    { value:'Second', label:'Second Semester' }
  ], 'Semester ▾');
  if (semEl) semEl.disabled = false;

  function getFiltered() {
    const col  = colEl.value; const prog = progEl.value;
    const lvl  = lvlEl.value; const sem  = semEl.value;
    const crs  = crsEl.value;
    const q    = (srchEl?.value || '').toLowerCase().trim();
    return allNotes.filter(c => {
      if (col  && c.catalog && !c.catalog.colleges.includes(col))     return false;
      if (prog && c.catalog && !c.catalog.programmes.includes(prog))  return false;
      if (lvl  && c.level    !== lvl)                                  return false;
      if (sem  && c.semester !== sem)                                  return false;
      if (crs  && c.code     !== crs)                                  return false;
      if (q && !c.code.toLowerCase().includes(q) && !c.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  function refreshCourseDropdown() {
    const avail = getFiltered();
    const prev  = crsEl.value;
    populateSel(crsEl, avail.map(c => ({ value:c.code, label:`${c.code} — ${c.title}` })), 'Course ▾');
    crsEl.disabled = false;
    if (avail.some(c => c.code === prev)) crsEl.value = prev;
  }

  function render() {
    const list = getFiltered();
    const hasCourseSelected = !!crsEl.value;
    const hasSearch = !!(srchEl?.value || '').trim();

    /* Show prompt when no specific course or search is active */
    if (!hasCourseSelected && !hasSearch) {
      if (cntEl) cntEl.innerHTML = '';
      viewer.innerHTML = `
        <div class="resource-empty-state">
          <div class="res-empty-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <h3>Select a course to view lecture notes</h3>
          <p>Use the filters above to narrow down by college, level, or semester, then pick a course.</p>
        </div>`;
      return;
    }

    if (cntEl) cntEl.innerHTML = `Showing <strong>${list.length}</strong> result${list.length !== 1 ? 's' : ''}`;
    if (!list.length) {
      viewer.innerHTML = '<div class="no-results"><h3>No lecture notes available</h3><p>No notes found for the selected filters. Try a different course or check back later.</p></div>';
      return;
    }
    viewer.innerHTML = `<div class="resource-list">${list.map(c => buildResourceItem({
      title:    `${c.title}`,
      sub:      `${c.code} <span class="dot"></span> Level ${c.level} <span class="dot"></span> ${c.semester} Semester`,
      url:      c.pdf,
      filename: `${c.code}_Notes.pdf`
    })).join('')}</div>`;
  }

  function onChange() { refreshCourseDropdown(); render(); }

  colEl.addEventListener('change', () => {
    const col = colEl.value;
    if (col) { populateSel(progEl, StudyHubCatalog.getProgrammeOptions(col), 'Programme ▾'); progEl.disabled = false; }
    else resetSel(progEl, 'Programme ▾');
    onChange();
  });
  progEl.addEventListener('change', onChange);
  lvlEl.addEventListener('change',  onChange);
  semEl.addEventListener('change',  onChange);
  crsEl.addEventListener('change',  render);
  srchEl?.addEventListener('input', render);  /* search doesn't change dropdown, just re-renders */

  rstBtn?.addEventListener('click', () => {
    populateSel(colEl, StudyHubCatalog.getCollegeOptions(), 'College ▾');
    resetSel(progEl, 'Programme ▾');
    populateSel(lvlEl, levels.map(l => ({ value:l, label:`${l} Level` })), 'Level ▾');
    if (lvlEl) lvlEl.disabled = false;
    populateSel(semEl, [{ value:'First',label:'First Semester'},{value:'Second',label:'Second Semester'}], 'Semester ▾');
    if (semEl) semEl.disabled = false;
    if (srchEl) srchEl.value = '';
    refreshCourseDropdown(); render();
  });

  /* handle ?course= param */
  if (courseParam && NotesDatabase[courseParam]) {
    const e = StudyHubCatalog.getCourseEntry(courseParam);
    const n = NotesDatabase[courseParam];
    if (e) { setVal(colEl, e.college); colEl.dispatchEvent(new Event('change')); }
    setTimeout(() => {
      if (e?.programme) setVal(progEl, e.programme);
      setVal(lvlEl, n.level || '');
      setVal(semEl, n.semester || '');
      refreshCourseDropdown();
      setVal(crsEl, courseParam);
      render();
    }, 50);
  } else {
    /* No ?course= param — show empty state, populate course dropdown silently */
    refreshCourseDropdown();
    render(); /* render() will show the empty-state prompt since no course is selected */
  }
}

/* ── PAST QUESTIONS PAGE ─────────────────────────── */
function setupPastQuestionsPage() {
  const colEl  = document.getElementById('pqCollege');
  const progEl = document.getElementById('pqProgramme');
  const lvlEl  = document.getElementById('pqLevel');
  const semEl  = document.getElementById('pqSemester');
  const crsEl  = document.getElementById('pqCourse');
  const yrEl   = document.getElementById('pqYear');
  const srchEl = document.getElementById('pqSearch');
  const viewer = document.getElementById('pqViewer');
  const cntEl  = document.getElementById('pqResultCount');
  const rstBtn = document.getElementById('resetFiltersBtn');
  if (!colEl || !viewer) return;

  /* flatten PQ database into items */
  const allPQ = [];
  Object.keys(PastQuestionsDatabase).forEach(code => {
    const n = NotesDatabase[code];
    const cat = StudyHubCatalog.getCourseEntry(code);
    Object.keys(PastQuestionsDatabase[code]).forEach(year => {
      allPQ.push({
        code, year,
        url:      PastQuestionsDatabase[code][year],
        title:    n?.title || code,
        level:    n?.level || '',
        semester: n?.semester || '',
        catalog:  cat
      });
    });
  });

  const levels   = [...new Set(allPQ.map(i => i.level).filter(Boolean))].sort();
  const semesters= [...new Set(allPQ.map(i => i.semester).filter(Boolean))].sort();
  const allYears = [...new Set(allPQ.map(i => i.year))].sort((a,b) => b - a);

  populateSel(colEl, StudyHubCatalog.getCollegeOptions(), 'College ▾');
  populateSel(lvlEl, levels.map(l => ({ value:l, label:`${l} Level` })), 'Level ▾');
  if (lvlEl) lvlEl.disabled = false;
  populateSel(semEl, semesters.map(s => ({ value:s, label:`${s} Semester` })), 'Semester ▾');
  if (semEl) semEl.disabled = false;
  populateSel(yrEl, allYears.map(y => ({ value:y, label:y })), 'Year ▾');
  if (yrEl) yrEl.disabled = false;

  function getFiltered() {
    const col  = colEl.value; const prog = progEl.value;
    const lvl  = lvlEl.value; const sem  = semEl.value;
    const crs  = crsEl.value; const yr   = yrEl.value;
    const q    = (srchEl?.value || '').toLowerCase().trim();
    return allPQ.filter(i => {
      if (col  && i.catalog && !i.catalog.colleges.includes(col))     return false;
      if (prog && i.catalog && !i.catalog.programmes.includes(prog))  return false;
      if (lvl  && i.level    !== lvl)                                  return false;
      if (sem  && i.semester !== sem)                                  return false;
      if (crs  && i.code     !== crs)                                  return false;
      if (yr   && i.year     !== yr)                                   return false;
      if (q && !i.code.toLowerCase().includes(q) && !i.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }

  function refreshCourseDropdown() {
    const codes = [...new Set(getFiltered().map(i => i.code))].sort();
    const prev  = crsEl.value;
    populateSel(crsEl, codes.map(code => {
      const item = allPQ.find(i => i.code === code);
      return { value:code, label:`${code} — ${item.title}` };
    }), 'Course ▾');
    crsEl.disabled = false;
    if (codes.includes(prev)) crsEl.value = prev;
  }

  function render() {
    const list = getFiltered();
    const hasCourseSelected = !!crsEl.value;
    const hasYearSelected   = !!yrEl.value;
    const hasSearch = !!(srchEl?.value || '').trim();

    /* Show prompt when no specific course/year/search is active */
    if (!hasCourseSelected && !hasYearSelected && !hasSearch) {
      if (cntEl) cntEl.innerHTML = '';
      viewer.innerHTML = `
        <div class="resource-empty-state">
          <div class="res-empty-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          </div>
          <h3>Select a course to view past questions</h3>
          <p>Use the filters above to narrow down by college, level, or semester, then pick a course or year.</p>
        </div>`;
      return;
    }

    if (cntEl) cntEl.innerHTML = `Showing <strong>${list.length}</strong> result${list.length !== 1 ? 's' : ''}`;
    if (!list.length) {
      viewer.innerHTML = '<div class="no-results"><h3>No past questions available</h3><p>No papers found for the selected filters. Try a different course or year.</p></div>';
      return;
    }
    viewer.innerHTML = `<div class="resource-list">${list.map(i => buildResourceItem({
      title:    `${i.title} — ${i.year} Paper`,
      sub:      `${i.code} <span class="dot"></span> ${i.year} <span class="dot"></span> Level ${i.level}`,
      url:      i.url,
      filename: `${i.code}_${i.year}.pdf`
    })).join('')}</div>`;
  }

  function onChange() { refreshCourseDropdown(); render(); }

  colEl.addEventListener('change', () => {
    const col = colEl.value;
    if (col) { populateSel(progEl, StudyHubCatalog.getProgrammeOptions(col), 'Programme ▾'); progEl.disabled = false; }
    else resetSel(progEl, 'Programme ▾');
    onChange();
  });
  progEl.addEventListener('change', onChange);
  lvlEl.addEventListener('change',  onChange);
  semEl.addEventListener('change',  onChange);
  crsEl.addEventListener('change',  render);
  yrEl.addEventListener('change',   render);
  srchEl?.addEventListener('input', render);

  rstBtn?.addEventListener('click', () => {
    populateSel(colEl, StudyHubCatalog.getCollegeOptions(), 'College ▾');
    resetSel(progEl, 'Programme ▾');
    populateSel(lvlEl, levels.map(l => ({value:l,label:`${l} Level`})), 'Level ▾');
    if (lvlEl) lvlEl.disabled = false;
    populateSel(semEl, semesters.map(s => ({value:s,label:`${s} Semester`})), 'Semester ▾');
    if (semEl) semEl.disabled = false;
    populateSel(yrEl, allYears.map(y => ({value:y,label:y})), 'Year ▾');
    if (yrEl) yrEl.disabled = false;
    if (srchEl) srchEl.value = '';
    refreshCourseDropdown(); render();
  });

  if (courseParam && PastQuestionsDatabase[courseParam]) {
    const e = StudyHubCatalog.getCourseEntry(courseParam);
    if (e) { setVal(colEl, e.college); colEl.dispatchEvent(new Event('change')); }
    setTimeout(() => {
      if (e?.programme) setVal(progEl, e.programme);
      refreshCourseDropdown();
      setVal(crsEl, courseParam);
      render();
    }, 50);
  } else {
    refreshCourseDropdown();
    /* Do NOT call render() — show empty state until student selects a course */
    render();
  }
}

/* ── COURSES PAGE (dashboard for ?course=) ───────── */
function setupCoursesPage() {
  const section  = document.getElementById('courseDashboard');
  if (!section) return;
  if (!courseParam) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  const c = {
    code:     courseParam,
    title:    NotesDatabase[courseParam]?.title    || courseParam,
    level:    NotesDatabase[courseParam]?.level    || '',
    semester: NotesDatabase[courseParam]?.semester || ''
  };
  section.innerHTML = `
    <div class="cd-header">
      <div>
        <span style="display:inline-flex;align-items:center;gap:.375rem;font-size:.8125rem;font-weight:700;color:var(--accent);background:var(--accent-light);padding:.2rem .625rem;border-radius:var(--r-full);">${c.code}</span>
        <h3 style="margin-top:.5rem;">${c.title}</h3>
        ${c.level ? `<p style="color:var(--text-3);font-size:.875rem;margin-top:.25rem;">Level ${c.level} · ${c.semester} Semester</p>` : ''}
      </div>
      <div class="cd-actions">
        <button class="btn btn-primary"   onclick="openNotes('${c.code}')">Notes</button>
        <button class="btn btn-secondary" onclick="openPastQuestions('${c.code}')">Past Questions</button>
        <button class="btn btn-outline"   onclick="openQuiz('${c.code}')">Quiz</button>
      </div>
    </div>`;
}

/* ── QUIZ PAGE (pill wiring + filter restore) ──────── */
function setupQuizPage() {
  /* sync count pills → hidden select */
  document.querySelectorAll('.count-pill[data-count]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.count-pill[data-count]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const sel = document.getElementById('quizCount');
      if (sel) sel.value = pill.dataset.count;
      updateSummary();
    });
  });

  /* sync duration pills → hidden select */
  document.querySelectorAll('.count-pill[data-duration]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.count-pill[data-duration]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const sel = document.getElementById('quizDuration');
      if (sel) sel.value = pill.dataset.duration;
      updateSummary();
    });
  });

  /* update summary card live */
  function updateSummary() {
    const course   = document.getElementById('quizCourse')?.value   || '—';
    const count    = document.getElementById('quizCount')?.value    || '10';
    const duration = document.getElementById('quizDuration')?.value || '10';
    const sc = document.getElementById('summaryCourse');
    const sq = document.getElementById('summaryCount');
    const sd = document.getElementById('summaryDuration');
    if (sc) sc.textContent = course;
    if (sq) sq.textContent = count + ' Questions';
    if (sd) sd.textContent = duration + ' min';
  }

  /* update summary whenever course changes */
  document.getElementById('quizCourse')?.addEventListener('change', updateSummary);

  /* reset btn */
  document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
    clearFilters();
    const colEl = document.getElementById('quizCollege');
    populateSel(colEl, StudyHubCatalog.getCollegeOptions(), 'Select college');
    resetSel(document.getElementById('quizProgramme'), 'Select programme');
    resetSel(document.getElementById('quizLevel'),     'Select level');
    resetSel(document.getElementById('quizSemester'),  'Select semester');
    resetSel(document.getElementById('quizCourse'),    'Select course');
    updateSummary();
  });

  /* restore saved filter state */
  const s = loadFilters();
  if (s.quizCollege) {
    const colEl  = document.getElementById('quizCollege');
    const progEl = document.getElementById('quizProgramme');
    const lvlEl  = document.getElementById('quizLevel');
    const semEl  = document.getElementById('quizSemester');
    const crsEl  = document.getElementById('quizCourse');
    setVal(colEl, s.quizCollege);
    populateSel(progEl, StudyHubCatalog.getProgrammeOptions(s.quizCollege), 'Select programme');
    progEl.disabled = false;
    if (s.quizProgramme) {
      setVal(progEl, s.quizProgramme);
      populateSel(lvlEl, StudyHubCatalog.getLevelOptions(s.quizCollege, s.quizProgramme), 'Select level');
      lvlEl.disabled = false;
      if (s.quizLevel) {
        setVal(lvlEl, s.quizLevel);
        populateSel(semEl, StudyHubCatalog.getSemesterOptions(s.quizCollege, s.quizProgramme, s.quizLevel), 'Select semester');
        semEl.disabled = false;
        if (s.quizSemester) {
          setVal(semEl, s.quizSemester);
          const courses = StudyHubCatalog.getCourseOptions({
            college:s.quizCollege, programme:s.quizProgramme,
            level:s.quizLevel, semester:s.quizSemester,
            sourceCodes: Object.keys(QuestionBanks)
          });
          if (courses.length) {
            populateSel(crsEl, courses.map(c => ({value:c.code,label:c.code})), 'Select course');
            crsEl.disabled = false;
            if (s.quizCourse) setVal(crsEl, s.quizCourse);
          }
        }
      }
    }
    updateSummary();
  }

  /* handle ?course= param */
  if (courseParam && QuestionBanks[courseParam]) {
    const e = StudyHubCatalog.getCourseEntry(courseParam);
    if (e) {
      const colEl = document.getElementById('quizCollege');
      setVal(colEl, e.college); colEl.dispatchEvent(new Event('change'));
      setTimeout(() => {
        if (e.programme) {
          const progEl = document.getElementById('quizProgramme');
          setVal(progEl, e.programme); progEl.dispatchEvent(new Event('change'));
          setTimeout(() => {
            if (e.level) {
              const lvlEl = document.getElementById('quizLevel');
              setVal(lvlEl, e.level); lvlEl.dispatchEvent(new Event('change'));
              setTimeout(() => {
                if (e.semester) {
                  const semEl = document.getElementById('quizSemester');
                  setVal(semEl, e.semester); semEl.dispatchEvent(new Event('change'));
                  setTimeout(() => {
                    setVal(document.getElementById('quizCourse'), courseParam);
                    updateSummary();
                  }, 50);
                }
              }, 50);
            }
          }, 50);
        }
      }, 50);
    }
  }

  updateSummary();
}

/* ── PDF VIEWER (backward compat for course dashboard) */
function initializePdfJs() {
  if (window.pdfjsLib?.GlobalWorkerOptions)
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.122/build/pdf.worker.min.js';
}

async function loadPdfViewer(container, url, title) {
  initializePdfJs();
  container.innerHTML = `
    <div class="pdf-viewer-shell">
      <div class="pdf-toolbar">
        <div class="pdf-info"><strong>${title}</strong><span id="pdfPageCountLabel"></span></div>
        <div class="pdf-control-group">
          <button type="button" class="btn-icon" id="pdfPrevPage" aria-label="Prev">◀</button>
          <div class="pdf-page-input-wrapper">
            <label class="sr-only" for="pdfPageNumber">Page</label>
            <input id="pdfPageNumber" class="pdf-page-number" type="number" min="1" value="1">
            <span>/ <span id="pdfPageCount">0</span></span>
          </div>
          <button type="button" class="btn-icon" id="pdfNextPage" aria-label="Next">▶</button>
          <button type="button" class="btn-icon" id="pdfZoomOut" aria-label="Zoom out">−</button>
          <button type="button" class="btn-icon" id="pdfZoomIn"  aria-label="Zoom in">+</button>
          <span class="pdf-scale-label" id="pdfScaleLabel">100%</span>
        </div>
      </div>
      <div class="pdf-canvas-wrapper"><canvas id="pdfCanvas"></canvas></div>
      <div class="pdf-status" id="pdfStatus">Loading PDF…</div>
    </div>`;

  const status    = container.querySelector('#pdfStatus');
  const pageNum   = container.querySelector('#pdfPageNumber');
  const pageCount = container.querySelector('#pdfPageCount');
  const pageLabel = container.querySelector('#pdfPageCountLabel');
  const scaleEl   = container.querySelector('#pdfScaleLabel');
  const canvas    = container.querySelector('#pdfCanvas');
  const ctx       = canvas.getContext('2d');
  let doc = null, cur = 1, scale = 1.0;
  const clamp = v => Math.min(2.5, Math.max(0.5, v));

  function toolbar() {
    pageNum.value      = cur;
    pageCount.textContent = doc ? doc.numPages : '0';
    pageLabel.textContent = doc ? `Page ${cur} of ${doc.numPages}` : '';
    scaleEl.textContent   = `${Math.round(scale * 100)}%`;
    container.querySelector('#pdfPrevPage').disabled = cur <= 1;
    container.querySelector('#pdfNextPage').disabled = doc ? cur >= doc.numPages : true;
  }

  async function renderPg(n) {
    if (!doc) return;
    const page = await doc.getPage(n);
    const vp   = page.getViewport({ scale });
    const os   = window.devicePixelRatio || 1;
    const ovp  = page.getViewport({ scale: scale * os });
    canvas.width  = Math.floor(ovp.width);
    canvas.height = Math.floor(ovp.height);
    canvas.style.width  = `${Math.floor(vp.width)}px`;
    canvas.style.height = `${Math.floor(vp.height)}px`;
    await page.render({ canvasContext:ctx, viewport:ovp }).promise;
    status.textContent = ''; toolbar();
  }

  function go(n) {
    cur = Math.min(Math.max(n, 1), doc?.numPages || 1);
    renderPg(cur).catch(e => { status.textContent = 'Failed to render page.'; console.error(e); });
  }

  container.querySelector('#pdfPrevPage').addEventListener('click', () => go(cur - 1));
  container.querySelector('#pdfNextPage').addEventListener('click', () => go(cur + 1));
  container.querySelector('#pdfZoomOut').addEventListener('click',  () => { scale = clamp(scale - 0.15); go(cur); });
  container.querySelector('#pdfZoomIn').addEventListener('click',   () => { scale = clamp(scale + 0.15); go(cur); });
  pageNum.addEventListener('change', () => { const n = parseInt(pageNum.value,10); if (!isNaN(n)) go(n); });

  if (!window.pdfjsLib) {
    await new Promise(res => {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.122/pdf.min.js';
      s.onload = res; document.head.appendChild(s);
    });
  }
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.122/pdf.worker.min.js';

  try {
    doc = await window.pdfjsLib.getDocument({ url: encodeURI(url) }).promise;
    toolbar(); await renderPg(1);
  } catch (e) {
    status.textContent = `Failed to load PDF: ${url}`; console.error(e);
  }
}
window.loadPdfViewer = loadPdfViewer;

/* ── BOOT ──────────────────────────────────────────── */
if (pageType === 'home'    || pageType === 'courses') setupCourseDiscovery();
if (pageType === 'home')                              renderStats();
if (pageType === 'courses')                           setupCoursesPage();
if (pageType === 'notes')                             setupNotesPage();
if (pageType === 'past-questions')                    setupPastQuestionsPage();
if (pageType === 'quiz')                              setupQuizPage();
