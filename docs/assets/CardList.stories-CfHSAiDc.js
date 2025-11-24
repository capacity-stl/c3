import{j as t}from"./jsx-runtime-Yb_4y5hn.js";import{w as M,u as A}from"./index-CQguwI8J.js";import{j as oe,e as d}from"./index-nRB-OUHH.js";import{r as K}from"./index-BwDkhjyp.js";import{d as le,b as Y}from"./color.props-BsWCD9dY.js";import{L as re}from"./List-BDC_e0M7.js";import{I as c}from"./Icon-ChdlrsTy.js";import{T as S}from"./Text-Dl9vtUGn.js";import{A as ce}from"./Avatar-BjeyZwsS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./height.props-DUajn6Rl.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./border.props-MxdHQtLV.js";import"./font.props-DiLDwReC.js";import"./shape.props-BOtns5vy.js";const de=le("inline-block *:w-auto",{variants:{}}),N=({item:e,titleKey:n="title",descriptionKey:a="description",datetimeKey:o="datetime",referenceKey:s="reference",isSelected:i,bottomLeftContent:l,bottomRightContent:r,firstOptionAsButton:p,textSelectable:B})=>{var f,v;const u=p?(f=e.options)==null?void 0:f[0]:null,I=p?(v=e.options)==null?void 0:v.slice(1):e.options;return t.jsxs("article",{className:`w-full ${B?"":"select-none"}`,"aria-label":e[n],children:[t.jsxs("div",{className:"flex flex-row gap-2",children:[e.icon&&t.jsx("div",{role:"presentation",children:i?t.jsx("input",{tabIndex:-1,className:"m-1",style:{width:"16px",height:"16px"},type:"checkbox",checked:!0,readOnly:!0}):t.jsx("span",{className:Y(`flex items-center justify-center rounded-full p-1 bg-${e.iconColor} leading-none`,e.iconColor),children:t.jsx(c,{color:"white",size:"tiny",icon:c.Glyph[e.icon??c.Glyph.Action]})})}),t.jsxs("div",{className:"flex flex-col gap-1 truncate",children:[t.jsxs("div",{className:"flex flex-row justify-between gap-2",children:[e[n]&&t.jsx(S,{type:"body-small-strong",className:"truncate",children:e[n]}),e[o]&&t.jsx(S,{type:"body-small",className:"text-meteor-400",children:e[o]})]}),e[a]&&t.jsx(S,{type:"body-small",className:"truncate",children:e[a]}),e[s]&&t.jsx(S,{type:"body-small",className:"text-meteor-400",children:e[s]})]})]}),((e==null?void 0:e.options)||l||r)&&t.jsxs("div",{role:"toolbar",className:"mt-2 flex flex-row items-center justify-between gap-2",children:[t.jsx("div",{className:"flex flex-row",children:l&&t.jsx("div",{className:"flex flex-row gap-1",children:l(e)})}),t.jsxs("div",{className:"flex flex-row items-center justify-between gap-2",children:[r&&t.jsx("div",{className:"flex flex-row items-center justify-end gap-1",children:r(e)}),(e==null?void 0:e.options)&&t.jsxs(t.Fragment,{children:[u&&t.jsx("input",{type:"button","aria-label":u.label,value:u.label,className:"rounded-md bg-earth-300 px-1 py-1 text-xs text-white"}),I&&I.length>0&&t.jsx("button",{type:"button",role:"menu","aria-label":"More options",children:t.jsx(c,{size:"tiny",icon:c.Glyph.More,"aria-hidden":"true"})})]})]})]})]})};try{N.displayName="CardListItem",N.__docgenInfo={description:"",displayName:"CardListItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Record<string, any> & Partial<ListItemType>"}},titleKey:{defaultValue:{value:"title"},description:"",name:"titleKey",required:!1,type:{name:"string"}},descriptionKey:{defaultValue:{value:"description"},description:"",name:"descriptionKey",required:!1,type:{name:"string"}},datetimeKey:{defaultValue:{value:"datetime"},description:"",name:"datetimeKey",required:!1,type:{name:"string"}},referenceKey:{defaultValue:{value:"reference"},description:"",name:"referenceKey",required:!1,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},textSelectable:{defaultValue:null,description:"",name:"textSelectable",required:!1,type:{name:"boolean"}},bottomLeftContent:{defaultValue:null,description:"",name:"bottomLeftContent",required:!1,type:{name:"((item: T) => ReactNode)"}},bottomRightContent:{defaultValue:null,description:"",name:"bottomRightContent",required:!1,type:{name:"((item: T) => ReactNode)"}},firstOptionAsButton:{defaultValue:null,description:"",name:"firstOptionAsButton",required:!1,type:{name:"boolean"}}}}}catch{}const g=({className:e,items:n,noItems:a,titleKey:o="title",descriptionKey:s="description",datetimeKey:i="datetime",referenceKey:l="reference",header:r,dense:p=!1,divider:B=!0,selectionMode:u="single",textSelectable:I=!1,onSelectionChange:f,loading:v=!1,bottomLeftContent:ee,bottomRightContent:te,firstOptionAsButton:ne=!1,defaultSelectedItems:q=[],testId:se="cardlist-component",..._})=>{const[x,V]=K.useState([]);K.useEffect(()=>{if(q.length>0){const m=q.filter(b=>n.some(C=>C===b));V(u==="single"?m.slice(0,1):m)}},[q,n,u]);const ie=m=>{if(u!=="none"){if(u==="single"){const b=[m];V(b),f==null||f(b,m)}if(u==="multiple"){const C=x.some(E=>E[o]===m[o])?x.filter(E=>E[o]!==m[o]):[...x,m];V(C),f==null||f(C,m)}}},ae=m=>t.jsx(N,{item:m,titleKey:o,descriptionKey:s,datetimeKey:i,referenceKey:l,isSelected:m.isSelected,textSelectable:I,bottomLeftContent:ee,bottomRightContent:te,firstOptionAsButton:ne});return t.jsx(re,{"data-testid":se,items:n,renderItem:ae,dense:p,divider:B,selectedItems:x,header:r==null?void 0:r(x,n),noItems:a,onItemClick:ie,loading:v,className:Y(de({..._}),p?"p-2":"p-4",`${e} w-full max-w-md rounded-lg bg-white`),..._})};g.Item=N;try{g.displayName="CardList",g.__docgenInfo={description:"",displayName:"CardList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"(T & Partial<ListItemType>)[]"}},noItems:{defaultValue:null,description:"",name:"noItems",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"((selectedItems: (T & Partial<ListItemType>)[], items: (T & Partial<ListItemType>)[]) => ReactNode)"}},dense:{defaultValue:{value:"false"},description:"",name:"dense",required:!1,type:{name:"boolean"}},divider:{defaultValue:{value:"true"},description:"",name:"divider",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},titleKey:{defaultValue:{value:"title"},description:"",name:"titleKey",required:!1,type:{name:"string"}},descriptionKey:{defaultValue:{value:"description"},description:"",name:"descriptionKey",required:!1,type:{name:"string"}},datetimeKey:{defaultValue:{value:"datetime"},description:"",name:"datetimeKey",required:!1,type:{name:"string"}},referenceKey:{defaultValue:{value:"reference"},description:"",name:"referenceKey",required:!1,type:{name:"string"}},firstOptionAsButton:{defaultValue:{value:"false"},description:"",name:"firstOptionAsButton",required:!1,type:{name:"boolean"}},selectionMode:{defaultValue:{value:"single"},description:"",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"single"'},{value:'"multiple"'}]}},textSelectable:{defaultValue:{value:"false"},description:"",name:"textSelectable",required:!1,type:{name:"boolean"}},bottomLeftContent:{defaultValue:null,description:"",name:"bottomLeftContent",required:!1,type:{name:"((item: T & Partial<ListItemType>) => ReactNode)"}},bottomRightContent:{defaultValue:null,description:"",name:"bottomRightContent",required:!1,type:{name:"((item: T & Partial<ListItemType>) => ReactNode)"}},onSelectionChange:{defaultValue:null,description:"",name:"onSelectionChange",required:!1,type:{name:"((items: (T & Partial<ListItemType>)[], lastSelectedItem?: (T & Partial<ListItemType>)) => void)"}},defaultSelectedItems:{defaultValue:{value:"[]"},description:"",name:"defaultSelectedItems",required:!1,type:{name:"(T & Partial<ListItemType>)[]"}},testId:{defaultValue:{value:"cardlist-component"},description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}try{g.Item.displayName="CardList.Item",g.Item.__docgenInfo={description:"",displayName:"CardList.Item",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Record<string, any> & Partial<ListItemType>"}},titleKey:{defaultValue:{value:"title"},description:"",name:"titleKey",required:!1,type:{name:"string"}},descriptionKey:{defaultValue:{value:"description"},description:"",name:"descriptionKey",required:!1,type:{name:"string"}},datetimeKey:{defaultValue:{value:"datetime"},description:"",name:"datetimeKey",required:!1,type:{name:"string"}},referenceKey:{defaultValue:{value:"reference"},description:"",name:"referenceKey",required:!1,type:{name:"string"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}},textSelectable:{defaultValue:null,description:"",name:"textSelectable",required:!1,type:{name:"boolean"}},bottomLeftContent:{defaultValue:null,description:"",name:"bottomLeftContent",required:!1,type:{name:"((item: T) => ReactNode)"}},bottomRightContent:{defaultValue:null,description:"",name:"bottomRightContent",required:!1,type:{name:"((item: T) => ReactNode)"}},firstOptionAsButton:{defaultValue:null,description:"",name:"firstOptionAsButton",required:!1,type:{name:"boolean"}}}}}catch{}const T=e=>{const n=new Date,a=new Date(e),o=Math.floor((n.getTime()-a.getTime())/1e3),s=Math.floor(o/60),i=Math.floor(s/60),l=Math.floor(i/24),r=Math.floor(l/30),p=Math.floor(r/12);return p>0?`${p}y`:r>0?`${r}mo`:l>0?`${l}d`:i>0?`${i}h`:s>0?`${s}min`:"now"},h=[{id:1,title:"Consierge Visitor",description:"Message from the concierge. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",datetime:T(new Date().toISOString()),icon:c.Glyph.Livechat,iconColor:"neptune-300",status:"in progress",options:[{name:"open",label:"Open",action:()=>console.log("Option 1")},{name:"edit",label:"Edit",action:()=>console.log("Option 2")}],user:{imageUrl:"https://i.pravatar.cc/300",initials:"JS",color:"neptune-300"}},{id:2,title:"314-434-3333",description:"Message from SMS. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",datetime:T("2025-03-11T12:00:00Z"),icon:c.Glyph.Concierge,iconColor:"earth-300",reference:"CAP-1234",user:{imageUrl:"https://i.pravatar.cc/301",initials:"MS",color:"aurora-300"}},{id:3,title:"joesmith@business.com",description:"Message from email. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",datetime:T("2025-01-25T12:00:00Z"),icon:c.Glyph.Ticket,iconColor:"aurora-300",options:[{name:"claim",label:"Claim",action:()=>console.log("Option 1")}],user:{imageUrl:"",initials:"CX",color:"mars-300"}},{id:4,title:"Is Skitch an Approved application?",description:"james@business.com",datetime:T("2024-01-26T12:00:00Z"),reference:"CAP-1234",user:{imageUrl:"",initials:"TM",color:"aurora-300"}}],me=()=>t.jsxs("div",{"data-testid":"no-items-message",className:"flex flex-col items-center justify-center gap-2",children:[t.jsx(c,{icon:c.Glyph.Close,color:"mars-300",size:"small"}),t.jsxs("span",{children:["No ",t.jsx("span",{className:"font-bold",children:"tickets"})," found!"]})]}),R=e=>(e==null?void 0:e.status)&&t.jsxs("div",{className:"flex flex-row items-center gap-1",children:[t.jsx("span",{className:"rounded-full bg-sun-100 px-2 py-1 text-xs font-medium capitalize text-sun-400",children:e==null?void 0:e.status}),(e==null?void 0:e.status)==="in progress"&&t.jsx(c,{icon:c.Glyph.Done,color:"neptune-300",size:"tiny"})]}),D=e=>{var n,a,o;return t.jsx(ce,{src:(n=e.user)==null?void 0:n.imageUrl,size:"small",bgColor:(a=e.user)==null?void 0:a.color,children:(o=e.user)==null?void 0:o.initials})},O=e=>{const n=()=>{alert(`Bulk Edit on ${e.length} selected tickets`)};return t.jsxs("div",{className:"flex flex-row items-center justify-between gap-2",children:[t.jsx("button",{type:"button","aria-label":"Sort tickets",onClick:()=>alert("Sort tickets"),children:t.jsx(c,{icon:c.Glyph.Sort,color:"meteor-300",size:"tiny"})}),e.length>0?t.jsxs("button",{className:"flex cursor-pointer flex-row items-center gap-1 text-sm font-medium text-meteor-400",onClick:n,children:[t.jsx(c,{icon:c.Glyph.Pencil,color:"meteor-300",size:"tiny"}),"Bulk Edit"]}):t.jsx("span",{className:"text-sm font-medium",children:"Tickets"})]})},y=oe.fn((e,n)=>{console.info("onSelectionChange",e,n)}),Be={title:"Data Display/Card List",component:g,parameters:{docs:{description:{component:"Display a list of items in a card format"}},layout:"centered"},decorators:[e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(e,{})})],tags:["autodocs"],argTypes:{items:{description:"Array of items to display in the list. They can optionally implement ListItemType attributes.",table:{type:{summary:"InteractionType",detail:`interface InteractionType extends ListItemType {
  id: number
  title: string
  description: string
  datetime: string
  reference?: string
  icon?: keyof typeof Icon.Glyph
  iconColor?: string
  status?: string
  user?: {
    imageUrl: string
    initials: string[2]
    color?: string
  }
}`}}},divider:{description:"Displays a divider between items"},dense:{description:"Enables Dense mode; occupies less space"},titleKey:{description:'Name of the attribute which holds the "title"'},descriptionKey:{description:'Name of the attribute which holds the "description"'},datetimeKey:{description:'Name of the attribute which holds the "datetime" in ISO format'},referenceKey:{description:'Name of the attribute which holds the "reference"'},loading:{description:"Displays the loading state"},firstOptionAsButton:{description:"Displays the first option of the menu as a button"},selectionMode:{description:"Mode of selection of the list",table:{type:{summary:"single | multiple | none"}},control:{type:"select"},options:["single","multiple","none"]},textSelectable:{description:"Enables text selection for the list items",table:{type:{summary:"boolean"}},control:{type:"boolean"}},defaultSelectedItems:{description:"Array of items that should be selected by default when the component mounts",table:{type:{summary:"T[]"}}},noItems:{description:"[Slot] Content to display when the list is empty"},onSelectionChange:{description:"[Slot] Callback function to handle the selection of items",table:{type:{summary:"(items: T[], lastSelectedItem?: T) => void"}}},bottomLeftContent:{description:"[Slot] Callback function to handle the bottom left content",table:{type:{summary:"(item: T) => React.ReactNode"}}},bottomRightContent:{description:"[Slot] Callback function to handle the bottom right content",table:{type:{summary:"(item: T) => React.ReactNode"}}},header:{description:"[Slot] Callback function to handle the header",table:{type:{summary:"(selectedItems: T[], items: T[]) => React.ReactNode"}}}}},L={args:{items:h,selectionMode:"multiple",dense:!1,divider:!0,bottomLeftContent:R,bottomRightContent:D,onSelectionChange:y,header:O,firstOptionAsButton:!0},play:async({canvasElement:e,args:n,step:a})=>{const o=M(e),s=n.items;await a("Should render all list items",async()=>{const i=o.getAllByRole("article");d(i).toHaveLength(s.length)}),await a("Should display text content correctly",async()=>{const i=s[0],l=o.getByLabelText(i.title);i.title&&d(l).toHaveTextContent(i.title),i.description&&d(l).toHaveTextContent(i.description),i.reference&&d(l).toHaveTextContent(i.reference)}),await a("Should handle item selection",async()=>{const i=o.getByLabelText(s[0].title);if(await A.click(i),n.selectionMode==="single"&&(d(y.mock.calls).toHaveLength(1),d(y.mock.calls[0][0]).toEqual([s[0]]),d(y.mock.calls[0][1]).toBe(s[0])),n.selectionMode==="multiple"){const l=o.getByLabelText(s[1].title);await A.click(l),d(y.mock.calls[0][0]).toEqual([s[0]]),d(y.mock.calls[0][1]).toBe(s[0]),d(y.mock.calls[1][0]).toEqual([s[0],s[1]]),d(y.mock.calls[1][1]).toBe(s[1])}n.selectionMode==="none"&&d(y.mock.calls).toHaveLength(0)}),await a("Should render bottom content correctly",async()=>{const i=o.getByLabelText(s[0].title),l=M(i).getByText(s[0].status);d(l).toBeInTheDocument()}),await a("Should handle options correctly",async()=>{const i=o.getByLabelText(s[0].title);if(s.find(r=>{var p;return(p=r==null?void 0:r.options)==null?void 0:p.length})){const r=M(i).getByRole("menu");d(r).toBeInTheDocument()}})}},w={args:{items:h,selectionMode:"multiple",dense:!1,divider:!0,bottomLeftContent:R,bottomRightContent:D,header:O,firstOptionAsButton:!0,defaultSelectedItems:[h[0],h[2]],onSelectionChange:(e,n)=>{console.log("Selection changed!",{selectedCount:e.length,selectedTitles:e.map(a=>a.title),lastSelected:n==null?void 0:n.title,selectedItems:e})}},parameters:{docs:{description:{story:"Demonstrates CardList with defaultSelectedItems. The first and third items are pre-selected."}}}},j={args:{items:h,selectionMode:"single",dense:!1,divider:!0,bottomLeftContent:R,bottomRightContent:D,header:O,firstOptionAsButton:!0,defaultSelectedItems:[h[1]],onSelectionChange:(e,n)=>{var a;console.log("Single selection changed!",{selectedItem:(a=e[0])==null?void 0:a.title,lastSelected:n==null?void 0:n.title,selectedItems:e})}},parameters:{docs:{description:{story:"Demonstrates CardList with single selection and default selection. The second item is pre-selected."}}}},k={args:{items:[],noItems:t.jsx(me,{})}};var P,H,G;L.parameters={...L.parameters,docs:{...(P=L.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multiple',
    dense: false,
    divider: true,
    bottomLeftContent,
    bottomRightContent,
    onSelectionChange: onSelectionChangeMock,
    header,
    firstOptionAsButton: true
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const items = args.items;
    await step('Should render all list items', async () => {
      const listItems = canvas.getAllByRole('article');
      expect(listItems).toHaveLength(items.length);
    });
    await step('Should display text content correctly', async () => {
      const firstItem = items[0];
      const firstItemElement = canvas.getByLabelText(firstItem.title);
      if (firstItem.title) {
        expect(firstItemElement).toHaveTextContent(firstItem.title);
      }
      if (firstItem.description) {
        expect(firstItemElement).toHaveTextContent(firstItem.description);
      }

      // Check reference if exists
      if (firstItem.reference) {
        expect(firstItemElement).toHaveTextContent(firstItem.reference);
      }
    });
    await step('Should handle item selection', async () => {
      const firstItemElement = canvas.getByLabelText(items[0].title);
      await userEvent.click(firstItemElement);
      if (args.selectionMode === 'single') {
        expect(onSelectionChangeMock.mock.calls).toHaveLength(1);
        expect(onSelectionChangeMock.mock.calls[0][0]).toEqual([items[0]]);
        expect(onSelectionChangeMock.mock.calls[0][1]).toBe(items[0]);
      }
      if (args.selectionMode === 'multiple') {
        const secondItemElement = canvas.getByLabelText(items[1].title);
        await userEvent.click(secondItemElement);
        expect(onSelectionChangeMock.mock.calls[0][0]).toEqual([items[0]]);
        expect(onSelectionChangeMock.mock.calls[0][1]).toBe(items[0]);
        expect(onSelectionChangeMock.mock.calls[1][0]).toEqual([items[0], items[1]]);
        expect(onSelectionChangeMock.mock.calls[1][1]).toBe(items[1]);
      }
      if (args.selectionMode === 'none') {
        expect(onSelectionChangeMock.mock.calls).toHaveLength(0);
      }
    });
    await step('Should render bottom content correctly', async () => {
      const firstItemElement = canvas.getByLabelText(items[0].title);
      const statusBadge = within(firstItemElement).getByText(items[0].status as string);
      expect(statusBadge).toBeInTheDocument();
    });
    await step('Should handle options correctly', async () => {
      const firstItemElement = canvas.getByLabelText(items[0].title);
      const firstItemWithOptions = items.find(item => item?.options?.length);
      if (firstItemWithOptions) {
        const optionsButton = within(firstItemElement).getByRole('menu');
        expect(optionsButton).toBeInTheDocument();
      }
    });
  }
}`,...(G=(H=L.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var $,z,U;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'multiple',
    dense: false,
    divider: true,
    bottomLeftContent,
    bottomRightContent,
    header,
    firstOptionAsButton: true,
    defaultSelectedItems: [items[0], items[2]],
    // Pre-select first and third items
    onSelectionChange: (selectedItems: InteractionType[], lastSelected?: InteractionType) => {
      console.log('Selection changed!', {
        selectedCount: selectedItems.length,
        selectedTitles: selectedItems.map(item => item.title),
        lastSelected: lastSelected?.title,
        selectedItems
      });
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates CardList with defaultSelectedItems. The first and third items are pre-selected.'
      }
    }
  }
}`,...(U=(z=w.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var W,Z,F;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items,
    selectionMode: 'single',
    dense: false,
    divider: true,
    bottomLeftContent,
    bottomRightContent,
    header,
    firstOptionAsButton: true,
    defaultSelectedItems: [items[1]],
    // Pre-select second item
    onSelectionChange: (selectedItems: InteractionType[], lastSelected?: InteractionType) => {
      console.log('Single selection changed!', {
        selectedItem: selectedItems[0]?.title,
        lastSelected: lastSelected?.title,
        selectedItems
      });
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates CardList with single selection and default selection. The second item is pre-selected.'
      }
    }
  }
}`,...(F=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};var J,X,Q;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    items: [],
    noItems: <NoItemsMessage />
  }
}`,...(Q=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};const qe=["CardListDefault","CardListWithDefaultSelection","CardListSingleDefaultSelection","CardListEmpty"];export{L as CardListDefault,k as CardListEmpty,j as CardListSingleDefaultSelection,w as CardListWithDefaultSelection,qe as __namedExportsOrder,Be as default};
