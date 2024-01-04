const express=require('express')

require('dotenv').config()
const app=express()
const githubData1={
   
      "login": "deepak9826",
      "id": 142887457,
      "node_id": "U_kgDOCIRKIQ",
      "avatar_url": "https://avatars.githubusercontent.com/u/142887457?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/deepak9826",
      "html_url": "https://github.com/deepak9826",
      "followers_url": "https://api.github.com/users/deepak9826/followers",
      "following_url": "https://api.github.com/users/deepak9826/following{/other_user}",
      "gists_url": "https://api.github.com/users/deepak9826/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/deepak9826/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/deepak9826/subscriptions",
      "organizations_url": "https://api.github.com/users/deepak9826/orgs",
      "repos_url": "https://api.github.com/users/deepak9826/repos",
      "events_url": "https://api.github.com/users/deepak9826/events{/privacy}",
      "received_events_url": "https://api.github.com/users/deepak9826/received_events",
      "type": "User",
      "site_admin": false,
      "name": "Deepak Malviya",
      "company": null,
      "blog": "",
      "location": null,
      "email": null,
      "hireable": null,
      "bio": "I am an  Associate Consultant at Hoonartek company . Specializing in ETL pipelines, data engineer tools, and all things Big Data.\r\n",
      "twitter_username": null,
      "public_repos": 12,
      "public_gists": 0,
      "followers": 0,
      "following": 0,
      "created_at": "2023-08-22T09:18:42Z",
      "updated_at": "2024-01-03T04:37:06Z"
    }

const port=4000
 app.get('/',(req,res)=>{
    res.send("This is first!");
 })

 app.get('/twitter',(req,res)=>{
    res.send('Deepak_Malviya');
 })

 app.get('/youtube',(req,res)=>{
    res.send("youtube unofficial");
 })
 app.get('/login',(req,res)=>{
    res.send('<h1>please login at my page </h1>');
 })
 app.get('/github',(req,res)=>{
   res.json(githubData1);
 })
 app.listen(process.env.PORT,()=>{
    console.log(`App listening on port ${process.env.PORT}`);
 })