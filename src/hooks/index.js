import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled };
}

export function useIntersectionObserver(options = {}) {
  const [entries, setEntries] = useState({});

  const observe = (id, element) => {
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      setEntries(prev => ({ ...prev, [id]: entry.isIntersecting }));
    }, { threshold: 0.15, ...options });
    observer.observe(element);
    return () => observer.disconnect();
  };

  return { entries, observe };
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(v => !v);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return { isOpen, toggle, close };
}

export function useContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1200));
    setStatus('sent');
    setTimeout(() => {
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  return { form, status, handleChange, handleSubmit };
}
