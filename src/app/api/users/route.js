export async function GET() {
    return Response.json(comments, {
        headers: {
            "Set-Cookie": "theme=dark"
        }
    });
}
export async function POST(request) {

    const newComment = await request.json();
    comments.push({
        id: comments.length + 1,
        text: newComment.text,
        userId: newComment.userId,
        postId: newComment.postId
    })

    return Response.json({
        message: 'Comment added successfully',
        comments
    });
}

const comments =
    [

        {
            id: 1,
            text: 'First comment',
            userId: 1,
            postId: 1
        },
        {
            id: 2,
            text: 'Second comment',
            userId: 2,
            postId: 2
        },
        {
            id: 3,
            text: 'Third comment',
            userId: 3,
            postId: 3
        }

    ]