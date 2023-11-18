import { Directive } from "vue";

interface Rule {
  pattern: RegExp;
  template: (...matches: string[]) => string;
}

const rules: Rule[] = [
  {
    pattern: /######\s?([^\n]+)/g,
    template: (_, content) => `<h6>${content}</h6>\n`,
  },
  {
    pattern: /#####\s?([^\n]+)/g,
    template: (_, content) => `<h5>${content}</h5>\n`,
  },
  {
    pattern: /####\s?([^\n]+)/g,
    template: (_, content) => `<h4>${content}</h4>\n`,
  },
  {
    pattern: /###\s?([^\n]+)/g,
    template: (_, content) => `<h3>${content}</h3>\n`,
  },
  {
    pattern: /##\s?([^\n]+)/g,
    template: (_, content) => `<h2>${content}</h2>\n`,
  },
  {
    pattern: /#\s?([^\n]+)/g,
    template: (_, content) => `<h1>${content}</h1>\n`,
  },
  {
    pattern: /(?:!\[([^\]]+)\]\(([^)]+)\))/g,
    template: (_, alt, src) => `<img alt="${alt}" src="${src}" />`,
  },
  {
    pattern: /\[video\s+([^\]]+)\]\(([^)]+)\)/g,
    template: (_, alt, src) =>
      `<video controls alt="${alt}" src="${src}"></video>`,
  },
  {
    pattern: /\[([^\]]+)\]\(([^)]+)\)/g,
    template: (_, text, href) => `<a href="${href}">${text}</a>`,
  },
  {
    pattern: /\[table\]([\s\S]*?)\[\/table\]/g,
    template: (_, content) => `<table>${content}</table>`,
  },
  {
    pattern: /\[row\]([\s\S]*?)\[\/row\]/g,
    template: (_, content) => `<tr>${content}</tr>`,
  },
  {
    pattern: /\[col-left\]([^\]]+)\[\/col-left\]/g,
    template: (_, content) =>
      `<td style="display: inline-block; margin-right: 10px;">${content}</td>`,
  },
  {
    pattern: /\[col-right\]([^\]]+)\[\/col-right\]/g,
    template: (_, content) =>
      `<td style="display: inline-block;">${content}</td>`,
  },
  {
    pattern: /\*\*([^*]+)\*\*/gm,
    template: (_, content) => `<strong>${content}</strong>`,
  },
  { pattern: /\*([^\n]+)\*/g, template: (_, content) => `<em>${content}</em>` },
  { pattern: /_([^\n]+)_/gm, template: (_, content) => `<u>${content}</u>\n` },
  {
    pattern: /:heart:/g,
    template: () => '<span class="heart">&#10084;</span>',
  },
  {
    pattern: /^\s*-\s+([^\n]+)/gm,
    template: (_, content) => `<li>${content}</li>`,
  },
];

const markdownDirective: Directive = {
  beforeMount(el: HTMLElement) {
    let html = el.innerText;
    rules.forEach(({ pattern, template }) => {
      html = html.replace(pattern, template);
    });
    el.innerHTML = html;
  },
};

export default markdownDirective;
