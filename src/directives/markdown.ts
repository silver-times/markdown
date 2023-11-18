import { Directive } from "vue";

const rules = [
  [/######\s?([^\n]+)/g, "<h6>$1</h6>\n"],
  [/#####\s?([^\n]+)/g, "<h5>$1</h5>\n"],
  [/####\s?([^\n]+)/g, "<h4>$1</h4>\n"],
  [/###\s?([^\n]+)/g, "<h3>$1</h3>\n"],
  [/##\s?([^\n]+)/g, "<h2>$1</h2>\n"],
  [/#\s?([^\n]+)/g, "<h1>$1</h1>\n"],
  [/\*\*([^\n]+)\*\*/g, "<strong>$1</strong>"],
  [/\*([^\n]+)\*/g, "<em>$1</em>"],
  [/_([^\n]+)_/gm, "<u>$1</u>\n"],
];

const markdownDirective: Directive = {
  beforeMount(el: HTMLElement) {
    let html = el.innerText;
    rules.forEach(([rule, template]) => {
      html = html.replace(rule, template as string);
    });
    el.innerHTML = html;
  },
};

export default markdownDirective;
