import blogsService from "../services/blogs";

const blogReducer = (state = [], action) => {
    switch (action.type) {
        case "INITIALIZE_BLOGS":
            return action.data;
        case "NEW_BLOG":
            return [...state, action.data];
        case "UPDATE_BLOG":
            return state.map((blog) => {
                return blog.id === action.data.id ? action.data : blog;
            });
        case "DELETE_BLOG":
            return state.reduce((sum, blog) => {
                if (blog.id === action.data.blog.id) {
                    return sum;
                } else {
                    return sum.concat(blog);
                }
            }, []);
        default:
            return state;
    }
};

export const initializeBlogs = () => {
    return async (dispatch) => {
        const blogs = await blogsService.getAllBlogs();
        dispatch({
            type: "INITIALIZE_BLOGS",
            data: blogs,
        });
    };
};

export const updateBlog = (content) => {
    return async (dispatch) => {
        const updatedBlog = await blogsService.updateBlog(content.id, content);
        dispatch({
            type: "UPDATE_BLOG",
            data: updatedBlog,
        });
    };
};

export const createBlog = (blog, user) => {
    return async (dispatch) => {
        const response = await blogsService.createBlog(blog, user);
        const newBlog = response[0];
        dispatch({
            type: "NEW_BLOG",
            data: newBlog,
        });
    };
};

export const deleteBlog = (blog, token) => {
    return async (dispatch) => {
        const response = await blogsService.deleteBlog(blog, token);
        dispatch({
            type: "DELETE_BLOG",
            data: { blog, response },
        });
    };
};

export default blogReducer;
