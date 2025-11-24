import{j as r}from"./jsx-runtime-Yb_4y5hn.js";import{r as o}from"./index-BwDkhjyp.js";import{d as u,b as v}from"./color.props-BsWCD9dY.js";import{w as _}from"./index-Dk0q6km1.js";import{e as M}from"./index-DDn-7lnm.js";import{I as S,a as N}from"./Icon-BWhpx-cx.js";import{f as z}from"./font.props-DiLDwReC.js";import{m as Xe,h as ce}from"./height.props-DUajn6Rl.js";import{w as Ze}from"./width.props-Bz_bp7Xr.js";import{b as L}from"./border.props-MxdHQtLV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";const Qe=(e,t)=>n=>{const{key:a}=n;typeof e[a]=="function"&&(n.preventDefault(),t!=null&&t.stopPropagation&&n.stopPropagation(),e[a](n))},et=(e,t)=>()=>{var a;const[n]=((a=e.current)==null?void 0:a.getElementsByClassName(t))??[];n==null||n.scrollIntoView({behavior:"smooth",block:"center"})},tt=(e,t)=>{o.useEffect(()=>{const n=a=>{var l;if((l=t==null?void 0:t.current)!=null&&l.contains(a.target))return null;e()};if(t!=null&&t.current)return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[t,e])},nt=u(["bg-white","shadow-medium","min-w-full","rounded-sm","overflow-y-auto","max-h-80","mt-1"],{variants:{isPinned:{true:["fixed"],false:["absolute","top-full","left-0"]}}}),at=e=>{const t={isPinned:!!e.boundingRect};return{rootClassString:nt(t)}},ne=o.forwardRef((e,t)=>{const{children:n,open:a,pinTo:l,...s}=e,i=o.useMemo(()=>l!=null&&l.current?l.current.getBoundingClientRect():null,[l]),{rootClassString:c}=at({boundingRect:i});return a?r.jsx("div",{className:v(c),ref:t,...s,children:n}):null});try{ne.displayName="Flyout",ne.__docgenInfo={description:"",displayName:"Flyout",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},pinTo:{defaultValue:null,description:"",name:"pinTo",required:!1,type:{name:"RefObject<HTMLElement | null>"}},isPinned:{defaultValue:null,description:"",name:"isPinned",required:!1,type:{name:"boolean | null"}}}}}catch{}const rt=u(["sticky","top-0","bg-white","w-full","p-2","z-10"],{variants:{type:{}}}),lt=u(["bg-meteor-100","w-full","p-2","rounded-xs","border","border-meteor-200","outline-none"],{variants:{}}),st=e=>({rootClassString:rt(e),inputClassString:lt(e)});var C=(e=>(e.None="none",e.Filter="filter",e.AdaptiveFilter="adaptiveFilter",e.Search="search",e))(C||{});const ae=o.forwardRef((e,t)=>{const{onChange:n,filterBehavior:a,itemCount:l,filterValue:s,filterPlaceholder:i}={filterValue:"",onChange:()=>{},...e},{rootClassString:c,inputClassString:y}=st(e),g=p=>n(p.target.value);return a===C.Search||a===C.Filter||a===C.AdaptiveFilter&&l>10?r.jsx("div",{className:c,children:r.jsx("input",{className:y,onChange:g,placeholder:i,ref:t,value:s})}):null});try{ae.displayName="SelectFilter",ae.__docgenInfo={description:"",displayName:"SelectFilter",props:{filterBehavior:{defaultValue:null,description:"",name:"filterBehavior",required:!0,type:{name:"enum",value:[{value:'"none"'},{value:'"filter"'},{value:'"adaptiveFilter"'},{value:'"search"'}]}},filterValue:{defaultValue:null,description:"",name:"filterValue",required:!1,type:{name:"string"}},filterPlaceholder:{defaultValue:null,description:"",name:"filterPlaceholder",required:!0,type:{name:"string"}},itemCount:{defaultValue:null,description:"",name:"itemCount",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((arg: string) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"null"}}}}}catch{}const it=u(["relative","bg-white","flex","gap-2","p-2","items-center","cursor-pointer"],{variants:{isActive:{true:["bg-meteor-200","border-earth"],false:[]},isSelected:{true:["bg-earth-300","text-white"],false:[]}},compoundVariants:[{isActive:!0,isSelected:!0,class:["bg-earth-400"]}]}),ot=u(["flex","items-center"],{variants:{}}),ct=u(["flex","items-center"],{variants:{}}),ut=u([],{variants:{}}),dt=u([],{variants:{}}),mt=u(["mt-1","opacity-75",z["label-small"]],{variants:{}}),pt=e=>({rootClassString:it(e),leadingIconClassString:ot(e),trailingIconClassString:ct(e),labelContainerClassString:ut(e),labelClassString:dt(e),subLabelClassString:mt(e)}),U={Small:"small",Medium:"medium"},x={Standard:"standard",Shadow:"shadow"},j={SelectedSingle:"selected",SelectedMultiple:"selectedaslist",SelectedChip:"selectedaschip",Flyout:"inflyout"},ft=u(["relative","bg-white","w-72","text-night"],{variants:{type:{[x.Standard]:[L.border.focus],[x.Shadow]:["shadow-contact","focus:shadow-contact-focus","focus:outline-none",L.border.transparent]},size:{[U.Small]:[ce.h[9],"rounded-sm",z["body-small"]],[U.Medium]:[ce.h[11],"rounded-md",z.body]},hasLeadingIcon:{true:"",false:""},hasTrailingIcon:{true:"",false:""},isError:{true:"",false:""},isOpen:{true:"",false:""},...Xe,...Ze},compoundVariants:[{type:x.Standard,isError:!0,class:[L.border.error]},{type:x.Shadow,isError:!0,class:["shadow-contact-error","focus:shadow-contact-focus",L.border.transparent]},{type:x.Standard,isOpen:!0,class:[L.border.focused]},{type:x.Shadow,isOpen:!0,class:["shadow-contact-focus","outline-none",L.border.transparent]}]}),gt=e=>({rootClassString:ft(e)}),re=e=>{const{item:t,dataKeyMapping:n,isActive:a,isSelected:l,index:s,className:i,onHover:c,onSelect:y,renderItem:g}={isActive:!1,isSelected:!1,...e},p=pt({isActive:a,isSelected:l});return r.jsx("div",{className:v(p.rootClassString,i),onMouseEnter:()=>c(s),onClick:()=>y(t,s,l),children:g({item:t,classNames:p,renderContext:j.Flyout,isSelected:l,dataKeyMapping:n})})};try{re.displayName="DefaultSelectItem",re.__docgenInfo={description:"",displayName:"DefaultSelectItem",props:{dataKeyMapping:{defaultValue:null,description:"",name:"dataKeyMapping",required:!0,type:{name:"KeyMappingShape"}},index:{defaultValue:null,description:"",name:"index",required:!0,type:{name:"number"}},item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"SelectItemType"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!0,type:{name:"(index: number) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(item: SelectItemType, index: number, isSelected: boolean) => void"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"RenderItemType"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!1,type:{name:"boolean"}}}}}catch{}const yt=u(["flex-auto","flex","gap-2","items-center"],{variants:{}}),ht=u(["flex","items-center"],{variants:{}}),vt=u(["flex","items-center"],{variants:{}}),St=u([],{variants:{}}),It=u([],{variants:{}}),bt=u(["mt-1","opacity-75",z["label-small"]],{variants:{}}),xt=e=>({rootClassString:yt(e),leadingIconClassString:ht(e),trailingIconClassString:vt(e),labelContainerClassString:St(e),labelClassString:It(e),subLabelClassString:bt(e)}),le=e=>{const{selected:t,placeholder:n,dataKeyMapping:a,renderItem:l}=e,s=xt(e),i=Array.isArray(t);if(!t||i&&(t==null?void 0:t.length)===0)return r.jsx("div",{className:s.rootClassString,children:n});if(i&&(t==null?void 0:t.length)>1)return r.jsxs("div",{className:s.rootClassString,children:[t.length," items selected"]});const c=i?t[0]:t;return r.jsx("div",{className:s.rootClassString,children:l({item:c,classNames:s,renderContext:j.SelectedSingle,isSelected:!1,dataKeyMapping:a})})};try{le.displayName="DefaultSelectValue",le.__docgenInfo={description:"",displayName:"DefaultSelectValue",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"SelectItemsType | SelectItemType"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},dataKeyMapping:{defaultValue:null,description:"",name:"dataKeyMapping",required:!0,type:{name:"KeyMappingShape"}},selectAsChips:{defaultValue:null,description:"",name:"selectAsChips",required:!1,type:{name:"boolean"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!0,type:{name:"RenderItemType"}}}}}catch{}const ue=(e,t,n,a,l=!0,s=!1)=>{if(e===null)return t>0?n-1+t:a+1+t;const i=e+t;return i>a?l?s?null:n:a:i<n?l?s?null:a:n:i},je=({items:e,itemToString:t,filterValue:n=""})=>{const a=n.toLowerCase().trim();return a!==""?e.filter(s=>t(s).toLowerCase().indexOf(a)>=0):e},Ct=({items:e,selectedItems:t})=>{const n=[],a=t.map(l=>JSON.stringify(l));return e.map((l,s)=>{const i=JSON.stringify(l);a.indexOf(i)>=0&&n.push(s)}),n},H=({items:e,value:t,filterValue:n,itemToString:a})=>{const l=t?Array.isArray(t)?t:[t]:[],s=je({items:e,itemToString:a,...n?{filterValue:n}:{}});return{items:e,filterValue:n,filteredItems:s,selectedItems:l,itemCount:e.length,filteredItemCount:s.length}},Vt=({items:e,value:t,itemToString:n})=>({isOpen:!1,activeIndex:null,lastActiveIndexChangeType:"mouse",...H({items:e,value:t,itemToString:n})}),Tt=(e,t,n,a)=>a?n?{selectedItems:t.filter(l=>JSON.stringify(l)!==JSON.stringify(e)),isOpen:a}:{selectedItems:[...t,e],isOpen:a}:{selectedItems:[e],isOpen:a},wt=(e,t)=>{switch(t.type){case"SET_STATE":return{...e,...t.payload};case"SET_OPEN":return{...e,isOpen:t.payload,activeIndex:null};case"SELECT_ITEM":return{...e,...Tt(t.payload.selectedItem,e.selectedItems,t.payload.isSelected,t.payload.multi)};case"CLEAR_SELECTION":return{...e,selectedItems:[],isOpen:!1};case"SET_LAST_ACTIVE_INDEX_CHANGE_TYPE":return{...e,lastActiveIndexChangeType:t.payload};default:return e}},Et=({items:e,value:t,itemToString:n})=>{const[a,l]=o.useReducer(wt,Vt({items:e,value:t,itemToString:n})),s=je({items:e,itemToString:n,...a.filterValue?{filterValue:a.filterValue}:{}}),i=Ct({items:s,selectedItems:a.selectedItems}),c=o.useMemo(()=>d=>l({type:"SET_STATE",payload:d}),[]),y=o.useMemo(()=>d=>l({type:"SET_OPEN",payload:d}),[]),g=o.useMemo(()=>d=>l({type:"SET_LAST_ACTIVE_INDEX_CHANGE_TYPE",payload:d}),[]),p=o.useMemo(()=>d=>l({type:"SET_STATE",payload:{activeIndex:d}}),[]),I=o.useMemo(()=>()=>l({type:"SET_STATE",payload:{activeIndex:ue(a.activeIndex,1,0,s.length-1,!0,!0),isOpen:!0,lastActiveIndexChangeType:"keyboard"}}),[a,s]),w=o.useMemo(()=>()=>l({type:"SET_STATE",payload:{activeIndex:ue(a.activeIndex,-1,0,s.length-1,!0,!0),isOpen:!0,lastActiveIndexChangeType:"keyboard"}}),[a,s]),T=o.useMemo(()=>(d,W,J,X)=>l({type:"SELECT_ITEM",payload:{selectedItem:d,index:W,isSelected:J,multi:X}}),[]),E=o.useMemo(()=>()=>l({type:"CLEAR_SELECTION",payload:null}),[]),O=o.useMemo(()=>d=>{l({type:"SET_STATE",payload:H({items:e,value:t,filterValue:d,itemToString:n})})},[e,t]),G=o.useMemo(()=>()=>{l({type:"SET_STATE",payload:H({items:e,value:t,filterValue:"",itemToString:n})})},[e,t]);return o.useEffect(()=>c(H({items:e,value:t,filterValue:a.filterValue,itemToString:n})),[e,t,c]),{state:{...a,selectedIndexes:i,filteredItems:s,filteredItemCount:s.length},actions:{setState:c,setIsOpen:y,setLastActiveIndexChangeType:g,setActiveIndex:p,selectItem:T,clearSelection:E,setFilter:O,clearFilter:G,incrementActiveIndex:I,decrementActiveIndex:w}}},de="select-item-active",Nt={id:"id",label:"label",subLabel:"subLabel",value:"value",leadingIcon:"leadingIcon",trailingIcon:"trailingIcon"},Lt=e=>{switch(typeof e){case"number":case"boolean":return String(e);case"object":return Object.values(e).join("|");default:return e}},jt=(e,t)=>{switch(typeof e){case"string":case"number":case"boolean":return{label:String(e),value:e};default:return{label:e[t.label],...t.subLabel&&{subLabel:e[t.subLabel]},...t.leadingIcon&&{leadingIcon:e[t.leadingIcon]},...t.trailingIcon&&{trailingIcon:e[t.trailingIcon]},value:t.value?e[t.value]:e[t.label]}}},te=(e,t)=>typeof e=="boolean"||typeof e=="number"?null:typeof e=="string"?r.jsx(S,{className:t,icon:e}):r.jsx("span",{children:"NSI"}),At=({item:e,classNames:t,renderContext:n,dataKeyMapping:a})=>{const{label:l,leadingIcon:s,trailingIcon:i,subLabel:c}=jt(e,a);switch(n){case j.SelectedChip:return r.jsx(r.Fragment,{children:"Not Implemented"});case j.SelectedMultiple:return r.jsx("div",{className:v(t.labelContainerClassString,"flex-auto"),children:r.jsx("div",{className:v(t.labelClassString),children:String(l)})});case j.SelectedSingle:return r.jsxs(r.Fragment,{children:[s?r.jsx("div",{className:"flex-none",children:te(s,t.leadingIconClassString)}):null,r.jsx("div",{className:v(t.labelContainerClassString,"flex-auto"),children:r.jsx("div",{className:v(t.labelClassString),children:String(l)})})]});default:return r.jsxs(r.Fragment,{children:[s?r.jsx("div",{className:"flex-none",children:te(s,t.leadingIconClassString)}):null,r.jsxs("div",{className:v(t.labelContainerClassString,"flex-auto"),children:[r.jsx("div",{className:v(t.labelClassString),children:String(l)}),c?r.jsx("div",{className:v(t.subLabelClassString),children:String(c)}):null]}),i?r.jsx("div",{className:"flex-none",children:te(i,t.trailingIconClassString)}):null]})}},V=e=>{const{items:t,onChange:n,value:a,placeholder:l,className:s,multi:i,size:c,type:y,isError:g,isLoading:p,selectAsChips:I,dataKeyMapping:w,itemToString:T,renderItem:E,filterValue:O,filterPlaceholder:G,filterBehavior:d,onFilterValueChange:W,testId:J,color:X,m:Ae,mb:_e,ml:Me,mr:Oe,mt:qe,mx:Be,my:Fe,w:ke,wMax:Pe,wMin:$e,...Re}={color:"night",dataKeyMapping:Nt,filterBehavior:C.AdaptiveFilter,filterPlaceholder:"Filter...",isError:!1,isLoading:!1,itemToString:Lt,renderItem:At,multi:!1,placeholder:"Select an option...",size:U.Small,type:x.Standard,...e},F=o.useRef(null),se=o.useRef(null),ie=o.useRef(null),{state:f,actions:m}=Et({items:t,value:a,itemToString:T}),{isOpen:q,activeIndex:De,filteredItems:Z,filterValue:Ke,itemCount:Ye,selectedItems:B,selectedIndexes:Q,lastActiveIndexChangeType:ee}=f,{rootClassString:He}=gt({color:X,isError:g,isOpen:q,size:c,type:y,m:Ae,mb:_e,ml:Me,mr:Oe,mt:qe,mx:Be,my:Fe,w:ke,wMax:Pe,wMin:$e}),ze=Qe({" ":()=>{f.isOpen||m.setIsOpen(!0),typeof f.activeIndex=="number"&&m.selectItem(Z[f.activeIndex],f.activeIndex,f.selectedIndexes.includes(f.activeIndex),i)},Enter:()=>{f.isOpen||m.setIsOpen(!0),typeof f.activeIndex=="number"&&m.selectItem(Z[f.activeIndex],f.activeIndex,f.selectedIndexes.includes(f.activeIndex),i)},Escape:()=>m.setState({isOpen:!1,activeIndex:null}),ArrowDown:m.incrementActiveIndex,ArrowUp:m.decrementActiveIndex},{}),oe=et(se,de),Ue=(h,b,k)=>{m.selectItem(h,b,k,i)},Ge=h=>{ee==="mouse"&&m.setActiveIndex(h)},We=()=>m.setLastActiveIndexChangeType("mouse");return tt(()=>m.setIsOpen(!1),F),o.useEffect(()=>{n(i?B:B[0])},[B,i,n]),o.useLayoutEffect(()=>{var h,b;q?(h=ie.current)==null||h.focus():(b=F.current)==null||b.focus()},[q]),o.useLayoutEffect(()=>{ee==="keyboard"&&oe()},[ee,oe]),r.jsxs("div",{className:v(He,s),"data-testid":J,onKeyDown:ze,ref:F,tabIndex:0,...Re,children:[r.jsxs("div",{className:"flex h-full items-center justify-between gap-2 px-2",onClick:()=>m.setIsOpen(!q),children:[r.jsx(le,{dataKeyMapping:w,placeholder:l,renderItem:E,selectAsChips:I,selected:B}),i&&B.length>1?r.jsx("button",{onClick:h=>{h.stopPropagation(),m.clearSelection()},children:r.jsx(S,{as:S.asType.div,icon:S.Glyph.Cancel,size:"tiny"})}):null,r.jsx(S,{as:S.asType.div,icon:S.Glyph.CaretDown,size:"tiny"})]}),r.jsxs(ne,{onMouseMove:We,open:q,pinTo:F,ref:se,children:[r.jsx(ae,{filterBehavior:d,filterPlaceholder:G,filterValue:d===C.Search?O:Ke,itemCount:Ye??0,onChange:d===C.Search?W:m.setFilter,ref:ie}),p?r.jsx("div",{className:"align-center flex items-center justify-center p-2",children:r.jsx(S,{as:S.asType.div,className:"animate-spin",icon:S.Glyph.Spinner,color:"meteor-300",size:"small"})}):Z.map((h,b)=>{const k=b===De,Je=(Q==null?void 0:Q.indexOf(b))>=0;return r.jsx(re,{className:k?de:"",dataKeyMapping:w,index:b,isActive:k,isSelected:Je,item:h,onHover:Ge,onSelect:Ue,renderItem:E},T(h))})]})]})};V.Sizes=U;V.Types=x;V.FilterBehaviors=C;try{V.displayName="Select",V.__docgenInfo={description:"",displayName:"Select",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"SelectItemsType"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: SelectItemsType | SelectItemType) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"SelectItemsType | SelectItemType"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},multi:{defaultValue:null,description:"",name:"multi",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"shadow"'}]}},isError:{defaultValue:null,description:"",name:"isError",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},selectAsChips:{defaultValue:null,description:"",name:"selectAsChips",required:!1,type:{name:"boolean"}},dataKeyMapping:{defaultValue:null,description:"",name:"dataKeyMapping",required:!1,type:{name:"KeyMappingShape"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"RenderItemType"}},itemToString:{defaultValue:null,description:"",name:"itemToString",required:!1,type:{name:"ItemToStringType"}},filterBoxDirect:{defaultValue:null,description:"",name:"filterBoxDirect",required:!1,type:{name:"boolean"}},filterBehavior:{defaultValue:null,description:"",name:"filterBehavior",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"filter"'},{value:'"adaptiveFilter"'},{value:'"search"'}]}},filterPlaceholder:{defaultValue:null,description:"",name:"filterPlaceholder",required:!1,type:{name:"string"}},filterValue:{defaultValue:null,description:"",name:"filterValue",required:!1,type:{name:"string"}},onFilterValueChange:{defaultValue:null,description:"",name:"onFilterValueChange",required:!1,type:{name:"((filterValue: string) => void)"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | ... 14 more ...'}},wMin:{defaultValue:null,description:"",name:"wMin",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},wMax:{defaultValue:null,description:"",name:"wMax",required:!1,type:{name:'"0" | "1" | "full" | "screen" | "auto" | "1/4" | "1/3" | "1/2" | "2/3" | "3/4" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},hasLeadingIcon:{defaultValue:null,description:"",name:"hasLeadingIcon",required:!1,type:{name:"boolean | null"}},hasTrailingIcon:{defaultValue:null,description:"",name:"hasTrailingIcon",required:!1,type:{name:"boolean | null"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean | null"}}}}}catch{}const A=["First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelevth","Thirteenth","Fourteenth"],_t=[{label:"Oneth",value:1},{label:"Twoth",value:2},{label:"Thirth",value:3},{label:"Fourst",value:4}],Mt=[{label:"First",subLabel:"Pick the first item!",value:1,leadingIcon:N.Apps,trailingIcon:N.ArrowRight},{label:"Second",subLabel:"How about this one?",value:2,leadingIcon:N.Archive,trailingIcon:N.CaretRight},{label:"Third",subLabel:"This is what I have...",value:3,leadingIcon:N.Automations,trailingIcon:N.ChevronRight}],Ot=[{name:"Alice Perkins",phoneNumber:15557891420,id:17086},{name:"Edward Heigl",phoneNumber:15551470847,id:14036},{name:"James Egert",phoneNumber:15551564235,id:69148},{name:"Laura Baker",phoneNumber:15559472655,id:18365},{name:"Marty Smith",phoneNumber:15558305647,id:23523},{name:"Steven Fredrickson",phoneNumber:15558647562,id:64785}],qt=[{make:"Toyota",model:"Prius",trimLevel:"LE",modelYear:2026,color:"Wind Chill Pearl",condition:"New",price:32609,miles:0},{make:"Kia",model:"K4",trimLevel:"LXS",modelYear:2025,color:"Steel Gray",condition:"New",price:22445,miles:0},{make:"Mazda",model:"MAZDA3",trimLevel:"S Select Sport",modelYear:2025,color:"White",condition:"New",price:27315,miles:0},{make:"Subaru",model:"Impreza",trimLevel:"Base",modelYear:2025,color:"Sapphire Blue Pearl",condition:"New",price:25140,miles:0},{make:"Toyota",model:"Corolla",trimLevel:"LE",modelYear:2025,color:"Ice Cap",condition:"New",price:24409,miles:0},{make:"Nissan",model:"Versa",trimLevel:"SV",modelYear:2025,color:"Gun Metallic",condition:"Used",price:18904,miles:7796},{make:"Dodge",model:"Charger",trimLevel:"R/T",modelYear:2023,color:"White Knuckle Clearcoat",condition:"Used",price:38957,miles:13044},{make:"Subaru",model:"BRZ",trimLevel:"Limited",modelYear:2023,color:"Ice Silver Metallic",condition:"Used",price:29961,miles:6939},{make:"Toyota",model:"Camry",trimLevel:"XSE",modelYear:2023,color:"Silver",condition:"Used",price:23389,miles:61035},{make:"Nissan",model:"Sentra",trimLevel:"SV",modelYear:2022,color:"Fresh Powder",condition:"Used",price:17499,miles:42626},{make:"Ford",model:"Fusion",trimLevel:"SE",modelYear:2020,color:"Red",condition:"Used",price:16198,miles:71005},{make:"Chevrolet",model:"Trax",trimLevel:"LT",modelYear:2019,color:"Mosaic Black Metallic",condition:"Used",price:15990,miles:65806},{make:"Hyundai",model:"Elantra",trimLevel:"Value Edition",modelYear:2018,color:"Lakeside Blue",condition:"Used",price:12653,miles:95008},{make:"Hyundai",model:"Sonata",trimLevel:"Sport+",modelYear:2018,color:"Scarlet Red",condition:"Used",price:12225,miles:106501}],Wt={title:"Input/Select",component:V,parameters:{docs:{description:{component:"Styled Select box replacement with searchable dropdown"}},layout:"centered"},tags:["autodocs"],argTypes:{items:[]}},P={args:{items:A,value:[A[3],A[5]],multi:!0,onChange:()=>{},testId:"select-basic-array"},decorators:[(e,{args:t})=>{const[n,a]=o.useState(t.value);return r.jsx(e,{args:{...t,value:n,onChange:a}})}],play:async({canvasElement:e})=>{const n=await _(e).getByTestId("select-basic-array");await M(n).toBeInTheDocument()}},$={args:{items:_t,onChange:()=>{},testId:"select-array-of-objects"},decorators:[(e,{args:t})=>{const[n,a]=o.useState(t.value);return r.jsx(e,{args:{...t,value:n,onChange:a}})}],play:async({canvasElement:e})=>{const n=await _(e).getByTestId("select-array-of-objects");await M(n).toBeInTheDocument()}},R={args:{items:Mt,onChange:()=>{},testId:"select-preformatted-items"},decorators:[(e,{args:t})=>{const[n,a]=o.useState(t.value);return r.jsx(e,{args:{...t,value:n,onChange:a}})}],play:async({canvasElement:e})=>{const n=await _(e).getByTestId("select-preformatted-items");await M(n).toBeInTheDocument()}},D={args:{items:Ot,onChange:()=>{},dataKeyMapping:{label:"name",subLabel:"phoneNumber",value:"id"},testId:"select-mapped-items"},decorators:[(e,{args:t})=>{const[n,a]=o.useState(t.value);return r.jsx(e,{args:{...t,value:n,onChange:a}})}],play:async({canvasElement:e})=>{const n=await _(e).getByTestId("select-mapped-items");await M(n).toBeInTheDocument()}},K={args:{items:qt,onChange:()=>{},renderItem:({item:e,classNames:t,renderContext:n,isSelected:a})=>{const{make:l,model:s,modelYear:i,trimLevel:c,price:y,condition:g,miles:p,color:I}=e;switch(n){case j.SelectedSingle:return r.jsx("div",{className:t.labelContainerClassString,children:`${i} ${l} ${s} ${c}`});default:return r.jsxs("div",{className:t.labelContainerClassString,children:[r.jsx("div",{className:t.labelClassString,children:`${i} ${l} ${s} ${c}`}),r.jsxs("div",{className:v(t.subLabelClassString,"flex flex-wrap"),children:[r.jsxs("span",{className:"mr-2",children:["$",y]}),g==="New"?r.jsx("span",{className:`mr-2 ${a?"font-bold":"text-neptune-300"}`,children:g}):null,p!==0?r.jsxs("span",{className:"mr-2",children:[p,"mi"]}):null,r.jsx("span",{className:"mr-2",children:I})]})]})}},testId:"select-custom-renderer"},decorators:[(e,{args:t})=>{const[n,a]=o.useState(t.value);return r.jsx(e,{args:{...t,value:n,onChange:a}})}],play:async({canvasElement:e})=>{const n=await _(e).getByTestId("select-custom-renderer");await M(n).toBeInTheDocument()}},Y={args:{items:A,value:[A[3],A[5]],multi:!0,onChange:()=>{},testId:"select-with-external-search"},play:async({canvasElement:e})=>{const n=await _(e).getByTestId("select-with-external-search");await M(n).toBeInTheDocument()},render:function(t){const n=o.useRef(),a=o.useRef(),[l,s]=o.useState(t.value),[i,c]=o.useState(t.items),[y,g]=o.useState(""),[p,I]=o.useState(!1),w=T=>{n.current&&clearTimeout(n.current),a.current&&clearTimeout(a.current),g(T),n.current=setTimeout(()=>{I(!0)},200),a.current=setTimeout(()=>{const E=t.items.filter(O=>O.toLowerCase().indexOf(T)>=0);I(!1),c(E)},700)};return r.jsx(r.Fragment,{children:r.jsx(V,{...t,filterBehavior:V.FilterBehaviors.Search,filterValue:y,isLoading:p,items:i,onFilterValueChange:w,onChange:s,value:l})})}};var me,pe,fe;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    items: exampleStringItems,
    value: [exampleStringItems[3], exampleStringItems[5]],
    multi: true,
    onChange: () => {},
    testId: 'select-basic-array'
  },
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value);
    return <Story args={{
      ...args,
      value,
      onChange: setValue
    }} />;
  }],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByTestId('select-basic-array');
    await expect(select).toBeInTheDocument();
  }
}`,...(fe=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ge,ye,he;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: exampleSimpleObjects,
    onChange: () => {},
    testId: 'select-array-of-objects'
  },
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value);
    return <Story args={{
      ...args,
      value,
      onChange: setValue
    }} />;
  }],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByTestId('select-array-of-objects');
    await expect(select).toBeInTheDocument();
  }
}`,...(he=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ve,Se,Ie;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    items: examplePreformattedItems,
    onChange: () => {},
    testId: 'select-preformatted-items'
  },
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value);
    return <Story args={{
      ...args,
      value,
      onChange: setValue
    }} />;
  }],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByTestId('select-preformatted-items');
    await expect(select).toBeInTheDocument();
  }
}`,...(Ie=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var be,xe,Ce;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    items: exampleMappableItems,
    onChange: () => {},
    dataKeyMapping: {
      label: 'name',
      subLabel: 'phoneNumber',
      value: 'id'
    },
    testId: 'select-mapped-items'
  },
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value);
    return <Story args={{
      ...args,
      value,
      onChange: setValue
    }} />;
  }],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByTestId('select-mapped-items');
    await expect(select).toBeInTheDocument();
  }
}`,...(Ce=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ve,Te,we;K.parameters={...K.parameters,docs:{...(Ve=K.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    items: exampleCustomItems,
    onChange: () => {},
    renderItem: ({
      item,
      classNames,
      renderContext,
      isSelected
    }) => {
      const {
        make,
        model,
        modelYear,
        trimLevel,
        price,
        condition,
        miles,
        color
      } = item as (typeof exampleCustomItems)[number];
      switch (renderContext) {
        case SelectItemRenderingContext.SelectedSingle:
          return <div className={classNames.labelContainerClassString}>
              {\`\${modelYear} \${make} \${model} \${trimLevel}\`}
            </div>;
        default:
          return <div className={classNames.labelContainerClassString}>
              <div className={classNames.labelClassString}>
                {\`\${modelYear} \${make} \${model} \${trimLevel}\`}
              </div>
              <div className={cn(classNames.subLabelClassString, 'flex flex-wrap')}>
                <span className="mr-2">\${price}</span>
                {condition === 'New' ? <span className={\`mr-2 \${isSelected ? 'font-bold' : 'text-neptune-300'}\`}>
                    {condition}
                  </span> : null}
                {miles !== 0 ? <span className="mr-2">{miles}mi</span> : null}
                <span className="mr-2">{color}</span>
              </div>
            </div>;
      }
    },
    testId: 'select-custom-renderer'
  },
  decorators: [(Story, {
    args
  }) => {
    const [value, setValue] = useState(args.value);
    return <Story args={{
      ...args,
      value,
      onChange: setValue
    }} />;
  }],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByTestId('select-custom-renderer');
    await expect(select).toBeInTheDocument();
  }
}`,...(we=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Ee,Ne,Le;Y.parameters={...Y.parameters,docs:{...(Ee=Y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    items: exampleStringItems,
    value: [exampleStringItems[3], exampleStringItems[5]],
    multi: true,
    onChange: () => {},
    testId: 'select-with-external-search'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = await canvas.getByTestId('select-with-external-search');
    await expect(select).toBeInTheDocument();
  },
  render: function SortableTableStory(props) {
    const loadTimeout = useRef<ReturnType<typeof setTimeout>>();
    const itemsTimeout = useRef<ReturnType<typeof setTimeout>>();
    const [value, setValue] = useState(props.value);
    const [activeItems, setActiveItems] = useState(props.items);
    const [filterValue, _setFilterValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const setFilterValue = (newValue: string) => {
      if (loadTimeout.current) clearTimeout(loadTimeout.current);
      if (itemsTimeout.current) clearTimeout(itemsTimeout.current);
      _setFilterValue(newValue);
      loadTimeout.current = setTimeout(() => {
        setIsLoading(true);
      }, 200);
      itemsTimeout.current = setTimeout(() => {
        const filteredItems = props.items.filter(item => {
          return (item as string).toLowerCase().indexOf(newValue) >= 0;
        });
        setIsLoading(false);
        setActiveItems(filteredItems as Array<string>);
      }, 700);
    };
    return <>
        <Select {...props} filterBehavior={Select.FilterBehaviors.Search} filterValue={filterValue} isLoading={isLoading} items={activeItems} onFilterValueChange={setFilterValue} onChange={setValue} value={value} />
      </>;
  }
}`,...(Le=(Ne=Y.parameters)==null?void 0:Ne.docs)==null?void 0:Le.source}}};const Jt=["ArrayOfStrings","ArrayOfSimpleObjects","ArrayOfPreformattedObjects","CustomObjectsWithMapping","CustomObjectsWithCustomRenderer","ExternalSearchImplementation"];export{R as ArrayOfPreformattedObjects,$ as ArrayOfSimpleObjects,P as ArrayOfStrings,K as CustomObjectsWithCustomRenderer,D as CustomObjectsWithMapping,Y as ExternalSearchImplementation,Jt as __namedExportsOrder,Wt as default};
