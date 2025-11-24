import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{w as c}from"./index-CQguwI8J.js";import{e as s}from"./index-nRB-OUHH.js";import{d as Be,b as m}from"./color.props-BsWCD9dY.js";import{A as xe}from"./Avatar-FcDLnJsz.js";import{T as p}from"./Text-BCZ0rRg4.js";import{I as u}from"./Icon-OWY7pxpf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";import"./index-DcfKkSlL.js";import"./shape.props-BOtns5vy.js";import"./height.props-DUajn6Rl.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./border.props-MxdHQtLV.js";import"./font.props-DiLDwReC.js";const ge={Sent:"sent",Received:"received"},Ie={type:{sent:"bg-earth-50 rounded-[20px] rounded-tl-[4px] p-3",received:"bg-earth-100 rounded-[20px] rounded-tr-[4px] p-3"}},fe=Be("inline-block max-w-md text-sm leading-5",{variants:{...Ie},defaultVariants:{type:"sent"}}),Se=()=>o.jsxs("div",{className:"flex space-x-1",children:[o.jsx("span",{className:"h-1.5 w-1.5 animate-bounceDot1 rounded-full bg-meteor-400"}),o.jsx("span",{className:"h-1.5 w-1.5 animate-bounceDot2 rounded-full bg-meteor-400"}),o.jsx("span",{className:"h-1.5 w-1.5 animate-bounceDot3 rounded-full bg-meteor-400"})]}),n=({message:r,userName:a,type:e=ge.Sent,loading:t=!1,avatarSrc:i,avatarInitials:L,avatarBgColor:ye,testId:d="chat-bubble",className:we,topLabel:k,bottomLabel:J,onThumbUpClick:D,onThumbDownClick:N})=>{const l=e==="received",Te=i||L;return o.jsxs("div",{className:m("flex w-full gap-3",l?"flex-row-reverse":"flex-row",we),"data-testid":d,children:[Te&&o.jsx(xe,{src:i,size:"medium",bgColor:ye,testId:`${d}-avatar`,className:"mt-5",children:L}),o.jsxs("div",{className:m("flex flex-col gap-1",l?"items-end":"items-start"),children:[o.jsxs("div",{className:m("flex items-center gap-2",l?"flex-row-reverse":"flex-row"),children:[o.jsx(p,{type:"body-small-strong",color:"deep-space",className:l?"text-right":"text-left",children:a}),k&&o.jsx(p,{type:"body-small-strong",color:"meteor-400",className:l?"text-right":"text-left",children:k})]}),o.jsx("div",{className:m(fe({type:e}),"break-words"),"data-testid":`${d}-content`,children:t?o.jsx(Se,{}):o.jsx(p,{type:"body",color:"deep-space",children:r})}),J&&o.jsx(p,{type:"body-small-strong",color:"meteor-400",className:l?"text-right":"text-left",children:J}),(D||N)&&o.jsxs("div",{className:"flex gap-2 pt-1",children:[D&&o.jsx("button",{className:"h-6 w-8 rounded-sm border border-meteor-400  text-meteor-400 hover:bg-meteor-400 hover:text-white focus:bg-meteor-400 focus:text-white focus:outline-none",onClick:D,"data-testid":`${d}-thumb-up`,"aria-label":"Thumb up",children:o.jsx(u,{icon:u.Glyph.ThumbUp,size:"tiny"})}),N&&o.jsx("button",{onClick:N,className:"h-6 w-8 rounded-sm border border-meteor-400  text-meteor-400 hover:bg-meteor-400 hover:text-white focus:bg-meteor-400 focus:text-white focus:outline-none","data-testid":`${d}-thumb-down`,"aria-label":"Thumb down",children:o.jsx(u,{icon:u.Glyph.ThumbDown,size:"tiny"})})]})]})]})};n.Type=ge;try{n.displayName="ChatBubble",n.__docgenInfo={description:"",displayName:"ChatBubble",props:{message:{defaultValue:null,description:"The message text content",name:"message",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"The name of the user",name:"userName",required:!0,type:{name:"string"}},type:{defaultValue:{value:"sent"},description:"The type of message (sent or received)",name:"type",required:!1,type:{name:"enum",value:[{value:'"sent"'},{value:'"received"'}]}},loading:{defaultValue:{value:"false"},description:"Loading state shows three dots instead of message",name:"loading",required:!1,type:{name:"boolean"}},avatarSrc:{defaultValue:null,description:"Avatar image source. Avatar is only shown if avatarSrc or avatarInitials is provided",name:"avatarSrc",required:!1,type:{name:"string"}},avatarInitials:{defaultValue:null,description:"Avatar fallback text/initials. Avatar is only shown if avatarSrc or avatarInitials is provided",name:"avatarInitials",required:!1,type:{name:"string"}},avatarBgColor:{defaultValue:null,description:"Avatar background color",name:"avatarBgColor",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"chat-bubble"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional className",name:"className",required:!1,type:{name:"string"}},topLabel:{defaultValue:null,description:"Top label text",name:"topLabel",required:!1,type:{name:"string"}},bottomLabel:{defaultValue:null,description:"Bottom label text",name:"bottomLabel",required:!1,type:{name:"string"}},onThumbUpClick:{defaultValue:null,description:"Callback function when thumbs up button is clicked",name:"onThumbUpClick",required:!1,type:{name:"(() => void)"}},onThumbDownClick:{defaultValue:null,description:"Callback function when thumbs down button is clicked",name:"onThumbDownClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const Ve={title:"Data Display/Chat Bubble",component:n,parameters:{docs:{description:{component:"A chat bubble component for displaying sent and received messages with user avatars."}},layout:"padded"},tags:["autodocs"],args:{onThumbUpClick:void 0,onThumbDownClick:void 0},argTypes:{type:{control:"select",options:Object.values(n.Type),description:"The type of message (sent or received)",defaultValue:n.Type.Sent},message:{control:"text",description:"The message text content"},userName:{control:"text",description:"The name of the user"},loading:{control:"boolean",description:"Show loading state with animated dots"},avatarSrc:{control:"text",description:"Avatar image source URL"},avatarInitials:{control:"text",description:"Avatar fallback initials"},avatarBgColor:{control:"select",options:["earth-300","sun-300","mars-300","meteor-300","neptune-300","nova-300","mercury-300","aurora-300"],description:"Avatar background color"},topLabel:{control:"text",description:"Optional label shown above the user name (e.g., role or title)"},bottomLabel:{control:"text",description:"Optional label shown below the message (e.g., timestamp or status)"},onThumbUpClick:{description:"Callback function when thumbs up button is clicked",table:{defaultValue:{summary:"undefined"}}},onThumbDownClick:{description:"Callback function when thumbs down button is clicked",table:{defaultValue:{summary:"undefined"}}}}},b={args:{type:n.Type.Sent,userName:"Full name",message:"Short comment!",avatarSrc:"https://i.pravatar.cc/150?img=12",avatarInitials:"FN",testId:"chat-bubble-sent-short"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("ChatBubble is rendered",async()=>{const t=e.getByTestId("chat-bubble-sent-short");await s(t).toBeInTheDocument()}),await a("Message content is displayed",async()=>{const t=e.getByTestId("chat-bubble-sent-short-content");await s(t).toHaveTextContent("Short comment!")}),await a("User name is displayed",async()=>{await s(e.getByText("Full name")).toBeInTheDocument()}),await a("Avatar is rendered",async()=>{const t=e.getByTestId("chat-bubble-sent-short-avatar");await s(t).toBeInTheDocument()})}},h={args:{type:n.Type.Sent,userName:"Full name",message:"Long comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",avatarSrc:"https://i.pravatar.cc/150?img=12",avatarInitials:"FN",testId:"chat-bubble-sent-long"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Long message content is displayed",async()=>{const t=e.getByTestId("chat-bubble-sent-long-content");await s(t).toHaveTextContent("Long comment. Lorem ipsum dolor sit amet")})}},v={args:{type:n.Type.Sent,userName:"Full name",loading:!0,avatarSrc:"https://i.pravatar.cc/150?img=12",avatarInitials:"FN",testId:"chat-bubble-sent-loading"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Loading dots are displayed",async()=>{const t=e.getByTestId("chat-bubble-sent-loading-content");await s(t).toBeInTheDocument();const i=t.querySelectorAll("span");s(i.length).toBe(3)})}},g={args:{type:n.Type.Received,userName:"Full name",message:"Short comment!",avatarSrc:"https://i.pravatar.cc/150?img=45",avatarInitials:"FN",avatarBgColor:"aurora-300",testId:"chat-bubble-received-short"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("ChatBubble is rendered with received styling",async()=>{const t=e.getByTestId("chat-bubble-received-short");await s(t).toBeInTheDocument()}),await a("Message content is displayed",async()=>{const t=e.getByTestId("chat-bubble-received-short-content");await s(t).toHaveTextContent("Short comment!")})}},y={args:{type:n.Type.Received,userName:"Full name",message:"Long comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?",avatarSrc:"https://i.pravatar.cc/150?img=45",avatarInitials:"FN",avatarBgColor:"aurora-300",testId:"chat-bubble-received-long"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Long message wraps correctly",async()=>{const t=e.getByTestId("chat-bubble-received-long-content");await s(t).toHaveTextContent("Long comment. Lorem ipsum dolor sit amet")})}},w={args:{type:n.Type.Received,userName:"Full name",loading:!0,avatarSrc:"https://i.pravatar.cc/150?img=45",avatarInitials:"FN",avatarBgColor:"aurora-300",testId:"chat-bubble-received-loading"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Loading dots are displayed for received message",async()=>{const t=e.getByTestId("chat-bubble-received-loading-content");await s(t).toBeInTheDocument();const i=t.querySelectorAll("span");s(i.length).toBe(3)})}},T={args:{userName:"Conversation Example"},render:()=>o.jsxs("div",{className:"flex w-full max-w-2xl flex-col gap-4",children:[o.jsx(n,{type:n.Type.Sent,userName:"John Doe",message:"Hey! How are you doing?",avatarSrc:"https://i.pravatar.cc/150?img=12",avatarInitials:"JD"}),o.jsx(n,{type:n.Type.Received,userName:"Jane Smith",message:"I'm doing great! Thanks for asking.",avatarSrc:"https://i.pravatar.cc/150?img=45",avatarInitials:"JS",avatarBgColor:"aurora-300"}),o.jsx(n,{type:n.Type.Sent,userName:"John Doe",message:"That's wonderful to hear! Want to grab coffee later?",avatarSrc:"https://i.pravatar.cc/150?img=12",avatarInitials:"JD"}),o.jsx(n,{type:n.Type.Received,userName:"Jane Smith",loading:!0,avatarSrc:"https://i.pravatar.cc/150?img=45",avatarInitials:"JS",avatarBgColor:"aurora-300"})]}),parameters:{docs:{description:{story:"Example of a conversation with multiple chat bubbles."}}}},B={args:{type:n.Type.Sent,userName:"John Doe",message:"Message without avatar image",testId:"chat-bubble-no-avatar"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Avatar is not rendered when no avatar props provided",async()=>{const t=e.queryByTestId("chat-bubble-no-avatar-avatar");await s(t).not.toBeInTheDocument()}),await a("Message is still displayed without avatar",async()=>{const t=e.getByTestId("chat-bubble-no-avatar-content");await s(t).toHaveTextContent("Message without avatar image")}),await a("User name is displayed",async()=>{await s(e.getByText("John Doe")).toBeInTheDocument()})}},x={args:{type:n.Type.Sent,userName:"John Doe",topLabel:"1:52 PM",message:"Here is an update on the project status.",avatarSrc:"https://i.pravatar.cc/150?img=12",avatarInitials:"JD",testId:"chat-bubble-top-label"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Top label is displayed",async()=>{await s(e.getByText("1:52 PM")).toBeInTheDocument()}),await a("User name is displayed",async()=>{await s(e.getByText("John Doe")).toBeInTheDocument()}),await a("Message is displayed",async()=>{const t=e.getByTestId("chat-bubble-top-label-content");await s(t).toHaveTextContent("Here is an update on the project status.")})}},I={args:{type:n.Type.Received,userName:"Jane Smith",bottomLabel:"Delivered",message:"Thanks for the update!",avatarSrc:"https://i.pravatar.cc/150?img=45",avatarInitials:"JS",avatarBgColor:"aurora-300",testId:"chat-bubble-bottom-label"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Bottom label is displayed",async()=>{await s(e.getByText("Delivered")).toBeInTheDocument()}),await a("User name is displayed",async()=>{await s(e.getByText("Jane Smith")).toBeInTheDocument()}),await a("Message is displayed",async()=>{const t=e.getByTestId("chat-bubble-bottom-label-content");await s(t).toHaveTextContent("Thanks for the update!")})}},f={args:{type:n.Type.Sent,userName:"Alex Johnson",topLabel:"1:53 PM",bottomLabel:"Delivered",message:"The new feature will be released next week. Please review the documentation.",avatarSrc:"https://i.pravatar.cc/150?img=33",avatarInitials:"AJ",avatarBgColor:"neptune-300",testId:"chat-bubble-both-labels"},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Top label is displayed",async()=>{await s(e.getByText("1:53 PM")).toBeInTheDocument()}),await a("Bottom label is displayed",async()=>{await s(e.getByText("Delivered")).toBeInTheDocument()}),await a("User name is displayed",async()=>{await s(e.getByText("Alex Johnson")).toBeInTheDocument()}),await a("Message is displayed",async()=>{const t=e.getByTestId("chat-bubble-both-labels-content");await s(t).toHaveTextContent("The new feature will be released next week")})}},S={args:{userName:"Conversation with Labels"},render:()=>o.jsxs("div",{className:"flex w-full max-w-2xl flex-col gap-4",children:[o.jsx(n,{type:n.Type.Sent,userName:"Sarah Wilson",topLabel:"1:52 PM",message:"Can we schedule a code review for tomorrow?",bottomLabel:"Just now",avatarSrc:"https://i.pravatar.cc/150?img=20",avatarInitials:"SW",avatarBgColor:"earth-300"}),o.jsx(n,{type:n.Type.Received,userName:"Mike Chen",topLabel:"1:54 PM",message:"Sure! How about 2 PM?",bottomLabel:"Delivered",avatarSrc:"https://i.pravatar.cc/150?img=15",avatarInitials:"MC",avatarBgColor:"mars-300"}),o.jsx(n,{type:n.Type.Sent,userName:"Sarah Wilson",message:"Perfect! See you then.",bottomLabel:"Sent 30 seconds ago",avatarSrc:"https://i.pravatar.cc/150?img=20",avatarInitials:"SW",avatarBgColor:"earth-300"})]}),parameters:{docs:{description:{story:"Example of a conversation using top labels for roles/titles and bottom labels for timestamps."}}}},C={args:{type:n.Type.Sent,userName:"AI Assistant",topLabel:"Bot",message:"Here is a detailed response to your question. The solution involves using React hooks and state management.",bottomLabel:"2:15 PM",avatarInitials:"AI",avatarBgColor:"neptune-300",testId:"chat-bubble-feedback",onThumbUpClick:()=>console.log("Thumbs up clicked!"),onThumbDownClick:()=>console.log("Thumbs down clicked!")},play:async({canvasElement:r,step:a})=>{const e=c(r);await a("Thumb up button is rendered",async()=>{const t=e.getByTestId("chat-bubble-feedback-thumb-up");await s(t).toBeInTheDocument()}),await a("Thumb down button is rendered",async()=>{const t=e.getByTestId("chat-bubble-feedback-thumb-down");await s(t).toBeInTheDocument()}),await a("Message content is displayed",async()=>{const t=e.getByTestId("chat-bubble-feedback-content");await s(t).toHaveTextContent("Here is a detailed response")}),await a("Top label is displayed",async()=>{await s(e.getByText("Bot")).toBeInTheDocument()})},parameters:{docs:{description:{story:"Chat bubble with feedback buttons for thumbs up and thumbs down actions. Useful for AI responses or help desk messages."}}}};var A,M,j;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Full name',
    message: 'Short comment!',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'FN',
    testId: 'chat-bubble-sent-short'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('ChatBubble is rendered', async () => {
      const chatBubble = canvas.getByTestId('chat-bubble-sent-short');
      await expect(chatBubble).toBeInTheDocument();
    });
    await step('Message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-sent-short-content');
      await expect(content).toHaveTextContent('Short comment!');
    });
    await step('User name is displayed', async () => {
      await expect(canvas.getByText('Full name')).toBeInTheDocument();
    });
    await step('Avatar is rendered', async () => {
      const avatar = canvas.getByTestId('chat-bubble-sent-short-avatar');
      await expect(avatar).toBeInTheDocument();
    });
  }
}`,...(j=(M=b.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var H,E,F;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Full name',
    message: 'Long comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'FN',
    testId: 'chat-bubble-sent-long'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Long message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-sent-long-content');
      await expect(content).toHaveTextContent('Long comment. Lorem ipsum dolor sit amet');
    });
  }
}`,...(F=(E=h.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var R,U,W;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Full name',
    loading: true,
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'FN',
    testId: 'chat-bubble-sent-loading'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Loading dots are displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-sent-loading-content');
      await expect(content).toBeInTheDocument();
      // The loading dots should be present
      const dots = content.querySelectorAll('span');
      expect(dots.length).toBe(3);
    });
  }
}`,...(W=(U=v.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var q,P,V;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Full name',
    message: 'Short comment!',
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'FN',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-received-short'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('ChatBubble is rendered with received styling', async () => {
      const chatBubble = canvas.getByTestId('chat-bubble-received-short');
      await expect(chatBubble).toBeInTheDocument();
    });
    await step('Message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-received-short-content');
      await expect(content).toHaveTextContent('Short comment!');
    });
  }
}`,...(V=(P=g.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var _,O,$;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Full name',
    message: 'Long comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit? Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'FN',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-received-long'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Long message wraps correctly', async () => {
      const content = canvas.getByTestId('chat-bubble-received-long-content');
      await expect(content).toHaveTextContent('Long comment. Lorem ipsum dolor sit amet');
    });
  }
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var z,G,Y;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Full name',
    loading: true,
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'FN',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-received-loading'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Loading dots are displayed for received message', async () => {
      const content = canvas.getByTestId('chat-bubble-received-loading-content');
      await expect(content).toBeInTheDocument();
      const dots = content.querySelectorAll('span');
      expect(dots.length).toBe(3);
    });
  }
}`,...(Y=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    userName: 'Conversation Example'
  },
  render: () => <div className="flex w-full max-w-2xl flex-col gap-4">
      <ChatBubble type={ChatBubble.Type.Sent} userName="John Doe" message="Hey! How are you doing?" avatarSrc="https://i.pravatar.cc/150?img=12" avatarInitials="JD" />
      <ChatBubble type={ChatBubble.Type.Received} userName="Jane Smith" message="I'm doing great! Thanks for asking." avatarSrc="https://i.pravatar.cc/150?img=45" avatarInitials="JS" avatarBgColor="aurora-300" />
      <ChatBubble type={ChatBubble.Type.Sent} userName="John Doe" message="That's wonderful to hear! Want to grab coffee later?" avatarSrc="https://i.pravatar.cc/150?img=12" avatarInitials="JD" />
      <ChatBubble type={ChatBubble.Type.Received} userName="Jane Smith" loading avatarSrc="https://i.pravatar.cc/150?img=45" avatarInitials="JS" avatarBgColor="aurora-300" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of a conversation with multiple chat bubbles.'
      }
    }
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'John Doe',
    message: 'Message without avatar image',
    testId: 'chat-bubble-no-avatar'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Avatar is not rendered when no avatar props provided', async () => {
      const avatar = canvas.queryByTestId('chat-bubble-no-avatar-avatar');
      await expect(avatar).not.toBeInTheDocument();
    });
    await step('Message is still displayed without avatar', async () => {
      const content = canvas.getByTestId('chat-bubble-no-avatar-content');
      await expect(content).toHaveTextContent('Message without avatar image');
    });
    await step('User name is displayed', async () => {
      await expect(canvas.getByText('John Doe')).toBeInTheDocument();
    });
  }
}`,...(ae=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'John Doe',
    topLabel: '1:52 PM',
    message: 'Here is an update on the project status.',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    avatarInitials: 'JD',
    testId: 'chat-bubble-top-label'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Top label is displayed', async () => {
      await expect(canvas.getByText('1:52 PM')).toBeInTheDocument();
    });
    await step('User name is displayed', async () => {
      await expect(canvas.getByText('John Doe')).toBeInTheDocument();
    });
    await step('Message is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-top-label-content');
      await expect(content).toHaveTextContent('Here is an update on the project status.');
    });
  }
}`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,re,ce;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Received,
    userName: 'Jane Smith',
    bottomLabel: 'Delivered',
    message: 'Thanks for the update!',
    avatarSrc: 'https://i.pravatar.cc/150?img=45',
    avatarInitials: 'JS',
    avatarBgColor: 'aurora-300',
    testId: 'chat-bubble-bottom-label'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Bottom label is displayed', async () => {
      await expect(canvas.getByText('Delivered')).toBeInTheDocument();
    });
    await step('User name is displayed', async () => {
      await expect(canvas.getByText('Jane Smith')).toBeInTheDocument();
    });
    await step('Message is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-bottom-label-content');
      await expect(content).toHaveTextContent('Thanks for the update!');
    });
  }
}`,...(ce=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ie,le,de;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'Alex Johnson',
    topLabel: '1:53 PM',
    bottomLabel: 'Delivered',
    message: 'The new feature will be released next week. Please review the documentation.',
    avatarSrc: 'https://i.pravatar.cc/150?img=33',
    avatarInitials: 'AJ',
    avatarBgColor: 'neptune-300',
    testId: 'chat-bubble-both-labels'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Top label is displayed', async () => {
      await expect(canvas.getByText('1:53 PM')).toBeInTheDocument();
    });
    await step('Bottom label is displayed', async () => {
      await expect(canvas.getByText('Delivered')).toBeInTheDocument();
    });
    await step('User name is displayed', async () => {
      await expect(canvas.getByText('Alex Johnson')).toBeInTheDocument();
    });
    await step('Message is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-both-labels-content');
      await expect(content).toHaveTextContent('The new feature will be released next week');
    });
  }
}`,...(de=(le=f.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var me,pe,ue;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    userName: 'Conversation with Labels'
  },
  render: () => <div className="flex w-full max-w-2xl flex-col gap-4">
      <ChatBubble type={ChatBubble.Type.Sent} userName="Sarah Wilson" topLabel="1:52 PM" message="Can we schedule a code review for tomorrow?" bottomLabel="Just now" avatarSrc="https://i.pravatar.cc/150?img=20" avatarInitials="SW" avatarBgColor="earth-300" />
      <ChatBubble type={ChatBubble.Type.Received} userName="Mike Chen" topLabel="1:54 PM" message="Sure! How about 2 PM?" bottomLabel="Delivered" avatarSrc="https://i.pravatar.cc/150?img=15" avatarInitials="MC" avatarBgColor="mars-300" />
      <ChatBubble type={ChatBubble.Type.Sent} userName="Sarah Wilson" message="Perfect! See you then." bottomLabel="Sent 30 seconds ago" avatarSrc="https://i.pravatar.cc/150?img=20" avatarInitials="SW" avatarBgColor="earth-300" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example of a conversation using top labels for roles/titles and bottom labels for timestamps.'
      }
    }
  }
}`,...(ue=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,he,ve;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    type: ChatBubble.Type.Sent,
    userName: 'AI Assistant',
    topLabel: 'Bot',
    message: 'Here is a detailed response to your question. The solution involves using React hooks and state management.',
    bottomLabel: '2:15 PM',
    avatarInitials: 'AI',
    avatarBgColor: 'neptune-300',
    testId: 'chat-bubble-feedback',
    onThumbUpClick: () => console.log('Thumbs up clicked!'),
    onThumbDownClick: () => console.log('Thumbs down clicked!')
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Thumb up button is rendered', async () => {
      const thumbUpButton = canvas.getByTestId('chat-bubble-feedback-thumb-up');
      await expect(thumbUpButton).toBeInTheDocument();
    });
    await step('Thumb down button is rendered', async () => {
      const thumbDownButton = canvas.getByTestId('chat-bubble-feedback-thumb-down');
      await expect(thumbDownButton).toBeInTheDocument();
    });
    await step('Message content is displayed', async () => {
      const content = canvas.getByTestId('chat-bubble-feedback-content');
      await expect(content).toHaveTextContent('Here is a detailed response');
    });
    await step('Top label is displayed', async () => {
      await expect(canvas.getByText('Bot')).toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Chat bubble with feedback buttons for thumbs up and thumbs down actions. Useful for AI responses or help desk messages.'
      }
    }
  }
}`,...(ve=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};const _e=["SentShort","SentLong","SentLoading","ReceivedShort","ReceivedLong","ReceivedLoading","Conversation","WithoutAvatar","WithTopLabel","WithBottomLabel","WithBothLabels","ConversationWithLabels","WithFeedbackButtons"];export{T as Conversation,S as ConversationWithLabels,w as ReceivedLoading,y as ReceivedLong,g as ReceivedShort,v as SentLoading,h as SentLong,b as SentShort,f as WithBothLabels,I as WithBottomLabel,C as WithFeedbackButtons,x as WithTopLabel,B as WithoutAvatar,_e as __namedExportsOrder,Ve as default};
