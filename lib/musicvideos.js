import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const musicVideosDirectory = path.join(process.cwd(), 'musicvideos')

export function getSortedMusicVideosData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(musicVideosDirectory)
  const allMusicVideosData = fileNames.map(fileName => {
    // Remove ".md" from file name to get title
    const title = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(musicVideosDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    console.log(title)
    // Combine the data with the title
    return {
      title,
      ...matterResult.data
    }
  })

  return allMusicVideosData

}

export function getAllMusicVideoTitles() {
    const fileNames = fs.readdirSync(musicVideosDirectory)
  
    return fileNames.map(fileName => {
      return {
        params: {
          title: fileName.replace(/\.md$/, '')
          // title: ["amethyst"]
        }
      }
    })
  }

  export async function getMusicVideoData(title) {
    const fullPath = path.join(musicVideosDirectory, `${title}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the title
    return {
      title,
      contentHtml,
      ...matterResult.data
    }
  }