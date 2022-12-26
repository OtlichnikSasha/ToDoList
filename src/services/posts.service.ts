import { http } from '../http/http';
import { AxiosResponse } from 'axios';
import { INewsResponse } from '@/types/INews';

export const PostsService = {
  async getAllPosts() {
    const {data}: AxiosResponse<INewsResponse> = await http.get("/", {params: {
        sortBy: "popularity",
        from: "2022-12-22",
        q: "Apple",
        limit: 10
      }})
    return data;
  }
}