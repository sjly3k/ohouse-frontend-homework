import axios from "axios";

const client = axios.create({
  baseURL: "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/",
});

export const getCards = async (page: number) => {
  return await client.get(`/cards/page_${page}.json`);
};
