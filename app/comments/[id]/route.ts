import { redirect } from "next/navigation";
import { comments } from "../data";

// context: Context
// export async function GET(
//   _request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const para = await params;
//   if (!para || !para.id) {
//     return new Response("Invalid request", { status: 400 });
//   }

//   const commentId = Number(params.id);
//   const comment = comments.find((comment) => comment.id === commentId);

//   if (!comment) {
//     return new Response("Comment not found", { status: 404 });
//   }

//   return new Response(JSON.stringify(comment), { status: 200 });
// }

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { text } = await request.json();
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    comment.text = text;
    return new Response(JSON.stringify(comment), { status: 200 });
  }
  return new Response("Comment not found", { status: 404 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const index = comments.findIndex((comment) => comment.id === id);
  if (index > -1) {
    comments.splice(index, 1);
    return new Response("Comment deleted", { status: 200 });
  }
  return new Response("Comment not found", { status: 404 });
}
