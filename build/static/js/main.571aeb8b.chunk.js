(this.webpackJsonploanelgibility=this.webpackJsonploanelgibility||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),l=a.n(i),o=a(10),r=a.n(o),s=(a(119),a(120),a(72)),c=a.n(s),d=a(92),j=a(47),m=a(16),b=a(79),u=a(207),p=a(209),h=a(210),x=Object(b.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1,fontFamily:"Cursive"},navstyles:{backgroundColor:"brown"},logo:{marginRight:e.spacing(2),alignContent:"center",justifyContent:"center"},toolbarButtons:{marginLeft:"auto",marginRight:25,color:"white",fontsize:"36px"}}}));function g(){var e=x();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(u.a,{position:"fixed",children:Object(n.jsxs)(p.a,{className:e.navstyles,children:[Object(n.jsx)(h.a,{variant:"h6",className:e.title,children:"Pothani Financial Services"}),Object(n.jsxs)("span",{className:e.toolbarButtons,children:[Object(n.jsx)("a",{href:"#home",className:e.toolbarButtons,children:"Home "}),Object(n.jsx)("a",{href:"#services",className:e.toolbarButtons,children:" Services "}),Object(n.jsx)("a",{href:"#about",className:e.toolbarButtons,children:" Contact"}),Object(n.jsx)("a",{href:"#about",className:e.toolbarButtons,children:" About"})]})]})})})}var O=a(217),y=a(228),f=a(220),v=a(230),C=a(216),N=(a(125),a(96)),w=a.n(N),_=a(211),L=a(212),T=a(215),k=a(214),F=a(213),S=Object(b.a)({root:{maxWidth:345},media:{height:200}});function A(e){var t=S();return Object(n.jsxs)(_.a,{className:t.root,children:[Object(n.jsxs)(L.a,{children:[Object(n.jsx)(F.a,{className:t.media,image:e.item.src,title:e.item.title}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)(h.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.item.title}),Object(n.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:e.item.description})]})]}),Object(n.jsxs)(T.a,{children:[Object(n.jsx)(C.a,{size:"small",href:"#about",color:"primary",children:"Contact"}),"Business Loan"!=e.item.title?Object(n.jsx)(C.a,{size:"small",color:"primary",onClick:function(){return e.setOpen(!0)},children:"Check Eligibility"}):Object(n.jsx)("span",{})]})]})}var B=a(226),q=a(222),P=a(71),z=a(224),I=a(223),H=a(227),R=a(225),E=a(97),M=a.n(E),D=Object(b.a)((function(e){return{root:{flexGrow:1,margin:"30px",height:"650px"},about:{flexGrow:1,height:"300px"},partner:{flexGrow:1,margin:"30px",height:"500px"},paper:{padding:e.spacing(2),color:e.palette.text.secondary,height:"600px"},textField:{marginTop:e.spacing(2),marginBottom:e.spacing(2),width:"80%"},formControl:{margin:e.spacing(1),minWidth:120},button:{marginTop:e.spacing(2),marginBottom:e.spacing(2),width:"80%"},form:{marginLeft:"50px"},card:{marginTop:"100px",marginLeft:"100px"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},mpaper:{backgroundColor:e.palette.background.paper,borderRadius:"20px",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),width:"600px",height:"600px"},mbutton:{margin:e.spacing(2)},imgcontainer:{margin:"20px 0px 0px 130px"},img:{margin:"30px"}}}));function G(e){return Object(n.jsx)("img",{src:e.item.src,width:"100%",height:"500px",alt:e.item.alttext})}function U(e){return Object(n.jsx)(R.a,Object(m.a)({elevation:6,variant:"filled"},e))}function J(){var e=D(),t=l.a.useState(!1),a=Object(j.a)(t,2),i=a[0],o=a[1],r=l.a.useState(!1),s=Object(j.a)(r,2),b=s[0],u=s[1],p=l.a.useState(!1),h=Object(j.a)(p,2),x=h[0],N=h[1],_=l.a.useState({name:"",mobile:"",email:"",company:"",monthly_salary:"",loan_type:"",monthly_expenses:""}),L=Object(j.a)(_,2),T=L[0],k=L[1],F=l.a.useState({name:"",mobile:"",email:"",company:"",monthly_salary:0,loan_type:"Select Loan Type",monthly_expenses:0,eligibility_amount:0}),S=Object(j.a)(F,2),R=S[0],E=S[1],J=function(){var e=Object(d.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(R),u(!0),e.next=4,M.a.post("https://my-project511.herokuapp.com/add-user/",R).then((function(e){console.log("User Data captured successfully",e.data),N(!0)})).catch((function(e){console.log("Unable to save user data")}));case 4:setTimeout((function(){u(!1),E({name:"",mobile:"",email:"",company:"",monthly_salary:0,loan_type:"Select Loan Type",monthly_expenses:0,loanamount:0,eligibility_amount:0,location:""}),k({name:"",mobile:"",email:"",company:"",monthly_salary:"",loan_type:"",monthly_expenses:"",loanamount:"",location:""})}),2e3);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{}),Object(n.jsx)("div",{className:e.root,id:"home",style:{marginTop:"100px"},children:Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:7,children:Object(n.jsx)(w.a,{children:[{src:"/loan.jpg",alttext:"Loans"},{src:"/ploan.jpg",alttext:"All types of Loans"},{src:"/agree.jpg",alttext:"Agreement"},{src:"/allloan.jpg",alttext:"All loans"}].map((function(e,t){return Object(n.jsx)(G,{item:e},t)}))})}),Object(n.jsx)(O.a,{item:!0,xs:1}),Object(n.jsxs)(O.a,{item:!0,xs:4,children:[Object(n.jsx)("h4",{children:"Need Instant Loan?"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)(y.a,{required:!0,id:"outlined-required",label:"Name",className:e.textField,value:R.name,onChange:function(e){return E(Object(m.a)(Object(m.a)({},R),{},{name:e.target.value}))},variant:"outlined",helperText:T.name,error:!!T.name,size:"small"}),Object(n.jsx)(y.a,{required:!0,id:"outlined-required",label:"Mobile Number",value:R.mobile,onChange:function(e){return E(Object(m.a)(Object(m.a)({},R),{},{mobile:e.target.value}))},className:e.textField,helperText:T.mobile,error:!!T.mobile,variant:"outlined",type:"tel",size:"small"}),Object(n.jsx)(y.a,{required:!0,id:"outlined-required",onChange:function(e){return E(Object(m.a)(Object(m.a)({},R),{},{email:e.target.value}))},label:"Email",value:R.email,className:e.textField,helperText:T.email,error:!!T.email,type:"email",variant:"outlined",size:"small"}),Object(n.jsx)(y.a,{required:!0,id:"outlined-required",label:"Company",value:R.company,onChange:function(e){return E(Object(m.a)(Object(m.a)({},R),{},{company:e.target.value}))},className:e.textField,helperText:T.company,error:!!T.company,variant:"outlined",size:"small"}),Object(n.jsx)(y.a,{required:!0,id:"outlined-required",label:"Location",value:R.location,onChange:function(e){return E(Object(m.a)(Object(m.a)({},R),{},{location:e.target.value}))},className:e.textField,helperText:T.location,error:!!T.location,variant:"outlined",size:"small"}),Object(n.jsxs)(f.a,{variant:"outlined",size:"small",className:e.textField,required:!0,children:[Object(n.jsx)(v.a,{id:"demo-simple-select-outlined-label",children:"Loan Type "}),Object(n.jsxs)(z.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:R.loan_type,onChange:function(e){return E(Object(m.a)(Object(m.a)({},R),{},{loan_type:e.target.value}))},label:"Loan Type",size:"small",native:!0,required:!0,children:[Object(n.jsx)("option",{value:"loan_type",children:"Select Loan Type"}),Object(n.jsx)("option",{value:"Personal",children:"Personal Loan"}),Object(n.jsx)("option",{value:"Home",children:"Home Loan"})]})]}),Object(n.jsx)(C.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){var e=""!==R.name&&""!==R.mobile&&""!==R.email&&"Select Loan Type"!==R.loan_type&&""!==R.company;o(e)},className:e.button,children:"Proceed"})]}),Object(n.jsxs)("b",{children:["If any Query Please Call to ",Object(n.jsx)("span",{style:{color:"blue"},children:"9743700072"})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("b",{children:["For More Details ",Object(n.jsx)("a",{href:"#",onClick:function(){return o(!0)},children:"Check Eligibilty Calculator"})]}),Object(n.jsx)(B.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:i,onClose:function(){},closeAfterTransition:!0,BackdropComponent:q.a,BackdropProps:{timeout:500},children:Object(n.jsx)(P.a,{in:i,children:Object(n.jsxs)("div",{className:e.mpaper,children:[Object(n.jsx)("h3",{style:{color:"brown",textAlign:"center",marginTop:"50px"},children:"Loan Eligibility Calculator"}),Object(n.jsx)("div",{style:{textAlign:"center",marginTop:"50px"},children:Object(n.jsxs)("form",{onSubmit:J,children:[Object(n.jsxs)(f.a,{variant:"outlined",size:"small",className:e.textField,required:!0,children:[Object(n.jsx)(v.a,{id:"demo-simple-select-outlined-label",children:"Loan Type "}),Object(n.jsxs)(z.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:R.loan_type,onChange:function(e){return E(Object(m.a)(Object(m.a)({},R),{},{loan_type:e.target.value}))},label:"Loan Type",size:"small",native:!0,required:!0,children:[Object(n.jsx)("option",{value:"loan_type",children:"Select Loan Type"}),Object(n.jsx)("option",{value:"Personal",children:"Personal Loan"}),Object(n.jsx)("option",{value:"Home",children:"Home Loan"})]})]}),Object(n.jsx)(y.a,{required:!0,id:"outlined-required",label:"Net Salary Per Month",type:"number",onChange:function(e){var t=20*(e.target.value-R.monthly_expenses);t=t>0?t:0,E(Object(m.a)(Object(m.a)({},R),{},{monthly_salary:e.target.value,eligibility_amount:t}))},className:e.textField,helperText:T.monthly_salary,error:!!T.monthly_salary,variant:"outlined",size:"small"}),Object(n.jsx)(y.a,{required:!0,id:"outlined-required",label:"Expenses Per Month",type:"number",onChange:function(e){var t=20*(R.monthly_salary-e.target.value);t=t>0?t:0,E(Object(m.a)(Object(m.a)({},R),{},{monthly_expenses:e.target.value,eligibility_amount:t}))},className:e.textField,helperText:T.monthly_expenses,error:!!T.monthly_expenses,variant:"outlined",size:"small"}),Object(n.jsx)("br",{}),Object(n.jsxs)("h4",{style:{color:"green"},children:["You are eligible for Rs.",R.eligibility_amount," "]}),Object(n.jsx)(C.a,{variant:"outlined",color:"secondary",onClick:function(){return o(!1)},className:e.mbutton,children:"Cancel"}),Object(n.jsx)(C.a,{variant:"outlined",color:"secondary",disabled:R.eligibility_amount<R.loanamount,onClick:function(){o(!1),J()},className:e.mbutton,children:"Submit"})]})})]})})})]}),b?Object(n.jsx)("div",{style:{width:"100",height:"100",position:"fixed",top:"40%",left:"77%"},children:Object(n.jsx)(I.a,{color:"secondary",size:70})}):null,Object(n.jsx)(H.a,{open:x,autoHideDuration:6e3,anchorOrigin:{vertical:"Top",horizontal:"Right"},onClose:function(){return N(!1)},children:Object(n.jsxs)(U,{onClose:function(){return N(!1)},severity:"success",children:["Your Application is Submitted Successfully .",Object(n.jsx)("br",{}),"Our Team will get back to you in 24 hours."]})})]})}),Object(n.jsx)("div",{className:e.root,id:"services",children:Object(n.jsx)("div",{style:{height:"600px",backgroundColor:"#fff8e7"},children:Object(n.jsx)(O.a,{container:!0,children:[{src:"/ploan.jpg",title:"Personal Loan",description:"A personal loan allows you to borrow money to pay for personal expenses and then repay those funds over time. "},{src:"/hloan.jpg",title:"Home Loan",description:"A house loan or home loan simply means a sum of money borrowed from a financial institution or bank to purchase a house."},{src:"/bloan.png",title:"Business Loan",description:"A business loan is a loan specifically intended for business purposes. As with all loans, it involves the creation of a debt"}].map((function(t,a){return Object(n.jsx)(O.a,{item:!0,xs:3,className:e.card,children:Object(n.jsx)(A,{item:t,setOpen:o})})}))})})}),Object(n.jsx)("div",{className:e.partner,id:"contact",children:Object(n.jsxs)("div",{style:{height:"450px",backgroundColor:"#300000",color:"white"},children:[Object(n.jsx)("h3",{style:{textAlign:"center",paddingTop:"20px",fontFamily:"Cursive"},children:"Our Client Partners"}),Object(n.jsx)("br",{}),Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsxs)(O.a,{item:!0,xs:6,style:{borderRight:"1px solid white"},children:[Object(n.jsx)("h4",{style:{textAlign:"center",paddingTop:"30px",fontFamily:"Cursive"},children:"Personal Loan"}),Object(n.jsxs)("div",{className:e.imgcontainer,children:[Object(n.jsx)("img",{src:"/axis.png",alt:"Axis Bank",width:"200px",height:"50px",className:e.img,style:{backgroundColor:"white"}}),Object(n.jsx)("img",{src:"/icici.png",alt:"ICICI Bank",width:"200px",height:"50px",className:e.img,style:{backgroundColor:"white"}})]}),Object(n.jsx)("div",{className:e.imgcontainer,children:Object(n.jsx)("img",{src:"/hdfc.png",alt:"HDFC Bank",width:"200px",height:"50px",className:e.img,style:{backgroundColor:"white",marginLeft:"150px"}})})]}),Object(n.jsxs)(O.a,{item:!0,xs:6,children:[Object(n.jsx)("h4",{style:{textAlign:"center",paddingTop:"30px",fontFamily:"Cursive"},children:"Home Loan"}),Object(n.jsxs)("div",{className:e.imgcontainer,children:[Object(n.jsx)("img",{src:"/sbi.png",alt:"State Bank",width:"200px",height:"50px",className:e.img,style:{backgroundColor:"white"}}),Object(n.jsx)("img",{src:"/pnb.jpg",alt:"Punjab National Bank",width:"200px",height:"50px",className:e.img,style:{backgroundColor:"white"}})]})]})]})]})}),Object(n.jsx)("div",{className:e.about,id:"about",children:Object(n.jsx)("div",{style:{height:"300px",backgroundColor:"#142F3A",color:"white"},children:Object(n.jsxs)(O.a,{container:!0,children:[Object(n.jsx)(O.a,{item:!0,xs:6,children:Object(n.jsxs)("div",{style:{margin:"40px"},children:[Object(n.jsx)("h4",{children:"About Us:"}),Object(n.jsx)("p",{children:"A personal loan allows you to borrow money to pay for personal expenses and then repay those funds over time. A personal loan allows you to borrow  money to pay for personal expenses and then repay those funds over time. and then repay those funds over time."})]})}),Object(n.jsx)(O.a,{item:!0,xs:6,children:Object(n.jsxs)("div",{style:{margin:"40px"},children:[Object(n.jsx)("h4",{children:"Contact:"}),Object(n.jsxs)("p",{children:["Phone: 9743700072",Object(n.jsx)("span",{style:{marginLeft:"120px"},children:"Email: Random@gmail.com"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})," Address:",Object(n.jsx)("br",{})," 02-04 ,Main Road,",Object(n.jsx)("br",{}),"opp patalamma Temple,",Object(n.jsx)("br",{})," Majestic ,Banglore."]})]})}),Object(n.jsx)("p",{style:{align:"center",paddingLeft:"45%"},children:"copyright@2020"})]})})})]})}var W=a(98),Y=a(12);var Q=function(){return Object(n.jsx)(W.a,{children:Object(n.jsx)(Y.a,{exact:!0,path:"/",component:J})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,231)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),l(e),o(e)}))};a(163);r.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(Q,{})}),document.getElementById("root")),K()}},[[164,1,2]]]);
//# sourceMappingURL=main.571aeb8b.chunk.js.map