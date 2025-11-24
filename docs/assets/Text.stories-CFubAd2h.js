import{w as n}from"./index-CQguwI8J.js";import{e as t}from"./index-nRB-OUHH.js";import{T as re,a as s}from"./Text-Dl9vtUGn.js";import{c as de}from"./color.props-BsWCD9dY.js";import{f as pe}from"./font.props-DiLDwReC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./jsx-runtime-Yb_4y5hn.js";import"./index-BwDkhjyp.js";import"./height.props-DUajn6Rl.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./border.props-MxdHQtLV.js";const Ce={title:"Typography/Text",component:re,parameters:{docs:{description:{component:"Fundamental typography component."}},controls:{exclude:["testId","className","mx","my","px","py","w","h","border","pt","pb","pl","pr","m","p","min-w","min-h","max-w","max-h","mt","mb","ml","mr"]}},tags:["autodocs"],argTypes:{as:{control:{type:"select"},options:Object.values(s),table:{type:{summary:"The HTML tag to render the text as"},defaultValue:{summary:"div"}}},type:{control:{type:"select"},options:Object.keys(pe),table:{type:{summary:"The type of text to render"},defaultValue:{summary:"body"}}},children:{control:{type:"text"},table:{type:{summary:"The text to render"},defaultValue:{summary:""}}},align:{control:{type:"select",options:["left","center","right"]},table:{type:{summary:"The alignment of the text"},defaultValue:{summary:"left"}}},color:{control:{type:"select"},options:de,table:{type:{summary:"The color of the text"},defaultValue:{summary:"deep-space"}}}}},i={args:{children:"Hello, world"},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument()}},c={args:{children:"This is an XL Heading",as:s.h1,type:"heading-xl",color:"deep-space"},parameters:{docs:{description:{story:"KB Article Titles"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("h1"),await t(e).toHaveClass("text-3xl text-deep-space font-semibold leading-10")}},r={args:{children:"This is a Large Heading",as:s.h1,type:"heading-large",color:"deep-space"},parameters:{docs:{description:{story:"Empty State Headings"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("h1"),await t(e).toHaveClass("text-2xl text-deep-space font-semibold leading-8")}},d={args:{children:"This is a Heading",as:s.h1,type:"heading",color:"deep-space"},parameters:{docs:{description:{story:"Section Titles (Top Nav Bar),Page Titles, Modal Titles"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("h1"),await t(e).toHaveClass("text-xl text-deep-space font-semibold leading-7")}},p={args:{children:"This is a Subheading",as:s.h2,type:"subheading",color:"deep-space"},parameters:{docs:{description:{story:"Subheadings, Notification/Alert headings"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("h2"),await t(e).toHaveClass("text-lg text-deep-space leading-6")}},l={args:{children:"This is a Body",as:s.div,type:"body",color:"deep-space"},parameters:{docs:{description:{story:"Default font style for components, body copy,form field labels"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("div"),await t(e).toHaveClass("text-sm text-deep-space leading-5")}},m={args:{children:"This is a Body Large. Lorem ipsum dolor sit amet.",as:s.div,type:"body-large",color:"deep-space"},parameters:{docs:{description:{story:"Empty State paragraph"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("div"),await t(e).toHaveClass("text-lg text-deep-space leading-6")}},u={args:{children:"This is a Body Strong. Lorem ipsum dolor sit amet.",as:s.div,type:"body-strong",color:"deep-space"},parameters:{docs:{description:{story:"Bold type in a paragraph or body copy,large buttons"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("div"),await t(e).toHaveClass("text-base text-deep-space font-medium leading-5")}},x={args:{children:"This is a Body Small. Lorem ipsum dolor sit amet.",as:s.div,type:"body-small",color:"deep-space"},parameters:{docs:{description:{story:"Micro-copy, tooltips"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("div"),await t(e).toHaveClass("text-xs text-deep-space leading-4")}},y={args:{children:"This is a Body Small Strong. Lorem ipsum dolor sit amet.",as:s.div,type:"body-small-strong",color:"deep-space"},parameters:{docs:{description:{story:"Bold micro-copy, badges, table headers, tabs, small buttons"}}},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("div"),await t(e).toHaveClass("text-xs text-deep-space font-semibold leading-4")}},g={args:{children:"This is a Small Caps",as:s.div,type:"small-caps",color:"deep-space"},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("div"),await t(e).toHaveClass("text-xxs leading-3 tracking-wide uppercase font-semibold")}},v={args:{children:'console.log("Hello, world")',as:s.code,type:"code",color:"deep-space"},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("code"),await t(e).toHaveClass("text-sm text-deep-space leading-3")}},h={args:{children:'console.log("Hello, world")',as:s.code,type:"code-small",color:"deep-space"},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toContainHTML("code"),await t(e).toHaveClass("text-xs text-deep-space leading-3")}},T={args:{children:"Lorem ipsum dolor sit amet.cillum labore in adipisicing exercitation exercitation deserunt velit ad commodo adipisicing enim sunt adipisicing reprehenderit dolor sit Lorem excepteur anim reprehenderit dolor labore mollit in adipisicing irure in proident deserunt duis esse quis minim aute nostrud officia amet ipsum aute consequat sint veniam ad consectetur minim aute nostrud id ut et exercitation fugiat aliqua id laboris et velit sunt ipsum anim laborum sint ad tempor laboris do est proident cupidatat amet proident ut esse dolore fugiat in eu aute nulla eu occaecat quis dolor officia esse anim duis sunt ullamco do nostrud incididunt adipisicing irure incididunt culpa ea ipsum commodo adipisicing ea nulla tempor mollit id duis proident mollit nostrud excepteur sit quis elit officia fugiat ad dolor voluptate dolor aliqua est id enim cupidatat nisi officia culpa nulla officia proident aliqua officia deserunt est ea exercitation deserunt in excepteur do fugiat dolor et proident do aliquip occaecat ut ipsum commodo aliqua voluptate sunt Lorem et quis duis velit qui Lorem ea aliquip cupidatat eu est Lorem dolor occaecat qui ex nostrud consectetur velit ex culpa irure laborum aliqua voluptate occaecat ad fugiat velit nulla sit qui exercitation reprehenderit occaecat adipisicing adipisicing ad proident culpa veniam proident sint ex exercitation",as:s.div,className:"w-[500px] truncate"},play:async({canvasElement:a})=>{const e=await n(a).getByTestId("text-component");await t(e).toBeInTheDocument(),await t(e).toHaveClass("truncate")}};var w,B,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Hello, world'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
  }
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var H,b,C;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'This is an XL Heading',
    as: asTypes.h1,
    type: 'heading-xl',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'KB Article Titles'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('h1');
    await expect(text).toHaveClass('text-3xl text-deep-space font-semibold leading-10');
  }
}`,...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var I,L,S;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'This is a Large Heading',
    as: asTypes.h1,
    type: 'heading-large',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty State Headings'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('h1');
    await expect(text).toHaveClass('text-2xl text-deep-space font-semibold leading-8');
  }
}`,...(S=(L=r.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var E,D,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'This is a Heading',
    as: asTypes.h1,
    type: 'heading',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Section Titles (Top Nav Bar),Page Titles, Modal Titles'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('h1');
    await expect(text).toHaveClass('text-xl text-deep-space font-semibold leading-7');
  }
}`,...(q=(D=d.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var M,N,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'This is a Subheading',
    as: asTypes.h2,
    type: 'subheading',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Subheadings, Notification/Alert headings'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('h2');
    await expect(text).toHaveClass('text-lg text-deep-space leading-6');
  }
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var A,X,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'This is a Body',
    as: asTypes.div,
    type: 'body',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default font style for components, body copy,form field labels'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('div');
    await expect(text).toHaveClass('text-sm text-deep-space leading-5');
  }
}`,...(k=(X=l.parameters)==null?void 0:X.docs)==null?void 0:k.source}}};var O,j,K;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'This is a Body Large. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-large',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty State paragraph'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('div');
    await expect(text).toHaveClass('text-lg text-deep-space leading-6');
  }
}`,...(K=(j=m.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var P,_,z;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'This is a Body Strong. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-strong',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold type in a paragraph or body copy,large buttons'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('div');
    await expect(text).toHaveClass('text-base text-deep-space font-medium leading-5');
  }
}`,...(z=(_=u.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,G,J;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'This is a Body Small. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-small',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Micro-copy, tooltips'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('div');
    await expect(text).toHaveClass('text-xs text-deep-space leading-4');
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,R,U;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: 'This is a Body Small Strong. Lorem ipsum dolor sit amet.',
    as: asTypes.div,
    type: 'body-small-strong',
    color: 'deep-space'
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold micro-copy, badges, table headers, tabs, small buttons'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('div');
    await expect(text).toHaveClass('text-xs text-deep-space font-semibold leading-4');
  }
}`,...(U=(R=y.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var W,Y,Z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'This is a Small Caps',
    as: asTypes.div,
    type: 'small-caps',
    color: 'deep-space'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('div');
    await expect(text).toHaveClass('text-xxs leading-3 tracking-wide uppercase font-semibold');
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'console.log("Hello, world")',
    as: asTypes.code,
    type: 'code',
    color: 'deep-space'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('code');
    await expect(text).toHaveClass('text-sm text-deep-space leading-3');
  }
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: 'console.log("Hello, world")',
    as: asTypes.code,
    type: 'code-small',
    color: 'deep-space'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toContainHTML('code');
    await expect(text).toHaveClass('text-xs text-deep-space leading-3');
  }
}`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,ce;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    children: 'Lorem ipsum dolor sit amet.cillum labore in adipisicing exercitation exercitation deserunt velit ad commodo adipisicing enim sunt adipisicing reprehenderit dolor sit Lorem excepteur anim reprehenderit dolor labore mollit in adipisicing irure in proident deserunt duis esse quis minim aute nostrud officia amet ipsum aute consequat sint veniam ad consectetur minim aute nostrud id ut et exercitation fugiat aliqua id laboris et velit sunt ipsum anim laborum sint ad tempor laboris do est proident cupidatat amet proident ut esse dolore fugiat in eu aute nulla eu occaecat quis dolor officia esse anim duis sunt ullamco do nostrud incididunt adipisicing irure incididunt culpa ea ipsum commodo adipisicing ea nulla tempor mollit id duis proident mollit nostrud excepteur sit quis elit officia fugiat ad dolor voluptate dolor aliqua est id enim cupidatat nisi officia culpa nulla officia proident aliqua officia deserunt est ea exercitation deserunt in excepteur do fugiat dolor et proident do aliquip occaecat ut ipsum commodo aliqua voluptate sunt Lorem et quis duis velit qui Lorem ea aliquip cupidatat eu est Lorem dolor occaecat qui ex nostrud consectetur velit ex culpa irure laborum aliqua voluptate occaecat ad fugiat velit nulla sit qui exercitation reprehenderit occaecat adipisicing adipisicing ad proident culpa veniam proident sint ex exercitation',
    as: asTypes.div,
    className: 'w-[500px] truncate'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = await canvas.getByTestId('text-component');
    await expect(text).toBeInTheDocument();
    await expect(text).toHaveClass('truncate');
  }
}`,...(ce=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const Ie=["Default","HeadingXL","HeadingLarge","Heading","Subheading","Body","BodyLarge","BodyStrong","BodySmall","BodySmallStrong","SmallCaps","Code","CodeSmall","Truncate"];export{l as Body,m as BodyLarge,x as BodySmall,y as BodySmallStrong,u as BodyStrong,v as Code,h as CodeSmall,i as Default,d as Heading,r as HeadingLarge,c as HeadingXL,g as SmallCaps,p as Subheading,T as Truncate,Ie as __namedExportsOrder,Ce as default};
