import { http } from '../http/http';
import { AxiosResponse } from 'axios';
import {INews} from 'types/INews';

export const PostsService = {
  async getAllPosts() {
    const {data}: AxiosResponse<INews[]> = await http.get("/")
    return data;
  }
}