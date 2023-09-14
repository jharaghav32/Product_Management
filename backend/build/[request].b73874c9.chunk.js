"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[6750],{

/***/ 89838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_App)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 19 modules
var helper_plugin_esm = __webpack_require__(88376);
// EXTERNAL MODULE: ./node_modules/strapi-google-auth/admin/src/pluginId.js
var pluginId = __webpack_require__(15627);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/LinkButton/LinkButton.js
var LinkButton = __webpack_require__(32064);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Textarea/Textarea.js
var Textarea = __webpack_require__(61467);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/GridLayout.js
var GridLayout = __webpack_require__(19306);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Plus.js
var Plus = __webpack_require__(96315);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Write.js
var Write = __webpack_require__(42384);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Lock.js
var Lock = __webpack_require__(49358);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(52861);
;// CONCATENATED MODULE: ./node_modules/strapi-google-auth/admin/src/utils/axiosInstance.js


const instance = axios["default"].create({
  baseURL: ""
});
instance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${helper_plugin_esm/* auth */.I8.getToken()}`,
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      helper_plugin_esm/* auth */.I8.clearAppStorage();
      window.location.reload();
    }
    throw error;
  }
);
/* harmony default export */ const axiosInstance = (instance);

;// CONCATENATED MODULE: ./node_modules/strapi-google-auth/admin/src/pages/HomePage/index.js









const HomePage = () => {
  const [creds, setCreds] = (0,react.useState)({
    creds: {
      clientID: "",
      clientSecret: "",
      redirectURL: "",
      defaultScopes: ""
    }
  });
  const [saving, setSaving] = (0,react.useState)(false);
  const [editable, setEditable] = (0,react.useState)(true);
  function handleClientID(clientID) {
    setCreds({
      creds: {
        clientID,
        clientSecret: creds.creds.clientSecret,
        redirectURL: creds.creds.redirectURL
      }
    });
  }
  function handleClientSecret(clientSecret) {
    setCreds({
      creds: {
        clientID: creds.creds.clientID,
        clientSecret,
        redirectURL: creds.creds.redirectURL
      }
    });
  }
  function handleRedirectURL(redirectURL) {
    setCreds({
      creds: {
        clientID: creds.creds.clientID,
        clientSecret: creds.creds.clientSecret,
        redirectURL
      }
    });
  }
  function handleDefaultScopes(defaultScopes) {
    setCreds({
      creds: {
        clientID: creds.creds.clientID,
        clientSecret: creds.creds.clientSecret,
        redirectURL: creds.creds.redirectURL,
        defaultScopes
      }
    });
  }
  async function fetchData() {
    try {
      const { data } = await axiosInstance.get(`/${(pluginId_default())}/credentials`);
      setCreds({
        creds: {
          clientID: data.google_client_id ? data.google_client_id : "",
          clientSecret: data.google_client_secret ? data.google_client_secret : "",
          redirectURL: data.google_redirect_url ? data.google_redirect_url : "",
          defaultScopes: data.google_scopes ? data.google_scopes : ""
        }
      });
      if (data) {
        if (data.google_client_id && data.google_client_secret && data.google_redirect_url && data.google_scopes) {
          setEditable(false);
        } else {
          setEditable(true);
        }
      } else {
        setEditable(true);
      }
    } catch (error) {
      console.log(error);
      setCreds({
        creds: {
          clientID: "",
          clientSecret: "",
          redirectURL: "",
          defaultScopes: ""
        }
      });
      setEditable(true);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    setSaving(true);
    try {
      await axiosInstance.post(`/${(pluginId_default())}/credentials/add`, {
        google_client_id: creds.creds.clientID,
        google_client_secret: creds.creds.clientSecret,
        google_redirect_url: creds.creds.redirectURL,
        google_scopes: creds.creds.defaultScopes
      });
      await fetchData();
      setSaving(false);
    } catch (error) {
      setSaving(false);
      console.log(error);
    }
  }
  function handleEdit(e) {
    e.preventDefault();
    e.stopPropagation();
    setEditable(true);
  }
  (0,react.useEffect)(() => {
    fetchData();
  }, []);
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "primary100" }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* BaseHeaderLayout */.A,
    {
      navigationAction: /* @__PURE__ */ react.createElement(Link/* Link */.r, { isExternal: true, href: "https://schbang.com" }, "Schbang."),
      primaryAction: /* @__PURE__ */ react.createElement(LinkButton/* LinkButton */.Q, { startIcon: /* @__PURE__ */ react.createElement(Plus/* default */.Z, null), size: "L", variant: "default", href: "https://console.cloud.google.com/projectcreate?previousPage=%2Fcloud-resource-manager%3Fproject%3D%26folder%3D%26organizationId%3D" }, "Create Google Project"),
      title: "Google Authenticator",
      subtitle: "By Schbang.",
      as: "h2"
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, background: "neutral100" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "beta" }, "Add/Update your Google Project Details.")), /* @__PURE__ */ react.createElement(GridLayout/* GridLayout */.M, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, hasRadius: true, background: "neutral0", shadow: "tableShadow" }, /* @__PURE__ */ react.createElement(TextInput/* TextInput */.o, { required: true, disabled: !editable, placeholder: "This is a content placeholder", label: "Google Client ID", name: "content", hint: "Ends with apps.googleusercontent.com", onChange: (e) => handleClientID(e.target.value), value: creds.creds.clientID })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, hasRadius: true, background: "neutral0", shadow: "tableShadow" }, /* @__PURE__ */ react.createElement(TextInput/* TextInput */.o, { required: true, type: "password", disabled: !editable, placeholder: "This is a content placeholder", label: "Google Client Secret", name: "content", hint: "Available in your google project", onChange: (e) => handleClientSecret(e.target.value), value: creds.creds.clientSecret })), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, hasRadius: true, background: "neutral0", shadow: "tableShadow" }, /* @__PURE__ */ react.createElement(TextInput/* TextInput */.o, { required: true, disabled: !editable, placeholder: "This is a content placeholder", label: "Redirect URL", name: "content", hint: "Redirect URL mentioned in the Google Project", onChange: (e) => handleRedirectURL(e.target.value), value: creds.creds.redirectURL }))), /* @__PURE__ */ react.createElement(GridLayout/* GridLayout */.M, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 4, marginTop: 4, hasRadius: true, background: "neutral0", shadow: "tableShadow" }, /* @__PURE__ */ react.createElement(Textarea/* Textarea */.g, { required: true, disabled: !editable, placeholder: "", label: "Default Scopes", name: "content", hint: '{"scopes":["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"]}', onChange: (e) => handleDefaultScopes(e.target.value), value: creds.creds.defaultScopes }))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { marginTop: 4, justifyContent: "space-between" }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { disabled: editable, onClick: handleEdit, size: "L", endIcon: /* @__PURE__ */ react.createElement(Write/* default */.Z, null), variant: "secondary" }, "Edit"), /* @__PURE__ */ react.createElement(Button/* Button */.z, { loading: saving, onClick: handleSubmit, size: "L", endIcon: /* @__PURE__ */ react.createElement(Lock/* default */.Z, null), variant: "default" }, "Save Credentials"))));
};
/* harmony default export */ const pages_HomePage = ((0,react.memo)(HomePage));

;// CONCATENATED MODULE: ./node_modules/strapi-google-auth/admin/src/pages/App/index.js





const App = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(react_router/* Switch */.rs, null, /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { path: `/plugins/${(pluginId_default())}`, component: pages_HomePage, exact: true }), /* @__PURE__ */ react.createElement(react_router/* Route */.AW, { component: helper_plugin_esm.NotFound })));
};
/* harmony default export */ const pages_App = (App);


/***/ }),

/***/ 19306:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1565);

const a = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({ theme: t }) => t.spaces[4]};
`;



/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ p),
  T: () => (/* binding */ HeaderLayout_b)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(1565);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.W)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const HeaderLayout_b = (r) => {
  const t = (0,react.useRef)(null), [i, d] = (0,react.useState)(null), [a, h] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: i?.height }, ref: a, children: h && (0,jsx_runtime.jsx)(p, { ref: t, ...r }) }), !h && (0,jsx_runtime.jsx)(p, { ...r, sticky: !0, width: i?.width })] });
};
HeaderLayout_b.displayName = "HeaderLayout";
const C = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = react.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? (0,jsx_runtime.jsx)(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [r && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: r }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...s, children: a }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: t ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: t }) : void 0 })] }) }) : (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: r }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...s, children: a }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), t] }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});



/***/ }),

/***/ 32064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73727);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1565);
/* harmony import */ var _Button_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92577);
/* harmony import */ var _BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21817);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11047);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75515);








const R = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_BaseButton_BaseButton_js__WEBPACK_IMPORTED_MODULE_3__/* .BaseButtonWrapper */ .G))`
  &[aria-disabled='true'] {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    &:active {
      ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getDisabledStyle */ .sg}
    }
  }
  &:hover {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getHoverStyle */ .yP}
  }
  &:active {
    ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getActiveStyle */ .tB}
  }
  ${_Button_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVariantStyle */ .PD}
`, A = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ variant: l = "default", startIcon: o, endIcon: i, disabled: r = !1, children: m, size: t = "S", href: e, to: a, ...g }, s) => {
  const c = e ? "_blank" : void 0, h = e ? "noreferrer noopener" : void 0, d = t === "S" ? 2 : "10px", p = 4;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(R, { ref: s, "aria-disabled": r, size: t, variant: l, target: c, rel: h, to: r ? void 0 : a, href: r ? "#" : e, background: "buttonPrimary600", borderColor: "buttonPrimary600", hasRadius: !0, gap: 2, inline: !0, paddingBottom: d, paddingLeft: p, paddingRight: p, paddingTop: d, pointerEvents: r ? "none" : void 0, ...g, as: a && !r ? react_router_dom__WEBPACK_IMPORTED_MODULE_5__/* .NavLink */ .OL : "a", children: [o && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": !0, children: o }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_7__/* .Typography */ .Z, { variant: t === "S" ? "pi" : void 0, fontWeight: "bold", textColor: "buttonNeutral0", children: m }), i && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__/* .Flex */ .k, { "aria-hidden": !0, children: i })] });
});



/***/ }),

/***/ 42384:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ v)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const l = (e) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    fillRule: "evenodd",
    d: "M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",
    clipRule: "evenodd"
  }
) }), v = l;



/***/ })

}]);