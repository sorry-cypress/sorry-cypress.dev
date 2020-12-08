(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Nfi4:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r("k0FJ"),s=r("oedh"),n=(r("mXGw"),r("/FXl")),o=r("TjRS"),c=(r("aD51"),{});void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/quickstart.mdx"}});var p={_frontmatter:c},i=o.a;function l(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(n.b)(i,Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("img",{src:"public/demo.gif",alt:"sorry cypress demo"}),Object(n.b)("p",null,"You will need a recent version of docker-compose for this guide."),Object(n.b)("h2",{id:"run-the-services"},"Run the services"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Check out the source code."),Object(n.b)("li",{parentName:"ol"},"Run ",Object(n.b)("inlineCode",{parentName:"li"},"docker-compose -f docker-compose.minio.yml up")),Object(n.b)("li",{parentName:"ol"},"Open the browser at ",Object(n.b)("a",{href:"http://localhost:8080/",parentName:"li"},"http://localhost:8080/")," to see the dashboard")),Object(n.b)("h2",{id:"reconfigure-cypress-agent"},"Reconfigure Cypress agent"),Object(n.b)("p",null,Object(n.b)("a",{href:"/cypress-agent#cypress-agent-configuration",parentName:"p"},"Reconfigure Cypress")," to use ",Object(n.b)("inlineCode",{parentName:"p"},'api_url: "http://localhost:1234/"'),","),Object(n.b)("p",null,"Get cypress agent installation path to use ",Object(n.b)("inlineCode",{parentName:"p"},"director")," service URL:"),Object(n.b)("pre",null,Object(n.b)("code",{className:"language-sh",parentName:"pre"},"$ DEBUG=cypress:* cypress version\n...\n# get the path /Users/agoldis/Library/Caches/Cypress/3.4.1/Cypress.app/Contents/Resources/app/package.json\ncypress:cli Reading binary package.json from: /Users/agoldis/Library/Caches/Cypress/3.4.1/Cypress.app/Contents/Resources/app/package.json\n...\n")),Object(n.b)("p",null,"Edit the file ",Object(n.b)("inlineCode",{parentName:"p"},".../Cypress.app/Contents/Resources/app/packages/server/config/app.yml")),Object(n.b)("pre",null,Object(n.b)("code",{className:"language-yml",parentName:"pre"},"production:\n  api_url: 'http://localhost:1234'\n  #api_url: \"https://api.cypress.io/\"\n")),Object(n.b)("h2",{id:"configure-the-storage-driver"},"Configure the storage driver"),Object(n.b)("p",null,"Edit your /etc/hosts file to allow cypress agents discover the local instance of ",Object(n.b)("a",{href:"/director/storage#minio-driver",parentName:"p"},"Minio Driver")),Object(n.b)("pre",null,Object(n.b)("code",{className:"language-sh",parentName:"pre"},"127.0.0.1 storage\n")),Object(n.b)("h2",{id:"run-cypress-tests-in-parallel"},"Run cypress tests in parallel"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Open few terminals"),Object(n.b)("li",{parentName:"ol"},"Run your tests ",Object(n.b)("inlineCode",{parentName:"li"},"cypress run --parallel --record --key xxx --ci-build-id <buildId>"))),Object(n.b)("p",null,"The results will appear in the dashboard. Those cypress tests will run in parallel without connecting to the official dashboard."),Object(n.b)("h2",{id:"cloud-demo"},"Cloud demo"),Object(n.b)("p",null,"Visit ",Object(n.b)("a",{href:"https://sorry-cypress-demo.herokuapp.com/",parentName:"p"},"https://sorry-cypress-demo.herokuapp.com/")," to see the web dashboard in action."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"This demo is a free heroku instance, it takes a minute to spin it up when you first navigate.")),Object(n.b)("p",null,"You can ",Object(n.b)("a",{href:"/cypress-agent#cypress-agent-configuration",parentName:"p"},"reconfigure Cypress")," to use ",Object(n.b)("inlineCode",{parentName:"p"},'api_url: "https://sorry-cypress-demo-director.herokuapp.com/"'),", run your tests and see the results appear at the dashboard."),Object(n.b)("p",null,"Also consider the ",Object(n.b)("a",{href:"https://github.com/agoldis/sorry-cypress/tree/master/example",parentName:"p"},"example")," with a detailed parallelization instructions."))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/quickstart.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-quickstart-mdx-69aa8b2afafbdb13d0da.js.map