const ArticleModel = require("../models/Article");
const CommentsModel = require("../models/Comments");

const addComment = async (req, res) => {
    try {
        const { article_id, comment } = req.body;
        if( !article_id || !comment) return res.json({
            success: false,
            message: "Insufficient data!"
        });

        const user_id = req.user._id
        const created = await CommentsModel.create({
            user_id,
            article_id,
            comment
        });

        return res.json({
            success: true, 
            message: "Comment added!",
            data: created
        });

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: "Internal server error!"
        })
    }
}

const getComments = async (req, res) => {
    try {
        const articleId = req.params.articleId;
        const article = await ArticleModel.findById(articleId);
        if(!article) return res.json({
            success: false, 
            message: "Article not found!"
        });

        const comments = await CommentsModel.find({ article_id: articleId }).populate("user", ["name"]);

        return res.json({
            success: false, 
            message: `Comment list for ${articleId}`,
            data: comments
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: "Internal server error!"
        })
    }
}

module.exports = {
    addComment,
    getComments
}