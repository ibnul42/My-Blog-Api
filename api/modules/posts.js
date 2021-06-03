const PATH = "./data.json";
const fs = require("fs");

class Post {
    get() {
        return this.readData();
    }

    getIndividualBlog(postId) {
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId)
        return foundPost; 
    }

    add(newPost) {
        const currentPost = this.readData();
        currentPost.unshift(newPost);
        this.storeData(currentPost);
    }

    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawdata) {
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;