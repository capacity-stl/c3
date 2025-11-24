import{w}from"./index-CQguwI8J.js";import{e as a}from"./index-nRB-OUHH.js";import{A as b,a as p}from"./Avatar-BjeyZwsS.js";import{c,a as C}from"./color.props-BsWCD9dY.js";import{s as d}from"./shape.props-BOtns5vy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./jsx-runtime-Yb_4y5hn.js";import"./index-BwDkhjyp.js";const m={valid:"avatar.png"},S={title:"Data Display/Avatar",component:b,parameters:{docs:{description:{component:"Component to display a user Avatar."}},layout:"centered"},tags:["autodocs"],argTypes:{theme:{options:["Not Defined",...Object.keys(C)],mapping:{"Not Defined":void 0},control:{type:"select"},description:'Theme will provide an standard color for text, background and border with the given color pallete name (like "earth"). Theme can be overridden by the color, bgColor and borderColor props.',table:{type:{summary:"string | undefined"},defaultValue:{summary:null}}},color:{options:["Not Defined",...c],mapping:{"Not Defined":void 0},control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"earth-400"}},description:"Text color for the initials display"},bgColor:{options:["Not Defined",...c],mapping:{"Not Defined":void 0},control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"earth-100"}},description:"Background color of the avatar"},borderColor:{options:["Not Defined",...c],mapping:{"Not Defined":void 0},control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"earth-400"}},description:"Border color when border prop is enabled"},size:{options:["Not Defined",...Object.keys(p.size)],mapping:{"Not Defined":void 0},control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}},description:"Size of the avatar"},alt:{table:{type:{summary:"string"},defaultValue:{summary:"avatar"}},description:"Alternative text for the image for accessibility purposes"},shape:{table:{type:{summary:"string"},defaultValue:{summary:"circle"}},description:"Shape of the avatar"},children:{table:{type:{summary:"string | undefined"}},description:"The initials to display when the image is not provided, or when the image fails to load"},src:{table:{type:{summary:"string"}},description:"The image source to display in the avatar"},border:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Whether to display a border around the avatar"}},args:{color:"earth-400",bgColor:"earth-100",borderColor:"earth-400",shape:"circle"}},r={args:{src:m.valid,alt:"Avatar",children:"MM"},play:async({canvasElement:i,args:e,step:t})=>{const n=w(i),s=await n.getByTestId("avatar-component");await t("Check the component is rendered",async()=>{await a(s).toBeInTheDocument()}),await t("Check the component has shape and size classes applied",async()=>{await a(s).toHaveClass(e.size?p.size[e.size]:p.size.medium),await a(s).toHaveClass(e.shape?d.shape[e.shape]:d.shape.circle)}),await t("Check the image renders with an image source",async()=>{const l=await n.findByRole("img");await a(l).toBeInTheDocument(),await a(e.src).toBeDefined(),await a(l).toHaveAttribute("src",m.valid)})}},o={args:{...r.args,src:void 0},play:async({canvasElement:i,args:e,step:t})=>{const n=w(i);await t("Check initials renders when the image is not provided",async()=>{const s=await n.findByText(e.children??"");await a(s).toBeInTheDocument()})}};var h,y,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: IMAGE_SOURCES.valid,
    alt: 'Avatar',
    children: 'MM'
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const avatar = await canvas.getByTestId('avatar-component');
    await step('Check the component is rendered', async () => {
      await expect(avatar).toBeInTheDocument();
    });
    await step('Check the component has shape and size classes applied', async () => {
      await expect(avatar).toHaveClass(args.size ? avatarsizeProps.size[args.size] : avatarsizeProps.size.medium);
      await expect(avatar).toHaveClass(args.shape ? shapeProps.shape[args.shape] : shapeProps.shape.circle);
    });
    await step('Check the image renders with an image source', async () => {
      const img = await canvas.findByRole('img');
      await expect(img).toBeInTheDocument();
      await expect(args.src).toBeDefined();
      await expect(img).toHaveAttribute('src', IMAGE_SOURCES.valid);
    });
  }
}`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var v,g,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...ImageAvatar.args,
    src: undefined
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Check initials renders when the image is not provided', async () => {
      const fallbackText = await canvas.findByText(args.children ?? '');
      await expect(fallbackText).toBeInTheDocument();
    });
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const V=["ImageAvatar","InitialsAvatar"];export{r as ImageAvatar,o as InitialsAvatar,V as __namedExportsOrder,S as default};
