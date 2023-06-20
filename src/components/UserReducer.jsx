import { createSlice } from "@reduxjs/toolkit";
import { blogList } from "../data/blogList";

// console.log(blogList)

const blogSlice = createSlice({
  name: "blogs",
  initialState: blogList,
  reducers: {
    addBlog: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    updateBlog: (state, action) => {
      console.log(action.payload);
      const { id, title, category, author, photo, body } = action.payload;
      const blog_update = state.find((blog) => blog.id === id);
      // console.log(state.find((blog) => blog.id === id))
      if (id) {
        blog_update.title = title;
        blog_update.category = category;
        blog_update.author = author;
        blog_update.photo = photo;
        blog_update.body = body;
      }
    },
    deleteBlog: (state, action) => {

        const id = action.payload

        // const ids = state.map((blog) => blog.id);
        // console.log(ids);
        return state.filter((blog) => blog.id !== id.id.id)
        // state = filteredArray
        // console.log(filteredArray.map((blogg) => blogg.id));
        // console.log(state.map((blog) => blog.id))
      },

  },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;


