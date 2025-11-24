import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{B as s}from"./BadgeDot-ZRrh8lZQ.js";import{a}from"./color.props-BsWCD9dY.js";import{s as v}from"./shape.props-BOtns5vy.js";import{b as k}from"./Badge.props-B5M-QeId.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";const E={title:"Data Display/BadgeDot",component:s,parameters:{docs:{description:{component:"A badge dor component for displaying status or counts."}},layout:"centered"},tags:["autodocs"],argTypes:{color:{options:["Not Defined",...Object.keys(a)],mapping:{"Not Defined":void 0},control:{type:"select"},description:"Color of the badge",table:{type:{summary:"string "},defaultValue:{summary:"earth"}}},shape:{options:["Not Defined",...Object.keys(v.shape)],mapping:{"Not Defined":void 0},control:{type:"select"},description:"Shape of the badge",table:{type:{summary:"string "},defaultValue:{summary:"circle"}}},size:{options:["Not Defined",...Object.keys(k.size)],mapping:{"Not Defined":void 0},control:{type:"select"},description:"Size of the badge",table:{type:{summary:"string "},defaultValue:{summary:"medium"}}}}},r={args:{}},t={parameters:{docs:{source:{code:Object.keys(k.size).map(e=>`<BadgeDot size="${e}"></BadgeDot>`).join(`
`),language:"tsx"}}},render:()=>o.jsx("div",{className:"flex items-center gap-4",children:["tiny","small","medium","large","huge"].map(e=>o.jsx(s,{size:e},e))})},n={parameters:{docs:{source:{code:Object.keys(a).map(e=>`<BadgeDot color="${e}"></BadgeDot>`).join(`
`),language:"tsx"}}},render:()=>o.jsx("div",{className:"flex items-center gap-4",children:Object.keys(a).map(e=>o.jsx(s,{color:e},e))})},c={parameters:{docs:{source:{code:`
<BadgeDot size="large" shape="circle"></BadgeDot>
<BadgeDot size="large" shape="rounded"></BadgeDot>`,language:"tsx"}}},render:()=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(s,{size:"large",shape:"circle"}),o.jsx(s,{size:"large",shape:"rounded"})]})},d={parameters:{docs:{source:{code:Object.keys(a).map(e=>`<BadgeDot color="${e}">2</BadgeDot>`).join(`
`)+`
`+Object.keys(a).map(e=>`<BadgeDot shape="rounded" color="${e}">2</BadgeDot>`).join(`
`),language:"tsx"}}},render:()=>o.jsxs("div",{className:"flex flex-col gap-6",children:[o.jsx("div",{className:"flex items-center gap-6",children:Object.keys(a).map(e=>o.jsx(s,{color:e,children:"2"},e))}),o.jsx("div",{className:"flex items-center gap-6",children:Object.keys(a).map(e=>o.jsx(s,{shape:"rounded",color:e,children:"2"},e))})]})};var l,i,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: Object.keys(badgeSizeProps.size).map(size => \`<BadgeDot size="\${size}"></BadgeDot>\`).join('\\n'),
        language: 'tsx'
      }
    }
  },
  render: () => <div className={\`flex items-center gap-4\`}>
      {['tiny', 'small', 'medium', 'large', 'huge'].map(size => <BadgeDot key={size} size={size as sizeNameProps}></BadgeDot>)}
    </div>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var D,y,f;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: Object.keys(colorPalettes).map(color => \`<BadgeDot color="\${color}"></BadgeDot>\`).join('\\n'),
        language: 'tsx'
      }
    }
  },
  render: () => <div className={\`flex items-center gap-4\`}>
      {Object.keys(colorPalettes).map(color => <BadgeDot key={color} color={color as keyof typeof colorPalettes}></BadgeDot>)}
    </div>
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,B,x;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<BadgeDot size="large" shape="circle"></BadgeDot>
<BadgeDot size="large" shape="rounded"></BadgeDot>\`,
        language: 'tsx'
      }
    }
  },
  render: () => <div className={\`flex items-center gap-4\`}>
      <BadgeDot size="large" shape="circle"></BadgeDot>
      <BadgeDot size="large" shape="rounded"></BadgeDot>
    </div>
}`,...(x=(B=c.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var h,b,z;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: Object.keys(colorPalettes).map(color => \`<BadgeDot color="\${color}">2</BadgeDot>\`).join('\\n') + '\\n' + Object.keys(colorPalettes).map(color => \`<BadgeDot shape="rounded" color="\${color}">2</BadgeDot>\`).join('\\n'),
        language: 'tsx'
      }
    }
  },
  render: () => <div className={\`flex flex-col gap-6\`}>
      <div className={\`flex items-center gap-6\`}>
        {Object.keys(colorPalettes).map(color => <BadgeDot key={color} color={color as keyof typeof colorPalettes}>
            2
          </BadgeDot>)}
      </div>
      <div className={\`flex items-center gap-6\`}>
        {Object.keys(colorPalettes).map(color => <BadgeDot shape="rounded" key={color} color={color as keyof typeof colorPalettes}>
            2
          </BadgeDot>)}
      </div>
    </div>
}`,...(z=(b=d.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const W=["Default","Size","Color","Shape","DotWithContent"];export{n as Color,r as Default,d as DotWithContent,c as Shape,t as Size,W as __namedExportsOrder,E as default};
