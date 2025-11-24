import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{w as Te,u as r,a as O}from"./index-Dk0q6km1.js";import{e as b,j as _}from"./index-DDn-7lnm.js";import{r as M}from"./index-BwDkhjyp.js";import{d as ge,f as be,g as qe,b as u}from"./color.props-BsWCD9dY.js";import{h as fe,m as Ie}from"./height.props-DUajn6Rl.js";import{p as he}from"./padding.props-BHVf-jSR.js";import{w as ye}from"./width.props-Bz_bp7Xr.js";import{b as ve}from"./border.props-MxdHQtLV.js";import{l as xe}from"./layout.props-Bv-HHbLu.js";import{a as je}from"./font.props-DiLDwReC.js";import{b as ke}from"./borderradius.props-BVunBqXv.js";import{T as He}from"./Text-DzGd5Kc2.js";import{I as V}from"./Icon-BWhpx-cx.js";import{B as T}from"./Badge-C6Dhc0ze.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./Badge.props-B5M-QeId.js";import"./shape.props-BOtns5vy.js";const c={DISABLED:"disabled",SELECTED:"selected",DEFAULT:"default",HOVERED:"hovered"},Le=ge("",{variants:{...Ie,...he,...fe,...ye,...be,...ve,...ke,...xe,...je,...qe},defaultVariants:{p:"2",type:"body-small-strong",color:"deep-space",borderRadius:"small"}}),Pe=ge("",{variants:{...Ie,...he,...fe,...ye,...be,...ve,...ke,...xe}}),B={ENTER:"Enter",SPACE:" ",ESCAPE:"Escape"},Se=({label:a,link:i,subItems:t,startOpen:n=!0,leadingIcon:l,leadingContent:s,trailingIcon:h,trailingNumber:m,trailingContent:A,hasSectionDivider:we=!1,state:j=c.DEFAULT,subItemsIcon:De="CaretRight",onItemClick:H,className:C,style:Ne,...Ee})=>{const f=t&&t.length>0,[I,L]=M.useState(f?n:!1),[P,R]=M.useState(!1),y=j===c.DISABLED,p=P?c.HOVERED:j,g={[c.DEFAULT]:{background:"",icon:"text-deep-space",text:"text-deep-space",numberBadge:""},[c.HOVERED]:{background:"bg-meteor-200",icon:"text-deep-space",text:"text-deep-space",numberBadge:""},[c.SELECTED]:{background:"bg-earth-300",icon:"text-earth-100",text:"text-white",numberBadge:"bg-earth-400 text-white"},[c.DISABLED]:{background:"",icon:"text-meteor-300",text:"text-meteor-300",numberBadge:""}},W=o=>{o.preventDefault(),!y&&(f?L(!I):H?H(o):i?history.pushState({},"",i):console.log("No link or onItemClick"))},Ae=o=>{o.key===B.ENTER||o.key===B.SPACE?W(o):o.key===B.ESCAPE&&I&&L(!1)},Ce=o=>{W(o)},F=`nav-item-${a==null?void 0:a.toLowerCase().replace(/\s+/g,"-")}`,Ve=f&&(P||!l&&!s);return e.jsxs(e.Fragment,{children:[e.jsxs("li",{"aria-expanded":f?I:void 0,"aria-disabled":y,"aria-label":a,className:u(y?"cursor-default":"cursor-pointer","w-full"),children:[e.jsx("div",{className:u("flex w-full rounded-md",g[p].background,g[p].text,Le({...Ee}),C),onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),style:Ne,onClick:Ce,onKeyDown:Ae,tabIndex:y?-1:0,id:F,children:e.jsxs("div",{className:"flex w-full items-center justify-between gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[Ve?e.jsx("div",{className:"flex h-5 w-5 items-center justify-center rounded-xs bg-meteor-200","aria-hidden":"true",children:e.jsx(V,{icon:De,size:"tiny",className:u("transition-transform duration-200",I&&"rotate-90")})}):l||s?l?e.jsx(V,{icon:l,size:"small",className:u(g[p].icon,C),"aria-hidden":"true"}):s:e.jsx("div",{className:"w-5","aria-hidden":"true"}),e.jsx(He,{type:"body-strong",className:u(g[p].text,C),children:a})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[A,h&&e.jsx(V,{icon:h,size:"small",className:g[p].icon,"aria-hidden":"true"}),m&&e.jsx(T,{shape:"rounded",size:"small",className:g[p].numberBadge,"aria-label":`${m} items`,children:m})]})]})}),f&&I&&e.jsx("ul",{className:"list-none space-y-1 pl-4 pt-1","aria-labelledby":F,children:t==null?void 0:t.map((o,Be)=>e.jsx(Se,{...o},Be))})]}),we&&e.jsx("div",{className:"h-px w-full bg-meteor-200","aria-hidden":"true"})]})},q=({items:a,className:i,style:t,itemsClassName:n,itemsStyle:l,...s})=>{const h={...s};return e.jsx("nav",{className:u(Pe({...h}),i,"px-2.5 py-5"),style:t,role:"navigation","aria-label":"Side navigation (contextual)","data-testid":"navigation-component",children:e.jsx("ul",{className:"list-none space-y-1",children:a.map((m,A)=>e.jsx(Se,{...m,className:u(n,m.className),style:l},A))})})};try{q.displayName="SideNav",q.__docgenInfo={description:"",displayName:"SideNav",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SideNavItemProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},itemsClassName:{defaultValue:null,description:"",name:"itemsClassName",required:!1,type:{name:"string"}},itemsStyle:{defaultValue:null,description:"",name:"itemsStyle",required:!1,type:{name:"CSSProperties"}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"center" | "start" | "end" | "stretch" | null'}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'"default" | "error" | "focus" | "focusWithin" | "focused" | "focusedWithin" | "dashed" | "transparent" | null'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:'"default" | "error" | "focus" | "focusWithin" | "dashed" | "transparent" | null'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:'"default" | "error" | "focus" | "focusWithin" | "dashed" | "transparent" | null'}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | ... 14 more ...'}},wMin:{defaultValue:null,description:"",name:"wMin",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},wMax:{defaultValue:null,description:"",name:"wMax",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "24" | null'}},hMin:{defaultValue:null,description:"",name:"hMin",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | null'}},hMax:{defaultValue:null,description:"",name:"hMax",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | null'}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:'"medium" | "tiny" | "small" | "large" | null'}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string | number | null"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},gapX:{defaultValue:null,description:"",name:"gapX",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},gapY:{defaultValue:null,description:"",name:"gapY",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:'"center" | "start" | "end" | "between" | "around" | "evenly" | "stretch" | null'}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"center" | "start" | "end" | "stretch" | null'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"auto" | "center" | "start" | "end" | "stretch" | null'}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null'}}}}}catch{}const ln={title:"Navigation/SideNav",component:q,parameters:{docs:{description:{component:"SideNav component for application navigation"}},layout:"centered"},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of navigation items"},className:{control:"text",description:"Additional CSS classes for the nav container"},itemsClassName:{control:"text",description:"Additional CSS classes for all nav items"}}},v={args:{className:"bg-meteor-100 w-80 rounded-xs",items:[{label:"Home",link:"/",onItemClick:()=>console.log("Home"),leadingIcon:"Home",trailingNumber:4,hasSectionDivider:!0},{label:"About",link:"/about",leadingIcon:"Help",trailingNumber:8,startOpen:!1,subItems:[{label:"About 1",link:"/about-1",trailingNumber:15,startOpen:!1,leadingIcon:"Folder",subItemsIcon:"ChevronRight",subItems:[{label:"About 1.1",link:"/about-1.1",leadingIcon:"Document",trailingNumber:16,hasSectionDivider:!0,state:"default"},{label:"About 1.2",link:"/about-1.2",leadingIcon:"Document",trailingNumber:23},{label:"About 1.3",link:"/about-1.3",leadingIcon:"Document",trailingNumber:42,state:"selected"},{label:"About 1.4",link:"/about-1.4",leadingIcon:"Document",trailingIcon:"Lock",trailingNumber:10},{label:"About 1.5",link:"/about-1.5",leadingIcon:"Document"},{label:"About 1.6",link:"/about-1.6",leadingIcon:"Document"}]},{label:"About 2",link:"/about-2",leadingContent:e.jsx(T,{shape:"rounded",size:"small",color:"night",children:"Leading"})},{label:"About 3",link:"/about-3",trailingContent:e.jsx(T,{shape:"rounded",size:"small",color:"night",children:"Trailing"})},{label:"About 4",link:"/about-4",leadingIcon:"Document",className:"bg-mars-400 text-mars-100"},{label:"About 5",link:"/about-5",leadingIcon:"Document"},{label:"About 6",link:"/about-6",leadingIcon:"Document"}]},{label:"Contact",link:"/contact",leadingIcon:"Broadcast",trailingIcon:"Lock"},{label:"Settings",link:"/settings",leadingIcon:"GearSolid",state:"disabled"}]},play:async({canvasElement:a,step:i})=>{const t=Te(a);await i("Render component",async()=>{const n=t.getByTestId("navigation-component");await b(n).toBeInTheDocument()}),await i("Nested menus expand",async()=>{const n=t.getByText("About");await r.click(n),await r.unhover(n),await O(async()=>{const l=t.getByText("About 1");await b(l).toBeInTheDocument(),await r.click(l),await r.unhover(l),await O(async()=>{const s=t.getByText("About 1.1");await b(s).toBeInTheDocument()})})}),await i("Links direct to the correct page",async()=>{const n=t.getByText("Contact"),l=_.spyOn(history,"pushState");await r.click(n),await r.unhover(n),await b(l).toHaveBeenCalledWith({},"","/contact")}),console.log=_.fn(),await i("onItemClick function is called",async()=>{const n=t.getByText("Home");await r.click(n),await r.unhover(n),await b(console.log).toHaveBeenCalledWith("Home")}),await i("Disabled items do not respond to clicks",async()=>{const n=t.getByText("Settings");await r.click(n),await r.unhover(n),await b(console.log).not.toHaveBeenCalledWith("Settings")})}},d=a=>({args:{items:[a]}}),x=d({label:"Navigation Item",link:"/example",leadingIcon:"Document",trailingIcon:"Lock"}),k=d({label:"Hovered Item",link:"/hovered",leadingIcon:"Home",trailingIcon:"Info",state:"hovered"}),S=d({label:"Selected Item",link:"/selected",leadingIcon:"Analytics",trailingIcon:"CaretRight",state:"selected"}),w=d({label:"Disabled Item",link:"/disabled",leadingIcon:"GearSolid",trailingIcon:"Lock",state:"disabled"}),D=d({label:"Trailing Number",link:"/trailing-number",leadingIcon:"Envelope",trailingNumber:42}),N=d({label:"Section Divider",link:"/section-divider",leadingIcon:"Folder",trailingIcon:"Lock",hasSectionDivider:!0}),E=d({label:"Parent Item",leadingIcon:"Folder",subItems:[{label:"Child Item 1",link:"/child1",leadingIcon:"Document"},{label:"Child Item 2",link:"/child2",leadingIcon:"Document",state:"selected"},{label:"Child Item 3",link:"/child3",leadingIcon:"Document",trailingNumber:5}]});var z,G,K;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    className: 'bg-meteor-100 w-80 rounded-xs',
    items: [{
      label: 'Home',
      link: '/',
      onItemClick: () => console.log('Home'),
      leadingIcon: 'Home',
      trailingNumber: 4,
      hasSectionDivider: true
    }, {
      label: 'About',
      link: '/about',
      leadingIcon: 'Help',
      trailingNumber: 8,
      startOpen: false,
      subItems: [{
        label: 'About 1',
        link: '/about-1',
        trailingNumber: 15,
        startOpen: false,
        leadingIcon: 'Folder',
        subItemsIcon: 'ChevronRight',
        subItems: [{
          label: 'About 1.1',
          link: '/about-1.1',
          leadingIcon: 'Document',
          trailingNumber: 16,
          hasSectionDivider: true,
          state: 'default'
        }, {
          label: 'About 1.2',
          link: '/about-1.2',
          leadingIcon: 'Document',
          trailingNumber: 23
        }, {
          label: 'About 1.3',
          link: '/about-1.3',
          leadingIcon: 'Document',
          trailingNumber: 42,
          state: 'selected'
        }, {
          label: 'About 1.4',
          link: '/about-1.4',
          leadingIcon: 'Document',
          trailingIcon: 'Lock',
          trailingNumber: 10
        }, {
          label: 'About 1.5',
          link: '/about-1.5',
          leadingIcon: 'Document'
        }, {
          label: 'About 1.6',
          link: '/about-1.6',
          leadingIcon: 'Document'
        }]
      }, {
        label: 'About 2',
        link: '/about-2',
        leadingContent: <Badge shape="rounded" size="small" color="night">
                Leading
              </Badge>
      }, {
        label: 'About 3',
        link: '/about-3',
        trailingContent: <Badge shape="rounded" size="small" color="night">
                Trailing
              </Badge>
      }, {
        label: 'About 4',
        link: '/about-4',
        leadingIcon: 'Document',
        className: 'bg-mars-400 text-mars-100'
      }, {
        label: 'About 5',
        link: '/about-5',
        leadingIcon: 'Document'
      }, {
        label: 'About 6',
        link: '/about-6',
        leadingIcon: 'Document'
      }]
    }, {
      label: 'Contact',
      link: '/contact',
      leadingIcon: 'Broadcast',
      trailingIcon: 'Lock'
    }, {
      label: 'Settings',
      link: '/settings',
      leadingIcon: 'GearSolid',
      state: 'disabled'
    }]
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Render component', async () => {
      const nav = canvas.getByTestId('navigation-component');
      await expect(nav).toBeInTheDocument();
    });
    await step('Nested menus expand', async () => {
      const aboutItem = canvas.getByText('About');
      await userEvent.click(aboutItem);
      await userEvent.unhover(aboutItem);
      await waitFor(async () => {
        const about1 = canvas.getByText('About 1');
        await expect(about1).toBeInTheDocument();

        // Expand a second level of nesting
        await userEvent.click(about1);
        await userEvent.unhover(about1);
        await waitFor(async () => {
          const about11 = canvas.getByText('About 1.1');
          await expect(about11).toBeInTheDocument();
        });
      });
    });
    await step('Links direct to the correct page', async () => {
      const contactItem = canvas.getByText('Contact');
      const historyPushStateSpy = jest.spyOn(history, 'pushState');
      await userEvent.click(contactItem);
      await userEvent.unhover(contactItem);
      await expect(historyPushStateSpy).toHaveBeenCalledWith({}, '', '/contact');
    });
    console.log = jest.fn();
    await step('onItemClick function is called', async () => {
      const homeItem = canvas.getByText('Home');
      await userEvent.click(homeItem);
      await userEvent.unhover(homeItem);
      await expect(console.log).toHaveBeenCalledWith('Home');
    });
    await step('Disabled items do not respond to clicks', async () => {
      const settingsItem = canvas.getByText('Settings');
      await userEvent.click(settingsItem);
      await userEvent.unhover(settingsItem);
      await expect(console.log).not.toHaveBeenCalledWith('Settings');
    });
  }
}`,...(K=(G=v.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`createItemStory({
  label: 'Navigation Item',
  link: '/example',
  leadingIcon: 'Document',
  trailingIcon: 'Lock'
})`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,J,Q;k.parameters={...k.parameters,docs:{...($=k.parameters)==null?void 0:$.docs,source:{originalSource:`createItemStory({
  label: 'Hovered Item',
  link: '/hovered',
  leadingIcon: 'Home',
  trailingIcon: 'Info',
  state: 'hovered'
})`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Z,ee,ne;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`createItemStory({
  label: 'Selected Item',
  link: '/selected',
  leadingIcon: 'Analytics',
  trailingIcon: 'CaretRight',
  state: 'selected'
})`,...(ne=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,le;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`createItemStory({
  label: 'Disabled Item',
  link: '/disabled',
  leadingIcon: 'GearSolid',
  trailingIcon: 'Lock',
  state: 'disabled'
})`,...(le=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var oe,ie,re;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`createItemStory({
  label: 'Trailing Number',
  link: '/trailing-number',
  leadingIcon: 'Envelope',
  trailingNumber: 42
})`,...(re=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,ce,ue;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`createItemStory({
  label: 'Section Divider',
  link: '/section-divider',
  leadingIcon: 'Folder',
  trailingIcon: 'Lock',
  hasSectionDivider: true
})`,...(ue=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,pe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`createItemStory({
  label: 'Parent Item',
  leadingIcon: 'Folder',
  subItems: [{
    label: 'Child Item 1',
    link: '/child1',
    leadingIcon: 'Document'
  }, {
    label: 'Child Item 2',
    link: '/child2',
    leadingIcon: 'Document',
    state: 'selected'
  }, {
    label: 'Child Item 3',
    link: '/child3',
    leadingIcon: 'Document',
    trailingNumber: 5
  }]
})`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const on=["Default","ItemDefault","ItemHovered","ItemSelected","ItemDisabled","ItemWithTrailingNumber","ItemWithSectionDivider","ItemWithSubItems"];export{v as Default,x as ItemDefault,w as ItemDisabled,k as ItemHovered,S as ItemSelected,N as ItemWithSectionDivider,E as ItemWithSubItems,D as ItemWithTrailingNumber,on as __namedExportsOrder,ln as default};
