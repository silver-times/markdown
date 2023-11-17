import { Directive } from "vue";

const rules = [
  [/######\s?([^\n]+)/g, "<h6>$1</h6>"],
  [/#####\s?([^\n]+)/g, "<h5>$1</h5>"],
  [/####\s?([^\n]+)/g, "<h4>$1</h4>"],
  [/###\s?([^\n]+)/g, "<h3>$1</h3>"],
  [/##\s?([^\n]+)/g, "<h2>$1</h2>"],
  [/#\s?([^\n]+)/g, "<h1>$1</h1>"],
  [/\*\*([^\n]+)\*\*/g, "<strong>$1</strong>"],
  [/\*([^\n]+)\*/g, "<em>$1</em>"],
  [/_([^\n]+)_/gm, "<u>$1</u>"],
  [/^\s*[-*]\s+([^\n]+)/gm, "<ul>\n<li>$1</li>\n</ul>"],
  [/(?:!\[([^\]]+)\]\(([^)]+)\))/g, '<img alt="$1" src="$2" />'],
  [
    /\[video\s+([^\]]+)\]\(([^)]+)\)/g,
    '<video controls alt="$1" src="$2"></video>',
  ],
];

const markdownDirective: Directive = {
  beforeMount(el: HTMLElement) {
    let html = el.innerText.replace(/\n/g, "<br>");
    html = html.replace(/\n/g, "<br>");
    rules.forEach(([rule, template]) => {
      html = html.replace(rule, template as string);
    });
    el.innerHTML = html;
  },
};

export default markdownDirective;
