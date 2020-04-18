import axios from "axios";

const client = axios.create({
  baseURL: "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/",
});

export const getCards = async () => {
  return await client.get("/cards/page_1.json");
};
