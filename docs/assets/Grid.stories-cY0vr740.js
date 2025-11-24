import{j as e}from"./jsx-runtime-Yb_4y5hn.js";import{w as g}from"./index-CQguwI8J.js";import{e as w}from"./index-nRB-OUHH.js";import{R as A}from"./index-BwDkhjyp.js";import{d as W,f as Y,b as z}from"./color.props-BsWCD9dY.js";import{h as J,m as O}from"./height.props-DUajn6Rl.js";import{p as $}from"./padding.props-BHVf-jSR.js";import{w as k,s as h}from"./width.props-Bz_bp7Xr.js";import{b as H}from"./border.props-MxdHQtLV.js";import{l as K}from"./layout.props-Bv-HHbLu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";const Q=W("grid",{variants:{...O,...$,...J,...k,...Y,...H,...K,cols:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",5:"grid-cols-5",6:"grid-cols-6",7:"grid-cols-7",8:"grid-cols-8",9:"grid-cols-9",10:"grid-cols-10",11:"grid-cols-11",12:"grid-cols-12",none:"grid-cols-none",subgrid:"grid-cols-subgrid"},rows:{1:"grid-rows-1",2:"grid-rows-2",3:"grid-rows-3",4:"grid-rows-4",5:"grid-rows-5",6:"grid-rows-6",7:"grid-rows-7",8:"grid-rows-8",9:"grid-rows-9",10:"grid-rows-10",11:"grid-rows-11",12:"grid-rows-12",none:"grid-rows-none"},flow:{row:"grid-flow-row",column:"grid-flow-col",dense:"grid-flow-row-dense","col-dense":"grid-flow-col-dense"},autoCols:{auto:"auto-cols-auto",min:"auto-cols-min",max:"auto-cols-max",fr:"auto-cols-fr"},autoRows:{auto:"auto-rows-auto",min:"auto-rows-min",max:"auto-rows-max",fr:"auto-rows-fr"},justifyItems:{start:"justify-items-start",center:"justify-items-center",end:"justify-items-end",stretch:"justify-items-stretch"},alignItems:{start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},placeItems:{start:"place-items-start",center:"place-items-center",end:"place-items-end",stretch:"place-items-stretch"},justifyContent:{start:"justify-start",center:"justify-center",end:"justify-end",stretch:"justify-stretch",between:"justify-between",around:"justify-around",evenly:"justify-evenly"},alignContent:{start:"content-start",center:"content-center",end:"content-end",stretch:"content-stretch",between:"content-between",around:"content-around",evenly:"content-evenly"},placeContent:{start:"place-content-start",center:"place-content-center",end:"place-content-end",stretch:"place-content-stretch",between:"place-content-between",around:"place-content-around",evenly:"place-content-evenly"}}}),U=n=>`${n*16}px`,G=n=>n?/[(),]/.test(n)?n:n.trim().split(/\s+/).map(r=>h[r]!==void 0?U(h[r]):r).join(" "):void 0,f=A.forwardRef(({className:n,children:a,testId:r,templateCols:i,templateRows:o,...l},L)=>{const y={...l,testId:r??"grid-component"},X={...i?{gridTemplateColumns:G(i)}:{},...o?{gridTemplateRows:G(o)}:{},...l.style||{}};return e.jsx("div",{ref:L,className:z(Q({...y}),n),"data-testid":y.testId,style:X,children:a})});f.displayName="Grid";try{f.displayName="Grid",f.__docgenInfo={description:"",displayName:"Grid",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},templateCols:{defaultValue:null,description:"",name:"templateCols",required:!1,type:{name:"string"}},templateRows:{defaultValue:null,description:"",name:"templateRows",required:!1,type:{name:"string"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:'"default" | "error" | "focus" | "focusWithin" | "focused" | "focusedWithin" | "dashed" | "transparent" | null'}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:'"default" | "error" | "focus" | "focusWithin" | "dashed" | "transparent" | null'}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:'"default" | "error" | "focus" | "focusWithin" | "dashed" | "transparent" | null'}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string | number | null"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:'"full" | "screen" | "auto" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | ... 13 more ...'}},wMin:{defaultValue:null,description:"",name:"wMin",required:!1,type:{name:'"full" | "screen" | "auto" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | null'}},wMax:{defaultValue:null,description:"",name:"wMax",required:!1,type:{name:'"full" | "screen" | "auto" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | null'}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:'"full" | "screen" | "auto" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "24" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | null'}},hMin:{defaultValue:null,description:"",name:"hMin",required:!1,type:{name:'"full" | "screen" | "auto" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | null'}},hMax:{defaultValue:null,description:"",name:"hMax",required:!1,type:{name:'"full" | "screen" | "auto" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | null'}},p:{defaultValue:null,description:"",name:"p",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},px:{defaultValue:null,description:"",name:"px",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},py:{defaultValue:null,description:"",name:"py",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pt:{defaultValue:null,description:"",name:"pt",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pr:{defaultValue:null,description:"",name:"pr",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pb:{defaultValue:null,description:"",name:"pb",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},pl:{defaultValue:null,description:"",name:"pl",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"start" | "center" | "end" | "between" | "around" | "evenly" | "stretch" | null'}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:'"start" | "center" | "end" | "stretch" | null'}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},gapX:{defaultValue:null,description:"",name:"gapX",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},gapY:{defaultValue:null,description:"",name:"gapY",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:'"start" | "center" | "end" | "between" | "around" | "evenly" | "stretch" | null'}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"start" | "center" | "end" | "between" | "around" | "evenly" | "stretch" | null'}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"auto" | "start" | "center" | "end" | "stretch" | null'}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null'}},cols:{defaultValue:null,description:"",name:"cols",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "subgrid" | null'}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:'"none" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},flow:{defaultValue:null,description:"",name:"flow",required:!1,type:{name:'"row" | "dense" | "column" | "col-dense" | null'}},autoCols:{defaultValue:null,description:"",name:"autoCols",required:!1,type:{name:'"auto" | "min" | "max" | "fr" | null'}},autoRows:{defaultValue:null,description:"",name:"autoRows",required:!1,type:{name:'"auto" | "min" | "max" | "fr" | null'}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:'"start" | "center" | "end" | "stretch" | null'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:'"start" | "center" | "end" | "stretch" | null'}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:'"start" | "center" | "end" | "stretch" | null'}},placeContent:{defaultValue:null,description:"",name:"placeContent",required:!1,type:{name:'"start" | "center" | "end" | "between" | "around" | "evenly" | "stretch" | null'}}}}}catch{}const Z=W("",{variants:{colSpan:{1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12",full:"col-span-full"},rowSpan:{1:"row-span-1",2:"row-span-2",3:"row-span-3",4:"row-span-4",5:"row-span-5",6:"row-span-6",full:"row-span-full"},colStart:{1:"col-start-1",2:"col-start-2",3:"col-start-3",4:"col-start-4",5:"col-start-5",6:"col-start-6",7:"col-start-7",8:"col-start-8",9:"col-start-9",10:"col-start-10",11:"col-start-11",12:"col-start-12",13:"col-start-13",auto:"col-start-auto"},colEnd:{1:"col-end-1",2:"col-end-2",3:"col-end-3",4:"col-end-4",5:"col-end-5",6:"col-end-6",7:"col-end-7",8:"col-end-8",9:"col-end-9",10:"col-end-10",11:"col-end-11",12:"col-end-12",13:"col-end-13",auto:"col-end-auto"},rowStart:{1:"row-start-1",2:"row-start-2",3:"row-start-3",4:"row-start-4",5:"row-start-5",6:"row-start-6",7:"row-start-7",auto:"row-start-auto"},rowEnd:{1:"row-end-1",2:"row-end-2",3:"row-end-3",4:"row-end-4",5:"row-end-5",6:"row-end-6",7:"row-end-7",auto:"row-end-auto"}}}),s=A.forwardRef(({className:n,children:a,testId:r,...i},o)=>{const l={...i,testId:r??"grid-item-component"};return e.jsx("div",{ref:o,className:z(Z({...l}),n),"data-testid":l.testId,children:a})});try{s.displayName="GridItem",s.__docgenInfo={description:"",displayName:"GridItem",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:'"full" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | null'}},rowSpan:{defaultValue:null,description:"",name:"rowSpan",required:!1,type:{name:'"full" | "1" | "2" | "3" | "4" | "5" | "6" | null'}},colStart:{defaultValue:null,description:"",name:"colStart",required:!1,type:{name:'"auto" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},colEnd:{defaultValue:null,description:"",name:"colEnd",required:!1,type:{name:'"auto" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | null'}},rowStart:{defaultValue:null,description:"",name:"rowStart",required:!1,type:{name:'"auto" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | null'}},rowEnd:{defaultValue:null,description:"",name:"rowEnd",required:!1,type:{name:'"auto" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | null'}}}}}catch{}const ee=["testId","className","m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","children","w","h","border","pt","pb","pl","pr","align","justify","alignSelf","order","justifyContent","justifyItems","bgColor","wMax","hMax","wMin","hMin","wFull","hFull","wFit","alignContent","placeContent","alignItems","placeItems"],Ie={title:"Layout/Grid",component:f,parameters:{docs:{description:{component:"A flexible CSS Grid component."}},layout:"centered",controls:{exclude:[...ee]}},tags:["autodocs"],argTypes:{cols:{control:{type:"select"},options:["1","2","3","4","5","6","7","8","9","10","11","12","none"],description:"Number of grid columns"},rows:{control:{type:"select"},options:["1","2","3","4","5","6","7","8","9","10","11","12","none"],description:"Number of grid rows"},gap:{control:{type:"select"},options:["1","2","3","4","5","6","7","8","9","10","11","12","none"],description:"Gap between grid items"},alignItems:{control:{type:"select"},options:["start","center","end","stretch"],description:"Align items within grid cells"},justifyItems:{control:{type:"select"},options:["start","center","end","stretch"],description:"Justify items within grid cells"},flow:{control:{type:"select"},options:["row","column","dense","col-dense"],description:"Grid auto flow direction"}}},t=({children:n,...a})=>e.jsx("div",{className:"h-full border border-dashed border-earth-200 bg-earth-100 p-4 text-center align-middle text-earth-400",...a,children:n}),d={args:{cols:"3",gap:"4",testId:"grid-default",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"})]})},play:async({canvasElement:n})=>{const r=await g(n).getByTestId("grid-default");await w(r).toBeInTheDocument()}},c={args:{cols:"4",rows:"3",gap:"4",testId:"grid-with-items",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{colSpan:"2",children:e.jsx(t,{children:"Spans 2 columns"})}),e.jsx(s,{children:e.jsx(t,{children:"Item 2"})}),e.jsx(s,{children:e.jsx(t,{children:"Item 3"})}),e.jsx(s,{rowSpan:"2",children:e.jsx(t,{children:"Spans 2 rows"})}),e.jsx(s,{colSpan:"3",children:e.jsx(t,{children:"Spans 3 columns"})})]})},play:async({canvasElement:n})=>{const r=await g(n).getByTestId("grid-with-items");await w(r).toBeInTheDocument()}},m={args:{cols:"3",rows:"2",gap:"4",flow:"column",testId:"grid-flow",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{colSpan:"2",children:e.jsx(t,{children:"Item 1"})}),e.jsx(s,{colSpan:"2",children:e.jsx(t,{children:"Item 2"})}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"}),e.jsx(t,{children:"Item 7"})]})}},u={args:{cols:"1",gap:"4",testId:"grid-responsive",className:"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"}),e.jsx(t,{children:"Item 7"}),e.jsx(t,{children:"Item 8"}),e.jsx(t,{children:"Item 9"}),e.jsx(t,{children:"Item 10"}),e.jsx(t,{children:"Item 11"}),e.jsx(t,{children:"Item 12"})]})},parameters:{docs:{description:{story:`
This responsive grid adapts to different screen sizes:
- **Mobile (default)**: 1 column
- **Small screens (sm)**: 2 columns  
- **Medium screens (md)**: 3 columns
- **Large screens (lg)**: 4 columns
- **Extra large (xl)**: 6 columns

Resize your browser window to see the grid adapt.
        `}}}},p={args:{templateCols:"200px 200px",gap:"2",testId:"grid-template-cols",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"})]})},parameters:{docs:{description:{story:"A grid with a custom template column layout."}}},play:async({canvasElement:n})=>{const r=await g(n).getByTestId("grid-template-cols");await w(r).toBeInTheDocument()}},I={args:{templateRows:"100px 200px 1fr 50px",gap:"2",testId:"grid-template-rows",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"})]})},parameters:{docs:{description:{story:"A grid with a custom template row layout."}}},play:async({canvasElement:n})=>{const r=await g(n).getByTestId("grid-template-rows");await w(r).toBeInTheDocument()}};var x,B,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    cols: '3',
    gap: '4',
    testId: 'grid-default',
    children: <>
        <BasicGridItem>Item 1</BasicGridItem>
        <BasicGridItem>Item 2</BasicGridItem>
        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
        <BasicGridItem>Item 5</BasicGridItem>
        <BasicGridItem>Item 6</BasicGridItem>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const grid = await canvas.getByTestId('grid-default');
    await expect(grid).toBeInTheDocument();
  }
}`,...(j=(B=d.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var V,q,v;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    cols: '4',
    rows: '3',
    gap: '4',
    testId: 'grid-with-items',
    children: <>
        <GridItem colSpan="2">
          <BasicGridItem>Spans 2 columns</BasicGridItem>
        </GridItem>
        <GridItem>
          <BasicGridItem>Item 2</BasicGridItem>
        </GridItem>
        <GridItem>
          <BasicGridItem>Item 3</BasicGridItem>
        </GridItem>
        <GridItem rowSpan="2">
          <BasicGridItem>Spans 2 rows</BasicGridItem>
        </GridItem>
        <GridItem colSpan="3">
          <BasicGridItem>Spans 3 columns</BasicGridItem>
        </GridItem>
      </>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const grid = await canvas.getByTestId('grid-with-items');
    await expect(grid).toBeInTheDocument();
  }
}`,...(v=(q=c.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var b,S,T;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    cols: '3',
    rows: '2',
    gap: '4',
    flow: 'column',
    testId: 'grid-flow',
    children: <>
        <GridItem colSpan="2">
          <BasicGridItem>Item 1</BasicGridItem>
        </GridItem>
        <GridItem colSpan="2">
          <BasicGridItem>Item 2</BasicGridItem>
        </GridItem>

        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
        <BasicGridItem>Item 5</BasicGridItem>
        <BasicGridItem>Item 6</BasicGridItem>
        <BasicGridItem>Item 7</BasicGridItem>
      </>
  }
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,R,E;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cols: '1',
    // 1 column on mobile
    gap: '4',
    testId: 'grid-responsive',
    className: 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
    // Responsive columns
    children: <>
        <BasicGridItem>Item 1</BasicGridItem>
        <BasicGridItem>Item 2</BasicGridItem>
        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
        <BasicGridItem>Item 5</BasicGridItem>
        <BasicGridItem>Item 6</BasicGridItem>
        <BasicGridItem>Item 7</BasicGridItem>
        <BasicGridItem>Item 8</BasicGridItem>
        <BasicGridItem>Item 9</BasicGridItem>
        <BasicGridItem>Item 10</BasicGridItem>
        <BasicGridItem>Item 11</BasicGridItem>
        <BasicGridItem>Item 12</BasicGridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: \`
This responsive grid adapts to different screen sizes:
- **Mobile (default)**: 1 column
- **Small screens (sm)**: 2 columns  
- **Medium screens (md)**: 3 columns
- **Large screens (lg)**: 4 columns
- **Extra large (xl)**: 6 columns

Resize your browser window to see the grid adapt.
        \`
      }
    }
  }
}`,...(E=(R=u.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var _,M,N;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    templateCols: '200px 200px',
    gap: '2',
    testId: 'grid-template-cols',
    children: <>
        <BasicGridItem>Item 1</BasicGridItem>
        <BasicGridItem>Item 2</BasicGridItem>
        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'A grid with a custom template column layout.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const grid = await canvas.getByTestId('grid-template-cols');
    await expect(grid).toBeInTheDocument();
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var F,D,P;I.parameters={...I.parameters,docs:{...(F=I.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    templateRows: '100px 200px 1fr 50px',
    gap: '2',
    testId: 'grid-template-rows',
    children: <>
        <BasicGridItem>Item 1</BasicGridItem>
        <BasicGridItem>Item 2</BasicGridItem>
        <BasicGridItem>Item 3</BasicGridItem>
        <BasicGridItem>Item 4</BasicGridItem>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'A grid with a custom template row layout.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const grid = await canvas.getByTestId('grid-template-rows');
    await expect(grid).toBeInTheDocument();
  }
}`,...(P=(D=I.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const fe=["Default","WithGridItems","AutoFlow","ResponsiveGrid","TemplateCols","TemplateRows"];export{m as AutoFlow,d as Default,u as ResponsiveGrid,p as TemplateCols,I as TemplateRows,c as WithGridItems,fe as __namedExportsOrder,Ie as default};
