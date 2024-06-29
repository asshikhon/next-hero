import connectDB from "@/lib/connectDB"

export const POST = async (request) => {
try {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const newUSer = await request.json();
const res = await userCollection.insertOne(newUSer)
return Response.json({message: 'new user added'})

} catch (error) {
    return Response.json({message: 'error inserting user'})
}
}