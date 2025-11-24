import{w as n}from"./index-CQguwI8J.js";import{e as a}from"./index-nRB-OUHH.js";import{L as H}from"./Label-BDLcCDxD.js";import{c as V}from"./color.props-BsWCD9dY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./jsx-runtime-Yb_4y5hn.js";import"./index-BwDkhjyp.js";import"./height.props-DUajn6Rl.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./font.props-DiLDwReC.js";const U={title:"Data Display/Label",component:H,parameters:{docs:{description:{component:"Label component for form inputs. Supports required indicator and disabled state."}},controls:{exclude:["testId","className","mx","my","px","py","w","h","border","pt","pb","pl","pr","m","p","min-w","min-h","max-w","max-h","mt","mb","ml","mr"]}},tags:["autodocs"],argTypes:{children:{control:{type:"text"},table:{type:{summary:"The label text"},defaultValue:{summary:""}}},htmlFor:{control:{type:"text"},table:{type:{summary:"The id of the form element this label is for"},defaultValue:{summary:""}}},type:{control:{type:"select"},options:["body","body-small","body-strong","body-small-strong"],table:{type:{summary:"The font style of the label"},defaultValue:{summary:"body"}}},color:{control:{type:"select"},options:V,table:{type:{summary:"The color of the label text"},defaultValue:{summary:"deep-space"}}},required:{control:{type:"boolean"},table:{type:{summary:"Shows required asterisk indicator"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},table:{type:{summary:"Applies disabled styling"},defaultValue:{summary:"false"}}}}},o={args:{children:"Email Address",htmlFor:"email"},play:async({canvasElement:t})=>{const e=await n(t).getByTestId("label-component");await a(e).toBeInTheDocument(),await a(e).toContainHTML("Email Address")}},r={args:{children:"Email Address",htmlFor:"email",required:!0},parameters:{docs:{description:{story:"Label with required indicator (red asterisk)"}}},play:async({canvasElement:t})=>{const e=await n(t).getByTestId("label-component");await a(e).toBeInTheDocument(),await a(e).toContainHTML("Email Address")}},l={args:{children:"Email Address",htmlFor:"email",disabled:!0},parameters:{docs:{description:{story:"Label with disabled styling (reduced opacity)"}}},play:async({canvasElement:t})=>{const e=await n(t).getByTestId("label-component");await a(e).toBeInTheDocument(),await a(e).toHaveClass("opacity-50")}},c={args:{children:"Email Address",htmlFor:"email",required:!0,disabled:!0},parameters:{docs:{description:{story:"Label that is both required and disabled"}}},play:async({canvasElement:t})=>{const e=await n(t).getByTestId("label-component");await a(e).toBeInTheDocument(),await a(e).toHaveClass("opacity-50")}},i={args:{children:"Email Address",htmlFor:"email",type:"body-small"},parameters:{docs:{description:{story:"Smaller label text for compact forms"}}},play:async({canvasElement:t})=>{const e=await n(t).getByTestId("label-component");await a(e).toBeInTheDocument(),await a(e).toHaveClass("text-xs")}},m={args:{children:"Email Address",htmlFor:"email",type:"body-strong",required:!0},parameters:{docs:{description:{story:"Bold label text for emphasis"}}},play:async({canvasElement:t})=>{const e=await n(t).getByTestId("label-component");await a(e).toBeInTheDocument(),await a(e).toHaveClass("font-medium")}},d={args:{children:"Email Address",htmlFor:"email",color:"earth-400"},parameters:{docs:{description:{story:"Label with custom color from the design system"}}},play:async({canvasElement:t})=>{const e=await n(t).getByTestId("label-component");await a(e).toBeInTheDocument(),await a(e).toHaveClass("text-earth-400")}};var p,y,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByTestId('label-component');
    await expect(label).toBeInTheDocument();
    await expect(label).toContainHTML('Email Address');
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var u,h,w;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with required indicator (red asterisk)'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByTestId('label-component');
    await expect(label).toBeInTheDocument();
    await expect(label).toContainHTML('Email Address');
  }
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,g,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with disabled styling (reduced opacity)'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByTestId('label-component');
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass('opacity-50');
  }
}`,...(T=(g=l.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var x,f,E;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    required: true,
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Label that is both required and disabled'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByTestId('label-component');
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass('opacity-50');
  }
}`,...(E=(f=c.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var B,I,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    type: 'body-small'
  },
  parameters: {
    docs: {
      description: {
        story: 'Smaller label text for compact forms'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByTestId('label-component');
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass('text-xs');
  }
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var A,L,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    type: 'body-strong',
    required: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Bold label text for emphasis'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByTestId('label-component');
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass('font-medium');
  }
}`,...(C=(L=m.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var q,F,S;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email',
    color: 'earth-400'
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with custom color from the design system'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = await canvas.getByTestId('label-component');
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveClass('text-earth-400');
  }
}`,...(S=(F=d.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const W=["Default","Required","Disabled","RequiredAndDisabled","SmallLabel","StrongLabel","CustomColor"];export{d as CustomColor,o as Default,l as Disabled,r as Required,c as RequiredAndDisabled,i as SmallLabel,m as StrongLabel,W as __namedExportsOrder,U as default};
