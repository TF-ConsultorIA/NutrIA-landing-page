import { useState, useEffect } from 'react';

/**
 * Tracks which section ID is currently in the viewport based on scroll position.
 *
 * @param sectionIds - Ordered list of section element IDs to observe.
 * @param offset     - Pixels from the top to consider a section "active" (e.g. nav height + buffer).
 * @returns The ID of the currently active section.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sectionIds[0] ?? '';

      for (const id of sectionIds.slice(1)) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial state on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
