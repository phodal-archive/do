function _classCallCheck(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,a,e){return a&&_defineProperties(n.prototype,a),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"1ibO":function(n,a,e){"use strict";e.r(a);var r,o=e("ofXK"),t=e("3Pt+"),i=e("tyNb"),s=e("Tlfu"),l=e("fXoL"),u=e("jhN1"),c=e("GWUB"),p=((r=function(){function n(a){_classCallCheck(this,n),this.title=a,this.data='```mindmap\n - DevOps \u6280\u80fd\u56fe\u8c31\n   - \u5b66\u4f1a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\n     - Node.js\n     - Rust\n     - Go\n     - Java\n     - Python\n     - Ruby\n     - C\n     - C++\n   - \u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\n     - \u8fdb\u7a0b\u7ba1\u7406\n     - \u7ebf\u7a0b\u4e0e\u5e76\u53d1\n     - \u5957\u63a5\u5b57\n     - POSIX \u57fa\u7840\n     - \u7f51\u7edc\u6982\u5ff5\n     - \u542f\u52a8\u7ba1\u7406\n     - \u670d\u52a1\u7ba1\u7406\n     - I/O \u7ba1\u7406\n     - \u865a\u62df\u5316\n     - \u5185\u5b58/\u5b58\u50a8\n     - \u6587\u4ef6\u7cfb\u7edf\n   - \u5b66\u4e60\u7ba1\u7406\u670d\u52a1\u5668\n     - \u64cd\u4f5c\u7cfb\u7edf\n       - Linux(\u5404\u5927\u53d1\u884c\u7248)\n       - Unix(\u5404\u5927\u53d1\u884c\u7248)\n       - Windows\n     - \u5b66\u4f1a\u5728\u7ec8\u7aef\u64cd\u4f5c\n       - \u6587\u672c\u5904\u7406\u5de5\u5177\n       - \u8fdb\u7a0b\u76d1\u63a7\n       - \u7f51\u7edc\n       - \u5b66\u4e60 Bash \u811a\u672c\n       - Vim/Nano/PowerShell/Emacs\n       - \u4ece\u6e90\u7801\u7f16\u8bd1\u7a0b\u5e8f\n       - \u7cfb\u7edf\u6027\u80fd\n       - \u5176\u5b83\u547d\u4ee4\n   - \u7f51\u7edc\u3001\u5b89\u5168\u548c\u534f\u8bae\n    - HTTP\n    - HTTPS\n    - FTP\n    - SSL / TLS\n    - SSH\n    - \u7aef\u53e3\u8f6c\u53d1\n   - \u5982\u4f55\u642d\u5efa\u4e00\u4e2a__\n    - \u53cd\u5411\u4ee3\u7406\n    - \u8f6c\u53d1\u4ee3\u7406\n    - \u7f13\u5b58\u670d\u52a1\u5668\n    - \u8d1f\u8f7d\u5747\u8861\n    - \u9632\u706b\u5899\n    - \u7f51\u9875\u670d\u52a1\u5668\n      - IIS\n      - Nginx\n      - Apache\n      - Tomcat\n      - caddy\n   - \u5b66\u4e60\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\n     - \u5bb9\u5668\u5316\n       - Docker\n       - LXC\n     - \u914d\u7f6e\u7ba1\u7406\n       - Ansible\n       - Chef\n       - Salt\n       - Puppet\n     - \u5bb9\u5668\u7f16\u6392\n       - Kubernetes\n       - Docker Swarm\n       - Mesos\n       - Nomad\n     - \u57fa\u7840\u67b6\u6784\u914d\u7f6e\n       - Terraform\n       - CloudFormation\n       - Pulumi\n     - \u670d\u52a1\u7f51\u683c\n       - Istio\n       - Envoy\n       - Linkerd\n       - Consul\n   - \u5b66\u4e60 CI/CD \u5de5\u5177\n    - Gitlab CI\n    - Github Actions\n    - Jenkins\n    - Travis CI\n    - CircleCI\n    - TeamCity\n    - Bamboo\n    - Azure DevOps\n   - \u5b66\u4e60\u5982\u4f55\u76d1\u63a7\u8f6f\u4ef6\u548c\u57fa\u7840\u67b6\u6784\n    - \u57fa\u7840\u67b6\u6784\u76d1\u63a7\n      - Prometheus\n      - Grafana\n      - Nagios\n      - Zabbix\n      - Monit\n      - Datadog\n    - Jaeger\n      - New Relic\n      - AppDynamics\n      - Instana\n      - OpenTracing\n    - \u65e5\u5fd7\u7ba1\u7406\n      - Elastic Stack\n      - Graylog\n      - Splunk\n      - Papertrail\n   - \u4e91\u670d\u52a1\u63d0\u4f9b\u5546\n    - AWS\n    - Digital Ocean\n    - Google Cloud\n    - Azure\n    - Heroku\n    - Alibaba Cloud\n    - Linode\n    - Vultr\n   - \u4e91\u8bbe\u8ba1\u6a21\u5f0f\n    - \u53ef\u7528\u6027\n    - \u6570\u636e\u7ba1\u7406\n    - \u8bbe\u8ba1\u4e0e\u8bbe\u65bd\n    - \u7ba1\u7406\u4e0e\u76d1\u63a7\n```\n\n```graphviz\ndigraph {\n  subgraph start {\n    DevOps;\n  }\n\n  subgraph language {\n    "\u5b66\u4f1a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00"\n    "Node.js"\n    "Rust"\n    "Go"\n    "Java"\n    "Python"\n    "Ruby"\n    "C"\n    "C++"\n  }\n\n  subgraph os {\n    "\u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5";\n    "\u8fdb\u7a0b\u7ba1\u7406"\n    "\u7ebf\u7a0b\u4e0e\u5e76\u53d1"\n    "\u5957\u63a5\u5b57"\n    "POSIX \u57fa\u7840"\n    "\u7f51\u7edc\u6982\u5ff5"\n    "\u542f\u52a8\u7ba1\u7406"\n    "\u670d\u52a1\u7ba1\u7406"\n    "I/O \u7ba1\u7406"\n    "\u865a\u62df\u5316"\n    "\u5185\u5b58/\u5b58\u50a8"\n    "\u6587\u4ef6\u7cfb\u7edf"\n  }\n\n  subgraph server {\n    "\u5b66\u4e60\u7ba1\u7406\u670d\u52a1\u5668"\n    subgraph os_list {\n      "\u64cd\u4f5c\u7cfb\u7edf"\n      "Linux(\u5404\u5927\u53d1\u884c\u7248)"\n      "Unix(\u5404\u5927\u53d1\u884c\u7248)"\n      "Windows"\n    }\n    subgraph bash {\n      "\u5b66\u4f1a\u5728\u7ec8\u7aef\u64cd\u4f5c"\n      "\u6587\u672c\u5904\u7406\u5de5\u5177"\n      "\u8fdb\u7a0b\u76d1\u63a7"\n      "\u7f51\u7edc"\n      "\u5b66\u4e60 Bash \u811a\u672c"\n      "Vim/Nano/PowerShell/Emacs"\n      "\u4ece\u6e90\u7801\u7f16\u8bd1\u7a0b\u5e8f"\n      "\u7cfb\u7edf\u6027\u80fd"\n      "\u5176\u5b83\u547d\u4ee4"\n    }\n  }\n\n  subgraph networks {\n    "\u7f51\u7edc\u3001\u5b89\u5168\u548c\u534f\u8bae"\n    "HTTP"\n    "HTTPS"\n    "FTP"\n    "SSL / TLS"\n    "SSH"\n    "\u7aef\u53e3\u8f6c\u53d1"\n    subgraph emails {\n      "Emails"\n      "SMTP"\n      "IMAPS"\n      "POP3S"\n      "DMARC"\n      "SPF"\n      "\u57df\u5173\u952e\u5b57"\n    }\n  }\n\n  subgraph how_to {\n    "\u4ec0\u4e48\u662f/\u5982\u4f55\u8bbe\u7f6e\u4e00\u4e2a__"\n    "\u53cd\u5411\u4ee3\u7406"\n    "\u8f6c\u53d1\u4ee3\u7406"\n    "\u7f13\u5b58\u670d\u52a1\u5668"\n    "\u8d1f\u8f7d\u5747\u8861"\n    "\u9632\u706b\u5899"\n    subgraph web_server {\n      "\u7f51\u9875\u670d\u52a1\u5668"\n      "IIS"\n      "Nginx"\n      "Apache"\n      "Tomcat"\n      "caddy"\n    }\n  }\n\n  subgraph infra_code {\n    "\u5b66\u4e60\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801"\n    subgraph containers {\n      "\u5bb9\u5668\u5316"\n      "Docker"\n      "LXC"\n    }\n    subgraph configuration {\n      "\u914d\u7f6e\u7ba1\u7406"\n      "Ansible"\n      "Chef"\n      "Salt"\n      "Puppet"\n    }\n    subgraph orchestration {\n      "\u5bb9\u5668\u7f16\u6392"\n      "Kubernetes"\n      "Docker Swarm"\n      "Mesos"\n      "Nomad"\n    }\n    subgraph provisioning {\n      "\u57fa\u7840\u67b6\u6784\u914d\u7f6e"\n      "Terraform"\n      "CloudFormation"\n      "Pulumi"\n    }\n    subgraph mesh {\n      "\u670d\u52a1\u7f51\u683c"\n      "Istio"\n      "Envoy"\n      "Linkerd"\n      "Consul"\n    }\n  }\n\n  subgraph cicd {\n    "\u5b66\u4e60 CI/CD \u5de5\u5177"\n    "Gitlab CI"\n    "Github Actions"\n    "Jenkins"\n    "Travis CI"\n    "CircleCI"\n    "TeamCity"\n    "Bamboo"\n    "Azure DevOps"\n  }\n\n  subgraph monitor {\n    "\u5b66\u4e60\u5982\u4f55\u76d1\u63a7\u8f6f\u4ef6\u548c\u57fa\u7840\u67b6\u6784"\n    subgraph infra_monitor {\n      "\u57fa\u7840\u67b6\u6784\u76d1\u63a7"\n      "Prometheus"\n      "Grafana"\n      "Nagios"\n      "Zabbix"\n      "Monit"\n      "Datadog"\n    }\n    subgraph app_monitor {\n      "\u5e94\u7528\u76d1\u63a7"\n      "Jaeger"\n      "New Relic"\n      "AppDynamics"\n      "Instana"\n      "OpenTracing"\n    }\n    subgraph logs_management {\n      "\u65e5\u5fd7\u7ba1\u7406"\n      "Elastic Stack"\n      "Graylog"\n      "Splunk"\n      "Papertrail"\n    }\n  }\n\n  subgraph cloud {\n    "\u4e91\u670d\u52a1\u63d0\u4f9b\u5546"\n    "AWS"\n    "Digital Ocean"\n    "Google Cloud"\n    "Azure"\n    "Heroku"\n    "Alibaba Cloud"\n    "Linode"\n    "Vultr"\n  }\n\n  subgraph patterns {\n    "\u4e91\u8bbe\u8ba1\u6a21\u5f0f"\n    "\u53ef\u7528\u6027"\n    "\u6570\u636e\u7ba1\u7406"\n    "\u8bbe\u8ba1\u4e0e\u8bbe\u65bd"\n    "\u7ba1\u7406\u4e0e\u76d1\u63a7"\n  }\n\n  DevOps -> "\u5b66\u4f1a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00" [ltail=start, lhead=language];\n  "\u5b66\u4f1a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00" -> "\u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5" [ltail=language, lhead=os];\n  "\u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5" -> "\u5b66\u4e60\u7ba1\u7406\u670d\u52a1\u5668" [ltail=os, lhead=server];\n  "\u5b66\u4e60\u7ba1\u7406\u670d\u52a1\u5668" -> "\u7f51\u7edc\u3001\u5b89\u5168\u548c\u534f\u8bae" [ltail=server, lhead=networks];\n  "\u7f51\u7edc\u3001\u5b89\u5168\u548c\u534f\u8bae" -> "\u5982\u4f55\u642d\u5efa\u4e00\u4e2a__" [ltail=networks, lhead=how_to];\n  "\u5982\u4f55\u642d\u5efa\u4e00\u4e2a__" -> "\u5b66\u4e60\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801" [ltail=how_to, lhead=infra_code];\n  "\u5b66\u4e60\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801" -> "\u5b66\u4e60 CI/CD \u5de5\u5177" [ltail=infra_code, lhead=cicd];\n  "\u5b66\u4e60 CI/CD \u5de5\u5177" -> "\u5b66\u4e60\u5982\u4f55\u76d1\u63a7\u8f6f\u4ef6\u548c\u57fa\u7840\u67b6\u6784" [ltail=cicd, lhead=monitor];\n  "\u5b66\u4e60\u5982\u4f55\u76d1\u63a7\u8f6f\u4ef6\u548c\u57fa\u7840\u67b6\u6784" -> "\u4e91\u670d\u52a1\u63d0\u4f9b\u5546" [ltail=monitor, lhead=cloud];\n  "\u4e91\u670d\u52a1\u63d0\u4f9b\u5546" -> "\u4e91\u8bbe\u8ba1\u6a21\u5f0f" [ltail=cloud, lhead=patterns];\n}\n```\n'}return _createClass(n,[{key:"ngOnInit",value:function(){this.title.setTitle("DevOps \u6280\u80fd\u56fe\u8c31 - DevOps \u77e5\u8bc6\u5e73\u53f0")}}]),n}()).\u0275fac=function(n){return new(n||r)(l.Ob(u.d))},r.\u0275cmp=l.Ib({type:r,selectors:[["app-skill-tree"]],decls:6,vars:1,consts:[["href","https://github.com/kamranahmedse/developer-roadmap"],[1,"ledge-skilltree",3,"data"]],template:function(n,a){1&n&&(l.Ub(0,"div"),l.Ub(1,"p"),l.Hc(2," based on "),l.Ub(3,"a",0),l.Hc(4,"Developer Roadmap"),l.Tb(),l.Tb(),l.Pb(5,"component-markdown-render",1),l.Tb()),2&n&&(l.Bb(5),l.lc("data",a.data))},directives:[c.a],styles:[""]}),r),h=e("PCNd");e.d(a,"SkillTreeModule",(function(){return b}));var d,b=((d=function n(){_classCallCheck(this,n)}).\u0275mod=l.Mb({type:d}),d.\u0275inj=l.Lb({factory:function(n){return new(n||d)},imports:[[o.c,t.f,h.a,s.b,i.i.forChild([{path:"",component:p}])]]}),d)}}]);