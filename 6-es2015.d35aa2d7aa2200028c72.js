(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GxpE:function(t,e,i){"use strict";i.r(e);var c=i("ofXK"),n=i("tyNb"),o=i("PCNd"),s=i("mXMb"),r=i.t(s,2),l=i("fXoL"),a=i("LvDl");let p=(()=>{class t{get storage(){return window.localStorage}getItem(t){const e=this.storage.getItem(t);return e?JSON.parse(e):{}}getItemString(t){return this.storage.getItem(t)}setItemString(t,e){return this.storage.setItem(t,e)}setItem(t,e){const i=e?JSON.stringify(e):"";return this.storage.setItem(t,i)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=l.Sb({token:t,factory:t.\u0275fac}),t})();var u=i("bSwM"),h=i("3Pt+"),d=i("XNiG"),m=i("MutI"),g=i("kmnG");function b(t,e){if(1&t){const t=l.dc();l.cc(0,"form",2),l.cc(1,"mat-form-field"),l.Xb(2,"input",3),l.bc(),l.cc(3,"button",4),l.lc("click",(function(){return l.Gc(t),l.pc().submitTodo()})),l.Pc(4,"Add"),l.bc(),l.bc()}if(2&t){const t=l.pc();l.uc("formGroup",t.form)}}function f(t,e){if(1&t&&(l.cc(0,"span",8),l.Pc(1),l.bc()),2&t){const t=l.pc().$implicit;l.Jb(1),l.Rc("\xa0\xa0 ",t.description,"")}}function k(t,e){if(1&t){const t=l.dc();l.cc(0,"mat-list-item"),l.cc(1,"mat-checkbox",5),l.lc("change",(function(i){l.Gc(t);const c=e.$implicit;return l.pc().completeChange(i,c)})),l.cc(2,"span",6),l.Pc(3),l.bc(),l.Nc(4,f,2,1,"span",7),l.bc(),l.bc()}if(2&t){const t=e.$implicit;l.Nb("complete",null==t?null:t.complete),l.Jb(1),l.uc("checked",t.complete),l.Jb(2),l.Qc(null==t?null:t.title),l.Jb(1),l.uc("ngIf",t.description)}}let y=(()=>{class t{constructor(t,e){this.formBuilder=t,this.storage=e,this.toDos=[],this.disableInput=!1,this.formChange=new l.p,this.unsubscribe=new d.a,this.disabled=!1}onChange(t){}onTouched(){}ngOnInit(){this.form=this.formBuilder.group({todo:["",[h.o.required,h.o.minLength(2)]]}),this.form.valueChanges.subscribe(()=>{this.formChange.emit(this.form)})}addToDo(t){this.toDos.push({id:Math.random(),complete:!1,title:t})}ngOnDestroy(){this.unsubscribe.next(),this.unsubscribe.complete()}completeChange(t,e){e.complete=t.checked,this.onChange(this.toDos)}submitTodo(){this.form.valid&&(this.addToDo(this.form.value.todo),this.form.controls.todo.setValue(null))}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t}writeValue(t){this.toDos=t}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(h.c),l.Wb(p))},t.\u0275cmp=l.Qb({type:t,selectors:[["component-todo"]],inputs:{form:"form",toDos:"toDos",disableInput:"disableInput"},outputs:{formChange:"formChange"},features:[l.Ib([{provide:h.h,useExisting:Object(l.ab)(()=>t),multi:!0}])],decls:3,vars:2,consts:[[3,"formGroup",4,"ngIf"],[3,"complete",4,"ngFor","ngForOf"],[3,"formGroup"],["matInput","","formControlName","todo"],["mat-button","",3,"click"],[3,"checked","change"],[1,"title"],["class","description",4,"ngIf"],[1,"description"]],template:function(t,e){1&t&&(l.Nc(0,b,5,1,"form",0),l.cc(1,"mat-list"),l.Nc(2,k,5,5,"mat-list-item",1),l.bc()),2&t&&(l.uc("ngIf",!e.disableInput),l.Jb(2),l.uc("ngForOf",e.toDos))},directives:[c.k,m.a,c.j,h.p,h.k,h.e,g.a,h.b,h.j,h.d,m.b,u.a],styles:[".complete[_ngcontent-%COMP%]{text-decoration:line-through}.title[_ngcontent-%COMP%]{font-weight:700}.description[_ngcontent-%COMP%]{font-weight:lighter;font-size:12px}"]}),t})();function C(t,e){if(1&t&&(l.cc(0,"span",5),l.Pc(1),l.bc()),2&t){const t=l.pc().$implicit;l.Jb(1),l.Rc("\xa0\xa0 ",t.description,"")}}function I(t,e){if(1&t&&(l.cc(0,"span",5),l.Pc(1),l.bc()),2&t){const t=l.pc().$implicit;l.Jb(1),l.Rc(": \xa0\xa0 ",t.description,"")}}function w(t,e){if(1&t){const t=l.dc();l.cc(0,"div"),l.cc(1,"mat-checkbox",1),l.lc("change",(function(e){return l.Gc(t),l.pc().completeChange(e)})),l.cc(2,"span",2),l.Pc(3),l.bc(),l.Nc(4,C,2,1,"span",3),l.bc(),l.Nc(5,I,2,1,"span",3),l.cc(6,"component-todo",4),l.lc("ngModelChange",(function(i){l.Gc(t);const c=e.index;return l.pc().changeTodo(i,c)})),l.bc(),l.bc()}if(2&t){const t=e.$implicit;l.Jb(1),l.uc("checked",t.complete),l.Jb(2),l.Qc(null==t?null:t.title),l.Jb(1),l.uc("ngIf",t.description),l.Jb(1),l.uc("ngIf",t.description),l.Jb(1),l.uc("disableInput",!0)("ngModel",t.subitems)}}let v=(()=>{class t{constructor(t){this.storage=t,this.checklists=[]}ngOnInit(){const t=this.storage.getItem("inception.component-checklist."+this.name);Object(a.isEmpty)(t)||(this.checklists=t)}changeTodo(t,e){this.storage.setItem("inception.component-checklist."+this.name,this.checklists)}completeChange(t){}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(p))},t.\u0275cmp=l.Qb({type:t,selectors:[["component-checklist"]],inputs:{checklists:"checklists",name:"name"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"checked","change"],[1,"title"],["class","description",4,"ngIf"],["name","todo","ngDefaultControl","",3,"disableInput","ngModel","ngModelChange"],[1,"description"]],template:function(t,e){1&t&&l.Nc(0,w,7,6,"div",0),2&t&&l.uc("ngForOf",e.checklists)},directives:[c.j,u.a,c.k,y,h.b,h.j,h.m],styles:[".title[_ngcontent-%COMP%]{font-size:16px;padding:8px 0;font-weight:700}.description[_ngcontent-%COMP%]{font-weight:lighter;font-size:12px}"]}),t})(),O=(()=>{class t{constructor(){this.techChecklist=r}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=l.Qb({type:t,selectors:[["app-checklists"]],decls:1,vars:2,consts:[[3,"checklists","name"]],template:function(t,e){1&t&&l.Xb(0,"component-checklist",0),2&t&&l.uc("checklists",e.techChecklist)("name","tech")},directives:[v],styles:[""]}),t})();i("VphZ"),i("MT78"),i("EiaH"),i("zdSs");var M=i("5RNC"),J=i("5+WD");const D=[M.b,J.d,m.c,u.b,g.c];let N=(()=>{class t{}return t.\u0275mod=l.Ub({type:t}),t.\u0275inj=l.Tb({factory:function(e){return new(e||t)},imports:[D,M.b,J.d,m.c,u.b,g.c]}),t})();i("DlQD");var P=i("SYYg");let T=(()=>{class t{}return t.\u0275mod=l.Ub({type:t}),t.\u0275inj=l.Tb({factory:function(e){return new(e||t)},providers:[p],imports:[[c.c,h.f,h.n,N,P.b]]}),t})();i.d(e,"ChecklistsModule",(function(){return x}));let x=(()=>{class t{}return t.\u0275mod=l.Ub({type:t}),t.\u0275inj=l.Tb({factory:function(e){return new(e||t)},imports:[[c.c,o.a,n.h.forChild([{path:"",component:O}]),T]]}),t})()},mXMb:function(t){t.exports=JSON.parse('[{"title":"\u6280\u672f\u8fdc\u666f","priority":"High","description":"\u5728\u6280\u672f\u4e0a\uff0c\u6211\u4eec\u6709\u4ec0\u4e48\u8ffd\u6c42","tools":["Lean Canvas"],"documentation":[],"tags":["all","vision"]},{"title":"\u6587\u6863","priority":"High","description":"\u6587\u6863\u5373\u4ee3\u7801\u2014\u2014\u597d\u7684\u6587\u6863\u5e94\u8be5\u662f\u7248\u672c\u7ba1\u7406\u7684\u3002","subitems":[{"title":"Path to Production","description":"\u65e8\u5728\u901a\u8fc7\u53ef\u89c6\u5316\u7684\u65b9\u5f0f\u6765\u5c55\u793a\u9879\u76ee\u7684\u4e0a\u7ebf\u6d41\u7a0b\uff0c\u5e76\u4f18\u5316\u8fc7\u7a0b\u4e2d\u7684\u74f6\u9888\u95ee\u9898\u3002"},{"title":" \u4e0a\u7ebf\u53ca\u53d1\u5e03\u65e5\u8bb0","description":""},{"title":"\u9879\u76ee\u76f8\u5173\u7684 wiki \u548c\u6587\u6863\u8bb0\u5f55","description":""},{"title":"\u5f00\u53d1\u89c4\u8303","description":""}],"tags":["all","technology"]},{"title":"\u67b6\u6784","priority":"High","description":"\u7cfb\u7edf\u76f8\u5173\u7684\u67b6\u6784\u56fe\uff0c\u5982 C4Model \u65b9\u5f0f\u63cf\u8ff0\\n \u73b0\u6709\u7684\u6280\u672f\u6808\u53ca\u5176\u5173\u7cfb","subitems":[{"title":"\u7cfb\u7edf\u76f8\u5173\u7684\u67b6\u6784\u56fe","description":"\u5982 C4Model \u65b9\u5f0f\u63cf\u8ff0"},{"title":"\u73b0\u6709\u7684\u6280\u672f\u6808\u53ca\u5176\u672a\u6765\u65b9\u6848","description":""}],"tags":["all","technology"]},{"title":"\u4ee3\u7801\u5e93","priority":"High","description":"\u5728\u4ee3\u7801\u5e93\u4e2d\u62e5\u6709\u8bf8\u5982\u642d\u5efa\u6307\u5357\u3001\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55\u3001\u7f16\u7801\u5668\u914d\u7f6e\u7b49\u76f8\u5e94\u7684\u4e8b\u9879\u3002","subitems":[{"title":"\u642d\u5efa\u6307\u5357","description":"\u8fd9\u4efd\u6307\u5357\u5e94\u8be5\u968f\u9879\u76ee\u7684\u4ee3\u7801\u4e00\u8d77\u5206\u53d1\u3002"},{"title":"\u67b6\u6784\u51b3\u7b56\u8bb0\u5f55","description":"\u653e\u7f6e\u5728\u4ee3\u7801\u5e93\u7684 ``docs/adr`` \u76ee\u5f55\u4e2d"},{"title":"\u7f16\u8f91\u5668\u914d\u7f6e\u548c\u4ee3\u7801\u98ce\u683c\u89c4\u8303","description":"\u4f7f\u7528\u8bf8\u5982 editorconfig \u8fd9\u6837\u7684\u5de5\u5177\uff0c\u6765\u7edf\u4e00\u89c4\u8303\u5316\u4ee3\u7801\uff0c\u5e76\u91c7\u7528 Lint \u5de5\u5177\u6765\u5206\u6790\u4ee3\u7801 \u3002"},{"title":"\u6a21\u5f0f\u548c\u98ce\u683c\u6307\u5357","description":"\u5728\u9879\u76ee\u4e2d\u878d\u5165\u7cfb\u7edf\u67b6\u6784\uff0c\u5982 Clean Architecture \u548c\u98ce\u683c\uff0c\u5e76\u6709\u660e\u663e\u7684\u6307\u5f15\u3002"},{"title":"\u5206\u652f\u7ba1\u7406\u6a21\u5f0f","description":"GitFlow \u6216\u8005 master\uff0c\u6216\u8005 Feature Branch\u3002"},{"title":"\u4ee3\u7801\u63d0\u4ea4\u98ce\u683c","description":"\u4e1a\u52a1\u98ce\u683c\u6216\u8005\u662f\u5f00\u6e90\u8f6f\u4ef6\u98ce\u683c\uff1f"}],"tags":["all","technology"]},{"title":"\u6d4b\u8bd5","priority":"High","description":"\u5982\u4f55\u9488\u5bf9\u9879\u76ee\u8fdb\u884c\u6709\u6548\u7684\u6d4b\u8bd5","subitems":[{"title":"\u6d4b\u8bd5\u7b56\u7565","description":"\u6d4b\u8bd5\u5c42\u7ea7, \u6d4b\u8bd5\u91d1\u5b57\u5854"},{"title":"\u81ea\u52a8\u5316\u6d4b\u8bd5"}],"tags":["all","technology"]},{"title":"\u9879\u76ee\u6f14\u8fdb","priority":"High","description":"\u672a\u6765\u7684\u6280\u672f\u6808\\n \u7cfb\u7edf\u7684\u6f14\u8fdb\u65b9\u6848","subitems":[{"title":"\u6280\u672f\u98ce\u9669\u70b9","description":"\u5373\u9700\u8981\u63d0\u524d spike \u8c03\u7814\u7684\u5185\u5bb9"},{"title":"\u672a\u6765\u7684\u6280\u672f\u6808"},{"title":"\u7cfb\u7edf\u7684\u6f14\u8fdb\u65b9\u6848"}],"tags":["all","technology"]},{"title":"\u5b89\u5168","priority":"High","description":"\u5b89\u5168\u65e0\u5c0f\u4e8b","subitems":[{"title":"\u5b89\u5168\u6807\u51c6","description":"\u5b89\u5168\u66f4\u91cd\u8981\uff0c\u8fd8\u662f\u4f53\u9a8c\u66f4\u91cd\u8981\uff1f"},{"title":"\u4ee3\u7801\u4e2d\u7684\u6570\u636e\u52a0\u5bc6"},{"title":"\u4ee3\u7801\u5b89\u5168"}],"tags":["all","technology"]},{"title":"\u8d28\u91cf","priority":"High","description":"","subitems":[{"title":"\u9879\u76ee\u8d28\u91cf\u8ddf\u8e2a"},{"title":"\u4ee3\u7801\u8d28\u91cf\u53ef\u89c6\u5316"},{"title":"\u5e94\u7528\u8d28\u91cf\u7b56\u7565"}],"tags":["all","technology"]}]')}}]);