export async function PATCH(request, {params}){
    console.log(params.id);
const body = await request.json();
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
console.log(index);
comments[index] = {
    text: body.text || comments[index].text,
    id: comments[index].id,
    userId: comments[index].userId,
    postId: comments[index].postId
}
    return Response.json({
message: 'Get comment by ID',
comments
    })
}

export async function DELETE(request, {params}){

    const newComments = comments.filter(comment => comment.id !== parseInt(params.id));

    return Response.json({
        message: 'Delete successfully',
        newComments
            })
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
            userId: 1,
            postId: 3
        }

    ]