import{w as i}from"./index-CQguwI8J.js";import{e as r}from"./index-nRB-OUHH.js";import{I as e,i as p}from"./Icon-OWY7pxpf.js";import{c as m}from"./color.props-BsWCD9dY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./jsx-runtime-Yb_4y5hn.js";import"./index-BwDkhjyp.js";const v={title:"Data Display/Icons",component:e,parameters:{docs:{description:{component:"Component to display an icon glyph. Use the `Icon.Glyph.{IconName}` enum to set the `icon` prop, and the `Icon.Size.{SizeName}` enum for the desired `size` prop. Accepts any supported color."}},layout:"centered"},argTypes:{color:{options:m,control:{type:"select"}},icon:{options:Object.keys(e.Glyph),control:{type:"select"}},size:{options:Object.keys(p.size),control:{type:"select"}}}},o={args:{size:"medium",color:"earth-300",icon:e.Glyph.Action,testId:"icon-component"},play:async({canvasElement:s})=>{const a=await i(s).getByTestId("icon-component");await r(a).toBeInTheDocument()}};var t,n,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'earth-300',
    icon: Icon.Glyph.Action,
    testId: 'icon-component'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.getByTestId('icon-component');
    await expect(icon).toBeInTheDocument();
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,v as default};
