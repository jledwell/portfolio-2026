/* @ds-bundle: {"format":3,"namespace":"JoshuaLedwellDesignSystem_cb2884","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Nametag","sourcePath":"components/core/Nametag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"1f6f87c5ac3f","components/core/Badge.jsx":"af2e9758d876","components/core/Button.jsx":"295ff29bedd7","components/core/Card.jsx":"cd30c2bcfad9","components/core/Nametag.jsx":"df7cf4296691","components/feedback/Alert.jsx":"8ea093f79eee","components/forms/Input.jsx":"40030a548e4d","ui_kits/personal-site/App.jsx":"23563032b09d","ui_kits/personal-site/BadgeScreen.jsx":"7497e91388d5","ui_kits/personal-site/Header.jsx":"8a246904e26c","ui_kits/personal-site/HomeScreen.jsx":"0761af8c8579","ui_kits/personal-site/StyleGuideScreen.jsx":"58eb6f880b6c","ui_kits/personal-site/WorkflowScreen.jsx":"c24bb3ed5fa3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.JoshuaLedwellDesignSystem_cb2884 = window.JoshuaLedwellDesignSystem_cb2884 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular profile image with the signature terracotta ring.
 * Falls back to initials on a sand background when no src is given.
 */
function Avatar({
  src,
  alt = '',
  initials,
  size = 64,
  ring = true,
  style,
  ...props
}) {
  const dim = typeof size === 'number' ? `${size}px` : size;
  const common = {
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-full)',
    border: ring ? '3px solid var(--warm-terracotta)' : 'none',
    objectFit: 'cover',
    flexShrink: 0,
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt,
      style: common
    }, props));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...common,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--warm-sand)',
      color: 'var(--warm-terracotta)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--weight-bold)',
      fontSize: `calc(${dim} * 0.38)`
    }
  }, props), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small uppercase pill used as an overline / category tag.
 * Default style is a soft green-mint wash with forest text, matching
 * the brand's "PROCESS DIAGRAM" / "BADGE DESIGNS" overlines.
 */
function Badge({
  variant = 'mint',
  children,
  style,
  ...props
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-1)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-semibold)',
    letterSpacing: 'var(--tracking-badge)',
    textTransform: 'uppercase',
    padding: '6px 16px',
    borderRadius: 'var(--radius-full)',
    lineHeight: 1.2,
    whiteSpace: 'nowrap'
  };
  const variants = {
    mint: {
      backgroundColor: 'var(--tint-mint)',
      color: 'var(--green-forest)'
    },
    sand: {
      backgroundColor: 'var(--warm-sand)',
      color: 'var(--warm-terracotta)'
    },
    terracotta: {
      backgroundColor: 'var(--warm-terracotta)',
      color: 'var(--white)'
    },
    sage: {
      backgroundColor: 'var(--green-sage)',
      color: 'var(--white)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-default)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary interactive element of the Joshua Ledwell brand.
 * Filled terracotta for the main action, sage for secondary, plus
 * outline and ghost variants. Soft 12px corners, semibold label,
 * subtle shadow lift on hover.
 */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  style,
  ...props
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-semibold)',
    border: 'none',
    borderRadius: 'var(--radius-lg)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all var(--duration-base) var(--ease-standard)',
    textDecoration: 'none',
    lineHeight: 1
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-sm)',
      padding: '10px 18px'
    },
    md: {
      fontSize: 'var(--text-base)',
      padding: '14px 28px'
    },
    lg: {
      fontSize: 'var(--text-lg)',
      padding: '16px 32px'
    }
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--warm-terracotta)',
      color: 'var(--text-on-accent)'
    },
    secondary: {
      backgroundColor: 'var(--green-sage)',
      color: 'var(--text-on-accent)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--text-heading)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--warm-terracotta)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `jl-btn jl-btn--${variant}`,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — white surface with a soft border, 12px corners and a subtle
 * shadow. The brand's fundamental container. Set `interactive` for the
 * hover-lift treatment used on the home link cards.
 */
function Card({
  interactive = false,
  tint = 'white',
  padding = 'var(--space-8)',
  children,
  style,
  ...props
}) {
  const tints = {
    white: 'var(--surface-card)',
    sand: 'var(--surface-tint)',
    mint: 'var(--surface-green)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: interactive ? 'jl-card jl-card--interactive' : 'jl-card',
    style: {
      backgroundColor: tints[tint],
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      transition: 'all var(--duration-base) var(--ease-standard)',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Nametag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nametag — a rounded forest-green pill label, taken directly from the
 * brand Figma library (e.g. "Batch Edit"). White text, drop shadow,
 * used for in-context action/state labels.
 */
function Nametag({
  children,
  style,
  ...props
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      backgroundColor: 'var(--green-forest)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.7,
      padding: '0 16px',
      minHeight: 40,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, props), children);
}
Object.assign(__ds_scope, { Nametag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Nametag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Alert — inline feedback banner with a left accent bar and tinted
 * background. Tones map to the brand status palette (info/success/
 * warning/error). Uses a leading emoji-free dot marker; pass your own
 * Lucide icon via the `icon` prop for the real product look.
 */
function Alert({
  tone = 'info',
  title,
  icon,
  children,
  style,
  ...props
}) {
  const tones = {
    info: {
      color: 'var(--status-info)',
      bg: 'rgba(6,150,215,0.08)'
    },
    success: {
      color: 'var(--status-success)',
      bg: 'rgba(135,188,64,0.10)'
    },
    warning: {
      color: 'var(--status-warning)',
      bg: 'rgba(250,162,27,0.10)'
    },
    error: {
      color: 'var(--status-error)',
      bg: 'rgba(236,74,65,0.08)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      backgroundColor: t.bg,
      borderLeft: `3px solid ${t.color}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      marginTop: 2,
      color: t.color,
      flexShrink: 0
    }
  }, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: t.color,
      display: 'inline-block',
      marginTop: 6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--text-base)'
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field on a soft surface with a 1px border that turns
 * terracotta on focus. Optional label and helper text.
 */
function Input({
  label,
  helper,
  id,
  style,
  ...props
}) {
  const fieldId = id || (label ? `jl-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: "jl-input",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      backgroundColor: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, props)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/App.jsx
try { (() => {
/* global React, ReactDOM */
const {
  useState
} = React;
function App() {
  const [screen, setScreen] = useState('home');
  const {
    HomeScreen,
    WorkflowScreen,
    BadgeScreen,
    StyleGuideScreen
  } = window;
  const back = () => setScreen('home');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--bg-page)'
    }
  }, screen === 'home' && /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: setScreen
  }), screen === 'workflow' && /*#__PURE__*/React.createElement(WorkflowScreen, {
    onBack: back
  }), screen === 'badge' && /*#__PURE__*/React.createElement(BadgeScreen, {
    onBack: back
  }), screen === 'styleguide' && /*#__PURE__*/React.createElement(StyleGuideScreen, {
    onBack: back
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/BadgeScreen.jsx
try { (() => {
/* global React */
// Badge — conference name-badge designs (landscape + portrait).
function BadgeScreen({
  onBack
}) {
  const {
    Avatar
  } = window.JoshuaLedwellDesignSystem_cb2884;
  const {
    ScreenHeader,
    ScreenHero
  } = window;
  window.useLucide('badge');
  const QR = ({
    size = 96
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      background: 'var(--white)',
      border: '2px dashed var(--warm-coral)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "qr-code",
    style: {
      width: 48,
      height: 48,
      color: 'var(--warm-coral)'
    }
  }));
  const Landscape = () => /*#__PURE__*/React.createElement("div", {
    style: {
      width: 384,
      height: 288,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '2px solid var(--warm-terracotta)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--warm-terracotta)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--white)'
    }
  }, "CONFERENCE 2026"), /*#__PURE__*/React.createElement(Avatar, {
    initials: "JL",
    size: 48,
    ring: false,
    style: {
      borderRadius: 'var(--radius-md)',
      border: '2px solid var(--white)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--warm-sand)',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "Joshua Ledwell"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, "Principal Designer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--green-sage)'
    }
  }, "Tech Innovations Inc.")), /*#__PURE__*/React.createElement(QR, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-sage)',
      padding: '8px 24px',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--white)',
      letterSpacing: '.05em'
    }
  }, "MAY 15\u201317, 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--white)',
      letterSpacing: '.05em'
    }
  }, "SAN FRANCISCO, CA")));
  const Portrait = () => /*#__PURE__*/React.createElement("div", {
    style: {
      width: 288,
      height: 384,
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '2px solid var(--warm-terracotta)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--warm-terracotta)',
      padding: '12px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--white)',
      lineHeight: 1.2
    }
  }, "CONFERENCE"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-heading)',
      fontSize: 16,
      color: 'var(--white)'
    }
  }, "2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: -24,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "JL",
    size: 64
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--warm-sand)',
      padding: '12px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      marginTop: 4,
      marginBottom: 4
    }
  }, "Joshua Ledwell"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "Principal Designer"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--green-sage)',
      marginBottom: 12
    }
  }, "Tech Innovations Inc."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(QR, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-sage)',
      padding: '12px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--white)',
      letterSpacing: '.05em'
    }
  }, "MAY 15\u201317, 2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--white)',
      letterSpacing: '.05em'
    }
  }, "SAN FRANCISCO, CA")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Conference Badge",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(ScreenHero, {
    overline: "Badge Designs",
    title: "Conference Badges"
  }, "Professional badge layouts in landscape (4\u2033 \xD7 3\u2033) and portrait (3\u2033 \xD7 4\u2033) formats \u2014 with space for an attendee photo, QR code, and company."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 24
    }
  }, "Landscape Format (4\u2033 \xD7 3\u2033)"), /*#__PURE__*/React.createElement(Landscape, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 24
    }
  }, "Portrait Format (3\u2033 \xD7 4\u2033)"), /*#__PURE__*/React.createElement(Portrait, null)))));
}
Object.assign(window, {
  BadgeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/BadgeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/Header.jsx
try { (() => {
/* global React */
// Shared sticky header used on sub-screens.
const {
  useEffect
} = React;
function useLucide(dep) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [dep]);
}
function ScreenHeader({
  title,
  onBack
}) {
  useLucide(title);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-default)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)',
      height: 80,
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    "aria-label": "Back to home",
    className: "jl-iconbtn",
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-full)',
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 20,
      height: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24,
      width: 1,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 20,
      fontWeight: 600
    }
  }, title)));
}
function ScreenHero({
  overline,
  title,
  children
}) {
  const {
    Badge
  } = window.JoshuaLedwellDesignSystem_cb2884;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 768,
      margin: '0 auto',
      textAlign: 'center',
      marginBottom: 64,
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Badge, null, overline)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display)',
      marginBottom: 24
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      lineHeight: 1.8
    }
  }, children));
}
Object.assign(window, {
  ScreenHeader,
  ScreenHero,
  useLucide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/HomeScreen.jsx
try { (() => {
/* global React */
// Home — the personal brand link hub.
function HomeScreen({
  onNavigate
}) {
  const {
    Avatar
  } = window.JoshuaLedwellDesignSystem_cb2884;
  window.useLucide('home');
  const LinkCard = ({
    to,
    icon,
    iconBg,
    iconColor,
    title,
    body,
    cta,
    ctaColor
  }) => /*#__PURE__*/React.createElement("div", {
    className: "jl-card jl-card--interactive",
    onClick: () => onNavigate(to),
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--space-6)',
      textAlign: 'center',
      transition: 'all var(--duration-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-full)',
      background: iconBg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 24,
      height: 24,
      color: iconColor
    }
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "jl-cta",
    style: {
      marginTop: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: ctaColor,
      fontSize: 14,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, cta), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  })));
  const Social = ({
    icon,
    label
  }) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": label,
    className: "jl-iconbtn",
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-full)',
      background: 'var(--warm-sand)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--warm-terracotta)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 20,
      height: 20
    }
  }));
  const FooterLink = ({
    to,
    children
  }) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(to);
    },
    className: "jl-link",
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 672,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "JL",
    size: 128
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--text-display)',
      marginBottom: 16
    }
  }, "Joshua Ledwell"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 18,
      color: 'var(--warm-terracotta)',
      fontWeight: 600,
      marginBottom: 32
    }
  }, "Principal Designer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 560,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(LinkCard, {
    to: "workflow",
    icon: "briefcase",
    iconBg: "var(--warm-sand)",
    iconColor: "var(--warm-terracotta)",
    title: "Work",
    cta: "View",
    ctaColor: "var(--warm-terracotta)",
    body: "Seeking a principal designer role at an enterprise B2B firm building data-rich platforms for expert professionals."
  }), /*#__PURE__*/React.createElement(LinkCard, {
    to: "badge",
    icon: "music",
    iconBg: "var(--green-mint)",
    iconColor: "var(--green-forest)",
    title: "Hobbies",
    cta: "Explore",
    ctaColor: "var(--green-sage)",
    body: "Interests and passions \u2014 and the occasional conference name badge."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Social, {
    icon: "linkedin",
    label: "LinkedIn"
  }), /*#__PURE__*/React.createElement(Social, {
    icon: "instagram",
    label: "Instagram"
  }), /*#__PURE__*/React.createElement(Social, {
    icon: "bird",
    label: "Bluesky"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      display: 'flex',
      justifyContent: 'center',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(FooterLink, {
    to: "styleguide"
  }, "Style Guide"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-default)'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement(FooterLink, {
    to: "workflow"
  }, "Workflow"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-default)'
    }
  }, "\u2022"), /*#__PURE__*/React.createElement(FooterLink, {
    to: "badge"
  }, "Badge")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "Copyright \xA9 1998\u20132026 Joshua Ledwell")));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/StyleGuideScreen.jsx
try { (() => {
/* global React */
// Style Guide — live components built with the brand identity.
function StyleGuideScreen({
  onBack
}) {
  const DS = window.JoshuaLedwellDesignSystem_cb2884;
  const {
    Button,
    Badge,
    Card,
    Nametag,
    Input,
    Alert
  } = DS;
  const {
    ScreenHeader
  } = window;
  window.useLucide('styleguide');
  const attrs = [{
    title: 'Clean Design',
    body: 'Simplicity and clarity in every interaction.',
    color: 'var(--green-mint)',
    icon: 'sparkles',
    ic: 'var(--green-forest)'
  }, {
    title: 'Visionary',
    body: 'Forward-thinking, anticipating what comes next.',
    color: 'var(--green-sage)',
    icon: 'eye',
    ic: 'var(--white)'
  }, {
    title: 'Authoritative',
    body: 'Trusted expertise backed by deep knowledge.',
    color: 'var(--warm-terracotta)',
    icon: 'shield-check',
    ic: 'var(--white)'
  }];
  const Section = ({
    title,
    sub,
    children
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--text-muted)',
      marginBottom: 28
    }
  }, sub), children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Style Guide",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Brand Attributes",
    sub: "Cards that elevate on hover with smooth transitions."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, attrs.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.title,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-lg)',
      background: a.color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": a.icon,
    style: {
      width: 28,
      height: 28,
      color: a.ic
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: 8
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, a.body))))), /*#__PURE__*/React.createElement(Section, {
    title: "Buttons",
    sub: "One primary action per section; sage and supporting variants alongside."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "View work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Explore"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Download r\xE9sum\xE9"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get in touch"))), /*#__PURE__*/React.createElement(Section, {
    title: "Badges & Nametags",
    sub: "Uppercase overlines and forest-green action pills."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Process Diagram"), /*#__PURE__*/React.createElement(Badge, {
    variant: "terracotta"
  }, "New"), /*#__PURE__*/React.createElement(Badge, {
    variant: "sage"
  }, "Live"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Draft"), /*#__PURE__*/React.createElement(Nametag, null, "Batch Edit"))), /*#__PURE__*/React.createElement(Section, {
    title: "Forms",
    sub: "Readable fields with a terracotta focus ring."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    defaultValue: "Joshua Ledwell"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    helper: "We'll never share it."
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Feedback",
    sub: "Inline status banners keyed to the brand status palette."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Saved"
  }, "Your style guide changes are live."), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Heads up"
  }, "Double-check the conference date before printing badges.")))));
}
Object.assign(window, {
  StyleGuideScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/StyleGuideScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/personal-site/WorkflowScreen.jsx
try { (() => {
/* global React */
// Workflow — high-level data workflow diagram (process chart).
function WorkflowScreen({
  onBack
}) {
  const {
    ScreenHeader,
    ScreenHero
  } = window;
  window.useLucide('workflow');
  const Node = ({
    content,
    desc,
    icon,
    role
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--warm-sand)',
      border: '2px solid var(--warm-terracotta)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      height: 132,
      padding: 'var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      lineHeight: 1.6
    }
  }, content)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 16,
      height: 16,
      color: '#9ca3af'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user",
    style: {
      width: 16,
      height: 16,
      color: '#9ca3af'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, role))));
  const Arrow = ({
    dir
  }) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": dir,
    style: {
      width: 40,
      height: 40,
      color: 'var(--warm-coral)',
      opacity: 0.7,
      marginTop: 46,
      flexShrink: 0
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      paddingBottom: 80
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    title: "Workflow Chart",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement(ScreenHero, {
    overline: "Process Diagram",
    title: "Data Workflow"
  }, "A high-level view of how data moves from definition through to product \u2014 the kind of systems thinking I bring to data-rich B2B platforms."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      margin: '0 auto',
      padding: 40,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--off-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 40
    }
  }, "High-Level Data Workflow"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24,
      marginBottom: 24,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Node, {
    content: "Create, edit, and manage data definitions.",
    desc: "Library",
    icon: "book",
    role: "Account Admin"
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "arrow-right"
  }), /*#__PURE__*/React.createElement(Node, {
    content: "Organize data into project collections. Add metadata tags.",
    desc: "Library",
    icon: "book",
    role: "Account Admin"
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "arrow-right"
  }), /*#__PURE__*/React.createElement(Node, {
    content: "Link collections into projects. Manage permissions and applicability.",
    desc: "Project",
    icon: "building-2",
    role: "Project Admin"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-down",
    style: {
      width: 40,
      height: 40,
      color: 'var(--warm-coral)',
      opacity: 0.7
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'flex-start',
      gap: 24,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Node, {
    content: "Select data. Modify tags just-in-time to match product needs.",
    desc: "Product",
    icon: "database",
    role: "Product Admin"
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "arrow-left"
  }), /*#__PURE__*/React.createElement(Node, {
    content: "Use the data in product. Enter values.",
    desc: "Product",
    icon: "database",
    role: "Product User"
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "arrow-left"
  }), /*#__PURE__*/React.createElement(Node, {
    content: "View data in dashboards or via API. Track accuracy and completeness.",
    desc: "Product",
    icon: "database",
    role: "Project Owner"
  })))));
}
Object.assign(window, {
  WorkflowScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/personal-site/WorkflowScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Nametag = __ds_scope.Nametag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Input = __ds_scope.Input;

})();
