function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,a){return e&&_defineProperties(n.prototype,e),a&&_defineProperties(n,a),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"1ibO":function(n,e,a){"use strict";a.r(e);var o,i=a("ofXK"),t=a("3Pt+"),r=a("tyNb"),s=a("Tlfu"),l=a("fXoL"),c=a("jhN1"),u=a("Fynj"),d=((o=function(){function n(e){_classCallCheck(this,n),this.title=e,this.data="```process-step\n   - \u5b66\u4f1a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\n     - Node.js\n     - Rust\n     - Go\n     - Java\n     - Python\n     - Ruby\n     - C\n     - C++\n   - \u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\n     - \u8fdb\u7a0b\u7ba1\u7406\n     - \u7ebf\u7a0b\u4e0e\u5e76\u53d1\n     - \u5957\u63a5\u5b57\n     - POSIX \u57fa\u7840\n     - \u7f51\u7edc\u6982\u5ff5\n     - \u542f\u52a8\u7ba1\u7406\n     - \u670d\u52a1\u7ba1\u7406\n     - I/O \u7ba1\u7406\n     - \u865a\u62df\u5316\n     - \u5185\u5b58/\u5b58\u50a8\n     - \u6587\u4ef6\u7cfb\u7edf\n   - \u5b66\u4e60\u7ba1\u7406\u670d\u52a1\u5668\n     - \u64cd\u4f5c\u7cfb\u7edf\n       - Linux(\u5404\u5927\u53d1\u884c\u7248)\n       - Unix(\u5404\u5927\u53d1\u884c\u7248)\n       - Windows\n     - \u5b66\u4f1a\u5728\u7ec8\u7aef\u64cd\u4f5c\n       - \u6587\u672c\u5904\u7406\u5de5\u5177\n       - \u8fdb\u7a0b\u76d1\u63a7\n       - \u7f51\u7edc\n       - \u5b66\u4e60 Bash \u811a\u672c\n       - Vim/Nano/PowerShell/Emacs\n       - \u4ece\u6e90\u7801\u7f16\u8bd1\u7a0b\u5e8f\n       - \u7cfb\u7edf\u6027\u80fd\n       - \u5176\u5b83\u547d\u4ee4\n   - \u7f51\u7edc\u3001\u5b89\u5168\u548c\u534f\u8bae\n    - HTTP\n    - HTTPS\n    - FTP\n    - SSL / TLS\n    - SSH\n    - \u7aef\u53e3\u8f6c\u53d1\n   - \u5982\u4f55\u642d\u5efa\u4e00\u4e2a__\n    - \u53cd\u5411\u4ee3\u7406\n    - \u8f6c\u53d1\u4ee3\u7406\n    - \u7f13\u5b58\u670d\u52a1\u5668\n    - \u8d1f\u8f7d\u5747\u8861\n    - \u9632\u706b\u5899\n    - \u7f51\u9875\u670d\u52a1\u5668\n      - IIS\n      - Nginx\n      - Apache\n      - Tomcat\n      - caddy\n   - \u5b66\u4e60\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\n     - \u5bb9\u5668\u5316\n       - Docker\n       - LXC\n     - \u914d\u7f6e\u7ba1\u7406\n       - Ansible\n       - Chef\n       - Salt\n       - Puppet\n     - \u5bb9\u5668\u7f16\u6392\n       - Kubernetes\n       - Docker Swarm\n       - Mesos\n       - Nomad\n     - \u57fa\u7840\u67b6\u6784\u914d\u7f6e\n       - Terraform\n       - CloudFormation\n       - Pulumi\n     - \u670d\u52a1\u7f51\u683c\n       - Istio\n       - Envoy\n       - Linkerd\n       - Consul\n   - \u5b66\u4e60 CI/CD \u5de5\u5177\n    - Gitlab CI\n    - Github Actions\n    - Jenkins\n    - Travis CI\n    - CircleCI\n    - TeamCity\n    - Bamboo\n    - Azure DevOps\n   - \u5b66\u4e60\u5982\u4f55\u76d1\u63a7\u8f6f\u4ef6\u548c\u57fa\u7840\u67b6\u6784\n    - \u57fa\u7840\u67b6\u6784\u76d1\u63a7\n      - Prometheus\n      - Grafana\n      - Nagios\n      - Zabbix\n      - Monit\n      - Datadog\n    - Jaeger\n      - New Relic\n      - AppDynamics\n      - Instana\n      - OpenTracing\n    - \u65e5\u5fd7\u7ba1\u7406\n      - Elastic Stack\n      - Graylog\n      - Splunk\n      - Papertrail\n   - \u4e91\u670d\u52a1\u63d0\u4f9b\u5546\n    - AWS\n    - Digital Ocean\n    - Google Cloud\n    - Azure\n    - Heroku\n    - Alibaba Cloud\n    - Linode\n    - Vultr\n   - \u4e91\u8bbe\u8ba1\u6a21\u5f0f\n    - \u53ef\u7528\u6027\n    - \u6570\u636e\u7ba1\u7406\n    - \u8bbe\u8ba1\u4e0e\u8bbe\u65bd\n    - \u7ba1\u7406\u4e0e\u76d1\u63a7\n```\n\n```mindmap\n - DevOps \u6280\u80fd\u56fe\u8c31\n   - \u5b66\u4f1a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\n     - Node.js\n     - Rust\n     - Go\n     - Java\n     - Python\n     - Ruby\n     - C\n     - C++\n   - \u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\n     - \u8fdb\u7a0b\u7ba1\u7406\n     - \u7ebf\u7a0b\u4e0e\u5e76\u53d1\n     - \u5957\u63a5\u5b57\n     - POSIX \u57fa\u7840\n     - \u7f51\u7edc\u6982\u5ff5\n     - \u542f\u52a8\u7ba1\u7406\n     - \u670d\u52a1\u7ba1\u7406\n     - I/O \u7ba1\u7406\n     - \u865a\u62df\u5316\n     - \u5185\u5b58/\u5b58\u50a8\n     - \u6587\u4ef6\u7cfb\u7edf\n   - \u5b66\u4e60\u7ba1\u7406\u670d\u52a1\u5668\n     - \u64cd\u4f5c\u7cfb\u7edf\n       - Linux(\u5404\u5927\u53d1\u884c\u7248)\n       - Unix(\u5404\u5927\u53d1\u884c\u7248)\n       - Windows\n     - \u5b66\u4f1a\u5728\u7ec8\u7aef\u64cd\u4f5c\n       - \u6587\u672c\u5904\u7406\u5de5\u5177\n       - \u8fdb\u7a0b\u76d1\u63a7\n       - \u7f51\u7edc\n       - \u5b66\u4e60 Bash \u811a\u672c\n       - Vim/Nano/PowerShell/Emacs\n       - \u4ece\u6e90\u7801\u7f16\u8bd1\u7a0b\u5e8f\n       - \u7cfb\u7edf\u6027\u80fd\n       - \u5176\u5b83\u547d\u4ee4\n   - \u7f51\u7edc\u3001\u5b89\u5168\u548c\u534f\u8bae\n    - HTTP\n    - HTTPS\n    - FTP\n    - SSL / TLS\n    - SSH\n    - \u7aef\u53e3\u8f6c\u53d1\n   - \u5982\u4f55\u642d\u5efa\u4e00\u4e2a__\n    - \u53cd\u5411\u4ee3\u7406\n    - \u8f6c\u53d1\u4ee3\u7406\n    - \u7f13\u5b58\u670d\u52a1\u5668\n    - \u8d1f\u8f7d\u5747\u8861\n    - \u9632\u706b\u5899\n    - \u7f51\u9875\u670d\u52a1\u5668\n      - IIS\n      - Nginx\n      - Apache\n      - Tomcat\n      - caddy\n   - \u5b66\u4e60\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\n     - \u5bb9\u5668\u5316\n       - Docker\n       - LXC\n     - \u914d\u7f6e\u7ba1\u7406\n       - Ansible\n       - Chef\n       - Salt\n       - Puppet\n     - \u5bb9\u5668\u7f16\u6392\n       - Kubernetes\n       - Docker Swarm\n       - Mesos\n       - Nomad\n     - \u57fa\u7840\u67b6\u6784\u914d\u7f6e\n       - Terraform\n       - CloudFormation\n       - Pulumi\n     - \u670d\u52a1\u7f51\u683c\n       - Istio\n       - Envoy\n       - Linkerd\n       - Consul\n   - \u5b66\u4e60 CI/CD \u5de5\u5177\n    - Gitlab CI\n    - Github Actions\n    - Jenkins\n    - Travis CI\n    - CircleCI\n    - TeamCity\n    - Bamboo\n    - Azure DevOps\n   - \u5b66\u4e60\u5982\u4f55\u76d1\u63a7\u8f6f\u4ef6\u548c\u57fa\u7840\u67b6\u6784\n    - \u57fa\u7840\u67b6\u6784\u76d1\u63a7\n      - Prometheus\n      - Grafana\n      - Nagios\n      - Zabbix\n      - Monit\n      - Datadog\n    - Jaeger\n      - New Relic\n      - AppDynamics\n      - Instana\n      - OpenTracing\n    - \u65e5\u5fd7\u7ba1\u7406\n      - Elastic Stack\n      - Graylog\n      - Splunk\n      - Papertrail\n   - \u4e91\u670d\u52a1\u63d0\u4f9b\u5546\n    - AWS\n    - Digital Ocean\n    - Google Cloud\n    - Azure\n    - Heroku\n    - Alibaba Cloud\n    - Linode\n    - Vultr\n   - \u4e91\u8bbe\u8ba1\u6a21\u5f0f\n    - \u53ef\u7528\u6027\n    - \u6570\u636e\u7ba1\u7406\n    - \u8bbe\u8ba1\u4e0e\u8bbe\u65bd\n    - \u7ba1\u7406\u4e0e\u76d1\u63a7\n```\n\n```sunburst\n - DevOps \u6280\u80fd\u56fe\u8c31\n   - \u5b66\u4f1a\u4e00\u79cd\u7f16\u7a0b\u8bed\u8a00\n     - Node.js\n     - Rust\n     - Go\n     - Java\n     - Python\n     - Ruby\n     - C\n     - C++\n   - \u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u6982\u5ff5\n     - \u8fdb\u7a0b\u7ba1\u7406\n     - \u7ebf\u7a0b\u4e0e\u5e76\u53d1\n     - \u5957\u63a5\u5b57\n     - POSIX \u57fa\u7840\n     - \u7f51\u7edc\u6982\u5ff5\n     - \u542f\u52a8\u7ba1\u7406\n     - \u670d\u52a1\u7ba1\u7406\n     - I/O \u7ba1\u7406\n     - \u865a\u62df\u5316\n     - \u5185\u5b58/\u5b58\u50a8\n     - \u6587\u4ef6\u7cfb\u7edf\n   - \u5b66\u4e60\u7ba1\u7406\u670d\u52a1\u5668\n     - \u64cd\u4f5c\u7cfb\u7edf\n       - Linux(\u5404\u5927\u53d1\u884c\u7248)\n       - Unix(\u5404\u5927\u53d1\u884c\u7248)\n       - Windows\n     - \u5b66\u4f1a\u5728\u7ec8\u7aef\u64cd\u4f5c\n       - \u6587\u672c\u5904\u7406\u5de5\u5177\n       - \u8fdb\u7a0b\u76d1\u63a7\n       - \u7f51\u7edc\n       - \u5b66\u4e60 Bash \u811a\u672c\n       - Vim/Nano/PowerShell/Emacs\n       - \u4ece\u6e90\u7801\u7f16\u8bd1\u7a0b\u5e8f\n       - \u7cfb\u7edf\u6027\u80fd\n       - \u5176\u5b83\u547d\u4ee4\n   - \u7f51\u7edc\u3001\u5b89\u5168\u548c\u534f\u8bae\n    - HTTP\n    - HTTPS\n    - FTP\n    - SSL / TLS\n    - SSH\n    - \u7aef\u53e3\u8f6c\u53d1\n   - \u5982\u4f55\u642d\u5efa\u4e00\u4e2a__\n    - \u53cd\u5411\u4ee3\u7406\n    - \u8f6c\u53d1\u4ee3\u7406\n    - \u7f13\u5b58\u670d\u52a1\u5668\n    - \u8d1f\u8f7d\u5747\u8861\n    - \u9632\u706b\u5899\n    - \u7f51\u9875\u670d\u52a1\u5668\n      - IIS\n      - Nginx\n      - Apache\n      - Tomcat\n      - caddy\n   - \u5b66\u4e60\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\n     - \u5bb9\u5668\u5316\n       - Docker\n       - LXC\n     - \u914d\u7f6e\u7ba1\u7406\n       - Ansible\n       - Chef\n       - Salt\n       - Puppet\n     - \u5bb9\u5668\u7f16\u6392\n       - Kubernetes\n       - Docker Swarm\n       - Mesos\n       - Nomad\n     - \u57fa\u7840\u67b6\u6784\u914d\u7f6e\n       - Terraform\n       - CloudFormation\n       - Pulumi\n     - \u670d\u52a1\u7f51\u683c\n       - Istio\n       - Envoy\n       - Linkerd\n       - Consul\n   - \u5b66\u4e60 CI/CD \u5de5\u5177\n    - Gitlab CI\n    - Github Actions\n    - Jenkins\n    - Travis CI\n    - CircleCI\n    - TeamCity\n    - Bamboo\n    - Azure DevOps\n   - \u5b66\u4e60\u5982\u4f55\u76d1\u63a7\u8f6f\u4ef6\u548c\u57fa\u7840\u67b6\u6784\n    - \u57fa\u7840\u67b6\u6784\u76d1\u63a7\n      - Prometheus\n      - Grafana\n      - Nagios\n      - Zabbix\n      - Monit\n      - Datadog\n    - Jaeger\n      - New Relic\n      - AppDynamics\n      - Instana\n      - OpenTracing\n    - \u65e5\u5fd7\u7ba1\u7406\n      - Elastic Stack\n      - Graylog\n      - Splunk\n      - Papertrail\n   - \u4e91\u670d\u52a1\u63d0\u4f9b\u5546\n    - AWS\n    - Digital Ocean\n    - Google Cloud\n    - Azure\n    - Heroku\n    - Alibaba Cloud\n    - Linode\n    - Vultr\n   - \u4e91\u8bbe\u8ba1\u6a21\u5f0f\n    - \u53ef\u7528\u6027\n    - \u6570\u636e\u7ba1\u7406\n    - \u8bbe\u8ba1\u4e0e\u8bbe\u65bd\n    - \u7ba1\u7406\u4e0e\u76d1\u63a7\n```\n"}return _createClass(n,[{key:"ngOnInit",value:function(){this.title.setTitle("DevOps \u6280\u80fd\u56fe\u8c31 - DevOps \u77e5\u8bc6\u5e73\u53f0")}}]),n}()).\u0275fac=function(n){return new(n||o)(l.Ob(c.d))},o.\u0275cmp=l.Ib({type:o,selectors:[["app-skill-tree"]],decls:6,vars:1,consts:[["href","https://github.com/kamranahmedse/developer-roadmap"],["sourceDir","practises/skilltree.md",1,"ledge-skilltree",3,"data"]],template:function(n,e){1&n&&(l.Ub(0,"div"),l.Ub(1,"p"),l.Hc(2," based on "),l.Ub(3,"a",0),l.Hc(4,"Developer Roadmap"),l.Tb(),l.Tb(),l.Pb(5,"ledge-markdown-render",1),l.Tb()),2&n&&(l.Bb(5),l.lc("data",e.data))},directives:[u.a],styles:[""]}),o),p=a("PCNd");a.d(e,"SkillTreeModule",(function(){return b}));var C,b=((C=function n(){_classCallCheck(this,n)}).\u0275mod=l.Mb({type:C}),C.\u0275inj=l.Lb({factory:function(n){return new(n||C)},imports:[[i.c,t.f,p.a,s.b,r.i.forChild([{path:"",component:d}])]]}),C)}}]);