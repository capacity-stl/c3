import{j as o}from"./jsx-runtime-Yb_4y5hn.js";import{M as l,T as m,D as p,C as n,d as a}from"./index-9Yd8YsY6.js";import{M as i,B as c,C as d}from"./Modal.stories-DkrgPOEx.js";import{useMDXComponents as s}from"./index--fhZTOoi.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BX_vDg_Z.js";import"../sb-preview/runtime.js";import"./index-aS4jWOJ1.js";import"./index-Cu4lwwaE.js";import"./index-B_TSwO5-.js";import"./index-DrFu-skq.js";import"./index-CQguwI8J.js";import"./index-nRB-OUHH.js";import"./index-DcfKkSlL.js";import"./color.props-BsWCD9dY.js";import"./height.props-DUajn6Rl.js";import"./padding.props-BHVf-jSR.js";import"./width.props-Bz_bp7Xr.js";import"./border.props-MxdHQtLV.js";import"./borderradius.props-BVunBqXv.js";import"./Text-BCZ0rRg4.js";import"./font.props-DiLDwReC.js";import"./Icon-OWY7pxpf.js";import"./Flex-CDTcyRYD.js";import"./layout.props-Bv-HHbLu.js";import"./Button-CxnYBzPn.js";import"./BadgeDot-FGNhXF8a.js";function r(t){const e=Object.assign({p:"p",h3:"h3"},s(),t.components);return o.jsxs(o.Fragment,{children:[o.jsx(l,{title:"Data Display/Modal/Code Examples",of:i}),`
`,o.jsx(m,{children:"Modal Examples"}),`
`,o.jsx(p,{of:i}),`
`,o.jsx(e.p,{children:"The Modal component is a versatile and customizable dialog that can be used to display content in a modal window. It can be used to display a variety of content, such as a form, a message, or a confirmation dialog."}),`
`,o.jsx(e.h3,{id:"basic",children:"Basic"}),`
`,o.jsx(n,{of:c,layout:"fullscreen"}),`
`,o.jsx(a,{code:`

// manage the open state boolean
const [open, setOpen] = useState(false)

// trigger the modal to open

<Button onClick={() => setOpen(true)}>Open Modal</Button>

// the <Modal> component is the container for the modal

<Modal open={open} onOpenChange={setOpen}>

{/* the <Modal.Header> component is the title and description of the modal (optional) */}

  <Modal.Header
    title="Modal Title"
    description="This is a basic modal example"
  />
  {/* the <Modal.Body> component is the content of the modal can receive any content (optional) */}
  <Modal.Body>
    <Text type="body" color="night">
      This is the modal content. You can put any content here.
    </Text>
  </Modal.Body>
  {/* the <Modal.Footer> component is the footer of the modal can receive any content (optional) */}
  <Modal.Footer>
    <Button onClick={() => setOpen(false)} type="secondary">
      Cancel
    </Button>
    <Button onClick={() => setOpen(false)} type="primary">
      Confirm
    </Button>
  </Modal.Footer>
</Modal>
`.trim()}),`
`,o.jsx(e.h3,{id:"confirmation-modal",children:"Confirmation Modal"}),`
`,o.jsx(n,{of:d,layout:"fullscreen"}),`
`,o.jsx(a,{code:`

<Modal open={open} onOpenChange={setOpen}>
  <Modal.Confirmation
    title="Confirm Action"
    onCancel={() => console.log('Cancelled')}
    onConfirm={() => {
      handleConfirm()
    }}
    cancelText="Cancel"
    confirmText="Delete Item"
    description="Are you sure you want to delete this item?"
  />
</Modal>
`.trim()})]})}function Y(t={}){const{wrapper:e}=Object.assign({},s(),t.components);return e?o.jsx(e,Object.assign({},t,{children:o.jsx(r,t)})):r(t)}export{Y as default};
