import React from 'react'

const SuperHero = () => {
    return (
        <div>
           {
               `skip to package search or skip to sign in
               ❤
               Products
               Pro
               Teams
               Pricing
               Documentation
               Community
               npm
               Search packages
               Search
               json-server
               DefinitelyTyped icon, indicating that this package has TypeScript declarations provided by the separate @types/json-server package
               0.17.0 • Public • Published a month ago
               JSON Server Node.js CI
               Get a full fake REST API with zero coding in less than 30 seconds (seriously)
               
               Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.
               
               Egghead.io free video tutorial - Creating demo APIs with json-server
               JSONPlaceholder - Live running version
               My JSON Server - no installation required, use your own data
               See also:
               
               🐶 husky - Git hooks made easy
               🦉 lowdb - local JSON database
               ❌ ✔️ xv - the most minimalist test runner
                
               
               Gold sponsors 🥇
                
               
               
               
                
               
               
               
                
               
               
               
                
               
               
               
                
               
                
               
               From generating an API to importing a CSV into postgres, Retool’s range of 20+ developer utilities is a go-to resource when building apps. Check it out now
               
                
               
                
               
               Become a sponsor and have your company logo here
               
               Sponsor
               Please help me build OSS 👉 GitHub Sponsors ❤️
               
               Table of contents
               Getting started
               Routes
               Plural routes
               Singular routes
               Filter
               Paginate
               Sort
               Slice
               Operators
               Full-text search
               Relationships
               Database
               Homepage
               Extras
               Static file server
               Alternative port
               Access from anywhere
               Remote schema
               Generate random data
               HTTPS
               Add custom routes
               Add middlewares
               CLI usage
               Module
               Simple example
               Custom routes example
               Access control example
               Custom output example
               Rewriter example
               Mounting JSON Server on another endpoint example
               API
               Deployment
               Links
               Video
               Articles
               Third-party tools
               License
               Getting started
               Install JSON Server
               
               npm install -g json-server
               Create a db.json file with some data
               
               {
                 "posts": [
                   { "id": 1, "title": "json-server", "author": "typicode" }
                 ],
                 "comments": [
                   { "id": 1, "body": "some comment", "postId": 1 }
                 ],
                 "profile": { "name": "typicode" }
               }
               Start JSON Server
               
               json-server --watch db.json
               Now if you go to http://localhost:3000/posts/1, you'll get
               
               { "id": 1, "title": "json-server", "author": "typicode" }
               Also when doing requests, it's good to know that:
               
               If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to db.json using lowdb.
               Your request body JSON should be object enclosed, just like the GET output. (for example {"name": "Foobar"})
               Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
               A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will return a 2XX status code, but without changes being made to the data.
               Routes
               Based on the previous db.json file, here are all the default routes. You can also add other routes using --routes.
               
               Plural routes
               GET    /posts
               GET    /posts/1
               POST   /posts
               PUT    /posts/1
               PATCH  /posts/1
               DELETE /posts/1
               Singular routes
               GET    /profile
               POST   /profile
               PUT    /profile
               PATCH  /profile
               Filter
               Use . to access deep properties
               
               GET /posts?title=json-server&author=typicode
               GET /posts?id=1&id=2
               GET /comments?author.name=typicode
               Paginate
               Use _page and optionally _limit to paginate returned data.
               
               In the Link header you'll get first, prev, next and last links.
               
               GET /posts?_page=7
               GET /posts?_page=7&_limit=20
               10 items are returned by default
               
               Sort
               Add _sort and _order (ascending order by default)
               
               GET /posts?_sort=views&_order=asc
               GET /posts/1/comments?_sort=votes&_order=asc
               For multiple fields, use the following format:
               
               GET /posts?_sort=user,views&_order=desc,asc
               Slice
               Add _start and _end or _limit (an X-Total-Count header is included in the response)
               
               GET /posts?_start=20&_end=30
               GET /posts/1/comments?_start=20&_end=30
               GET /posts/1/comments?_start=20&_limit=10
               Works exactly as Array.slice (i.e. _start is inclusive and _end exclusive)
               
               Operators
               Add _gte or _lte for getting a range
               
               GET /posts?views_gte=10&views_lte=20
               Add _ne to exclude a value
               
               GET /posts?id_ne=1
               Add _like to filter (RegExp supported)
               
               GET /posts?title_like=server
               Full-text search
               Add q
               
               GET /posts?q=internet
               Relationships
               To include children resources, add _embed
               
               GET /posts?_embed=comments
               GET /posts/1?_embed=comments
               To include parent resource, add _expand
               
               GET /comments?_expand=post
               GET /comments/1?_expand=post
               To get or create nested resources (by default one level, add custom routes for more)
               
               GET  /posts/1/comments
               POST /posts/1/comments
               Database
               GET /db
               Homepage
               Returns default index file or serves ./public directory
               
               GET /
               Extras
               Static file server
               You can use JSON Server to serve your HTML, JS and CSS, simply create a ./public directory or use --static to set a different static files directory.
               
               mkdir public
               echo 'hello world' > public/index.html
               json-server db.json
               json-server db.json --static ./some-other-dir
               Alternative port
               You can start JSON Server on other ports with the --port flag:
               
               $ json-server --watch db.json --port 3004
               Access from anywhere
               You can access your fake API from anywhere using CORS and JSONP.
               
               Remote schema
               You can load remote schemas.
               
               Options:
                 --config, -c       Path to config file           [default: "json-server.json"]
                 --port, -p         Set port                                    [default: 3000]
                 --host, -H         Set host                             [default: "localhost"]
                 --watch, -w        Watch file(s)                                     [boolean]
                 --routes, -r       Path to routes file
                 --middlewares, -m  Paths to middleware files                           [array]
                 --static, -s       Set static files directory
                 --read-only, --ro  Allow only GET requests                           [boolean]
                 --no-cors, --nc    Disable Cross-Origin Resource Sharing             [boolean]
                 --no-gzip, --ng    Disable GZIP Content-Encoding                     [boolean]
                 --snapshots, -S    Set snapshots directory                      [default: "."]
                 --delay, -d        Add delay to responses (ms)
                 --id, -i           Set database id property (e.g. _id)         [default: "id"]
                 --foreignKeySuffix, --fks  Set foreign key suffix, (e.g. _id as in post_id)
                                                                                [default: "Id"]
                 --quiet, -q        Suppress log messages from output                 [boolean]
                 --help, -h         Show help                                         [boolean]
                 --version, -v      Show version number                               [boolean]
               
               Examples:
                 json-server db.json
                 json-server file.js
                 json-server http://example.com/db.json
               
               https://github.com/typicode/json-server
               You can also set options in a json-server.json configuration file.
           
               server.use('/api', router)
               API
               jsonServer.create()
               
               Returns an Express server.
               
               jsonServer.defaults([options])
               
               Returns middlewares used by JSON Server.
               
               options
               static path to static files
               logger enable logger middleware (default: true)
               bodyParser enable body-parser middleware (default: true)
               noCors disable CORS (default: false)
               readOnly accept only GET requests (default: false)
               jsonServer.router([path|object])
               
               Returns JSON Server router.
               
               Deployment
               You can deploy JSON Server. For example, JSONPlaceholder is an online fake API powered by JSON Server and running on Heroku.
               
               Links
               Video
               Creating Demo APIs with json-server on egghead.io
               Articles
               Node Module Of The Week - json-server
               ng-admin: Add an AngularJS admin GUI to any RESTful API
               Fast prototyping using Restangular and Json-server
               Create a Mock REST API in Seconds for Prototyping your Frontend
               No API? No Problem! Rapid Development via Mock APIs
               Zero Code REST With json-server
               Third-party tools
               Grunt JSON Server
               Docker JSON Server
               JSON Server GUI
               JSON file generator
               JSON Server extension
               License
               MIT
               
               Supporters ✨
               
               Keywords
               JSONserverfakeRESTAPIprototypingmockmockingtesttestingrestdatadummysandbox
               Install
               npm i json-server
               
               Repository
               github.com/typicode/json-server
               
               Homepage
               github.com/typicode/json-server
               
               Weekly Downloads
               166,368
               
               Version
               0.17.0
               
               License
               MIT
               
               Unpacked Size
               58.2 kB
               
               Total Files
               26
               
               Issues
               523
               
               Pull Requests
               70
               
               Last publish
               a month ago
               
               Collaborators
               typicode
               Try on RunKit
               Report malware
               Return to top of page
               Support
               Help
               Community
               Advisories
               Status
               Contact npm
               Company
               About
               Blog
               Press
               Terms & Policies
               Policies
               Terms of Use
               Code of Conduct
               Privacy
               `
           }
        </div>
    )
}

export default SuperHero
