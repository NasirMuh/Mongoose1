import PostMessage from '../models/postMessage.js'
//if-else statements can handle both synchronous and asynchronous 
//errors, and it is more common in expressjs application.
//you can use middleware functions for error handling. Those functions are
//registered using the app.use((err, req, res, next) => { ... }) function,
//and they are called when an error is thrown. They can be useful to handle
//errors globally in your application,

// Both async/await and .exec() can be used to make Mongoose queries asynchronous in an Express.js application.
// both async/await and .exec() have similar performance characteristics

// ASYNC AWAIT using with TRY - CATCH
// .exec() it is used for IF - ELSE

export const getPosts = (req, res) => {
    PostMessage.find({}).exec((err, data) => {
        if (err) {
            res.status(404).json({ message: err.message })
        }
        res.status(200).json({ message: "All Data List", data })
    })
}
export const getPost = (req, res) => {
    const _id = req.params.id;
    PostMessage.findOne({ _id }).exec((err, data) => {
        if (!err) {
            if (data) {
                res.status(200).json({ message: "Single DAta", data })
            }
            else {
                res.status(404).send({ message: "Data not found" })
            }
        }
        else {
            res.status(500).json({ message: err.message })
        }
    })
}

// using if else create APi
export const createPost = async (req, res) => {
    await PostMessage.create(req.body, (err, post) => {
        if (err) {
            res.status(409).json({ message: err.message })
        } else {
            res.status(201).json({ message: 'Post created successfully', post })
        }
    })
}
//using try catch create api it similiar work
// export const createPost = async (req, res) => {
//     const post = req.body;
//     const newMessage = new PostMessage(post);
//     try {
//         const data = await newMessage.save();
//         res.status(201).json(data)
//     } catch (error) {
//         res.status(409).json({ message: error.message })
//     }
// }


export const updatePost = (req, res) => {
    PostMessage.findByIdAndUpdate({ _id: req.params.id },
        { fullName: req.body.fullName },
        { new: true }
    ).exec((err, data) => {
        if (!err) {
            if (data) {
                res.status(200).json({ message: "Post Updated Successfully", data })
            }
            else {
                res.status(404).send({ message: "Data not found" })
            }
        }
        else {
            res.status(500).json({ message: err.message })
        }
    })
}




// delete request only one workpage using api
export const deletePost = (req, res) => {
    const id = req.params.id;
    // this DATA will be return in object cos we are using deleteOne
    PostMessage.deleteOne({ _id: id }).exec((err, deleteddata) => {
        if (!err) {
            if (deleteddata.deletedCount !== 0) {
                res.status(200).json({ message: "data is deleted", deleteddata })
            }
            else {
                res.status(404).json({ message: "Data not found" })
            }
        }
        else {
            res.status(500).json({ message: "server error" })
        }
    });
}
