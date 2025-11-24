import{j as t}from"./jsx-runtime-Yb_4y5hn.js";import{w as k}from"./index-CQguwI8J.js";import{e as r}from"./index-nRB-OUHH.js";import{a as c,b as x,c as a,B as o}from"./Button-CxnYBzPn.js";import{T as s}from"./Text-BCZ0rRg4.js";import{I as n}from"./Icon-OWY7pxpf.js";import{B as _}from"./BadgeDot-FGNhXF8a.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./color.props-BsWCD9dY.js";import"./height.props-DUajn6Rl.js";import"./width.props-Bz_bp7Xr.js";import"./font.props-DiLDwReC.js";import"./padding.props-BHVf-jSR.js";import"./border.props-MxdHQtLV.js";const W={title:"Input/Button",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Renders a button"}},layout:"centered"},argTypes:{type:{mapping:a,options:Object.keys(a),control:{type:"select"}},size:{mapping:x,options:Object.keys(x),control:{type:"select"}},state:{mapping:c,options:Object.keys(c),control:{type:"select"}}}},l={args:{onClick:()=>alert("click"),m:"2"},render:e=>t.jsxs("div",{children:[t.jsx(o,{...e,testId:"icon-button",children:t.jsx(n,{icon:n.Glyph.Plus})}),t.jsxs(o,{...e,testId:"number-button",children:[t.jsx(n,{icon:n.Glyph.Visibility}),t.jsx(s,{children:"10"})]}),t.jsx(o,{...e,testId:"text-button",children:t.jsx(s,{children:"Text Only"})}),t.jsxs(o,{...e,testId:"right-icon-button",children:[t.jsx(s,{children:"Icon Right"}),t.jsx(n,{icon:n.Glyph.Plus})]}),t.jsxs(o,{...e,testId:"left-icon-button",children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Icon Left"})]}),t.jsxs(o,{...e,testId:"dual-decorator-button",children:[t.jsx(n,{icon:n.Glyph.FilterKB}),t.jsx(s,{children:"Dual Decorators"}),t.jsx(_,{children:"7"})]})]}),play:async({canvasElement:e})=>{const i=k(e),G=await i.getByTestId("icon-button");await r(G).toBeInTheDocument();const E=await i.getByTestId("number-button");await r(E).toBeInTheDocument();const w=await i.getByTestId("text-button");await r(w).toBeInTheDocument();const v=await i.getByTestId("right-icon-button");await r(v).toBeInTheDocument();const O=await i.getByTestId("left-icon-button");await r(O).toBeInTheDocument();const f=await i.getByTestId("dual-decorator-button");await r(f).toBeInTheDocument()}},u={args:{onClick:()=>alert("click"),m:"2"},render:e=>t.jsxs("div",{children:[t.jsxs(o,{...e,size:x.Small,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Small"})]}),t.jsxs(o,{...e,size:x.Medium,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Medium"})]})]})},d={args:{onClick:()=>alert("click"),m:"2"},render:e=>t.jsxs("div",{children:[t.jsxs(o,{...e,type:a.Primary,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Primary"})]}),t.jsxs(o,{...e,type:a.Secondary,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Secondary"})]}),t.jsxs(o,{...e,type:a.Minimal,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Minimal"})]}),t.jsxs(o,{...e,type:a.Destructive,children:[t.jsx(n,{icon:n.Glyph.Delete}),t.jsx(s,{children:"Destructive"})]})]})},p={args:{onClick:()=>alert("click"),m:"2"},render:e=>t.jsxs("div",{children:[t.jsxs(o,{...e,state:c.Initial,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Initial"})]}),t.jsxs(o,{...e,state:c.Loading,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Loading"})]}),t.jsxs(o,{...e,state:c.Success,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Success"})]}),t.jsxs(o,{...e,state:c.Error,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Error"})]}),t.jsxs(o,{...e,state:c.Disabled,children:[t.jsx(n,{icon:n.Glyph.Plus}),t.jsx(s,{children:"Disabled"})]})]})};var T,B,m;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('click'),
    m: '2'
  },
  render: props => <div>
      <Button {...props} testId="icon-button">
        <Icon icon={Icon.Glyph.Plus} />
      </Button>

      <Button {...props} testId="number-button">
        <Icon icon={Icon.Glyph.Visibility} />
        <Text>10</Text>
      </Button>

      <Button {...props} testId="text-button">
        <Text>Text Only</Text>
      </Button>

      <Button {...props} testId="right-icon-button">
        <Text>Icon Right</Text>
        <Icon icon={Icon.Glyph.Plus} />
      </Button>

      <Button {...props} testId="left-icon-button">
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Icon Left</Text>
      </Button>

      <Button {...props} testId="dual-decorator-button">
        <Icon icon={Icon.Glyph.FilterKB} />
        <Text>Dual Decorators</Text>
        <BadgeDot>7</BadgeDot>
      </Button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconButton = await canvas.getByTestId('icon-button');
    await expect(iconButton).toBeInTheDocument();
    const numberButton = await canvas.getByTestId('number-button');
    await expect(numberButton).toBeInTheDocument();
    const textButton = await canvas.getByTestId('text-button');
    await expect(textButton).toBeInTheDocument();
    const rightIconButton = await canvas.getByTestId('right-icon-button');
    await expect(rightIconButton).toBeInTheDocument();
    const leftIconButton = await canvas.getByTestId('left-icon-button');
    await expect(leftIconButton).toBeInTheDocument();
    const dualDecoratorButton = await canvas.getByTestId('dual-decorator-button');
    await expect(dualDecoratorButton).toBeInTheDocument();
  }
}`,...(m=(B=l.parameters)==null?void 0:B.docs)==null?void 0:m.source}}};var h,I,y;u.parameters={...u.parameters,docs:{...(h=u.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('click'),
    m: '2'
  },
  render: props => <div>
      <Button {...props} size={BUTTON_SIZES.Small}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Small</Text>
      </Button>

      <Button {...props} size={BUTTON_SIZES.Medium}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Medium</Text>
      </Button>
    </div>
}`,...(y=(I=u.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var j,g,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('click'),
    m: '2'
  },
  render: props => <div>
      <Button {...props} type={BUTTON_TYPES.Primary}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Primary</Text>
      </Button>

      <Button {...props} type={BUTTON_TYPES.Secondary}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Secondary</Text>
      </Button>

      <Button {...props} type={BUTTON_TYPES.Minimal}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Minimal</Text>
      </Button>

      <Button {...props} type={BUTTON_TYPES.Destructive}>
        <Icon icon={Icon.Glyph.Delete} />
        <Text>Destructive</Text>
      </Button>
    </div>
}`,...(S=(g=d.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var b,P,D;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('click'),
    m: '2'
  },
  render: props => <div>
      <Button {...props} state={BUTTON_STATES.Initial}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Initial</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Loading}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Loading</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Success}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Success</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Error}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Error</Text>
      </Button>

      <Button {...props} state={BUTTON_STATES.Disabled}>
        <Icon icon={Icon.Glyph.Plus} />
        <Text>Disabled</Text>
      </Button>
    </div>
}`,...(D=(P=p.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const X=["Default","ButtonSizeExamples","ButtonTypeExamples","ButtonStateExamples"];export{u as ButtonSizeExamples,p as ButtonStateExamples,d as ButtonTypeExamples,l as Default,X as __namedExportsOrder,W as default};
