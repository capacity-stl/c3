import{j as s}from"./jsx-runtime-Yb_4y5hn.js";import{w as r,u as h,a as i}from"./index-CQguwI8J.js";import{e as n}from"./index-nRB-OUHH.js";import{r as M}from"./index-BwDkhjyp.js";import{d as R,b as E}from"./color.props-BsWCD9dY.js";import{m as ve}from"./height.props-DUajn6Rl.js";import{I as u}from"./Icon-OWY7pxpf.js";import{L as Ce}from"./Label-BDLcCDxD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./font.props-DiLDwReC.js";const l={Default:"default",Disabled:"disabled",Error:"error"},Te=R(["flex","items-center","gap-2"],{variants:{...ve}}),De=R(["appearance-none","border-2","border-solid","rounded-xs","cursor-pointer","transition-all","duration-200","flex","items-center","justify-center","relative","bg-white","flex-shrink-0","w-5","h-5"],{variants:{state:{[l.Default]:["border-meteor-300","hover:border-earth-300","focus:outline-none","focus:shadow-outline-focus","checked:bg-earth-300","checked:border-earth-300"],[l.Disabled]:["border-meteor-200","cursor-not-allowed","opacity-50","checked:bg-meteor-200","checked:border-meteor-200"],[l.Error]:["border-mars-300","focus:outline-none","focus:shadow-outline-error","checked:bg-mars-300","checked:border-mars-300"]}}}),Ee=R(["select-none","cursor-pointer","leading-tight"],{variants:{state:{[l.Default]:[],[l.Disabled]:["cursor-not-allowed","opacity-50"],[l.Error]:["text-mars-300"]}}}),Re=c=>({containerClassString:Te(c),checkboxClassString:De(c),labelClassString:Ee(c)}),o=c=>{const{className:a,state:t,label:e,testId:d,checked:b,defaultChecked:T,indeterminate:k,onChange:be,m:ke,mx:ue,my:pe,mt:xe,mb:me,mr:ye,ml:we,...S}={state:l.Default,indeterminate:!1,...c},D=M.useRef(null),{containerClassString:Be,checkboxClassString:Ie,labelClassString:ge}=Re({m:ke,mx:ue,my:pe,mt:xe,mb:me,ml:we,mr:ye,state:t}),fe=t===l.Disabled,L=S.id||`checkbox-${d||"default"}`;return M.useEffect(()=>{D.current&&(D.current.indeterminate=k||!1)},[k]),s.jsxs("div",{className:E(Be,a),"data-testid":d,children:[s.jsxs("div",{className:"relative",children:[s.jsx("input",{ref:D,type:"checkbox",id:L,className:E(Ie,"peer"),disabled:fe,checked:b,defaultChecked:T,onChange:be,...S}),s.jsx(u,{icon:u.Glyph.Check,size:"tiny",color:"white",className:E("pointer-events-none absolute inset-0 m-auto transition-opacity",k?"opacity-0":"opacity-0 peer-checked:opacity-100")}),k&&s.jsx(u,{icon:u.Glyph.Minus,size:"tiny",color:"white",className:"pointer-events-none absolute inset-0 m-auto opacity-100 transition-opacity"})]}),e&&s.jsx(Ce,{htmlFor:L,className:ge,children:e})]})};o.State=l;try{o.displayName="Checkbox",o.__docgenInfo={description:"",displayName:"Checkbox",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"disabled"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}}}}}catch{}const Ge={title:"Input/Checkbox",component:o,parameters:{docs:{description:{component:"A customizable checkbox component with different states (default, disabled, error) and support for indeterminate state."}},layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:Object.values(o.State),description:"State of the checkbox",defaultValue:o.State.Default},label:{control:"text",description:"Label text for the checkbox"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)"},indeterminate:{control:"boolean",description:"Indeterminate state (partially checked)"}}},p={args:{label:"Accept terms and conditions",testId:"checkbox-default"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-default");await n(e).toBeInTheDocument()}),await a("Checkbox is not checked by default",async()=>{const e=t.getByRole("checkbox");await n(e.checked).toBe(!1)}),await a("Label is rendered",async()=>{const e=t.getByText("Accept terms and conditions");await n(e).toBeInTheDocument()}),await a("Checkbox can be clicked to check",async()=>{const e=t.getByRole("checkbox");await h.click(e),await i(()=>{n(e.checked).toBe(!0)})}),await a("Checkbox can be clicked to uncheck",async()=>{const e=t.getByRole("checkbox");await h.click(e),await i(()=>{n(e.checked).toBe(!1)})})}},x={args:{label:"Pre-checked checkbox",defaultChecked:!0,testId:"checkbox-checked"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-checked");await n(e).toBeInTheDocument()}),await a("Checkbox is checked by default",async()=>{const e=t.getByRole("checkbox");await n(e.checked).toBe(!0)}),await a("Checkbox can be unchecked",async()=>{const e=t.getByRole("checkbox");await h.click(e),await i(()=>{n(e.checked).toBe(!1)})})}},m={args:{state:o.State.Disabled,label:"Disabled checkbox",testId:"checkbox-disabled"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-disabled");await n(e).toBeInTheDocument()}),await a("Checkbox is disabled",async()=>{const e=t.getByRole("checkbox");await n(e.disabled).toBe(!0)}),await a("Disabled checkbox cannot be clicked",async()=>{const e=t.getByRole("checkbox"),d=e.checked;await h.click(e),await n(e.checked).toBe(d)})}},y={args:{state:o.State.Disabled,label:"Disabled checked checkbox",defaultChecked:!0,testId:"checkbox-disabled-checked"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-disabled-checked");await n(e).toBeInTheDocument()}),await a("Checkbox is both disabled and checked",async()=>{const e=t.getByRole("checkbox");await n(e.disabled).toBe(!0),await n(e.checked).toBe(!0)})}},w={args:{state:o.State.Error,label:"Checkbox with error",testId:"checkbox-error"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-error");await n(e).toBeInTheDocument()}),await a("Checkbox is not disabled in error state",async()=>{const e=t.getByRole("checkbox");await n(e.disabled).toBe(!1)}),await a("Checkbox can still be clicked in error state",async()=>{const e=t.getByRole("checkbox");await h.click(e),await i(()=>{n(e.checked).toBe(!0)})})}},B={args:{testId:"checkbox-no-label"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered without label",async()=>{const e=t.getByTestId("checkbox-no-label");await n(e).toBeInTheDocument()}),await a("Checkbox input is accessible",async()=>{const e=t.getByRole("checkbox");await n(e).toBeInTheDocument()}),await a("Checkbox functions without label",async()=>{const e=t.getByRole("checkbox");await h.click(e),await i(()=>{n(e.checked).toBe(!0)})})}},I={args:{label:"Indeterminate checkbox",indeterminate:!0,testId:"checkbox-indeterminate"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-indeterminate");await n(e).toBeInTheDocument()}),await a("Checkbox is in indeterminate state",async()=>{const e=t.getByRole("checkbox");await i(()=>{n(e.indeterminate).toBe(!0)})}),await a("Label text is rendered",async()=>{const e=t.getByText("Indeterminate checkbox");await n(e).toBeInTheDocument()})}},g={args:{label:"Indeterminate with error",indeterminate:!0,state:o.State.Error,testId:"checkbox-indeterminate-error"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-indeterminate-error");await n(e).toBeInTheDocument()}),await a("Checkbox is indeterminate and in error state",async()=>{const e=t.getByRole("checkbox");await i(()=>{n(e.indeterminate).toBe(!0)}),await n(e.disabled).toBe(!1)})}},f={args:{label:"Indeterminate disabled",indeterminate:!0,state:o.State.Disabled,testId:"checkbox-indeterminate-disabled"},play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-indeterminate-disabled");await n(e).toBeInTheDocument()}),await a("Checkbox is both indeterminate and disabled",async()=>{const e=t.getByRole("checkbox");await i(()=>{n(e.indeterminate).toBe(!0)}),await n(e.disabled).toBe(!0)})}},v={render:()=>s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsx(o,{label:"Option 1",defaultChecked:!0,testId:"checkbox-option-1"}),s.jsx(o,{label:"Option 2",testId:"checkbox-option-2"}),s.jsx(o,{label:"Option 3",testId:"checkbox-option-3"}),s.jsx(o,{label:"Option 4",state:o.State.Disabled,testId:"checkbox-option-4"})]}),play:async({canvasElement:c,step:a})=>{const t=r(c);await a("All checkboxes are rendered",async()=>{const e=t.getByTestId("checkbox-option-1"),d=t.getByTestId("checkbox-option-2"),b=t.getByTestId("checkbox-option-3"),T=t.getByTestId("checkbox-option-4");await n(e).toBeInTheDocument(),await n(d).toBeInTheDocument(),await n(b).toBeInTheDocument(),await n(T).toBeInTheDocument()}),await a("First checkbox is checked by default",async()=>{const e=t.getAllByRole("checkbox");await n(e[0].checked).toBe(!0)}),await a("Last checkbox is disabled",async()=>{const e=t.getAllByRole("checkbox");await n(e[3].disabled).toBe(!0)}),await a("Can interact with enabled checkboxes",async()=>{const e=t.getAllByRole("checkbox");await h.click(e[1]),await i(()=>{n(e[1].checked).toBe(!0)})})}},C={render:()=>s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsx(o,{label:"Select All",indeterminate:!0,testId:"checkbox-parent"}),s.jsxs("div",{className:"ml-6 flex flex-col gap-2",children:[s.jsx(o,{label:"Child Option 1",defaultChecked:!0,testId:"checkbox-child-1"}),s.jsx(o,{label:"Child Option 2",testId:"checkbox-child-2"}),s.jsx(o,{label:"Child Option 3",testId:"checkbox-child-3"})]})]}),play:async({canvasElement:c,step:a})=>{const t=r(c);await a("Parent checkbox is rendered",async()=>{const e=t.getByTestId("checkbox-parent");await n(e).toBeInTheDocument()}),await a("All child checkboxes are rendered",async()=>{const e=t.getByTestId("checkbox-child-1"),d=t.getByTestId("checkbox-child-2"),b=t.getByTestId("checkbox-child-3");await n(e).toBeInTheDocument(),await n(d).toBeInTheDocument(),await n(b).toBeInTheDocument()}),await a("Parent checkbox is in indeterminate state",async()=>{const e=t.getAllByRole("checkbox");await i(()=>{n(e[0].indeterminate).toBe(!0)})}),await a("First child is checked by default",async()=>{const e=t.getAllByRole("checkbox");await n(e[1].checked).toBe(!0)}),await a("Can interact with child checkboxes",async()=>{const e=t.getAllByRole("checkbox");await h.click(e[2]),await i(()=>{n(e[2].checked).toBe(!0)})})}};var A,H,j;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    testId: 'checkbox-default'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-default');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is not checked by default', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await expect(input.checked).toBe(false);
    });
    await step('Label is rendered', async () => {
      const label = canvas.getByText('Accept terms and conditions');
      await expect(label).toBeInTheDocument();
    });
    await step('Checkbox can be clicked to check', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await userEvent.click(input);
      await waitFor(() => {
        expect(input.checked).toBe(true);
      });
    });
    await step('Checkbox can be clicked to uncheck', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await userEvent.click(input);
      await waitFor(() => {
        expect(input.checked).toBe(false);
      });
    });
  }
}`,...(j=(H=p.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var V,F,N;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Pre-checked checkbox',
    defaultChecked: true,
    testId: 'checkbox-checked'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-checked');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is checked by default', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await expect(input.checked).toBe(true);
    });
    await step('Checkbox can be unchecked', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await userEvent.click(input);
      await waitFor(() => {
        expect(input.checked).toBe(false);
      });
    });
  }
}`,...(N=(F=x.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var O,q,P;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    state: Checkbox.State.Disabled,
    label: 'Disabled checkbox',
    testId: 'checkbox-disabled'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-disabled');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is disabled', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await expect(input.disabled).toBe(true);
    });
    await step('Disabled checkbox cannot be clicked', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      const initialState = input.checked;
      await userEvent.click(input);

      // State should not change because it's disabled
      await expect(input.checked).toBe(initialState);
    });
  }
}`,...(P=(q=m.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var _,z,G;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: Checkbox.State.Disabled,
    label: 'Disabled checked checkbox',
    defaultChecked: true,
    testId: 'checkbox-disabled-checked'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-disabled-checked');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is both disabled and checked', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await expect(input.disabled).toBe(true);
      await expect(input.checked).toBe(true);
    });
  }
}`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var W,$,J;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    state: Checkbox.State.Error,
    label: 'Checkbox with error',
    testId: 'checkbox-error'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-error');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is not disabled in error state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await expect(input.disabled).toBe(false);
    });
    await step('Checkbox can still be clicked in error state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await userEvent.click(input);
      await waitFor(() => {
        expect(input.checked).toBe(true);
      });
    });
  }
}`,...(J=($=w.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,U;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    testId: 'checkbox-no-label'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered without label', async () => {
      const checkbox = canvas.getByTestId('checkbox-no-label');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox input is accessible', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await expect(input).toBeInTheDocument();
    });
    await step('Checkbox functions without label', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await userEvent.click(input);
      await waitFor(() => {
        expect(input.checked).toBe(true);
      });
    });
  }
}`,...(U=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
    testId: 'checkbox-indeterminate'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-indeterminate');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is in indeterminate state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input.indeterminate).toBe(true);
      });
    });
    await step('Label text is rendered', async () => {
      const label = canvas.getByText('Indeterminate checkbox');
      await expect(label).toBeInTheDocument();
    });
  }
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate with error',
    indeterminate: true,
    state: Checkbox.State.Error,
    testId: 'checkbox-indeterminate-error'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-indeterminate-error');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is indeterminate and in error state', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input.indeterminate).toBe(true);
      });
      await expect(input.disabled).toBe(false);
    });
  }
}`,...(ae=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,ce,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate disabled',
    indeterminate: true,
    state: Checkbox.State.Disabled,
    testId: 'checkbox-indeterminate-disabled'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Checkbox is rendered', async () => {
      const checkbox = canvas.getByTestId('checkbox-indeterminate-disabled');
      await expect(checkbox).toBeInTheDocument();
    });
    await step('Checkbox is both indeterminate and disabled', async () => {
      const input = canvas.getByRole('checkbox') as HTMLInputElement;
      await waitFor(() => {
        expect(input.indeterminate).toBe(true);
      });
      await expect(input.disabled).toBe(true);
    });
  }
}`,...(oe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var se,ie,re;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Option 1" defaultChecked testId="checkbox-option-1" />
      <Checkbox label="Option 2" testId="checkbox-option-2" />
      <Checkbox label="Option 3" testId="checkbox-option-3" />
      <Checkbox label="Option 4" state={Checkbox.State.Disabled} testId="checkbox-option-4" />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('All checkboxes are rendered', async () => {
      const option1 = canvas.getByTestId('checkbox-option-1');
      const option2 = canvas.getByTestId('checkbox-option-2');
      const option3 = canvas.getByTestId('checkbox-option-3');
      const option4 = canvas.getByTestId('checkbox-option-4');
      await expect(option1).toBeInTheDocument();
      await expect(option2).toBeInTheDocument();
      await expect(option3).toBeInTheDocument();
      await expect(option4).toBeInTheDocument();
    });
    await step('First checkbox is checked by default', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[];
      await expect(checkboxes[0].checked).toBe(true);
    });
    await step('Last checkbox is disabled', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[];
      await expect(checkboxes[3].disabled).toBe(true);
    });
    await step('Can interact with enabled checkboxes', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[];

      // Click second checkbox
      await userEvent.click(checkboxes[1]);
      await waitFor(() => {
        expect(checkboxes[1].checked).toBe(true);
      });
    });
  }
}`,...(re=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,de,he;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Checkbox label="Select All" indeterminate={true} testId="checkbox-parent" />
      <div className="ml-6 flex flex-col gap-2">
        <Checkbox label="Child Option 1" defaultChecked testId="checkbox-child-1" />
        <Checkbox label="Child Option 2" testId="checkbox-child-2" />
        <Checkbox label="Child Option 3" testId="checkbox-child-3" />
      </div>
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Parent checkbox is rendered', async () => {
      const parent = canvas.getByTestId('checkbox-parent');
      await expect(parent).toBeInTheDocument();
    });
    await step('All child checkboxes are rendered', async () => {
      const child1 = canvas.getByTestId('checkbox-child-1');
      const child2 = canvas.getByTestId('checkbox-child-2');
      const child3 = canvas.getByTestId('checkbox-child-3');
      await expect(child1).toBeInTheDocument();
      await expect(child2).toBeInTheDocument();
      await expect(child3).toBeInTheDocument();
    });
    await step('Parent checkbox is in indeterminate state', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[];
      await waitFor(() => {
        expect(checkboxes[0].indeterminate).toBe(true);
      });
    });
    await step('First child is checked by default', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[];
      await expect(checkboxes[1].checked).toBe(true);
    });
    await step('Can interact with child checkboxes', async () => {
      const checkboxes = canvas.getAllByRole('checkbox') as HTMLInputElement[];

      // Click second child checkbox
      await userEvent.click(checkboxes[2]);
      await waitFor(() => {
        expect(checkboxes[2].checked).toBe(true);
      });
    });
  }
}`,...(he=(de=C.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};const We=["Default","Checked","Disabled","DisabledChecked","Error","WithoutLabel","Indeterminate","IndeterminateError","IndeterminateDisabled","MultipleCheckboxes","ParentChildExample"];export{x as Checked,p as Default,m as Disabled,y as DisabledChecked,w as Error,I as Indeterminate,f as IndeterminateDisabled,g as IndeterminateError,v as MultipleCheckboxes,C as ParentChildExample,B as WithoutLabel,We as __namedExportsOrder,Ge as default};
