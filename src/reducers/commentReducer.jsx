import commentsService from "../services/comments";

const commentReducer = (state = [], action) => {
    switch (action.type) {
        case "CLEAR_COMMENTS":
            return [];
        case "GET_ALL_COMMENTS":
            return action.data;
        case "CREATE_COMMENT":
            return state.concat(action.data);
        case "UPDATE_COMMENT":
            return state.map((comment) => {
                return comment.id === action.data.id ? action.data : comment;
            });
        case "DELETE_COMMENT":
            return state.reduce((sum, comment) => {
                if (comment.id === action.data.comment.id) {
                    return sum;
                } else {
                    return sum.concat(comment);
                }
            }, []);
        default:
            return state;
    }
};

export const getAllComments = (blogId) => {
    return async (dispatch) => {
        const comments = await commentsService.getAllComments(blogId);
        dispatch({
            type: "GET_ALL_COMMENTS",
            data: comments,
        });
    };
};

export const clearCommentCache = () => {
    return async (dispatch) => {
        dispatch({
            type: "CLEAR_COMMENTS",
        });
    };
};

export const updateComment = (blogId, commentId, comment) => {
    return async (dispatch) => {
        const updatedComment = await commentsService.updateComment(
            blogId,
            commentId,
            comment
        );
        dispatch({
            type: "UPDATE_COMMENT",
            data: updatedComment,
        });
    };
};

export const createComment = (blogId, comment) => {
    return async (dispatch) => {
        const response = await commentsService.createComment(blogId, comment);
        const newComment = response;
        dispatch({
            type: "CREATE_COMMENT",
            data: newComment,
        });
    };
};

export const deleteComment = (blogId, commentId) => {
    return async (dispatch) => {
        const response = await commentsService.deleteComment(blogId, commentId);
        dispatch({
            type: "DELETE_COMMENT",
            data: response,
        });
    };
};

export default commentReducer;
