const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { getByTestId, fireEvent } = require('@testing-library/dom');

let dom;
let container;

beforeEach(done => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  dom = new JSDOM(html, { 
    runScripts: 'dangerously',
    resources: 'usable',
    url: 'http://localhost'
  });
  container = dom.window.document.body;
  
  // Load and execute the script
  const script = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  const scriptElement = dom.window.document.createElement('script');
  scriptElement.textContent = script;
  dom.window.document.head.appendChild(scriptElement);
  
  // Wait for DOMContentLoaded
  dom.window.document.addEventListener('DOMContentLoaded', () => {
    done();
  });
});

describe('Navigation Menu', () => {
  test('hamburger menu toggles mobile navigation', (done) => {
    const navMenu = container.querySelector('.nav-menu');
    const hamburger = container.querySelector('.hamburger');
    
    expect(navMenu.classList.contains('active')).toBe(false);
    expect(hamburger.classList.contains('active')).toBe(false);
    
    fireEvent.click(hamburger);
    expect(navMenu.classList.contains('active')).toBe(true);
    expect(hamburger.classList.contains('active')).toBe(true);
    
    fireEvent.click(hamburger);
    expect(navMenu.classList.contains('active')).toBe(false);
    expect(hamburger.classList.contains('active')).toBe(false);
    done();
  });

  test('navigation links scroll to correct sections', (done) => {
    const scrollIntoViewMock = jest.fn();
    dom.window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    
    const navLinks = container.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      const target = container.querySelector(`#${targetId}`);
      expect(target).not.toBeNull();
      
      fireEvent.click(link);
      expect(scrollIntoViewMock).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start'
      });
      scrollIntoViewMock.mockClear();
    });
    done();
  });
});