import{r as n,u,j as e,N as x,a as h,L as f,b as j}from"./index-801f83c2.js";import{i as g}from"./index-983fb02f.js";function b(){const[a,r]=n.useState(""),[l,i]=n.useState(""),[o,c,d,t]=u(j),m=s=>{s.preventDefault(),o(a,l)};return t?e.jsxs("div",{className:"flex h-screen flex-col items-center justify-center",children:[e.jsxs("p",{children:["Error: ",t.message]}),e.jsx("button",{onClick:()=>window.location.reload(),className:"font-semibold text-blue-500 hover:underline hover:underline-offset-2",children:"Try again"})]}):d?e.jsx("div",{className:"flex h-screen items-center justify-center",children:e.jsx("p",{children:"Loading..."})}):c?e.jsx(x,{to:"/chatroom"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"container mx-auto max-w-7xl px-8",children:e.jsx(h,{})}),e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"flex h-screen",children:e.jsx("div",{className:"m-auto w-full max-w-xs",children:e.jsxs("div",{className:"-mt-60 flex flex-col items-center justify-center gap-4",children:[e.jsx("h1",{className:"mb-4 text-3xl font-bold",children:"Log in to ChatApp"}),e.jsxs("form",{onSubmit:m,className:"flex w-full flex-col gap-4",children:[e.jsx("input",{type:"email",placeholder:"Email address",value:a,onChange:s=>r(s.target.value),className:"w-full rounded-md bg-black p-3 ring ring-neutral-800"}),e.jsx("input",{type:"password",placeholder:"Password",value:l,onChange:s=>i(s.target.value),className:"w-full rounded-md bg-black p-3 ring ring-neutral-800"}),e.jsx("button",{type:"submit",className:"mt-2 w-full rounded-md bg-blue-600 py-3 text-white saturate-150 hover:bg-black hover:text-blue-600 hover:ring hover:ring-blue-600 hover:saturate-150",children:e.jsxs("div",{className:"flex h-full flex-row items-center justify-center px-3",children:[e.jsx(g.Mail,{className:"h-6 w-6"}),e.jsx("div",{className:"w-full font-semibold",children:"Continue with Email"})]})})]}),e.jsx("div",{className:"mt-4 flex w-full justify-center",children:e.jsx(f,{to:"/login",className:"font-semibold text-blue-500 hover:underline hover:underline-offset-2",children:"← Back to Login"})})]})})})})]})}export{b as default};
