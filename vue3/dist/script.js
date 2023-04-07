const { openBlock, createElementBlock, createElementVNode, toDisplayString, normalizeStyle, normalizeClass, createTextVNode, withDirectives, vModelCheckbox, Fragment, renderList, createCommentVNode, vModelText } = Vue;

var alldata= {
shorthand: "text-decoration",
property:[
  {name: "text-decoration-line",type:"line",initial_value:"none",
      values:["none","underline","overline","line-through"]},
  {name: "text-decoration-color",type:"color",initial_value: "currentcolor",
      values:["currentcolor"]},
  {name: "text-decoration-style",type:"style",initial_value: "solid",
      values:["solid","dashed","dotted","double","wavy"]}
],
notes: "文字畫線裝飾"
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
const _hoisted_4 = { class: "boxcontent container" };
const _hoisted_5 = { class: "view" };
const _hoisted_6 = /*#__PURE__*/createTextVNode();
const _hoisted_7 = { class: "control container" };
const _hoisted_8 = { class: "status" };
const _hoisted_9 = { class: "notify" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "hiddenControl" };
const _hoisted_13 = /*#__PURE__*/createTextVNode("編輯: ");
const _hoisted_14 = { class: "hiddenControl" };
const _hoisted_15 = /*#__PURE__*/createTextVNode("原始碼: ");
const _hoisted_16 = /*#__PURE__*/createElementVNode("hr", null, null, -1 /* HOISTED */);
const _hoisted_17 = { class: "settings" };
const _hoisted_18 = { class: "row" };
const _hoisted_19 = { class: "col-sm-3" };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = { class: "col-sm-9" };
const _hoisted_22 = {
  key: 0,
  class: "itemp"
};
const _hoisted_23 = { class: "colorgroup" };
const _hoisted_24 = ["for"];
const _hoisted_25 = ["id", "name"];
const _hoisted_26 = {
  key: 1,
  class: "itemp"
};
const _hoisted_27 = ["onClick"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("h1", _hoisted_2, toDisplayString($data.cssSD.shorthand +' / '+ $data.cssSD.notes), 1 /* TEXT */),
    createElementVNode("div", _hoisted_3, [
      createElementVNode("div", _hoisted_4, [
        createElementVNode("div", _hoisted_5, [
          createElementVNode("div", {
            class: "text-model",
            style: normalizeStyle($options.getStyle)
          }, toDisplayString($data.cssSD.shorthand +' / '+ $data.cssSD.notes), 5 /* TEXT, STYLE */)
        ]),
        createElementVNode("pre", {
          class: normalizeClass(["code", {hideMode: !$data.showcode}])
        }, [
          _hoisted_6,
          createElementVNode("code", null, toDisplayString($options.getStyle), 1 /* TEXT */)
        ], 2 /* CLASS */)
      ]),
      createElementVNode("div", _hoisted_7, [
        createElementVNode("div", _hoisted_8, [
          createElementVNode("h5", _hoisted_9, [
            createTextVNode("狀態: " + toDisplayString($data.status), 1 /* TEXT */),
            (!$data.editing)
              ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString($options.statusNow('(預覽)')), 1 /* TEXT */))
              : (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString($options.statusNow('修改CSS樣式')), 1 /* TEXT */))
          ]),
          createElementVNode("label", _hoisted_12, [
            _hoisted_13,
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.editing) = $event)),
              type: "checkbox"
            }, null, 512 /* NEED_PATCH */), [
              [vModelCheckbox, $data.editing]
            ])
          ]),
          createElementVNode("label", _hoisted_14, [
            _hoisted_15,
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.showcode) = $event)),
              type: "checkbox"
            }, null, 512 /* NEED_PATCH */), [
              [vModelCheckbox, $data.showcode]
            ])
          ])
        ]),
        _hoisted_16,
        createElementVNode("div", {
          class: normalizeClass(["mode", {hideMode: !$data.editing}])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.cssSD.property, (item, index) => {
            return (openBlock(), createElementBlock("div", _hoisted_17, [
              createElementVNode("div", _hoisted_18, [
                createElementVNode("div", _hoisted_19, [
                  (!item.type == '' )
                    ? (openBlock(), createElementBlock("span", _hoisted_20, toDisplayString(item.name +' :'), 1 /* TEXT */))
                    : createCommentVNode("v-if", true)
                ]),
                createElementVNode("div", _hoisted_21, [
                  (item.type == 'color' || !item.type == 'undefined' || !item.type == 'null'  )
                    ? (openBlock(), createElementBlock("div", _hoisted_22, [
                        createElementVNode("div", _hoisted_23, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(item.values, (d) => {
                            return (openBlock(), createElementBlock("label", {
                              for: item.type
                            }, [
                              createElementVNode("span", {
                                onInput: _cache[2] || (_cache[2] = (...args) => (_ctx.colorVal && _ctx.colorVal(...args)))
                              }, toDisplayString($data.defaultColor), 33 /* TEXT, HYDRATE_EVENTS */)
                            ], 8 /* PROPS */, _hoisted_24))
                          }), 256 /* UNKEYED_FRAGMENT */)),
                          withDirectives(createElementVNode("input", {
                            type: "color",
                            id: item.type,
                            name: item.type,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($data.defaultColor) = $event))
                          }, null, 8 /* PROPS */, _hoisted_25), [
                            [vModelText, $data.defaultColor]
                          ])
                        ])
                      ]))
                    : (openBlock(), createElementBlock("div", _hoisted_26, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(item.values, (d) => {
                          return (openBlock(), createElementBlock("button", {
                            class: normalizeClass({active: item.initial_value==d}),
                            onClick: $event => (item.initial_value=d)
                          }, toDisplayString(d), 11 /* TEXT, CLASS, PROPS */, _hoisted_27))
                        }), 256 /* UNKEYED_FRAGMENT */))
                      ]))
                ])
              ])
            ]))
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 2 /* CLASS */)
      ])
    ])
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

var css_248z = "* {\n  transition: 0.5s;\n}\nhtml, body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  background-color: #888;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\na, button {\n  color: rgba(31, 87, 62, 0.8);\n}\nbutton {\n  background: none;\n  border: solid 1px;\n  border-radius: 2em;\n  font: inherit;\n  padding: 0.75em 2em;\n  margin: 0.1em 0.2em;\n}\n.demo {\n  background-color: #eee;\n  border-radius: 25px;\n}\n.demo .container {\n  margin: auto;\n  padding: 10px 20px;\n}\n.demo .boxcontent {\n  border: 5px solid #aaf;\n  border-radius: 25px;\n  box-shadow: inset 0 0 10px rgba(0, 0, 170, 0.6);\n}\n.demo .boxcontent .code {\n  border: 1px solid #2c3e50;\n}\n.demo .boxcontent .view {\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.demo .boxcontent .view .text-model {\n  transform: scale(2);\n}\n.demo .control .status {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.demo .control .settings .itemp {\n  background-color: #ddddff;\n  margin: 5px;\n  padding: 5px;\n  vertical-align: middle;\n}\n.demo .control .itemp .colorgroup {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 5px;\n}\n.demo .control .itemp .colorgroup span {\n  display: inline-block;\n  margin-bottom: 5px;\n}\n.demo .code, .demo .mode {\n  display: block;\n  overflow: hidden;\n  height: auto;\n}\n.demo .active {\n  background-color: #ffddaa;\n}\n.demo .hideMode {\n  opacity: 0;\n  overflow: hidden;\n  height: 0;\n}\n.vc-chrome {\n  position: absolute;\n  top: 35px;\n  right: 0;\n  z-index: 9;\n}\n.current-color {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background-color: #000;\n  cursor: pointer;\n}";
styleInject(css_248z);

script.render = render;
script.__file = "tmp/codepen/vuejs/src/pen.vue";

export { script as default };