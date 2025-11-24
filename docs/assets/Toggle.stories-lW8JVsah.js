import{j as i}from"./jsx-runtime-Yb_4y5hn.js";import{w as g,u as r,a as u}from"./index-CQguwI8J.js";import{e as a}from"./index-nRB-OUHH.js";import{r as we}from"./index-BwDkhjyp.js";import{d as E,b as me}from"./color.props-BsWCD9dY.js";import{m as pe}from"./height.props-DUajn6Rl.js";import{L as be}from"./Label-BDLcCDxD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./font.props-DiLDwReC.js";const c={Default:"default",Disabled:"disabled",Error:"error"},ye=E(["flex","items-center","gap-2"],{variants:{...pe}}),fe=E(["relative","inline-flex","items-center","h-5","w-8","flex-shrink-0","cursor-pointer","rounded-full","transition-colors","duration-200","ease-in-out","p-0.5"],{variants:{state:{[c.Default]:["bg-meteor-200","hover:bg-meteor-300","focus:outline-none","focus:ring-2","focus:ring-earth-300","focus:ring-offset-2"],[c.Disabled]:["bg-meteor-200","cursor-not-allowed","opacity-50"],[c.Error]:["bg-mars-200","focus:outline-none","focus:ring-2","focus:ring-mars-300","focus:ring-offset-2"]},checked:{true:"",false:""}},compoundVariants:[{state:c.Default,checked:!0,class:"bg-neptune-300 hover:bg-meteor-200"},{state:c.Error,checked:!0,class:"bg-mars-300"},{state:c.Disabled,checked:!0,class:"bg-meteor-200"}]}),Te=E(["pointer-events-none","inline-block","h-4","w-4","transform","rounded-full","shadow-lg","ring-0","transition","duration-200","ease-in-out"],{variants:{checked:{true:"translate-x-[12px]",false:"translate-x-0"},state:{[c.Default]:"bg-white",[c.Disabled]:"bg-meteor-400",[c.Error]:"bg-white"}}}),ke=E(["select-none","cursor-pointer","leading-tight","text-sm"],{variants:{state:{[c.Default]:["text-night"],[c.Disabled]:["cursor-not-allowed","opacity-50"],[c.Error]:["text-mars-300"]}}}),ve=s=>({containerClassString:ye(s),trackClassString:fe(s),thumbClassString:Te(s),labelClassString:ke(s)}),l=s=>{const{className:n,state:t,label:e,testId:o,checked:d,defaultChecked:h,onChange:I,m:te,mx:ae,my:ne,mt:se,mb:ce,mr:le,ml:ie,...A}={state:c.Default,...s},[oe,re]=we.useState(h||d||!1),S=d!==void 0,w=S?d:oe,{containerClassString:ge,trackClassString:de,thumbClassString:ue,labelClassString:he}=ve({m:te,mx:ae,my:ne,mt:se,mb:ce,ml:ie,mr:le,state:t,checked:w}),x=t===c.Disabled,m=A.id||`toggle-${o||"default"}`,C=D=>{S||re(D.target.checked),I==null||I(D)};return i.jsxs("div",{className:me(ge,n),"data-testid":o,children:[i.jsxs("button",{type:"button",role:"switch","aria-checked":w,"aria-labelledby":e?`${m}-label`:void 0,className:de,disabled:x,onClick:()=>{x||C({target:{checked:!w},currentTarget:{checked:!w}})},children:[i.jsx("span",{className:ue}),i.jsx("input",{type:"checkbox",id:m,className:"sr-only",checked:w,disabled:x,onChange:C,...A})]}),e&&i.jsx(be,{id:`${m}-label`,htmlFor:m,className:he,children:e})]})};l.State=c;try{l.displayName="Toggle",l.__docgenInfo={description:"",displayName:"Toggle",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"disabled"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>) => void)"}},m:{defaultValue:null,description:"",name:"m",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mx:{defaultValue:null,description:"",name:"mx",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},my:{defaultValue:null,description:"",name:"my",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mt:{defaultValue:null,description:"",name:"mt",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mr:{defaultValue:null,description:"",name:"mr",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},mb:{defaultValue:null,description:"",name:"mb",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}},ml:{defaultValue:null,description:"",name:"ml",required:!1,type:{name:'"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | null'}}}}}catch{}const je={title:"Input/Toggle",component:l,parameters:{docs:{description:{component:"A toggle switch component with different states (default, disabled, error). Also known as a switch or toggle button."}},layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:Object.values(l.State),description:"State of the toggle",defaultValue:l.State.Default},label:{control:"text",description:"Label text for the toggle"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)"}}},p={args:{label:"Enable notifications",testId:"toggle-default"},play:async({canvasElement:s,step:n})=>{const t=g(s);await n("Toggle is rendered",async()=>{const e=t.getByTestId("toggle-default");await a(e).toBeInTheDocument()}),await n("Toggle is not checked by default",async()=>{const e=t.getByRole("switch");await a(e).toHaveAttribute("aria-checked","false")}),await n("Label is rendered",async()=>{const e=t.getByText("Enable notifications");await a(e).toBeInTheDocument()}),await n("Toggle can be clicked to turn on",async()=>{const e=t.getByRole("switch");await r.click(e),await u(()=>{a(e).toHaveAttribute("aria-checked","true")})}),await n("Toggle can be clicked to turn off",async()=>{const e=t.getByRole("switch");await r.click(e),await u(()=>{a(e).toHaveAttribute("aria-checked","false")})})}},b={args:{label:"Pre-checked toggle",defaultChecked:!0,testId:"toggle-checked"},play:async({canvasElement:s,step:n})=>{const t=g(s);await n("Toggle is rendered",async()=>{const e=t.getByTestId("toggle-checked");await a(e).toBeInTheDocument()}),await n("Toggle is checked by default",async()=>{const e=t.getByRole("switch");await a(e).toHaveAttribute("aria-checked","true")}),await n("Toggle can be turned off",async()=>{const e=t.getByRole("switch");await r.click(e),await u(()=>{a(e).toHaveAttribute("aria-checked","false")})})}},y={args:{state:l.State.Disabled,label:"Disabled toggle",testId:"toggle-disabled"},play:async({canvasElement:s,step:n})=>{const t=g(s);await n("Toggle is rendered",async()=>{const e=t.getByTestId("toggle-disabled");await a(e).toBeInTheDocument()}),await n("Toggle is disabled",async()=>{const e=t.getByRole("switch");await a(e).toBeDisabled()}),await n("Disabled toggle cannot be clicked",async()=>{const e=t.getByRole("switch"),o=e.getAttribute("aria-checked");await r.click(e),await a(e).toHaveAttribute("aria-checked",o)})}},f={args:{state:l.State.Disabled,label:"Disabled checked toggle",defaultChecked:!0,testId:"toggle-disabled-checked"},play:async({canvasElement:s,step:n})=>{const t=g(s);await n("Toggle is rendered",async()=>{const e=t.getByTestId("toggle-disabled-checked");await a(e).toBeInTheDocument()}),await n("Toggle is both disabled and checked",async()=>{const e=t.getByRole("switch");await a(e).toBeDisabled(),await a(e).toHaveAttribute("aria-checked","true")})}},T={args:{state:l.State.Error,label:"Toggle with error",testId:"toggle-error"},play:async({canvasElement:s,step:n})=>{const t=g(s);await n("Toggle is rendered",async()=>{const e=t.getByTestId("toggle-error");await a(e).toBeInTheDocument()}),await n("Toggle is not disabled in error state",async()=>{const e=t.getByRole("switch");await a(e).not.toBeDisabled()}),await n("Toggle can still be clicked in error state",async()=>{const e=t.getByRole("switch");await r.click(e),await u(()=>{a(e).toHaveAttribute("aria-checked","true")})})}},k={args:{state:l.State.Error,label:"Toggle with error (checked)",defaultChecked:!0,testId:"toggle-error-checked"},play:async({canvasElement:s,step:n})=>{const t=g(s);await n("Toggle is rendered",async()=>{const e=t.getByTestId("toggle-error-checked");await a(e).toBeInTheDocument()}),await n("Toggle is checked and in error state",async()=>{const e=t.getByRole("switch");await a(e).toHaveAttribute("aria-checked","true"),await a(e).not.toBeDisabled()}),await n("Toggle can be turned off",async()=>{const e=t.getByRole("switch");await r.click(e),await u(()=>{a(e).toHaveAttribute("aria-checked","false")})})}},v={args:{testId:"toggle-no-label"},play:async({canvasElement:s,step:n})=>{const t=g(s);await n("Toggle is rendered without label",async()=>{const e=t.getByTestId("toggle-no-label");await a(e).toBeInTheDocument()}),await n("Toggle switch is accessible",async()=>{const e=t.getByRole("switch");await a(e).toBeInTheDocument()}),await n("Toggle functions without label",async()=>{const e=t.getByRole("switch");await r.click(e),await u(()=>{a(e).toHaveAttribute("aria-checked","true")})})}},B={render:()=>i.jsxs("div",{className:"flex flex-col gap-3",children:[i.jsx(l,{label:"Email notifications",defaultChecked:!0,testId:"toggle-email"}),i.jsx(l,{label:"Push notifications",testId:"toggle-push"}),i.jsx(l,{label:"SMS notifications",defaultChecked:!0,testId:"toggle-sms"}),i.jsx(l,{label:"In-app notifications",state:l.State.Disabled,testId:"toggle-inapp"})]}),play:async({canvasElement:s,step:n})=>{const t=g(s);await n("All toggles are rendered",async()=>{const e=t.getByTestId("toggle-email"),o=t.getByTestId("toggle-push"),d=t.getByTestId("toggle-sms"),h=t.getByTestId("toggle-inapp");await a(e).toBeInTheDocument(),await a(o).toBeInTheDocument(),await a(d).toBeInTheDocument(),await a(h).toBeInTheDocument()}),await n("First and third toggles are checked by default",async()=>{const e=t.getAllByRole("switch");await a(e[0]).toHaveAttribute("aria-checked","true"),await a(e[1]).toHaveAttribute("aria-checked","false"),await a(e[2]).toHaveAttribute("aria-checked","true")}),await n("Last toggle is disabled",async()=>{const e=t.getAllByRole("switch");await a(e[3]).toBeDisabled()}),await n("Can interact with enabled toggles",async()=>{const e=t.getAllByRole("switch");await r.click(e[1]),await u(()=>{a(e[1]).toHaveAttribute("aria-checked","true")})}),await n("All labels are displayed correctly",async()=>{const e=t.getByText("Email notifications"),o=t.getByText("Push notifications"),d=t.getByText("SMS notifications"),h=t.getByText("In-app notifications");await a(e).toBeInTheDocument(),await a(o).toBeInTheDocument(),await a(d).toBeInTheDocument(),await a(h).toBeInTheDocument()})}};var R,H,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    testId: 'toggle-default'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-default');
      await expect(toggle).toBeInTheDocument();
    });
    await step('Toggle is not checked by default', async () => {
      const switchElement = canvas.getByRole('switch');
      await expect(switchElement).toHaveAttribute('aria-checked', 'false');
    });
    await step('Label is rendered', async () => {
      const label = canvas.getByText('Enable notifications');
      await expect(label).toBeInTheDocument();
    });
    await step('Toggle can be clicked to turn on', async () => {
      const switchElement = canvas.getByRole('switch');
      await userEvent.click(switchElement);
      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'true');
      });
    });
    await step('Toggle can be clicked to turn off', async () => {
      const switchElement = canvas.getByRole('switch');
      await userEvent.click(switchElement);
      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'false');
      });
    });
  }
}`,...(L=(H=p.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var V,q,j;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Pre-checked toggle',
    defaultChecked: true,
    testId: 'toggle-checked'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-checked');
      await expect(toggle).toBeInTheDocument();
    });
    await step('Toggle is checked by default', async () => {
      const switchElement = canvas.getByRole('switch');
      await expect(switchElement).toHaveAttribute('aria-checked', 'true');
    });
    await step('Toggle can be turned off', async () => {
      const switchElement = canvas.getByRole('switch');
      await userEvent.click(switchElement);
      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'false');
      });
    });
  }
}`,...(j=(q=b.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var N,F,_;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    state: Toggle.State.Disabled,
    label: 'Disabled toggle',
    testId: 'toggle-disabled'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-disabled');
      await expect(toggle).toBeInTheDocument();
    });
    await step('Toggle is disabled', async () => {
      const switchElement = canvas.getByRole('switch');
      await expect(switchElement).toBeDisabled();
    });
    await step('Disabled toggle cannot be clicked', async () => {
      const switchElement = canvas.getByRole('switch');
      const initialState = switchElement.getAttribute('aria-checked');
      await userEvent.click(switchElement);

      // State should not change because it's disabled
      await expect(switchElement).toHaveAttribute('aria-checked', initialState);
    });
  }
}`,...(_=(F=y.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var P,M,$;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    state: Toggle.State.Disabled,
    label: 'Disabled checked toggle',
    defaultChecked: true,
    testId: 'toggle-disabled-checked'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-disabled-checked');
      await expect(toggle).toBeInTheDocument();
    });
    await step('Toggle is both disabled and checked', async () => {
      const switchElement = canvas.getByRole('switch');
      await expect(switchElement).toBeDisabled();
      await expect(switchElement).toHaveAttribute('aria-checked', 'true');
    });
  }
}`,...($=(M=f.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var O,W,z;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    state: Toggle.State.Error,
    label: 'Toggle with error',
    testId: 'toggle-error'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-error');
      await expect(toggle).toBeInTheDocument();
    });
    await step('Toggle is not disabled in error state', async () => {
      const switchElement = canvas.getByRole('switch');
      await expect(switchElement).not.toBeDisabled();
    });
    await step('Toggle can still be clicked in error state', async () => {
      const switchElement = canvas.getByRole('switch');
      await userEvent.click(switchElement);
      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'true');
      });
    });
  }
}`,...(z=(W=T.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var G,J,K;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    state: Toggle.State.Error,
    label: 'Toggle with error (checked)',
    defaultChecked: true,
    testId: 'toggle-error-checked'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Toggle is rendered', async () => {
      const toggle = canvas.getByTestId('toggle-error-checked');
      await expect(toggle).toBeInTheDocument();
    });
    await step('Toggle is checked and in error state', async () => {
      const switchElement = canvas.getByRole('switch');
      await expect(switchElement).toHaveAttribute('aria-checked', 'true');
      await expect(switchElement).not.toBeDisabled();
    });
    await step('Toggle can be turned off', async () => {
      const switchElement = canvas.getByRole('switch');
      await userEvent.click(switchElement);
      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'false');
      });
    });
  }
}`,...(K=(J=k.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    testId: 'toggle-no-label'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Toggle is rendered without label', async () => {
      const toggle = canvas.getByTestId('toggle-no-label');
      await expect(toggle).toBeInTheDocument();
    });
    await step('Toggle switch is accessible', async () => {
      const switchElement = canvas.getByRole('switch');
      await expect(switchElement).toBeInTheDocument();
    });
    await step('Toggle functions without label', async () => {
      const switchElement = canvas.getByRole('switch');
      await userEvent.click(switchElement);
      await waitFor(() => {
        expect(switchElement).toHaveAttribute('aria-checked', 'true');
      });
    });
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Toggle label="Email notifications" defaultChecked testId="toggle-email" />
      <Toggle label="Push notifications" testId="toggle-push" />
      <Toggle label="SMS notifications" defaultChecked testId="toggle-sms" />
      <Toggle label="In-app notifications" state={Toggle.State.Disabled} testId="toggle-inapp" />
    </div>,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('All toggles are rendered', async () => {
      const emailToggle = canvas.getByTestId('toggle-email');
      const pushToggle = canvas.getByTestId('toggle-push');
      const smsToggle = canvas.getByTestId('toggle-sms');
      const inappToggle = canvas.getByTestId('toggle-inapp');
      await expect(emailToggle).toBeInTheDocument();
      await expect(pushToggle).toBeInTheDocument();
      await expect(smsToggle).toBeInTheDocument();
      await expect(inappToggle).toBeInTheDocument();
    });
    await step('First and third toggles are checked by default', async () => {
      const switches = canvas.getAllByRole('switch');
      await expect(switches[0]).toHaveAttribute('aria-checked', 'true');
      await expect(switches[1]).toHaveAttribute('aria-checked', 'false');
      await expect(switches[2]).toHaveAttribute('aria-checked', 'true');
    });
    await step('Last toggle is disabled', async () => {
      const switches = canvas.getAllByRole('switch');
      await expect(switches[3]).toBeDisabled();
    });
    await step('Can interact with enabled toggles', async () => {
      const switches = canvas.getAllByRole('switch');

      // Click second toggle
      await userEvent.click(switches[1]);
      await waitFor(() => {
        expect(switches[1]).toHaveAttribute('aria-checked', 'true');
      });
    });
    await step('All labels are displayed correctly', async () => {
      const emailLabel = canvas.getByText('Email notifications');
      const pushLabel = canvas.getByText('Push notifications');
      const smsLabel = canvas.getByText('SMS notifications');
      const inappLabel = canvas.getByText('In-app notifications');
      await expect(emailLabel).toBeInTheDocument();
      await expect(pushLabel).toBeInTheDocument();
      await expect(smsLabel).toBeInTheDocument();
      await expect(inappLabel).toBeInTheDocument();
    });
  }
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ne=["Default","Checked","Disabled","DisabledChecked","Error","ErrorChecked","WithoutLabel","MultipleToggles"];export{b as Checked,p as Default,y as Disabled,f as DisabledChecked,T as Error,k as ErrorChecked,B as MultipleToggles,v as WithoutLabel,Ne as __namedExportsOrder,je as default};
