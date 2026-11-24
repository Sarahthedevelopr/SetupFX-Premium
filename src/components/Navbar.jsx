import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

import './Navbar.css';

// Only the platform links used in the existing website navigation.
const platformLinks = [
  {
    title: 'Forex Trading Platform',
    description: 'Trading technology for forex brokers',
    href: '/platforms/forex-trading-platform',
  },
  {
    title: 'Indian Trading Platform',
    description: 'Technology for Indian market workflows',
    href: '/platforms/indian-trading-platform',
  },
  {
    title: 'Global Prop Firm Platform',
    description: 'Trading technology for prop firms',
    href: '/platforms/global-prop-firm-platform',
  },
  {
    title: 'AI Trading Platform',
    description: 'AI-driven and algorithmic trading',
    href: '/platforms/ai-trading-platform',
  },
];

// Only the four services listed on the original SetupFX website.
const serviceLinks = [
  {
    title: 'Trading Platform Development',
    href: '/services/trading-platform-development',
  },
  {
    title: 'White Label Solution',
    href: '/services/white-label-solutions',
  },
  {
    title: 'Integration Services',
    href: '/services/integration-services',
  },
  {
    title: 'Maintenance & Support',
    href: '/services/maintenance-support',
  },
];

// Replace this placeholder with your actual WhatsApp number.
// Include the country code without + or spaces.
const whatsappNumber = '91YOURNUMBER';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();

  const isPlatformPage =
    location.pathname.startsWith('/platforms');

  const isServicePage =
    location.pathname.startsWith('/services');

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close mobile navigation when switching to desktop.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close menus after navigating to another route.
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      'Hi SetupFX! I would like to discuss my trading platform project.'
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? ' active' : ''}`;

  const dropdownItemClass = ({ isActive }) =>
    `dropdown-item${isActive ? ' active' : ''}`;

  const serviceItemClass = ({ isActive }) =>
    `service-dropdown-item${isActive ? ' active' : ''}`;

  const mobileLinkClass = ({ isActive }) =>
    `mobile-nav-link${isActive ? ' active' : ''}`;

  const renderPlatformLinks = (mobile = false) =>
    platformLinks.map((item) => (
      <NavLink
        to={item.href}
        key={item.title}
        className={
          mobile ? mobileLinkClass : dropdownItemClass
        }
        onClick={closeMenu}
      >
        {mobile ? (
          item.title
        ) : (
          <>
            <span className="dropdown-item-title">
              {item.title}
            </span>

            <span className="dropdown-item-description">
              {item.description}
            </span>
          </>
        )}
      </NavLink>
    ));

  const renderServiceLinks = (mobile = false) =>
    serviceLinks.map((item) => (
      <NavLink
        to={item.href}
        key={item.title}
        className={
          mobile ? mobileLinkClass : serviceItemClass
        }
        onClick={closeMenu}
      >
        {mobile ? (
          item.title
        ) : (
          <>
            <span>{item.title}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </>
        )}
      </NavLink>
    ));

  return (
    <header className="site-header">
      <nav
        className="navbar container"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <NavLink
          to="/"
          end
          className="navbar-logo"
          aria-label="SetupFX Home"
          onClick={closeMenu}
        >
          <span className="logo-mark">S</span>

          <span className="logo-text">
            SETUP<span>FX</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="desktop-navigation">
          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            Home
          </NavLink>

          {/* Platforms Dropdown */}
          <div
            className={`nav-dropdown ${
              activeDropdown === 'platforms'
                ? 'dropdown-active'
                : ''
            } ${
              isPlatformPage ? 'parent-active' : ''
            }`}
            onMouseEnter={() => {
              if (window.innerWidth > 960) {
                setActiveDropdown('platforms');
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 960) {
                setActiveDropdown(null);
              }
            }}
          >
            <div className="desktop-dropdown-control">
              <NavLink
                to="/platforms"
                end
                className={`nav-link dropdown-trigger ${
                  location.pathname === '/platforms'
                    ? 'active'
                    : ''
                }`}
                onClick={closeMenu}
              >
                Platforms
              </NavLink>

              <button
                className="dropdown-chevron-toggle"
                type="button"
                aria-label="Show Platforms menu"
                aria-expanded={
                  activeDropdown === 'platforms'
                }
                onClick={() =>
                  toggleDropdown('platforms')
                }
              >
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="dropdown-menu platform-menu">
              <div className="dropdown-heading">
                <span className="dropdown-eyebrow">
                  OUR PLATFORMS
                </span>

                <p>
                  Technology built for trading businesses.
                </p>
              </div>

              <div className="dropdown-links">
                {renderPlatformLinks()}
              </div>

              <NavLink
                to="/platforms"
                end
                className="dropdown-footer-link"
                onClick={closeMenu}
              >
                Explore all platforms
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                />
              </NavLink>
            </div>
          </div>

          {/* Services Dropdown */}
          <div
            className={`nav-dropdown ${
              activeDropdown === 'services'
                ? 'dropdown-active'
                : ''
            } ${
              isServicePage ? 'parent-active' : ''
            }`}
            onMouseEnter={() => {
              if (window.innerWidth > 960) {
                setActiveDropdown('services');
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 960) {
                setActiveDropdown(null);
              }
            }}
          >
            <div className="desktop-dropdown-control">
              <NavLink
                to="/services"
                end
                className={`nav-link dropdown-trigger ${
                  location.pathname === '/services'
                    ? 'active'
                    : ''
                }`}
                onClick={closeMenu}
              >
                Services
              </NavLink>

              <button
                className="dropdown-chevron-toggle"
                type="button"
                aria-label="Show Services menu"
                aria-expanded={
                  activeDropdown === 'services'
                }
                onClick={() =>
                  toggleDropdown('services')
                }
              >
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="dropdown-menu services-menu">
              <span className="dropdown-eyebrow">
                WHAT WE DO
              </span>

              {renderServiceLinks()}

              <NavLink
                to="/services"
                end
                className="dropdown-footer-link"
                onClick={closeMenu}
              >
                Explore all services
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                />
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/team"
            className={navLinkClass}
          >
            Team
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkClass}
          >
            Contact
          </NavLink>
        </div>

        {/* Desktop CTA */}
        <button
          className="navbar-cta"
          type="button"
          onClick={openWhatsApp}
        >
          Get Started
          <ArrowUpRight
            size={16}
            aria-hidden="true"
          />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={
            mobileOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMobileOpen((open) => !open)
          }
        >
          {mobileOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-navigation ${
          mobileOpen ? 'mobile-navigation-open' : ''
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className="mobile-navigation-inner">
          <NavLink
            to="/"
            end
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Home
          </NavLink>

          {/* Mobile Platforms */}
          <div className="mobile-dropdown-row">
            <NavLink
              to="/platforms"
              end
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Platforms
            </NavLink>

            <button
              className={`mobile-dropdown-trigger ${
                isPlatformPage ? 'active' : ''
              }`}
              type="button"
              aria-label="Show Platforms submenu"
              aria-expanded={
                activeDropdown === 'platforms'
              }
              onClick={() =>
                toggleDropdown('platforms')
              }
            >
              <ChevronDown
                size={18}
                aria-hidden="true"
              />
            </button>
          </div>

          {activeDropdown === 'platforms' && (
            <div className="mobile-submenu">
              {renderPlatformLinks(true)}

              <NavLink
                to="/platforms"
                end
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                All Platforms
              </NavLink>
            </div>
          )}

          {/* Mobile Services */}
          <div className="mobile-dropdown-row">
            <NavLink
              to="/services"
              end
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Services
            </NavLink>

            <button
              className={`mobile-dropdown-trigger ${
                isServicePage ? 'active' : ''
              }`}
              type="button"
              aria-label="Show Services submenu"
              aria-expanded={
                activeDropdown === 'services'
              }
              onClick={() =>
                toggleDropdown('services')
              }
            >
              <ChevronDown
                size={18}
                aria-hidden="true"
              />
            </button>
          </div>

          {activeDropdown === 'services' && (
            <div className="mobile-submenu">
              {renderServiceLinks(true)}

              <NavLink
                to="/services"
                end
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                All Services
              </NavLink>
            </div>
          )}

          <NavLink
            to="/team"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Team
          </NavLink>

          <NavLink
            to="/about"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          <button
            className="navbar-cta mobile-cta"
            type="button"
            onClick={() => {
              closeMenu();
              openWhatsApp();
            }}
          >
            Get Started
            <ArrowUpRight
              size={17}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;