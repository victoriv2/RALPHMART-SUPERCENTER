/**
 * NKEMMART UNIVERSAL MODULAR SELECT PICKER
 * Upgrades all native HTML <select> elements across the entire platform:
 * - Desktop: Custom Modal Dialog with search, radio styling, and title header
 * - Mobile: Bottom Sheet Modal / Action Sheet sliding up from bottom with grab handle
 * - Replaces native mobile select popups (Android/iOS single-choice dialogs)
 * - Zero emojis, zero hover movement (transform: none !important)
 * - Fully synchronized with native <select> state, events, and validation
 */
(function() {
  // Inject embedded stylesheet to guarantee 100% self-contained styling on all pages
  function injectStyles() {
    if (document.getElementById('modular-select-picker-styles')) return;
    const style = document.createElement('style');
    style.id = 'modular-select-picker-styles';
    style.textContent = `
      .modular-select-native-hidden {
        position: absolute !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 1px !important;
        height: 1px !important;
        margin: -1px !important;
        clip: rect(0, 0, 0, 0) !important;
        overflow: hidden !important;
        left: -9999px !important;
        top: -9999px !important;
      }

      .modular-select-btn {
        width: 100%;
        min-height: 42px;
        padding: 9px 14px;
        background: #ffffff;
        border: 1.5px solid #cbd5e1;
        border-radius: 8px;
        font-size: 13.5px;
        color: #0f172a;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        transition: border-color 0.15s, background-color 0.15s, box-shadow 0.15s;
        box-sizing: border-box;
        text-align: left;
        user-select: none;
        transform: none !important;
      }

      .modular-select-btn:hover:not(:disabled) {
        border-color: #512175;
        background: #faf5ff;
        transform: none !important;
      }

      .modular-select-btn:focus-visible {
        border-color: #512175;
        box-shadow: 0 0 0 3px rgba(81, 33, 117, 0.12);
        outline: none;
      }

      .modular-select-btn.is-invalid {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15) !important;
      }

      .modular-select-btn:disabled {
        background: #f1f5f9;
        border-color: #e2e8f0;
        color: #94a3b8;
        cursor: not-allowed;
      }

      .modular-select-btn .btn-label {
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .modular-select-btn .btn-label.is-placeholder {
        color: #94a3b8;
        font-weight: 500;
      }

      .modular-select-btn .btn-chevron {
        color: #64748b;
        flex-shrink: 0;
        transition: transform 0.2s ease;
      }

      .modular-select-btn.is-active .btn-chevron {
        transform: rotate(180deg);
      }

      /* Modal / Bottom Sheet Overlay */
      .modular-picker-overlay {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.65);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        z-index: 100000;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
      }

      .modular-picker-overlay.open {
        display: flex !important;
        animation: modularPickerFadeIn 0.2s ease-out;
      }

      @keyframes modularPickerFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      /* Desktop Custom Modal Dialog */
      .modular-picker-dialog {
        background: #ffffff;
        border-radius: 16px;
        width: 100%;
        max-width: 460px;
        max-height: 85vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.24);
        overflow: hidden;
        box-sizing: border-box;
        animation: modularPickerZoomIn 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        transform: none !important;
      }

      @keyframes modularPickerZoomIn {
        from { transform: scale(0.96); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }

      .modular-picker-handle-bar {
        display: none;
      }

      .modular-picker-header {
        padding: 16px 20px;
        border-bottom: 1px solid #f1f5f9;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
      }

      .modular-picker-title-wrap {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .modular-picker-title {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 15.5px;
        font-weight: 800;
        color: #0f172a;
        margin: 0;
      }

      .modular-picker-subtitle {
        font-size: 12px;
        color: #64748b;
        font-weight: 500;
      }

      .modular-picker-close {
        background: #f1f5f9;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #64748b;
        transition: background-color 0.15s, color 0.15s;
        padding: 0;
        transform: none !important;
      }

      .modular-picker-close:hover {
        background: #e2e8f0;
        color: #0f172a;
        transform: none !important;
      }

      .modular-picker-search-wrap {
        padding: 12px 16px 8px 16px;
        border-bottom: 1px solid #f1f5f9;
        position: relative;
      }

      .modular-picker-search-input {
        width: 100%;
        height: 40px;
        padding: 0 14px 0 38px;
        border: 1.5px solid #cbd5e1;
        border-radius: 8px;
        font-size: 13.5px;
        color: #0f172a;
        outline: none;
        box-sizing: border-box;
        transition: border-color 0.15s;
        background: #ffffff;
      }

      .modular-picker-search-input:focus {
        border-color: #512175;
        box-shadow: 0 0 0 3px rgba(81, 33, 117, 0.12);
      }

      .modular-picker-search-icon {
        position: absolute;
        left: 28px;
        top: 50%;
        transform: translateY(-50%) !important;
        color: #94a3b8;
        pointer-events: none;
      }

      .modular-picker-body {
        padding: 12px 16px;
        overflow-y: auto;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        display: flex;
        flex-direction: column;
        gap: 6px;
        max-height: 60vh;
      }

      .modular-picker-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        border-radius: 10px;
        border: 1.5px solid #e2e8f0;
        background: #ffffff;
        cursor: pointer;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 0.15s, background-color 0.15s;
        transform: none !important;
      }

      .modular-picker-item:hover {
        background: #faf5ff;
        border-color: #d8b4fe;
        transform: none !important;
      }

      .modular-picker-item.selected {
        background: #faf5ff;
        border-color: #512175;
      }

      .modular-picker-item-label {
        font-size: 14px;
        font-weight: 700;
        color: #0f172a;
        line-height: 1.35;
      }

      .modular-picker-item.selected .modular-picker-item-label {
        color: #512175;
      }

      .modular-picker-radio {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #cbd5e1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: border-color 0.15s;
        background: #ffffff;
      }

      .modular-picker-item.selected .modular-picker-radio {
        border-color: #512175;
      }

      .modular-picker-radio-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #512175;
        display: none;
      }

      .modular-picker-item.selected .modular-picker-radio-dot {
        display: block;
      }

      .modular-picker-empty {
        padding: 28px;
        text-align: center;
        color: #64748b;
        font-size: 13.5px;
      }

      /* Mobile Bottom Sheet Modal / Action Sheet */
      @media (max-width: 640px) {
        .modular-picker-overlay {
          padding: 0 !important;
          align-items: flex-end !important;
        }

        .modular-picker-dialog {
          max-width: 100% !important;
          max-height: 85vh !important;
          border-top-left-radius: 20px !important;
          border-top-right-radius: 20px !important;
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
          animation: modularPickerSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
          padding-bottom: env(safe-area-inset-bottom, 16px);
        }

        @keyframes modularPickerSlideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }

        .modular-picker-handle-bar {
          display: flex !important;
          justify-content: center;
          align-items: center;
          padding: 10px 0 2px 0;
          background: #ffffff;
        }

        .modular-picker-handle {
          width: 38px;
          height: 4.5px;
          border-radius: 9999px;
          background: #cbd5e1;
        }

        .modular-picker-item {
          padding: 14px 14px !important;
          min-height: 48px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function initModularSelects() {
    injectStyles();

    const selects = document.querySelectorAll('select:not([data-modular-select-ready]):not([data-modular-ignore])');
    selects.forEach(select => {
      // Skip if explicitly ignored or inside an already generated modal
      if (select.closest('.modular-picker-dialog') || select.closest('.filter-picker-modal-dialog')) {
        return;
      }
      enhanceSelect(select);
    });
  }

  function enhanceSelect(select) {
    if (select.hasAttribute('data-modular-select-ready')) return;
    select.setAttribute('data-modular-select-ready', 'true');
    select.classList.add('modular-select-native-hidden');

    // Create trigger button
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'modular-select-btn';
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-expanded', 'false');

    // Match original select attributes
    if (select.id) {
      trigger.setAttribute('data-target-select', select.id);
    }
    if (select.disabled) {
      trigger.disabled = true;
    }

    const labelSpan = document.createElement('span');
    labelSpan.className = 'btn-label';
    trigger.appendChild(labelSpan);

    const chevronSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    chevronSvg.setAttribute('class', 'btn-chevron');
    chevronSvg.setAttribute('width', '14');
    chevronSvg.setAttribute('height', '14');
    chevronSvg.setAttribute('viewBox', '0 0 24 24');
    chevronSvg.setAttribute('fill', 'none');
    chevronSvg.setAttribute('stroke', 'currentColor');
    chevronSvg.setAttribute('stroke-width', '2.5');
    chevronSvg.innerHTML = '<polyline points="6 9 12 15 18 9"></polyline>';
    trigger.appendChild(chevronSvg);

    // Insert trigger after select in DOM
    if (select.nextSibling) {
      select.parentNode.insertBefore(trigger, select.nextSibling);
    } else {
      select.parentNode.appendChild(trigger);
    }

    function updateTriggerState() {
      trigger.disabled = select.disabled;
      const selectedIndex = select.selectedIndex;
      const selectedOpt = selectedIndex >= 0 ? select.options[selectedIndex] : null;

      if (selectedOpt && selectedOpt.value !== '' && !selectedOpt.disabled) {
        labelSpan.textContent = selectedOpt.textContent.trim();
        labelSpan.classList.remove('is-placeholder');
      } else {
        let placeholderText = 'Select an option';
        if (selectedOpt && selectedOpt.textContent.trim()) {
          placeholderText = selectedOpt.textContent.trim();
        } else if (select.options.length > 0 && select.options[0].textContent.trim()) {
          placeholderText = select.options[0].textContent.trim();
        }
        labelSpan.textContent = placeholderText;
        labelSpan.classList.add('is-placeholder');
      }

      if (select.value) {
        trigger.classList.remove('is-invalid');
      }
    }

    updateTriggerState();

    // Listen to native select change & input events
    select.addEventListener('change', updateTriggerState);
    select.addEventListener('input', updateTriggerState);

    // Listen to form validation invalid event
    select.addEventListener('invalid', () => {
      trigger.classList.add('is-invalid');
      try { trigger.focus(); } catch (e) {}
    });

    // MutationObserver to watch for disabled attribute or dynamic option changes
    const observer = new MutationObserver(() => {
      updateTriggerState();
    });
    observer.observe(select, { attributes: true, childList: true, subtree: true });

    // Click trigger opens modal (desktop) / bottom sheet (mobile)
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (select.disabled) return;
      openPickerModal(select, trigger, updateTriggerState);
    });
  }

  // Shared modal overlay singleton
  let sharedOverlay = null;

  function getSharedModal() {
    if (!sharedOverlay) {
      sharedOverlay = document.createElement('div');
      sharedOverlay.className = 'modular-picker-overlay';
      sharedOverlay.setAttribute('role', 'dialog');
      sharedOverlay.setAttribute('aria-modal', 'true');
      document.body.appendChild(sharedOverlay);
    }
    return sharedOverlay;
  }

  function openPickerModal(select, trigger, onSelectCallback) {
    const overlay = getSharedModal();
    const selectLabel = getSelectLabel(select);
    const options = Array.from(select.options);
    const validOptions = options.filter(opt => opt.value !== '' || !opt.disabled);
    const hasSearch = validOptions.length > 5;

    overlay.innerHTML = `
      <div class="modular-picker-dialog">
        <div class="modular-picker-handle-bar">
          <div class="modular-picker-handle"></div>
        </div>
        <div class="modular-picker-header">
          <div class="modular-picker-title-wrap">
            <h3 class="modular-picker-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#512175" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>${escapeHtml(selectLabel)}</span>
            </h3>
            <span class="modular-picker-subtitle">Tap an option to select</span>
          </div>
          <button type="button" class="modular-picker-close" aria-label="Close dialog">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        ${hasSearch ? `
          <div class="modular-picker-search-wrap">
            <svg class="modular-picker-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" class="modular-picker-search-input" placeholder="Search options..." autocomplete="off">
          </div>
        ` : ''}
        <div class="modular-picker-body">
          ${renderOptionsHtml(options, select.value)}
        </div>
      </div>
    `;

    overlay.classList.add('open');
    trigger.classList.add('is-active');
    document.body.classList.add('modal-open');
    if (document.documentElement) document.documentElement.classList.add('modal-open');

    function closeModal() {
      overlay.classList.remove('open');
      trigger.classList.remove('is-active');
      document.body.classList.remove('modal-open');
      if (document.documentElement) document.documentElement.classList.remove('modal-open');
      document.removeEventListener('keydown', onKeyDown);
    }

    function onKeyDown(e) {
      if (e.key === 'Escape') closeModal();
    }

    document.addEventListener('keydown', onKeyDown);

    const closeBtn = overlay.querySelector('.modular-picker-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    overlay.onclick = (e) => {
      if (e.target === overlay) closeModal();
    };

    // Instant search filter
    const searchInput = overlay.querySelector('.modular-picker-search-input');
    const itemsContainer = overlay.querySelector('.modular-picker-body');
    if (searchInput && itemsContainer) {
      setTimeout(() => searchInput.focus(), 80);
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        const items = itemsContainer.querySelectorAll('.modular-picker-item');
        let matchCount = 0;
        items.forEach(item => {
          const text = (item.getAttribute('data-label') || '').toLowerCase();
          const matches = text.includes(query);
          item.style.display = matches ? 'flex' : 'none';
          if (matches) matchCount++;
        });
        let emptyEl = itemsContainer.querySelector('.modular-picker-empty');
        if (matchCount === 0) {
          if (!emptyEl) {
            emptyEl = document.createElement('div');
            emptyEl.className = 'modular-picker-empty';
            emptyEl.textContent = 'No matching options found';
            itemsContainer.appendChild(emptyEl);
          }
        } else if (emptyEl) {
          emptyEl.remove();
        }
      });
    }

    // Option items click
    const optionItems = itemsContainer ? itemsContainer.querySelectorAll('.modular-picker-item:not([disabled])') : [];
    optionItems.forEach(item => {
      item.addEventListener('click', () => {
        const val = item.getAttribute('data-value');
        select.value = val;
        // Trigger both change and input events
        select.dispatchEvent(new Event('change', { bubbles: true }));
        select.dispatchEvent(new Event('input', { bubbles: true }));
        if (typeof select.onchange === 'function') {
          try { select.onchange.call(select, new Event('change')); } catch (err) {}
        }
        if (onSelectCallback) onSelectCallback();
        closeModal();
      });
    });
  }

  function renderOptionsHtml(options, currentValue) {
    const valid = options.filter(opt => opt.value !== '' || !opt.disabled);
    if (valid.length === 0) {
      return '<div class="modular-picker-empty">No options available</div>';
    }
    return valid.map(opt => {
      const isSelected = opt.value === currentValue;
      const disabledAttr = opt.disabled ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : '';
      return `
        <button type="button" class="modular-picker-item ${isSelected ? 'selected' : ''}" data-value="${escapeHtml(opt.value)}" data-label="${escapeHtml(opt.textContent.trim())}" ${disabledAttr}>
          <span class="modular-picker-item-label">${escapeHtml(opt.textContent.trim())}</span>
          <div class="modular-picker-radio">
            <div class="modular-picker-radio-dot"></div>
          </div>
        </button>
      `;
    }).join('');
  }

  function getSelectLabel(select) {
    if (select.id) {
      const label = document.querySelector(`label[for="${select.id}"]`);
      if (label) return label.textContent.replace('*', '').trim();
    }
    const parentField = select.closest('.form-field, .form-group, .form-row');
    if (parentField) {
      const label = parentField.querySelector('label');
      if (label) return label.textContent.replace('*', '').trim();
    }
    const titleAttr = select.getAttribute('title');
    if (titleAttr) return titleAttr;
    const ariaLabel = select.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;
    if (select.options.length > 0 && select.options[0].disabled && select.options[0].textContent.trim()) {
      return select.options[0].textContent.trim();
    }
    return 'Select Option';
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Auto-init on DOMContentLoaded and whenever body changes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModularSelects);
  } else {
    initModularSelects();
  }

  // Expose globally
  window.initModularSelects = initModularSelects;

  // MutationObserver for dynamic select additions
  if (typeof MutationObserver !== 'undefined') {
    const domObserver = new MutationObserver(() => {
      initModularSelects();
    });
    domObserver.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
