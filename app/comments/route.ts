import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = searchParams.get("filter");
  const filteredComments = filter
    ? comments.filter((comment) =>
        comment.text.toLowerCase().includes(filter.toLowerCase())
      )
    : comments;
  return new Response(JSON.stringify(filteredComments));
}
//   http://localhost:3000/comments/?filter= first

export async function POST(request: Request) {
  const body = await request.json();
  const newComment = { id: comments.length + 1, text: body.text };
  comments.push(newComment); // Add the new comment to table of comments
  return new Response(JSON.stringify(newComment), { status: 201 });
}
