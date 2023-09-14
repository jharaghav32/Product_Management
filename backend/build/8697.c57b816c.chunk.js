"use strict";
(self["webpackChunkmy_project"] = self["webpackChunkmy_project"] || []).push([[8697],{

/***/ 18697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ReviewWorkflowsStageEE: () => (/* reexport */ ReviewWorkflowsStageEE)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 19 modules
var helper_plugin_esm = __webpack_require__(88376);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
var constants = __webpack_require__(53616);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/colors.js
var colors = __webpack_require__(13037);
;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/ListView/ReviewWorkflowsColumn/ReviewWorkflowsStageEE.js






function ReviewWorkflowsStageEE({ color, name }) {
  const { themeColorName } = (0,colors/* getStageColorByHex */.k)(color);
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { alignItems: "center", gap: 2, maxWidth: (0,helper_plugin_esm/* pxToRem */.Q1)(300) }, /* @__PURE__ */ react.createElement(
    Box/* Box */.x,
    {
      height: 2,
      background: color,
      borderColor: themeColorName === "neutral0" ? "neutral150" : "transparent",
      hasRadius: true,
      shrink: 0,
      width: 2
    }
  ), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { fontWeight: "regular", textColor: "neutral700", ellipsis: true }, name));
}
ReviewWorkflowsStageEE.defaultProps = {
  color: constants/* STAGE_COLOR_DEFAULT */.FT
};
ReviewWorkflowsStageEE.propTypes = {
  color: (prop_types_default()).string,
  name: (prop_types_default()).string.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/content-manager/pages/ListView/ReviewWorkflowsColumn/index.js



/***/ })

}]);