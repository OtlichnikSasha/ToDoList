export interface INews {
  author: string
  content: string
  description: string
  publishedAt: string
  source: {
    id: string
    name: string
  }
  title: string
  url: string
  urlToImage: string
}

export interface INewsResponse {
  status: "ok" | "error"
  totalResults: number
  articles: INews[]
}