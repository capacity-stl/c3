import{j as c}from"./jsx-runtime-Yb_4y5hn.js";import{w as k,u as L}from"./index-CQguwI8J.js";import{e as i}from"./index-nRB-OUHH.js";import{L as E}from"./List-BDC_e0M7.js";import{R as u}from"./index-BwDkhjyp.js";import{I as b}from"./Icon-ChdlrsTy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./color.props-BsWCD9dY.js";import"./Text-Dl9vtUGn.js";import"./height.props-DUajn6Rl.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./border.props-MxdHQtLV.js";import"./font.props-DiLDwReC.js";const p=[{text:"Consierge Visitor"},{text:"314-434-3333"},{text:"joesmith@business.com"}],h=n=>c.jsx("article",{className:"flex flex-row gap-2",children:c.jsx("div",{className:"flex flex-col",children:n.text})}),D=()=>c.jsxs("div",{"data-testid":"no-items-message",className:"flex flex-col items-center justify-center gap-2",children:[c.jsx(b,{icon:"Close",color:"mars-300",size:"small"}),c.jsxs("span",{children:["No ",c.jsx("span",{className:"font-bold",children:"items"})," found!"]})]}),P={title:"Data Display/List",component:E,parameters:{docs:{description:{component:"Component to display a List."}},layout:"centered"},tags:["autodocs"],argTypes:{items:{description:"Array of items to display in the list."},renderItem:{description:"Function to customize the rendering of each element",table:{type:{summary:"(item: T) => ReactNode"}}},dense:{description:"Display the list in a dense compact format",table:{type:{summary:"boolean"}}},selectedItems:{description:"Array of items that are currently selected from the list",table:{type:{summary:"T[]"}}},onItemClick:{description:"Function to handle the click event of each element",table:{type:{summary:"(item) => void"}}},noItems:{description:"Message to display when the list is empty",table:{type:{summary:"string | ReactNode"}},control:{type:"text"}},header:{description:"Header to display at the top of the list",table:{type:{summary:"string | ReactNode"}},control:{type:"text"}},divider:{description:"Whether to display a divider between items",table:{type:{summary:"boolean"}}},loading:{description:"Whether to display a loading indicator",table:{type:{summary:"boolean"}}}}},m={args:{items:p,renderItem:h,dense:!1,selectedItems:[]},play:async({canvasElement:n,args:a,step:e})=>{const s=k(n),o=a.items;if(a.header&&await e("Check the header is rendered",async()=>{const t=s.getByRole("heading");i(t).toBeInTheDocument()}),a.items.length>0){await e("Check the component is rendered",async()=>{const r=await s.getByRole("listbox");i(r).toBeInTheDocument()});const t=s.getAllByRole("option");await e("Check the list is rendered",async()=>{i(t).toHaveLength(o.length)}),await e("Check the item contents are rendered",async()=>{o.forEach(r=>{i(s.getByText(r.text)).toBeInTheDocument()})})}else await e('Check the "no items" message is rendered',async()=>{const t=await s.findByTestId("no-items-message");i(t).toBeInTheDocument()})}},l={args:{items:p,renderItem:h,header:"Interactions",dense:!0,selectedItems:[],divider:!1,loading:!0},render:n=>{const a=()=>{const[t,r]=u.useState([]);return{selectedItems:t,setSelectedItems:r}},{selectedItems:e,setSelectedItems:s}=a(),o=t=>{console.log("handleItemClick",t);const I=e.some(y=>y.text===t.text)?e.filter(y=>y.text!==t.text):[...e,t];s(I),window.__selectedItems=I};return u.createElement(E,{...n,selectedItems:e,onItemClick:o})},play:async({canvasElement:n,step:a})=>{const s=k(n).getByText(p[0].text);await a("Verify the elements selection is handled",async()=>{await L.click(s);const o=window.__selectedItems;i(o).toHaveLength(1),i(o[0].text).toBe(p[0].text)})}},d={args:{items:[],renderItem:h,noItems:c.jsx(D,{})},play:async({canvasElement:n,args:a,step:e,...s})=>{m.play&&await m.play({canvasElement:n,args:a,step:e,...s})}};var g,x,f;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items,
    renderItem,
    dense: false,
    selectedItems: []
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const items = args.items;
    if (args.header) {
      await step('Check the header is rendered', async () => {
        const header = canvas.getByRole('heading');
        expect(header).toBeInTheDocument();
      });
    }
    if (args.items.length > 0) {
      await step('Check the component is rendered', async () => {
        const listbox = await canvas.getByRole('listbox');
        expect(listbox).toBeInTheDocument();
      });
      const listItems = canvas.getAllByRole('option');
      await step('Check the list is rendered', async () => {
        expect(listItems).toHaveLength(items.length);
      });
      await step('Check the item contents are rendered', async () => {
        items.forEach(item => {
          expect(canvas.getByText(item.text)).toBeInTheDocument();
        });
      });
    } else {
      await step('Check the "no items" message is rendered', async () => {
        const noItemsMessage = await canvas.findByTestId('no-items-message');
        expect(noItemsMessage).toBeInTheDocument();
      });
    }
  }
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var w,v,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items,
    renderItem,
    header: 'Interactions',
    dense: true,
    selectedItems: [],
    divider: false,
    loading: true
  },
  render: args => {
    const ListCustomizedStory = () => {
      const [selectedItems, setSelectedItems] = React.useState<InteractionType[]>([]);
      return {
        selectedItems,
        setSelectedItems
      };
    };
    const {
      selectedItems,
      setSelectedItems
    } = ListCustomizedStory();
    const handleItemClick = (item: InteractionType) => {
      console.log('handleItemClick', item);
      const isSelected = selectedItems.some(i => i.text === item.text);
      const newSelectedItems = isSelected ? selectedItems.filter(i => i.text !== item.text) : [...selectedItems, item];
      setSelectedItems(newSelectedItems)
      // Expose the updated state for testing
      ;
      (window as typeof window & {
        __selectedItems: InteractionType[];
      }).__selectedItems = newSelectedItems;
    };
    return React.createElement(List<InteractionType>, {
      ...args,
      selectedItems,
      onItemClick: handleItemClick
    });
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const firstItemElement = canvas.getByText(items[0].text);
    await step('Verify the elements selection is handled', async () => {
      await userEvent.click(firstItemElement);

      // Verify the updated state
      const selectedItems = (window as typeof window & {
        __selectedItems: InteractionType[];
      }).__selectedItems;
      expect(selectedItems).toHaveLength(1);
      expect(selectedItems[0].text).toBe(items[0].text);
    });
  }
}`,...(C=(v=l.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,B,T;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: [],
    renderItem,
    noItems: <NoItemsMessage />
  },
  play: async ({
    canvasElement,
    args,
    step,
    ...context
  }) => {
    if (ListDefault.play) await ListDefault.play({
      canvasElement,
      args,
      step,
      ...context
    });
  }
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const Q=["ListDefault","ListCustomized","ListEmpty"];export{l as ListCustomized,m as ListDefault,d as ListEmpty,Q as __namedExportsOrder,P as default};
