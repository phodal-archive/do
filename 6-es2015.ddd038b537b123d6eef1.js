(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GxpE:function(t,e,i){"use strict";i.r(e);var c=i("ofXK"),o=i("tyNb"),s=i("PCNd"),n=i("mXMb"),l=i("gk29"),r=i("ghwS"),p=i("OH8m"),a=i("fXoL"),d=i("LvDl");let h=(()=>{class t{get storage(){return window.localStorage}getItem(t){const e=this.storage.getItem(t);return e?JSON.parse(e):{}}getItemString(t){return this.storage.getItem(t)}setItemString(t,e){return this.storage.setItem(t,e)}setItem(t,e){const i=e?JSON.stringify(e):"";return this.storage.setItem(t,i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Sb({token:t,factory:t.\u0275fac}),t})();var u=i("bSwM"),m=i("3Pt+"),g=i("XNiG"),b=i("MutI"),f=i("kmnG");function k(t,e){if(1&t){const t=a.dc();a.cc(0,"form",2),a.cc(1,"mat-form-field"),a.Xb(2,"input",3),a.bc(),a.cc(3,"button",4),a.lc("click",(function(){return a.Gc(t),a.pc().submitTodo()})),a.Pc(4,"Add"),a.bc(),a.bc()}if(2&t){const t=a.pc();a.uc("formGroup",t.form)}}function y(t,e){if(1&t&&(a.cc(0,"span",8),a.Pc(1),a.bc()),2&t){const t=a.pc().$implicit;a.Jb(1),a.Rc("\xa0\xa0 ",t.description,"")}}function C(t,e){if(1&t){const t=a.dc();a.cc(0,"mat-list-item"),a.cc(1,"mat-checkbox",5),a.lc("change",(function(i){a.Gc(t);const c=e.$implicit;return a.pc().completeChange(i,c)})),a.cc(2,"span",6),a.Pc(3),a.bc(),a.Nc(4,y,2,1,"span",7),a.bc(),a.bc()}if(2&t){const t=e.$implicit;a.Nb("complete",null==t?null:t.complete),a.Jb(1),a.uc("checked",t.complete),a.Jb(2),a.Qc(null==t?null:t.title),a.Jb(1),a.uc("ngIf",t.description)}}let w=(()=>{class t{constructor(t,e){this.formBuilder=t,this.storage=e,this.toDos=[],this.disableInput=!1,this.formChange=new a.p,this.unsubscribe=new g.a,this.disabled=!1}onChange(t){}onTouched(){}ngOnInit(){this.form=this.formBuilder.group({todo:["",[m.o.required,m.o.minLength(2)]]}),this.form.valueChanges.subscribe(()=>{this.formChange.emit(this.form)})}addToDo(t){this.toDos.push({id:Math.random(),complete:!1,title:t})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}completeChange(t,e){e.complete=t.checked,this.onChange(this.toDos)}submitTodo(){this.form.valid&&(this.addToDo(this.form.value.todo),this.form.controls.todo.setValue(null))}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}writeValue(t){this.toDos=t}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(m.c),a.Wb(h))},t.\u0275cmp=a.Qb({type:t,selectors:[["component-todo"]],inputs:{form:"form",toDos:"toDos",disableInput:"disableInput"},outputs:{formChange:"formChange"},features:[a.Ib([{provide:m.h,useExisting:Object(a.ab)(()=>t),multi:!0}])],decls:3,vars:2,consts:[[3,"formGroup",4,"ngIf"],[3,"complete",4,"ngFor","ngForOf"],[3,"formGroup"],["matInput","","formControlName","todo"],["mat-button","",3,"click"],[3,"checked","change"],[1,"title"],["class","description",4,"ngIf"],[1,"description"]],template:function(t,e){1&t&&(a.Nc(0,k,5,1,"form",0),a.cc(1,"mat-list"),a.Nc(2,C,5,5,"mat-list-item",1),a.bc()),2&t&&(a.uc("ngIf",!e.disableInput),a.Jb(2),a.uc("ngForOf",e.toDos))},directives:[c.k,b.a,c.j,m.p,m.k,m.e,f.a,m.b,m.j,m.d,b.b,u.a],styles:[".complete[_ngcontent-%COMP%]{text-decoration:line-through}.title[_ngcontent-%COMP%]{font-weight:700}.description[_ngcontent-%COMP%]{font-weight:lighter;font-size:12px}"]}),t})();function P(t,e){if(1&t&&(a.cc(0,"span",5),a.Pc(1),a.bc()),2&t){const t=a.pc().$implicit;a.Jb(1),a.Rc("\xa0\xa0 ",t.description,"")}}function I(t,e){if(1&t&&(a.cc(0,"span",5),a.Pc(1),a.bc()),2&t){const t=a.pc().$implicit;a.Jb(1),a.Rc(": \xa0\xa0 ",t.description,"")}}function v(t,e){if(1&t){const t=a.dc();a.cc(0,"div"),a.cc(1,"mat-checkbox",1),a.lc("change",(function(e){return a.Gc(t),a.pc().completeChange(e)})),a.cc(2,"span",2),a.Pc(3),a.bc(),a.Nc(4,P,2,1,"span",3),a.bc(),a.Nc(5,I,2,1,"span",3),a.cc(6,"component-todo",4),a.lc("ngModelChange",(function(i){a.Gc(t);const c=e.index;return a.pc().changeTodo(i,c)})),a.bc(),a.bc()}if(2&t){const t=e.$implicit;a.Jb(1),a.uc("checked",t.complete),a.Jb(2),a.Qc(null==t?null:t.title),a.Jb(1),a.uc("ngIf",t.description),a.Jb(1),a.uc("ngIf",t.description),a.Jb(1),a.uc("disableInput",!0)("ngModel",t.subitems)}}let O=(()=>{class t{constructor(t){this.storage=t,this.checklists=[]}ngOnInit(){const t=this.storage.getItem("inception.component-checklist."+this.name);Object(d.isEmpty)(t)||(this.checklists=t)}changeTodo(t,e){this.storage.setItem("inception.component-checklist."+this.name,this.checklists)}completeChange(t){}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(h))},t.\u0275cmp=a.Qb({type:t,selectors:[["component-checklist"]],inputs:{checklists:"checklists",name:"name"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"checked","change"],[1,"title"],["class","description",4,"ngIf"],["name","todo","ngDefaultControl","",3,"disableInput","ngModel","ngModelChange"],[1,"description"]],template:function(t,e){1&t&&a.Nc(0,v,7,6,"div",0),2&t&&a.uc("ngForOf",e.checklists)},directives:[c.j,u.a,c.k,w,m.b,m.j,m.m],styles:[".title[_ngcontent-%COMP%]{font-size:16px;padding:8px 0;font-weight:700}.description[_ngcontent-%COMP%]{font-weight:lighter;font-size:12px}"]}),t})(),M=(()=>{class t{constructor(){this.techChecklist=n,this.processChecklist=l,this.peopleChecklist=r,this.domainChecklist=p}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Qb({type:t,selectors:[["app-checklists"]],decls:17,vars:8,consts:[[1,"checklists"],["id","checklist-tech",1,"checklist-block"],[3,"checklists","name"],["id","checklist-people",1,"checklist-block"],["id","checklist-process",1,"checklist-block"],["id","checklist-domain",1,"checklist-block"]],template:function(t,e){1&t&&(a.cc(0,"div",0),a.cc(1,"div",1),a.cc(2,"h2"),a.Pc(3,"\u6280\u672f"),a.bc(),a.Xb(4,"component-checklist",2),a.bc(),a.cc(5,"div",3),a.cc(6,"h2"),a.Pc(7,"\u4eba"),a.bc(),a.Xb(8,"component-checklist",2),a.bc(),a.cc(9,"div",4),a.cc(10,"h2"),a.Pc(11,"\u6d41\u7a0b"),a.bc(),a.Xb(12,"component-checklist",2),a.bc(),a.cc(13,"div",5),a.cc(14,"h2"),a.Pc(15,"\u4e1a\u52a1"),a.bc(),a.Xb(16,"component-checklist",2),a.bc(),a.bc()),2&t&&(a.Jb(4),a.uc("checklists",e.techChecklist)("name","tech"),a.Jb(4),a.uc("checklists",e.peopleChecklist)("name","people"),a.Jb(4),a.uc("checklists",e.processChecklist)("name","process"),a.Jb(4),a.uc("checklists",e.domainChecklist)("name","domain"))},directives:[O],styles:[".checklists[_ngcontent-%COMP%]{width:80%;max-width:1200px;margin:2em auto}.checklist-block[_ngcontent-%COMP%]{background:#fff;padding:2em;margin-bottom:1em;border-radius:2px;box-shadow:0 1px 0 0 #e0e1e9}"]}),t})();i("VphZ"),i("MT78"),i("EiaH"),i("zdSs");var J=i("5RNC"),x=i("5+WD");const D=[J.b,x.d,b.c,u.b,f.c];let N=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(e){return new(e||t)},imports:[D,J.b,x.d,b.c,u.b,f.c]}),t})();i("DlQD");var H=i("SYYg");let S=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(e){return new(e||t)},providers:[h],imports:[[c.c,m.f,m.n,N,H.b]]}),t})();i.d(e,"ChecklistsModule",(function(){return T}));let T=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(e){return new(e||t)},imports:[[c.c,s.a,o.h.forChild([{path:"",component:M}]),S]]}),t})()},OH8m:function(t){t.exports=JSON.parse('[{"title":"\u4e1a\u52a1\u8fdc\u666f","priority":"High","description":"\u6211\u4eec\u5728\u505a\u4ec0\u4e48\uff0c\u6211\u4eec\u8981\u53bb\u54ea\u91cc\uff1f","tags":["all","domain"]},{"title":"\u4e1a\u52a1\u9700\u6c42","priority":"Medium","description":"","subitems":[{"title":"\u9700\u6c42\u5217\u8868","description":"\u6709\u6ca1\u6709\u63a5\u8fd1\u5168\u7684\u9700\u6c42\u5217\u8868\uff1f\u5728\u4e00\u5b9a\u7684\u65f6\u95f4\uff08\u5982\u8fed\u4ee3\u5185\uff09\uff0c\u9700\u6c42\u5e94\u8be5\u662f\u7a33\u5b9a\u7684\u3002"},{"title":"\u9700\u6c42\u7ba1\u7406","description":"\u9700\u6c42\u662f\u5982\u4f55\u4ece\u53e3\u5934\u5230\u5f85\u529e\u5217\u8868\u7684\uff1f\u4e2d\u95f4\u662f\u4e0d\u662f\u5b58\u5728\u4e0d\u89c4\u8303\u7684\u95ee\u9898"},{"title":" \u4e1a\u52a1\u662f\u5982\u4f55\u8fdb\u884c\u53d8\u66f4\u7684\uff1f"}],"tags":["all","domain"]},{"title":"\u8de8\u529f\u80fd\u9700\u6c42","priority":"High","description":"\u5728\u7cfb\u7edf\u8fd0\u4f5c\u65f6\u89c2\u5bdf\u5230\u7684\u8d28\u91cf\uff0c\u4f8b\u5982\u4fdd\u5b89\u6027\u53ca\u6613\u7528\u6027\u7b49","subitems":[{"title":"\u8fd0\u884c\u8d28\u91cf","description":"\u5728\u7cfb\u7edf\u8fd0\u4f5c\u65f6\u89c2\u5bdf\u5230\u7684\u8d28\u91cf\uff0c\u4f8b\u5982\u4fdd\u5b89\u6027\u53ca\u6613\u7528\u6027\u7b49"},{"title":"\u6f14\u8fdb\u8d28\u91cf","description":"\u8f6f\u4ef6\u7cfb\u7edf\u7ed3\u6784\u53ca\u5f00\u53d1\u8fc7\u7a0b\u6709\u5173\u7684\u8d28\u91cf\uff0c\u4f8b\u5982\u8f6f\u4ef6\u53ef\u6d4b\u8bd5\u6027\u3001\u53ef\u7ef4\u62a4\u6027\u3001\u53ef\u6269\u5c55\u6027\u3001\u53ef\u4f38\u7f29\u6027\uff08scalability\uff09\u7b49"}],"tags":["all","domain"]}]')},ghwS:function(t){t.exports=JSON.parse('[{"title":"\u56e2\u961f\u6210\u5458","priority":"High","description":"\u975e\u6280\u672f\u95ee\u9898\u627e\u8c01\uff1f","subitems":[{"title":"\u975e\u6280\u672f\u95ee\u9898\u627e\u8c01\uff1f"},{"title":"\u56e2\u961f\u6210\u5458\u7684\u6280\u672f\u6808\u53ca\u6c34\u5e73"},{"title":"\u6bcf\u4e2a\u4eba\u7684\u6280\u672f\u6c34\u5e73","description":"\u5305\u542b\u5e94\u8be5\u600e\u4e48\u5e26\uff1aCoach\uff08\u6559\u7ec3\u5f0f\uff09, Pairing\uff08\u7ed3\u5bf9\u5f0f\uff09, Teach\uff08\u6559\u5b66\u5f0f\uff09"},{"title":"\u9879\u76ee\u65e0\u5173\u7684\u6280\u672f\uff0c\u53ef\u4ee5\u627e\u8c01\u4e00\u8d77\u201c\u5a31\u4e50\u201d\uff1f"},{"title":"1 to 1 Meetings"}],"tags":["all","people"]},{"title":"\u5229\u76ca\u76f8\u5173\u8005","priority":"Medium","description":"","subitems":[{"title":"\u4e86\u89e3\u5404\u4e2a\u76f8\u5173\u8005\uff08Level 1\uff09","description":"\u5982\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u53d1\u4eba\u5458\uff0c\u5927\u90e8\u5206\u65f6\u95f4\u5e76\u4e0d\u4f1a\u548c\u5229\u76ca\u76f8\u5173\u8005\u6709\u76f4\u63a5\u7684\u6c9f\u901a\u3002"},{"title":"\u548c\u76f8\u5173\u8005\u4fdd\u6301\u6c9f\u901a\uff08Level 2\uff09","description":"\u9002\u5f53\u6c9f\u901a\uff0c\u53ef\u4ee5\u5e2e\u52a9\u9879\u76ee\u66f4\u597d\u5730\u8fdb\u884c"}],"tags":["all","people"]},{"title":"\u8de8\u56e2\u961f\u534f\u4f5c","priority":"Medium","description":"\u76f8\u5173\u7684\u5408\u4f5c\u65b9\u6709\u54ea\u4e9b\uff0c\u5404\u81ea\u7684\u63a5\u53e3\u4eba\u662f\u8c01\uff1f","subitems":[{"title":"\u76f8\u5173\u7684\u5408\u4f5c\u65b9\u6709\u54ea\u4e9b\uff0c\u5404\u81ea\u7684\u63a5\u53e3\u4eba\u662f\u8c01\uff1f"},{"title":"\u540c\u7ec4\u7ec7\u3001\u9879\u76ee\u4e0b\u7684\u5176\u5b83\u56e2\u961f\u3002"}],"tags":["all","people"]},{"title":"\u7528\u6237","priority":"Low","description":"\u7528\u6237\u662f\u8c01\uff1f\u6211\u4eec\u662f\u5426\u4e0e\u4ed6\u4eec\u76f4\u63a5\u63a5\u89e6\uff1f","subitems":[{"title":"\u7528\u6237\u662f\u8c01\uff1f\u6211\u4eec\u662f\u5426\u4e0e\u4ed6\u4eec\u76f4\u63a5\u63a5\u89e6\uff1f"},{"title":"\u53cd\u9988\u73af\u3002\u4e00\u4e2a\u7528\u6237\u7684\u53cd\u9988\u662f\u5982\u4f55\u53d8\u6210\u9700\u6c42\u7684\uff1f"}],"tags":["all","people"]}]')},gk29:function(t){t.exports=JSON.parse('[{"title":"Project Process","priority":"High","description":"\u5b8c\u6210\u4e1a\u52a1\u9700\u6c42\u7684\u57fa\u672c\u6d41\u7a0b","subitems":[{"title":"\u9879\u76ee\u7684 Roadmap","description":"\u9879\u76ee Deadline\uff0c\u5173\u952e\u65f6\u95f4\u8282\u70b9\uff0c\u9879\u76ee\u89c4\u5212\u7b49"},{"title":"\u9879\u76ee\u529f\u80fd\u7684\u751f\u547d\u5468\u671f","description":"\u5982\u654f\u6377\u4e2d\u7684\u6545\u4e8b\u5361\u5de5\u4f5c\u6d41"},{"title":"\u6c9f\u901a\u65b9\u5f0f?","description":"\u5982 IM\uff0c\u90ae\u4ef6\uff0c\u8fd8\u6709\u654f\u6377\u7684\u6bcf\u65e5\u7ad9\u4f1a\uff0c\u8fdc\u7a0b\u4f1a\u8bae\uff0cRetro \u7b49"}],"tags":["all","process"]},{"title":"Path to Development","priority":"High","description":"\u4e0d\u540c\u7684\u7684\u7ec4\u7ec7\u5305\u542b\u81ea\u8eab\u7279\u522b\u7684\u60c5\u51b5\uff0c\u5982 PC \u7aef\u53e3\u3001\u7f51\u7edc\u6743\u9650\u3001\u4ee3\u7801\u5e93\u6743\u9650\u7b49\u7684\u5f00\u901a\u90fd\u9700\u8981\u4e00\u5b9a\u7684\u6d41\u7a0b\u3002","subitems":[{"title":"\u5f00\u53d1\u673a\u7533\u8bf7\u53ca\u7f51\u7edc\u7b49\u6743\u9650\u51c6\u5907"},{"title":"\u4ee3\u7801\u5e93\u6743\u9650\u7ba1\u7406"},{"title":"\u7f16\u8f91\u5668\u548c\u76f8\u5173\u7684\u5de5\u5177\u7533\u8bf7"}],"tags":["all","process"]},{"title":"Path to Production","priority":"High","description":"\u4ee3\u7801\u4e2d\u7684 Path to Production \u53ea\u662f\u4e00\u4efd\u8bf4\u660e\u2014\u2014\u9488\u5bf9\u4e8e\u5f00\u53d1\u4eba\u5458\u7684\uff0c\u800c\u8fd9\u91cc\u7684\u5219\u9700\u8981\u4e00\u4e2a\u66f4\u8be6\u7ec6\u7684\u8bf4\u660e\u3002","subitems":[{"title":"\u4e0a\u7ebf\u6bcf\u4e00\u6b65\u7684\u6d41\u7a0b"},{"title":"\u76f8\u5173\u7684\u5173\u952e\u4eba"},{"title":"\u6bcf\u4e00\u6b65\u6240\u9700\u8981\u7684\u5de5\u5177"},{"title":"\u6bcf\u4e00\u6b65\u6240\u9700\u8981\u7684\u6d41\u7a0b","description":"\u5982 QA \u6d4b\u8bd5\u6d41\u7a0b\uff0c\u4e0a\u7ebf\u6d41\u7a0b"}],"tags":["all","process"]},{"title":"Path to Roll Off","priority":"Low","description":"\u6362\u4e00\u4e2a\u9879\u76ee\u65f6\uff0c\u9700\u8981\u54ea\u4e9b\u4e1c\u897f\uff1f","tags":["all","process"]}]')},mXMb:function(t){t.exports=JSON.parse('[{"title":"\u6280\u672f\u8fdc\u666f","priority":"High","description":"\u5728\u6280\u672f\u4e0a\uff0c\u6211\u4eec\u6709\u4ec0\u4e48\u8ffd\u6c42","tools":["Lean Canvas"],"documentation":[],"tags":["all","vision"]},{"title":"\u6587\u6863","priority":"High","description":"\u6587\u6863\u5373\u4ee3\u7801\u2014\u2014\u597d\u7684\u6587\u6863\u5e94\u8be5\u662f\u7248\u672c\u7ba1\u7406\u7684\u3002","subitems":[{"title":"Path to Production","description":"\u65e8\u5728\u901a\u8fc7\u53ef\u89c6\u5316\u7684\u65b9\u5f0f\u6765\u5c55\u793a\u9879\u76ee\u7684\u4e0a\u7ebf\u6d41\u7a0b\uff0c\u5e76\u4f18\u5316\u8fc7\u7a0b\u4e2d\u7684\u74f6\u9888\u95ee\u9898\u3002"},{"title":" \u4e0a\u7ebf\u53ca\u53d1\u5e03\u65e5\u8bb0","description":""},{"title":"\u9879\u76ee\u76f8\u5173\u7684 wiki \u548c\u6587\u6863\u8bb0\u5f55","description":""},{"title":"\u5f00\u53d1\u89c4\u8303","description":""}],"tags":["all","technology"]},{"title":"\u67b6\u6784","priority":"High","description":"\u7cfb\u7edf\u76f8\u5173\u7684\u67b6\u6784\u56fe\uff0c\u5982 C4Model \u65b9\u5f0f\u63cf\u8ff0\\n \u73b0\u6709\u7684\u6280\u672f\u6808\u53ca\u5176\u5173\u7cfb","subitems":[{"title":"\u7cfb\u7edf\u76f8\u5173\u7684\u67b6\u6784\u56fe","description":"\u5982 C4Model \u65b9\u5f0f\u63cf\u8ff0"},{"title":"\u73b0\u6709\u7684\u6280\u672f\u6808\u53ca\u5176\u672a\u6765\u65b9\u6848","description":""}],"tags":["all","technology"]},{"title":"\u4ee3\u7801\u5e93","priority":"High","description":"\u5728\u4ee3\u7801\u5e93\u4e2d\u62e5\u6709\u8bf8\u5982\u642d\u5efa\u6307\u5357\u3001\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55\u3001\u7f16\u7801\u5668\u914d\u7f6e\u7b49\u76f8\u5e94\u7684\u4e8b\u9879\u3002","subitems":[{"title":"\u642d\u5efa\u6307\u5357","description":"\u8fd9\u4efd\u6307\u5357\u5e94\u8be5\u968f\u9879\u76ee\u7684\u4ee3\u7801\u4e00\u8d77\u5206\u53d1\u3002"},{"title":"\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55","description":"\u653e\u7f6e\u5728\u4ee3\u7801\u5e93\u7684 ``docs/adr`` \u76ee\u5f55\u4e2d"},{"title":"\u7f16\u8f91\u5668\u914d\u7f6e\u548c\u4ee3\u7801\u98ce\u683c\u89c4\u8303","description":"\u4f7f\u7528\u8bf8\u5982 editorconfig \u8fd9\u6837\u7684\u5de5\u5177\uff0c\u6765\u7edf\u4e00\u89c4\u8303\u5316\u4ee3\u7801\uff0c\u5e76\u91c7\u7528 Lint \u5de5\u5177\u6765\u5206\u6790\u4ee3\u7801 \u3002"},{"title":"\u6a21\u5f0f\u548c\u98ce\u683c\u6307\u5357","description":"\u5728\u9879\u76ee\u4e2d\u878d\u5165\u7cfb\u7edf\u67b6\u6784\uff0c\u5982 Clean Architecture \u548c\u98ce\u683c\uff0c\u5e76\u6709\u660e\u663e\u7684\u6307\u5f15\u3002"},{"title":"\u5206\u652f\u7ba1\u7406\u6a21\u5f0f","description":"GitFlow \u6216\u8005 master\uff0c\u6216\u8005 Feature Branch\u3002"},{"title":"\u4ee3\u7801\u63d0\u4ea4\u98ce\u683c","description":"\u4e1a\u52a1\u98ce\u683c\u6216\u8005\u662f\u5f00\u6e90\u8f6f\u4ef6\u98ce\u683c\uff1f"}],"tags":["all","technology"]},{"title":"\u6d4b\u8bd5","priority":"High","description":"\u5982\u4f55\u9488\u5bf9\u9879\u76ee\u8fdb\u884c\u6709\u6548\u7684\u6d4b\u8bd5","subitems":[{"title":"\u6d4b\u8bd5\u7b56\u7565","description":"\u6d4b\u8bd5\u5c42\u7ea7, \u6d4b\u8bd5\u91d1\u5b57\u5854"},{"title":"\u81ea\u52a8\u5316\u6d4b\u8bd5"}],"tags":["all","technology"]},{"title":"\u9879\u76ee\u6f14\u8fdb","priority":"High","description":"\u672a\u6765\u7684\u6280\u672f\u6808\\n \u7cfb\u7edf\u7684\u6f14\u8fdb\u65b9\u6848","subitems":[{"title":"\u6280\u672f\u98ce\u9669\u70b9","description":"\u5373\u9700\u8981\u63d0\u524d spike \u8c03\u7814\u7684\u5185\u5bb9"},{"title":"\u672a\u6765\u7684\u6280\u672f\u6808"},{"title":"\u7cfb\u7edf\u7684\u6f14\u8fdb\u65b9\u6848"}],"tags":["all","technology"]},{"title":"\u5b89\u5168","priority":"High","description":"\u5b89\u5168\u65e0\u5c0f\u4e8b","subitems":[{"title":"\u5b89\u5168\u6807\u51c6","description":"\u5b89\u5168\u66f4\u91cd\u8981\uff0c\u8fd8\u662f\u4f53\u9a8c\u66f4\u91cd\u8981\uff1f"},{"title":"\u4ee3\u7801\u4e2d\u7684\u6570\u636e\u52a0\u5bc6"},{"title":"\u4ee3\u7801\u5b89\u5168"}],"tags":["all","technology"]},{"title":"\u8d28\u91cf","priority":"High","description":"","subitems":[{"title":"\u9879\u76ee\u8d28\u91cf\u8ddf\u8e2a"},{"title":"\u4ee3\u7801\u8d28\u91cf\u53ef\u89c6\u5316"},{"title":"\u5e94\u7528\u8d28\u91cf\u7b56\u7565"}],"tags":["all","technology"]}]')}}]);