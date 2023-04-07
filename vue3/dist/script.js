const { openBlock, createElementBlock, createElementVNode, toDisplayString, createCommentVNode, normalizeStyle, createTextVNode, withDirectives, vModelCheckbox, normalizeClass, Fragment, renderList } = Vue;

var alldata = {
  shorthand: "text-decoration",
  property: [
    {
      name: "text-decoration-line",
      type: "line",
      initial_value: "none",
      values: ["none", "underline", "overline", "line-through"]
    },
    {
      name: "text-decoration-color",
      type: "color",
      initial_value: "currentcolor",
      values: ["currentcolor"]
    },
    {
      name: "text-decoration-style",
      type: "style",
      initial_value: "solid",
      values: ["solid", "dashed", "dotted", "double", "wavy"]
    }
  ],
  notes: ""
};

var script = {
  data() {
    return {
      status: "",
      editing: true,
      showcode: true,
      cssSD: alldata,
      defaultColor: 'currentcolor'
    }
  },
  methods: {
    doSomething() {
      alert("Hello!");
    },
    statusNow: function (notify) {
      this.status = notify;
    }
  },
  computed: {
    getStyle() {
      return {
        "text-decoration-line": this.cssSD.property[0].initial_value,
        // "text-decoration-color": this.cssSD.property[1].initial_value,
        "text-decoration-color": this.defaultColor,
        "text-decoration-style": this.cssSD.property[2].initial_value
      };
    }
  }
};

const _hoisted_1 = { id: "app" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "demo" };
const _hoisted_4 = { class: "contentbox container" };
const _hoisted_5 = { class: "view" };
const _hoisted_6 = { class: "code" };
const _hoisted_7 = { class: "control container" };
const _hoisted_8 = { class: "notify" };
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "hiddenControl" };
const _hoisted_12 = /*#__PURE__*/createTextVNode(" 編輯: ");
const _hoisted_13 = /*#__PURE__*/createElementVNode("hr", null, null, -1 /* HOISTED */);
const _hoisted_14 = { class: "settings" };
const _hoisted_15 = { class: "row" };
const _hoisted_16 = { class: "col-sm-3" };
const _hoisted_17 = { class: "col-sm-9" };
const _hoisted_18 = { key: 0 };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = { key: 1 };
const _hoisted_21 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("h1", _hoisted_2, toDisplayString($data.cssSD.shorthand), 1 /* TEXT */),
    createCommentVNode("     <p>{{ editing }}</p> "),
    createElementVNode("div", _hoisted_3, [
      createElementVNode("div", _hoisted_4, [
        createElementVNode("div", _hoisted_5, [
          createElementVNode("div", {
            class: "div",
            style: normalizeStyle($options.getStyle)
          }, "一行文字段落", 4 /* STYLE */)
        ]),
        createElementVNode("pre", _hoisted_6, [
          createElementVNode("code", null, toDisplayString($options.getStyle), 1 /* TEXT */)
        ])
      ]),
      createElementVNode("div", _hoisted_7, [
        createElementVNode("h5", _hoisted_8, [
          createTextVNode("狀態: " + toDisplayString($data.status), 1 /* TEXT */),
          (!$data.editing)
            ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString($options.statusNow('(預設)')), 1 /* TEXT */))
            : (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString($options.statusNow('修改CSS樣式')), 1 /* TEXT */))
        ]),
        createElementVNode("label", _hoisted_11, [
          _hoisted_12,
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.editing) = $event)),
            type: "checkbox"
          }, null, 512 /* NEED_PATCH */), [
            [vModelCheckbox, $data.editing]
          ])
        ]),
        _hoisted_13,
        createElementVNode("div", {
          class: normalizeClass(["mode", {hideMode: !$data.editing}])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.cssSD.property, (item, index) => {
            return (openBlock(), createElementBlock("div", _hoisted_14, [
              createElementVNode("div", _hoisted_15, [
                createElementVNode("div", _hoisted_16, [
                  createElementVNode("label", null, toDisplayString(item.name) + " :", 1 /* TEXT */)
                ]),
                createElementVNode("div", _hoisted_17, [
                  (item.type == 'line')
                    ? (openBlock(), createElementBlock("div", _hoisted_18, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.values, (d) => {
                          return (openBlock(), createElementBlock("button", {
                            class: normalizeClass({active: item.initial_value==d}),
                            onClick: $event => (item.initial_value=d)
                          }, toDisplayString(d), 11 /* TEXT, CLASS, PROPS */, _hoisted_19))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ]))
                    : createCommentVNode("v-if", true),
                  createCommentVNode("             <div v-if=\"item.type == 'color'\">\n                <label :for=\"item.type\" v-for=\"d in item.values\">\n                  <input type=\"color\" :id=\"item.type\" v-model=\"d\"/>{{ d }}\n                  <input type=\"text\" size=\"10\" placeholder=\"輸入color\" v-model=\"d\" :class=\"{active: item.initial_value==d}\"/>\n                </label>\n              </div> "),
                  (item.type == 'style')
                    ? (openBlock(), createElementBlock("div", _hoisted_20, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.values, (d) => {
                          return (openBlock(), createElementBlock("button", {
                            class: normalizeClass({active: item.initial_value==d}),
                            onClick: $event => (item.initial_value=d)
                          }, toDisplayString(d), 11 /* TEXT, CLASS, PROPS */, _hoisted_21))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ]))
                    : createCommentVNode("v-if", true)
                ])
              ])
            ]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ])
    ]),
    createCommentVNode("     <p>\n      Learn more with the\n      <a\n        href=\"https://vuejs.org/\"\n        target=\"_blank\"\n        rel=\"noopener\"\n      >Vue Docs &amp; Resources</a>.\n    </p> "),
    createCommentVNode("     <button @click=\"doSomething\">Say he555llo.</button> ")
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "* {\n  transition: 0.5s;\n}\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\na, button {\n  color: rgba(31, 87, 62, 0.8);\n}\nbutton {\n  background: none;\n  border: solid 1px;\n  border-radius: 2em;\n  font: inherit;\n  padding: 0.75em 2em;\n  margin: 0.1em 0.2em;\n}\n.demo {\n  background-color: #eee;\n  border-radius: 25px;\n}\n.demo .container {\n  margin: auto;\n  padding: 10px 20px;\n}\n.demo .boxcontent {\n  border: 5px solid #aaf;\n  border-radius: 25px;\n  box-shadow: inset 0 0 10px rgba(0, 0, 170, 0.6);\n}\n.demo .boxcontent .code {\n  border: 1px solid #2c3e50;\n}\n.demo .boxcontent .view {\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.demo .boxcontent .view .text-model {\n  transform: scale(2);\n}\n.demo .control .status {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.demo .control .settings .itemp {\n  background-color: #ddddff;\n  margin: 5px;\n  padding: 5px;\n  vertical-align: middle;\n}\n.demo .control .itemp span {\n  display: inline-block;\n  margin: 0 10px;\n  vertical-align: top;\n}\n.demo .code, .demo .mode {\n  display: block;\n  overflow: hidden;\n  height: auto;\n}\n.demo .active {\n  background-color: #ffddaa;\n}\n.demo .hideMode {\n  opacity: 0;\n  overflow: hidden;\n  height: 0;\n}\n.vc-chrome {\n  position: absolute;\n  top: 35px;\n  right: 0;\n  z-index: 9;\n}\n.current-color {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-color: #000;\n  cursor: pointer;\n}";
styleInject(css_248z);

script.render = render;
script.__file = "tmp/codepen/vuejs/src/pen.vue";

export { script as default };