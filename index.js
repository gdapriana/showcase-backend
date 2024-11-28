import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import profile from "./metadata/profile.js";
import experience from "./metadata/experience.js";
import service from "./metadata/service.js";
import work from "./metadata/work.js";
import blog from "./metadata/blog.js";

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
  res.json({message: "gedeapriana's showcase"})
})

app.get('/profile', (req, res) => {
  res.json({ profile: JSON.parse(profile())})
})

app.get('/experiences', (req, res) => {
  res.json({ experiences: JSON.parse(experience())})
})

app.get('/services', (req, res) => {
  res.json({ services: JSON.parse(service())})
})

app.get('/works', (req, res) => {
  res.json({ works: JSON.parse(work())})
})

app.get('/blogs', (req, res) => {
  res.json({ blogs: JSON.parse(blog())})
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})